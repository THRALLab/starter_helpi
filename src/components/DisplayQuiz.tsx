// Import necessary hooks and components
import React, { useState } from "react";
import { Question, questionComponentProps } from "../interfaces/QuestionTypes";
import { McSingleResponse } from "./McSingleResponse";
import { McMultiResponse } from "./McMultiResponse";
import { TextResponse } from "./TextResponse"
import { UserRanking } from "./UserRanking"

type DisplayQuizProps = Record<string, Question>;

export function DisplayQuiz(
    { 
        quiz,
        title,
        questionsAnswerd,
        setQuestionsAnswerd } 
    : 
    {
        title: string,
        quiz : DisplayQuizProps,
        questionsAnswerd : number,
        setQuestionsAnswerd : (questionsAnswerd: number) => void 
    }
    ): JSX.Element {
    const [currentQuestionId, setCurrentQuestionId] = useState<string>("root"); // Starting question ID
    const [isQuizComplete, setIsQuizComplete] = useState<boolean>(false); // Used to determine when quiz is complete
    const [answers, setAnswers] = useState<string[]>([]); // Array of all question answers
    const [currentAnswer, setCurrentAnswer] = useState<string>(""); // Use to store answer for question currently being displayed 

    const handleAnswerSubmit = () => {
        setAnswers([...answers, currentAnswer])
        const nextQuestionId = quiz[currentQuestionId].getNextQuestionId(currentAnswer);
        setQuestionsAnswerd(questionsAnswerd + 1)
        if (nextQuestionId === "") {
            setIsQuizComplete(true); // End of the quiz
        } else {
            setCurrentQuestionId(nextQuestionId); // Move to the next question
            setCurrentAnswer("");
        }
    };

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
            <li><strong>End quiz:</strong> (Only ends on user’s side. Triggers AI to start to formulating final output)</li>
            <li><strong>Final Output:</strong> (Quiz complete)</li>
        </ul>
        <br></br> 
        <br></br>
        <br></br>
        <br></br>
        <h3>Current Answers:</h3>
        <ol>
        {answers.map((target: string) => (<li>{target}</li>))}
        </ol>
        </div>
        </>)
    }

    const currentQuestion = quiz[currentQuestionId];

    const questionComponentProps: questionComponentProps = {
        question: currentQuestion.prompt,
        options: currentQuestion.options,
        setAnswer: setCurrentAnswer,
        onNext: handleAnswerSubmit
    };


    switch (currentQuestion.type) {
        case "MC_SINGLE_RESPONSE":
            return <McSingleResponse {...questionComponentProps} />;
        case "MC_MULTI_RESPONSE":
            return <McMultiResponse {...questionComponentProps} />;
        case "USER_RANKING":
            return <UserRanking {...questionComponentProps} />;
        case "TEXT_RESPONSE":
            return <TextResponse {...questionComponentProps} />;
        default:
            return <h1>Unknown question type</h1>;
    }
}
