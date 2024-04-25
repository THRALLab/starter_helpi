// Import necessary hooks and components
import { Suspense, useState } from "react";
import { Question, QuestionComponentProps } from "../interfaces/QuestionTypes";
import { McSingleResponse } from "./McSingleResponse";
import { McMultiResponse } from "./McMultiResponse";
import { TextResponse } from "./TextResponse"
import { UserRanking } from "./UserRanking"
import { SliderResponse } from "./SliderResponse";
import { addResponseGBT, callGBT } from "src/controller/CallChat";
import OpenAI from "openai";
import { CreateAdvancedStartingPrompt, CreateBasicStartingPrompt, CreateStartingPrompt, createNewQuestions } from "src/controller/StartingPrompt";
import { QuestionAnswer } from "src/interfaces/PromptQuestionsSetup";

type DisplayQuizProps = Record<string, Question>;

type QuestionAns = {
    questionId: string,
    answer: string
}

export function DisplayQuiz(
    { 
        quiz,
        title,
        questionsAnswerd,
        maxQuestions,
        setQuestionsAnswerd 
    } 
    : 
    {
        title: string,
        quiz : DisplayQuizProps,
        questionsAnswerd : number,
        maxQuestions: number,
        setQuestionsAnswerd : (questionsAnswerd: number) => void 
    }
    ): JSX.Element {
    const [curQuiz, setCurQuiz] = useState<DisplayQuizProps>(quiz);
    const [currentQuestionId, setCurrentQuestionId] = useState<string>("question1"); // Starting question ID
    const [isQuizComplete, setIsQuizComplete] = useState<boolean>(false); // Used to determine when curQuiz is complete
    const [answers, setAnswers] = useState<QuestionAns[]>([]); // Array of all question answers
    const [lastQuestionArray, setQuestionArray] = useState<number>(0) // Keeps track of lastmost question answered to determine when to append answers
    const [gbtConversation, setGBTConversation] = useState<OpenAI.ChatCompletion.Choice[]>();
    const [nextPrompt, setNextPrompt] = useState<string>("");

    async function connectToGBT(startingPrompt: string, prompt: string)  {
        const response = await callGBT({startingPrompt: startingPrompt, userPrompt: prompt});
        // will parse the response so the messages are added
        return response;
    }

    const addToQuiz = (newQuestions: DisplayQuizProps): void => {
        console.log("new questions:", newQuestions);
        const quizTotal = {...curQuiz, ...newQuestions};
        console.log("combination ", {...curQuiz, ...newQuestions});
        setCurQuiz(quizTotal);
        console.log("Current Quiz:", curQuiz);
    }

    // when passed new chats from gbt it gets the last chat, parses
    // it as json and adds it to the curQuiz
    const parseChatHistory = (newChats: OpenAI.ChatCompletion) => {
        console.log("new chats:", newChats);
        const len = newChats.choices.length;
        if(len === 0) return;
        const res = newChats.choices[len-1].message.content;
        if(res === null) return;
        addToQuiz(JSON.parse(res));
    }

    // gets the next questions
    async function createNextQuestion() {
        // if basic curQuiz only one call is nessesary
        const questionAns: QuestionAnswer[] = answers.map((q: QuestionAns) => ({question: curQuiz[q.questionId], answer: q.answer}));
        const response = (title === "Basic Quiz") ?
            await connectToGBT(CreateStartingPrompt({
                questionsAns: questionAns,
                status: ""
            }), CreateBasicStartingPrompt(maxQuestions-questionsAnswerd, questionsAnswerd)) :
            await addResponseGBT({choices: gbtConversation, newMessage: createNewQuestions()});
        console.log("GBT response", response);
        parseChatHistory(response);
        //adding new messages to chat history
        setGBTConversation(gbtConversation);
        return
    }

    // used to determine next question
    const determineNextQuestionId = async (currentQuestionId: string, curQuiz: DisplayQuizProps, forewards: boolean): Promise<string> => {
        // questions are id'd as `quiestion${questionNumber}`
        if (currentQuestionId.includes("question")) {
          if (forewards) { // process for getting the next question
            const newId = `question${parseInt(currentQuestionId.substring(8)) + 1}`; // returns next numerical question
            if (newId in curQuiz) return (newId);
            // curQuiz is not not
            else if(questionsAnswerd < maxQuestions) {
                await createNextQuestion();
                // assuming nothing breaks and the next question is actually loaded
                return `question${parseInt(currentQuestionId.substring(8)) + 1}`;
            }
            else return "";
          } 
          else { //go-back
            const newId = `question${parseInt(currentQuestionId.substring(8)) - 1}`;
            if (newId in curQuiz) return (newId);
            else return ""
          }
        } 
        else return "";
      };

    const createNextPrompt = (questionNumber: number): void => {
        const prompt = "";
        setNextPrompt(prompt);
    }
    const createQuiz = () => {
        if(title === "Basic Quiz") connectToGBT(CreateBasicStartingPrompt(maxQuestions-questionsAnswerd, questionsAnswerd), nextPrompt);
        if(title === "Advanced Quiz") connectToGBT(CreateAdvancedStartingPrompt(), nextPrompt);
    }
    /**
     * 
     * @param answer - the answer for the current question
     * when an answer is submitted the answer is passed and added to the answers
     * the next question is then displayed
     * if there is no next question then the curQuiz is over
     */
    const handleAnswerSubmit = async (answer: string, forewards: boolean) => {
        
        if (forewards) { // if going to next question
            const nextQuestionId = determineNextQuestionId(currentQuestionId, curQuiz, true);
            if (questionsAnswerd === lastQuestionArray) { // if questions answered is equal to the latest array, appends it with newest answer
                setAnswers([...answers, {questionId: currentQuestionId, answer: answer}])
                setQuestionArray(lastQuestionArray + 1);
            } 
            else { // else, splices array and puts in the new answer
                const newAnswers = [...answers]
                newAnswers.splice(questionsAnswerd, 1, {questionId: currentQuestionId, answer: answer})
                setAnswers(newAnswers);
            }
            setQuestionsAnswerd(questionsAnswerd + 1); // increments questions answered

            if (await nextQuestionId === "") {
                setIsQuizComplete(true); // End of the curQuiz
            } 
            else {
                setCurrentQuestionId(await nextQuestionId); // Move to the next question
            }
        } 
        else { // backwards
            setQuestionsAnswerd(questionsAnswerd - 1);
            const nextQuestionId = determineNextQuestionId(currentQuestionId, curQuiz, false);
            setCurrentQuestionId(await nextQuestionId);
        }
    }
    // if(Object.keys(quiz).length === 0) createQuiz();
    

    if (isQuizComplete) {
        return (<>
        <h2>End of question bank for {title}. This is the point at which GPT would take over asking questions.</h2>
        <br></br>
        <div style={{textAlign: "left"}}>
        <h3>Our vision for this feature is that GPT will be given a prompt (populated by 
            previous user answers up until now)</h3>
        <span>GPT will be given the option of three actions to make:</span>
        <ul>
            <li><strong>Ask Question:</strong> (GPT returns parameters to feed into question component)</li>
            <li><strong>End curQuiz:</strong> (Only ends on user’s side. Triggers AI to start to formulating final output)</li>
            <li><strong>Final Output:</strong> (Quiz complete)</li>
        </ul>
        <br></br> 
        <br></br>
        <br></br>
        <br></br>
        <h3>Current Answers:</h3>
        <ol>
        {answers.map((target: QuestionAns) => (<li key={target.questionId}>{target.answer}</li>))}
        </ol>
        </div>
        </>)
    }

    const Loading = () => {
        return<h1>Loading</h1>
    }

    const currentQuestion = curQuiz[currentQuestionId];
    
    const questionComponentProps: QuestionComponentProps = {
        question: currentQuestion.prompt,
        options: currentQuestion.options,
        onNext: handleAnswerSubmit,
        isFirst: currentQuestionId === "question1",
        description: ""
    };


    //displays the curent question type
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
}
