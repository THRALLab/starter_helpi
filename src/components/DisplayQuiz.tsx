import { useEffect, useReducer, useState } from "react";
import { Question, QuestionComponentProps } from "../interfaces/QuestionTypes";
import { McSingleResponse } from "./McSingleResponse";
import { McMultiResponse } from "./McMultiResponse";
import { TextResponse } from "./TextResponse"
import { UserRanking } from "./UserRanking"
import { SliderResponse } from "./SliderResponse";
import { addResponseGBT, callGBT } from "src/controller/CallChat";
import { CreateBasicStartingPrompt, CreateStartingPrompt, createFinalResponse } from "src/controller/StartingPrompt";
import { QuestionAnswer } from "src/interfaces/PromptQuestionsSetup";
import { Loading } from "./Loading";
import { Button, Container } from "react-bootstrap";
import { ExperienceReport } from "src/controller/StartingPrompt";
import { ParentConstants } from "src/pages/basic-quiz/BasicQuiz";
import OpenAI from "openai";

export type QuizItems = Record<string, Question>;

interface QuizState { // state types for useReducer
    curQuiz: QuizItems;
    currentQuestionId: string;
    isQuizComplete: boolean;
    answers: QuestionAns[];
    lastQuestionArray: number;
    gbtConversation: any[];
    isLoading: boolean;
    loadingType: string;
    followUp: boolean;
    experienceReport: ExperienceReport;
    finalReport: FinalReport;
    displayExperience: boolean;
    needUpdate: boolean;
};

