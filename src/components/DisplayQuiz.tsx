import { useEffect, useReducer, useState } from "react";
import { Question, QuestionComponentProps } from "../interfaces/QuestionTypes";
import { McSingleResponse } from "./McSingleResponse";
import { McMultiResponse } from "./McMultiResponse";
import { TextResponse } from "./TextResponse"
import { UserRanking } from "./UserRanking"
import { SliderResponse } from "./SliderResponse";
import { addResponseGBT, callGBT } from "src/controller/CallChat";
import OpenAI from "openai";
import { CreateBasicStartingPrompt, CreateStartingPrompt, createFinalResponse } from "src/controller/StartingPrompt";
import { QuestionAnswer } from "src/interfaces/PromptQuestionsSetup";
import { Loading } from "./Loading";
import { Button, Container } from "react-bootstrap";
import { ExperienceReport } from "src/controller/StartingPrompt";

interface QuizState { // state types for useReducer
    curQuiz: QuizProps;
    currentQuestionId: string;
    isQuizComplete: boolean;
    answers: QuestionAns[];
    lastQuestionArray: number;
    gbtConversation: any[];
    isLoading: boolean;
    loadingType: string;
    followUp: boolean;
    experienceReport: ExperienceReport;
    displayExperience: boolean;
    currStatus: string;
};

type QuizAction = // possible actions for useReducer
    | { type: 'ADD_ANSWERS'; payload: QuestionAns }
    | { type: 'SET_QUIZ'; payload: QuizProps }
    | { type: 'SET_CURRENT_QUESTION'; payload: string }
    | { type: 'TOGGLE_LOADING'; payload: boolean }
    | { type: 'SET_LOADING_TYPE'; payload: string }
    | { type: 'SET_EXPERIENCE_REPORT'; payload: ExperienceReport }
    | { type: 'COMPLETE_QUIZ' }
    | { type: 'SET_STATUS'; payload: string }
    | { type: 'GENERATE_EXPERIENCE_REPORT' }
    | { type: 'GENERATE_FINAL_REPORT' }
    | { type: 'FINISH_EXPERIENCE_REPORT' }


const quizReducer = (state: QuizState, action: QuizAction): QuizState => { //used for useReducer state setters
    switch (action.type) {
        case 'ADD_ANSWERS': // updates answer array making sure to replace existing answer if present rather than appending duplicate
            const existingIndex = state.answers.findIndex(ans => ans.questionId === action.payload.questionId);
            return {
                ...state,
                answers: existingIndex >= 0
                    ? state.answers.map((ans, index) => index === existingIndex ? action.payload : ans)
                    : [...state.answers, action.payload]
                };
        case 'SET_QUIZ': //Current question bank
            return { ...state, curQuiz: action.payload };
        case 'SET_CURRENT_QUESTION': //Current question being displayed
            return { ...state, currentQuestionId: action.payload };
        case 'TOGGLE_LOADING': // sets whether to display loading
            return { ...state, isLoading: action.payload };
        case 'SET_LOADING_TYPE': // passed into loading component
            return {...state, loadingType: action.payload };
        case 'SET_EXPERIENCE_REPORT': //stored experience report
            return { ...state, experienceReport: action.payload, displayExperience: true };
        case 'COMPLETE_QUIZ': // Triggers final report
            return { ...state, isQuizComplete: true };
        case 'SET_STATUS':
            return { ...state, currStatus: action.payload };
        case 'GENERATE_EXPERIENCE_REPORT': //causes expReport to be displayed, reset to false within expReport component
            return {
                ...state,
                displayExperience: true,
                followUp: true
            };
        case 'GENERATE_FINAL_REPORT':
            return {
                ...state,
                isQuizComplete: true
            };
        case 'FINISH_EXPERIENCE_REPORT':
            return {
                ...state,
                displayExperience: false
            };
        default:
            return state;
    }
};

export type QuizProps = Record<string, Question>;

type QuestionAns = { //How questions are passed to the AI
    questionId: string,
    answer: string
}

type AnswerResponse = { // Report format for final reponse
    summary: string,
    advice: string,
    interactiveElements: string,
    recommendations: string,
    reasoning: string
}

