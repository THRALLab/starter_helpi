// Import necessary hooks and components
import React, { useState } from "react";
import { Question } from "../interfaces/QuestionTypes";
import { McSingleResponse } from "./McSingleResponse";
import { McMultiResponse } from "./McMultiResponse";

type DisplayQuizProps = Record<string, Question>;

export function DisplayQuiz(
    { 
        quiz,
        questionsAnswerd,
        setQuestionsAnswerd } 
    : 
    {
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
        setQuestionsAnswerd(questionsAnswerd+1)
        if (nextQuestionId === "") {
            setIsQuizComplete(true); // End of the quiz
        } else {
            setCurrentQuestionId(nextQuestionId); // Move to the next question
        }
    };

    if (isQuizComplete) {
        return <div style={{justifyContent: "left"}}>
        <h2>Quiz Complete</h2>
        <br></br> 
        <h3>Answers:</h3>
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
        default:
            return <h1>Unknown question type</h1>;
    }
}
