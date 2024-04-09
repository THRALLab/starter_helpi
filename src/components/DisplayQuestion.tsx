import React, { useState } from "react";
import { MC_SINGLE_RESPONSE } from "./MC_SINGLE_RESPONSE";
import { MC_MULTI_RESPONSE } from "./MC_MULTI_RESPONSE";
import { Question } from "../interfaces/QuestionTypes";

export function DisplayQuestion ({
    question,
    options,
    onAnswerSubmit
}: {
    question: string
    options: string[]
    onAnswerSubmit: (answer: string) => void
}): JSX.Element {
    const [localAnswer, setLocalAnswer] = useState<string[]>([]);
    const [isQuizComplete, setIsQuizComplete] = useState<boolean>(false);

    const questionComponentProps = {
        question: question,
        options: options,
        answer: localAnswer,
        setAnswer: setLocalAnswer,
        
    };

    switch (currentQuestion.type) {
        case "MC_SINGLE_RESPONSE":
            return <MC_SINGLE_RESPONSE {...questionComponentProps} onNext={handleNextQuestion} />;
        case "MC_MULTI_RESPONSE":
            return <MC_MULTI_RESPONSE {...questionComponentProps} onNext={handleNextQuestion} />;
        default:
            return <h1>Unknown question type</h1>;
    }

}