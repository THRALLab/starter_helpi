// Import necessary hooks and components
import React, { useState } from "react";
import { Question } from "../interfaces/QuestionTypes";
import { McSingleResponse } from "./MC_SINGLE_RESPONSE";
import { McMultiResponse } from "./MC_MULTI_RESPONSE";

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
    const [isQuizComplete, setIsQuizComplete] = useState<boolean>(false);
    const [currentAnswer, setCurrentAnswer] = useState<string>("");

    const handleAnswerSubmit = () => {
        const nextQuestionId = quiz[currentQuestionId].getNextQuestionId(currentAnswer);
        setQuestionsAnswerd(questionsAnswerd+1)
        if (nextQuestionId === "") {
            setIsQuizComplete(true); // End of the quiz
        } else {
            setCurrentQuestionId(nextQuestionId); // Move to the next question
        }
    };

    if (isQuizComplete) {
        return <div>Quiz Complete</div>;
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