export function DisplayQuiz({ //contains most of the logic for displaying the quiz, if you can still even call this a quiz lol
        parentQuiz,
        title,
        questionsAnswerd,
        experienceMax,
        totalMax,
        currTotQuestions,
        setQuestionsAnswerd,
        setCurrTotQuestions
    } : {
        title: string,
        parentQuiz : QuizProps,
        questionsAnswerd : number,
        experienceMax: number,
        totalMax: number,
        currTotQuestions: number,
        setQuestionsAnswerd : (questionsAnswerd: number) => void 
        setCurrTotQuestions: (currTotQuestions: number) => void
    }): JSX.Element {
    const initialState: QuizState = { //used for initializing useReducer states
        curQuiz: parentQuiz,
        currentQuestionId: 'question1',
        isQuizComplete: false,
        answers: [],
        lastQuestionArray: 0,
        gbtConversation: [],
        isLoading: false,
        loadingType: "",
        followUp: false,
        experienceReport: { academic: [], work: [], interests: [] },
        displayExperience: false,
        currStatus: ''
    };
    const [state, dispatch] = useReducer(quizReducer, initialState); //state holds all states, makes state management much easier



    async function connectToGBT(startingPrompt: string, prompt: string)  {
        const response = await callGBT({startingPrompt: startingPrompt, userPrompt: prompt});
        // will parse the response so the messages are added
        return response;
    }


    async function createNextQuestion(questionsNeeded: number) {
        dispatch({ type: 'SET_LOADING_TYPE', payload: "generatingQuestions" });
        const compiledAnswers = state.answers.map(ans => ({
            question: state.curQuiz[ans.questionId],
            answer: ans.answer
        }));

        const response = await connectToGBT(CreateStartingPrompt({
            questionsAns: compiledAnswers,
            status: state.followUp ? "followUp" : "",
            quiz: title
        }), CreateBasicStartingPrompt(questionsNeeded, questionsAnswerd));
    
        if (response && response.choices && response.choices.length > 0) {
            const lastChoice = response.choices[response.choices.length - 1];

            if (lastChoice.message && lastChoice.message.content) {
                const newQuestions = JSON.parse(lastChoice.message.content);
                dispatch({ type: 'SET_QUIZ', payload: { ...state.curQuiz, ...newQuestions } });
                console.log("GBT response", response);
            } else {
                console.log("No valid response content received");
            }
        }
    }

    // used to determine next question
    const determineNextQuestionId = async (currentQuestionId: string, curQuiz: QuizProps): Promise<string> => {
        const questionNumber = parseInt(currentQuestionId.replace("question", ""));
        const nextQuestionId = `question${questionNumber + 1}`;

        // Check if the next question already exists in the quiz
        if (nextQuestionId in curQuiz) {
            return nextQuestionId;
        }

        if (currTotQuestions < totalMax) {
            if (currTotQuestions < experienceMax) {
                await createNextQuestion(experienceMax - currTotQuestions);
            } else if (currTotQuestions > experienceMax){
                await createNextQuestion(totalMax - experienceMax);
            }
            // After attempting to create new questions, check if the desired next question now exists
            if (nextQuestionId in curQuiz) {
                return nextQuestionId;
            }
        }
        
        return ""
    }



    const handleAnswerSubmit = async (answer: string, forewards: boolean) => {
        dispatch({type: 'SET_LOADING_TYPE', payload: "nextQuestion"})
        dispatch({type: 'TOGGLE_LOADING', payload: true})

        dispatch({
            type: 'ADD_ANSWERS',
            payload: {
                questionId: state.currentQuestionId,
                answer: answer
            }
        });
    
        const currentNumber = parseInt(currentQuestionId.replace("question", "").trim());

        if (forewards) {
            if (currTotQuestions < totalMax) {
                if ((currTotQuestions !== experienceMax) || ((currTotQuestions > experienceMax) && !state.followUp)) {//If currTotQuestions >== experienceMax and not asking followUp questions
                    const nextQuestionId = await determineNextQuestionId(state.currentQuestionId, state.curQuiz);
                    if (nextQuestionId) {
                        setQuestionsAnswerd(currTotQuestions + 1);
                        dispatch({type: 'SET_CURRENT_QUESTION', payload: nextQuestionId });
                    }
                    else dispatch({ type: 'COMPLETE_QUIZ'})
                } else { //exp report
                    dispatch({ type: 'GENERATE_EXPERIENCE_REPORT'})
                }
            }
        } else {//backwards
            setQuestionsAnswerd(currentNumber - 1);
            const prevId = `question${currentNumber - 1}`;
            if (prevId in state.curQuiz) {
                setQuestionsAnswerd(currTotQuestions - 1);
                dispatch({type: 'SET_CURRENT_QUESTION', payload: prevId})
            }
            else dispatch({type: 'COMPLETE_QUIZ'})
        }
        dispatch({type: 'TOGGLE_LOADING', payload: false})
    }







    //Will eventually be replaced by useReducer thing
    const [curQuiz, setCurQuiz] = useState<QuizProps>(parentQuiz);
    const [currentQuestionId, setCurrentQuestionId] = useState<string>("question1"); // Starting question ID
    const [isQuizComplete, setIsQuizComplete] = useState<boolean>(false); // Used to determine when curQuiz is complete
    const [answers, setAnswers] = useState<QuestionAns[]>([]); // Array of all question answers
    const [lastQuestionArray, setQuestionArray] = useState<number>(0) // Keeps track of lastmost question answered to determine when to append answers
    const [gbtConversation, setGBTConversation] = useState<OpenAI.ChatCompletion.Choice[]>();
    const [isLoading, setIsLoading] = useState(false);
    const [type, setType ] = useState("");
    const [followUp, setFollowUp] = useState<boolean>(false);
    const [experienceReport, setExperienceReport] = useState({ academic: [], work: [], interests: [] });
    const [displayExperience, setDisplayExperience] = useState<boolean>(false);

    // const [nextPrompt, setNextPrompt] = useState<string>("");

    const ExpReport = () => {
        console.log("creating experience report")

        useEffect(() => {
            const fetchExperienceReport = async () => {
                dispatch({ type: 'TOGGLE_LOADING', payload: true });
                const compiledAnswers: QuestionAnswer[] = state.answers.map((q: QuestionAns) => ({
                    question: state.curQuiz[q.questionId],
                    answer: q.answer
                }));
                const response = await addResponseGBT({
                    choices: state.gbtConversation,
                    newMessage: createFinalResponse(compiledAnswers, "experience")
                });
                if (response && response.choices.length > 0) {
                    const finalAns = response.choices[response.choices.length - 1].message.content;
                    if (finalAns) {
                        const experienceReport: ExperienceReport = JSON.parse(finalAns);
                        dispatch({ type: 'SET_EXPERIENCE_REPORT', payload: experienceReport });
                    } else {
                        console.log("Error: No valid response content received");
                    }
                } else {
                    console.log("Error: No response or choices available");
                }
                dispatch({ type: 'TOGGLE_LOADING', payload: false });
            };
    
            fetchExperienceReport();
        }, []);

        if (state.isLoading && state.loadingType === 'experienceReport') {
            return <Loading type="experienceReport"/>;
        }

        return (
            <>
                <h2>Academic Experience</h2>
                <ul>
                    {state.experienceReport.academic.map(academicExp => <li key={academicExp}>{academicExp}</li>)}
                </ul>
                <br/>
                <h2>Work Experience</h2>
                <ul>
                    {state.experienceReport.work.map(workExp => <li key={workExp}>{workExp}</li>)}
                </ul>
                <br/>
                <h2>Personal Interests</h2>
                <ul>
                    {state.experienceReport.interests.map(interest => <li key={interest}>{interest}</li>)}
                </ul>
                <Button onClick={()=>dispatch({type: 'FINISH_EXPERIENCE_REPORT'})}>ready to continue</Button>
            </>
        );
    };
    






    //     useEffect(() => {
    //         async function getFinalResponse() {
    //             const response = await addResponseGBT({choices: gbtConversation, newMessage: createFinalResponse(questionAns, "expereince")});
    //             setResponse(response);
    //             setLoaded(true);
    //         }
    //         if (!response) getFinalResponse();
    //     }, [questionAns, response]);

    //     if (!loaded) return <Loading type="experienceReport"/>;
    
    //     if (!response || !response.choices.length) return <p>Error Occurred</p>;

    //     const finalAns = response.choices[response.choices.length-1].message.content;
    //     if(finalAns == null) return<>Error Occured</>
    //     const currReport: ExperienceReport = JSON.parse(finalAns);
    //     setExperienceReport(experienceReport);
    //     setDisplayExperience(true);

    //     return (
    //         <>
    //         <h2>Academic Experience</h2>
    //         <ul>
    //             {currReport.academic.map((academicExp: string) => (
    //                 <li>{academicExp}</li>
    //             ))}
    //         </ul>
    //         <br></br>
    //         <h2>Work Experience</h2>
    //         <ul>
    //             {currReport.work.map((workExp: string) => (
    //                 <li>{workExp}</li>
    //             ))}
    //         </ul>
    //         <br></br>
    //         <h2>Personal Interests</h2>
    //         <ul>
    //             {currReport.interests.map((interest: string) => (
    //                 <li>{interest}</li>
    //             ))}
    //         </ul>
    //         </>
    //     )

    // }

    const DisplayResults = () => {
        const questionAns: QuestionAnswer[] = answers.map((q: QuestionAns) => ({question: curQuiz[q.questionId], answer: q.answer}));
        const [response, setResponse] = useState<OpenAI.ChatCompletion>();
        const [loaded, setLoaded] = useState(false);
    
        useEffect(() => {
            async function getFinalResponse() {
                const response = await addResponseGBT({choices: gbtConversation, newMessage: createFinalResponse(questionAns, "finalReport")});
                setResponse(response);
                setLoaded(true);
            }
    
            if (!response) getFinalResponse();
        }, [questionAns, response]);
    
        if (!loaded) return <Loading type="finalReport"/>;
    
        if (!response || !response.choices.length) return <p>Error Occurred</p>;

        const finalAns = response.choices[response.choices.length-1].message.content;
        if(finalAns == null) return<>Error Occured</>
        const finalResponse: AnswerResponse = JSON.parse(finalAns);
    
        return (
            <>

                <h2>Career Report Summary</h2>
                <p>{finalResponse.summary}</p>
                <h3>Detailed Advice</h3>
                <p>{finalResponse.advice}</p>
                <h3>Explore Further</h3>
                <p>{finalResponse.interactiveElements}</p>
                <h3>Recommended Career Paths</h3>
                <p>{finalResponse.recommendations}</p>
                <h3>Why These Paths?</h3>
                <p>{finalResponse.reasoning}</p>
            </>
        );
    }


    if (displayExperience) {
        console.log("displaying experience report")
        return(
            <>
            <ExpReport/>
            </>
        )
    }

    if (isLoading) {
        return <Loading type={type}/>;
    }    

    if (isQuizComplete) {
        return (
        <>
            <h2>Your results</h2>
            <DisplayResults/>
        </>)
    }

    const currentQuestion = curQuiz[currentQuestionId];

    const foundAnswer = answers.find((targetAnswer) => (targetAnswer.questionId === currentQuestion.id))
    
    const questionComponentProps: QuestionComponentProps = {
        question: currentQuestion.prompt,
        options: currentQuestion.options,
        onNext: handleAnswerSubmit,
        isFirst: currentQuestionId === "question1",
        description: currentQuestion.description,
        prevAnswer: foundAnswer ? foundAnswer.answer : ""
    };

    const renderQuestionComponent = () => {
        switch (currentQuestion.type) {
            case "MC_SINGLE_RESPONSE":
                return <McSingleResponse {...questionComponentProps} />;
            case "MC_MULTI_RESPONSE":
                return <McMultiResponse {...questionComponentProps} />;
            case "USER_RANKING":
                return <UserRanking {...questionComponentProps} />;
            case "TEXT_RESPONSE":
                return <TextResponse {...questionComponentProps} />;
            case "SLIDER_RESPONSE":
                return <SliderResponse {...questionComponentProps} />;
            default:
                return <h1>Unknown question type</h1>;
        }
    };

    return (
        <Container className="quiz-container">
            {renderQuestionComponent()}
        </Container>
    );
}

