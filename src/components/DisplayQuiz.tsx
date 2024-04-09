// Import necessary hooks and components
import React, { useState, useEffect } from "react";
import { DisplayQuestion } from "../components/DisplayQuestion";
import { Question } from "../interfaces/QuestionTypes";
import { MC_SINGLE_RESPONSE } from "./MC_SINGLE_RESPONSE";

interface DisplayQuizProps {
    quiz: Record<string, Question>;
}

export function DisplayQuiz({ quiz }: DisplayQuizProps ): JSX.Element {
    const [currentQuestionId, setCurrentQuestionId] = useState<string>("root"); // Starting question ID
    const [isQuizComplete, setIsQuizComplete] = useState<boolean>(false);
    const [next, updateNextStatus] = useState<boolean>(false);
    const [currentAnswer, setCurrentAnswer] = useState<string>("");

    const handleAnswerSubmit = () => {
        const nextQuestionId = quiz[currentQuestionId].getNextQuestionId(currentAnswer);
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
        answer: currentAnswer,
        setAnswer: setCurrentAnswer,
        onNext: updateNextStatus
    };


    switch (currentQuestion.type) {
        case "MC_SINGLE_RESPONSE":
            return <MC_SINGLE_RESPONSE {...questionComponentProps} />;
        case "MC_MULTI_RESPONSE":
            return <MC_MULTI_RESPONSE {...questionComponentProps} />;
        default:
            return <h1>Unknown question type</h1>;
    }
}
