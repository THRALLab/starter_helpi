// Import necessary hooks and components
import React, { useState } from "react";
import { Question } from "../interfaces/QuestionTypes";
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
        }
    };

    if (isQuizComplete) {
        return <div style={{justifyContent: "left"}}>
        <h2>End of question bank for {title}</h2>
        <br></br>
        <h3>The questions asked up until now would be used to populate the prompt given to ChatGPT</h3>
        <h3>This is the point at which GPT would take over asking questions.</h3>
        <br></br> 
        <br></br>
        <br></br>
        <h3>Current Answers:</h3>
        <ol>
        {answers.map((target: string) => (<li>{target}</li>))}
        </ol>
        </div>;
    }

    const currentQuestion = quiz[currentQuestionId];

    const questionComponentProps = {
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