type QuizAction = // possible actions for useReducer
    | { type: 'ADD_ANSWERS'; payload: QuestionAns }
    | { type: 'SET_QUIZ'; payload: QuizItems }
    | { type: 'SET_CURRENT_QUESTION'; payload: string }
    | { type: 'TOGGLE_LOADING'; payload: boolean }
    | { type: 'SET_LOADING_TYPE'; payload: string }
    | { type: 'SET_EXPERIENCE_REPORT'; payload: ExperienceReport }
    | { type: 'COMPLETE_QUIZ' }
    | { type: 'GENERATE_EXPERIENCE_REPORT' }
    | { type: 'SET_FINAL_REPORT'; payload: FinalReport }
    | { type: 'FINISH_EXPERIENCE_REPORT'}
    | { type: 'RESET_UPDATED'};


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
            console.log('Updating curQuiz with new data', action.payload);
            return { ...state, curQuiz: action.payload, needUpdate: true };
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
        case 'RESET_UPDATED':
            return { ...state, needUpdate: false};
        case 'GENERATE_EXPERIENCE_REPORT': //causes expReport to be displayed, reset to false within expReport component
            return {
                ...state,
                displayExperience: true,
                followUp: true
            };
        case 'SET_FINAL_REPORT':
            return {
                ...state,
                finalReport: action.payload
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

type QuestionAns = { //How questions are passed to the AI
    questionId: string,
    answer: string
}

type Role = {
    role: string, 
    description: string,
    benefits: string[]
    challenges: string[]
    links: string[]
}

type FinalReport = Role[];

export function DisplayQuiz({ //contains most of the logic for displaying the quiz, if you can still even call this a quiz lol
        parentConstants,
        parentTotQuestions,
        parentQuestionsAnswerd,
        parentSetAnswerd,
        parentSetTot
    } : {
        parentConstants: ParentConstants,
        parentTotQuestions: number,
        parentQuestionsAnswerd : number,
        parentSetAnswerd : (questionsAnswerd: number) => void 
        parentSetTot: (parentTotQuestions: number) => void
    }): JSX.Element {
    const initialState: QuizState = { //used for initializing useReducer states
        curQuiz: parentConstants.parentQuiz,
        currentQuestionId: 'question1',
        isQuizComplete: false,
        answers: [],
        lastQuestionArray: 0,
        gbtConversation: [],
        isLoading: false,
        loadingType: "",
        followUp: false,
        experienceReport: { academic: [], work: [], interests: [] },
        finalReport: [{ role: "", description: "", benefits: [],challenges: [], links: [] }],
        displayExperience: false,
        needUpdate: false
    };
    const [state, dispatch] = useReducer(quizReducer, initialState); //state holds all states, makes state management much easier

    async function connectToGBT(startingPrompt: string, prompt: string)  {
        const response = await callGBT({startingPrompt: startingPrompt, userPrompt: prompt});
        // will parse the response so the messages are added
        return response;
    }


    async function createNextQuestion(questionsNeeded: number) {
        dispatch({ type: 'SET_LOADING_TYPE', payload: "generatingQuestions" });
        const compiledAnswers: QuestionAnswer[] = state.answers.map(ans => ({
            question: state.curQuiz[ans.questionId],
            answer: ans.answer
        }));
        console.log(`Compiled Answers: ${compiledAnswers}`);
        console.log(`At question ${state.currentQuestionId} with ${parentTotQuestions} total`)

        console.log(`Creating ${questionsNeeded} questions stating at ${parentQuestionsAnswerd}`)

        const response = await connectToGBT(CreateStartingPrompt({
            questionsAns: compiledAnswers,
            status: state.followUp ? "followUp" : "",
            quiz: parentConstants.title
        }), CreateBasicStartingPrompt(questionsNeeded, parentQuestionsAnswerd));
    
        if (response && response.choices && response.choices.length > 0) {
            const lastChoice = response.choices[response.choices.length - 1];

            if (lastChoice.message && lastChoice.message.content) {
                //console.log("GBT Response: ", lastChoice.message.content);
                const newQuestions: QuizItems = JSON.parse(lastChoice.message.content);
                console.log("GBT Questions: ", newQuestions);
                const newQuiz: QuizItems = {...state.curQuiz, ...newQuestions};
                if (!(`question${parentQuestionsAnswerd + 1}` in newQuiz)) return "";
                dispatch({ type: 'SET_QUIZ', payload: { ...newQuiz } });
                parentSetTot(parentTotQuestions + questionsNeeded);
                //const nextQ = `question${parseInt(state.currentQuestionId.replace("question", "")) + 1}`;
                //console.log(`In createNext, nextQuestionId(${nextQ}) in targetQuiz: ${nextQ in newQuiz}`);
            } else {
                console.log("No valid response content received");
            }
        } else {
            console.log("No valid response content received");
        }
    }

    // used to determine next question
    const determineNextQuestionId = async (currId: string): Promise<string> => {
        const questionNumber = parseInt(currId.replace("question", ""));
        const nextQuestionId: string = `question${questionNumber + 1}`;

        // Check if the next question already exists in the quiz
        if (nextQuestionId in state.curQuiz) {
            return nextQuestionId;
        }

        if (parentTotQuestions < parentConstants.totalMax) {
            if (parentTotQuestions < parentConstants.experienceMax) {
                await createNextQuestion(parentConstants.experienceMax - parentTotQuestions);
            } else if (parentTotQuestions > parentConstants.experienceMax){
                await createNextQuestion(parentConstants.totalMax - parentConstants.experienceMax);
            }

            // await new Promise<void>(resolve => {
            //     const interval = setInterval(() => {
            //         if (state.questionsUpdated) {
            //             clearInterval(interval);
            //             resolve();
            //         }
            //     }, 100); // Check every 100ms
            // });
    

            // After attempting to create new questions, check if the desired next question now exists
            console.log(`nextQuestionId(${nextQuestionId}) in targetQuiz: ${nextQuestionId in state.curQuiz}`)
            console.log(`prevQuestion(question${questionNumber}) in targetQuiz: ${nextQuestionId in state.curQuiz}`)
            return nextQuestionId
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
    
        const currentNumber = parseInt(state.currentQuestionId.replace("question", "").trim());

        if (forewards) {
            if ((!state.followUp && (parentQuestionsAnswerd < parentConstants.experienceMax)) || (state.followUp)) {
                if ((currentNumber < parentTotQuestions) || (parentTotQuestions < parentConstants.totalMax)) {//If parentTotQuestions >== parentConstants.experienceMax and not asking followUp questions
                    const nextQuestionId = await determineNextQuestionId(state.currentQuestionId);
                    if (nextQuestionId) {
                        parentSetAnswerd(parseInt(state.currentQuestionId.replace("question", "")) + 1);
                        dispatch({type: 'SET_CURRENT_QUESTION', payload: nextQuestionId });
                    }
                    else {
                        dispatch({ type: 'COMPLETE_QUIZ'});
                    }
                } else {
                    dispatch({ type: 'COMPLETE_QUIZ'});
                }
            } else {
                dispatch({ type: 'GENERATE_EXPERIENCE_REPORT'});
            }
        } else {//backwards
            parentSetAnswerd(parseInt(state.currentQuestionId.replace("question", "")) - 1);
            const prevId = `question${currentNumber - 1}`;
            if (prevId in state.curQuiz) {
                parentSetAnswerd(parentTotQuestions - 1);
                dispatch({type: 'SET_CURRENT_QUESTION', payload: prevId});
            }
            else {
                dispatch({type: 'COMPLETE_QUIZ'});
            }
        }
        dispatch({type: 'TOGGLE_LOADING', payload: false});
    }

    const ExpReport = () => {
        console.log("creating experience report")
        const [response, setResponse] = useState<OpenAI.ChatCompletion>();
        const questionAns: QuestionAnswer[] = state.answers.map(q => ({
            question: state.curQuiz[q.questionId],
            answer: q.answer
        }));

        useEffect(() => {
            dispatch({ type: 'TOGGLE_LOADING', payload: true });
            const fetchExperienceReport = async () => {
                const response = await addResponseGBT({
                    choices: state.gbtConversation,
                    newMessage: createFinalResponse(questionAns, "expereince", state.experienceReport)
                });
                setResponse(response);
            };
            if (!response) fetchExperienceReport();

            if (response && response.choices.length > 0) {
                const finalAns = response.choices[response.choices.length - 1].message.content;
                if (finalAns) {
                    const experienceReport: ExperienceReport = JSON.parse(finalAns);
                    dispatch({ type: 'SET_EXPERIENCE_REPORT', payload: experienceReport });
                } else {
                    console.log("Error: No valid response content received");
                };
            } else {
                console.log("Error: No response or choices available");
            };
            dispatch({ type: 'TOGGLE_LOADING', payload: false });
        }, [questionAns, response]);

        if (state.isLoading && state.loadingType === 'experienceReport') {
            return <Loading type="experienceReport"/>;
        };

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

    const DisplayResults = ():JSX.Element => {
        const [response, setResponse] = useState<OpenAI.ChatCompletion>();
        const [currRoles, setRoles] = useState<string[]>([]);
        const questionAns: QuestionAnswer[] = state.answers.map(q => ({
            question: state.curQuiz[q.questionId],
            answer: q.answer
        }));

        useEffect(() => {
            dispatch({ type: 'TOGGLE_LOADING', payload: true });
            const fetchFinalResults = async () => {
                const response = await addResponseGBT({
                    choices: state.gbtConversation,
                    newMessage: createFinalResponse(questionAns, "finalReport", state.experienceReport)
                });
                setResponse(response);
            };
            if (!response) fetchFinalResults();

            if (response && response.choices.length > 0) {
                const finalAns = response.choices[response.choices.length - 1].message.content;
                if (finalAns) {
                    const finalResponse: FinalReport = JSON.parse(finalAns);
                    dispatch({ type: 'SET_FINAL_REPORT', payload: finalResponse });
                } else {
                    console.error("Error: No valid response content received");
                }
            } else {
                console.error("Error: No response or choices available");
            }
            dispatch({ type: 'TOGGLE_LOADING', payload: false });
        }, [questionAns, response]); 


        if (state.isLoading) {
            return <Loading type="finalReport"/>;
        }
        
        function updateRoles (newRole: string) {
            const newRoles: string[] = currRoles.includes(newRole) 
                ? [...currRoles, newRole] 
                : [...currRoles].filter((currRole: string) => (currRole !== newRole));
            setRoles(newRoles)
        }

        return (
            <>
            {state.finalReport.map((role:Role) => (
                currRoles.includes(role.role)
                    ? <Button
                        onClick={() => updateRoles(role.role)}
                    >{`View ${role.role}  ⌄`}</Button>
                    : <>
                    <ul>
                        <li>{`${<strong>role.role</strong>}: ${role.description}`}</li>
                        <li>
                        {role.benefits.map((benefit: string) => (
                            <ul>
                                <li>{benefit}</li>
                            </ul>
                        ))}
                        </li>
                        <li>
                        {role.challenges.map((challenge: string) => (
                            <ul>
                                <li>{challenge}</li>
                            </ul>
                        ))}
                        </li>
                        <li>
                        {role.links.map((link: string) => (
                            <ul>
                                <li><a href={link}>{link}</a></li>
                            </ul>
                        ))}
                        </li>
                    </ul>
                    <Button
                        onClick={() => updateRoles(role.role)}
                    >{`Hide ${role.role}  ^`}</Button>
                    </>
            ))}
            </>
        );
    }

    function ForceUpdate ():JSX.Element {
        if (state.needUpdate) {
            dispatch({type: 'RESET_UPDATED'})
            return <Loading type="Returning"/>
        } else {
            return <Loading type="Setting Questions"/>
        }
    }

    if (state.needUpdate) {
        return <ForceUpdate/>
    }

    if (state.displayExperience) {
        console.log("displaying experience report")
        return(
            <>
            <ExpReport/>
            </>
        )
    }

    if (state.isLoading) {
        return <Loading type={state.loadingType}/>;
    }    

    if (state.isQuizComplete) {
        return (
        <>
            <h2>Your results</h2>
            <DisplayResults/>
        </>)
    }

    const currentQuestion = state.curQuiz[state.currentQuestionId];

    const foundAnswer = state.answers.find((targetAnswer) => (targetAnswer.questionId === currentQuestion.id))
    
    const questionComponentProps: QuestionComponentProps = {
        question: currentQuestion.prompt,
        options: currentQuestion.options,
        onNext: handleAnswerSubmit,
        isFirst: currentQuestion.id === "question1",
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