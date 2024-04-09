import React, { useState } from "react";
import { MC_SINGLE_RESPONSE } from "./MC_SINGLE_RESPONSE";
import { MC_MULTI_RESPONSE } from "./MC_MULTI_RESPONSE";
import { getFirstQuestion, getNextQuestion } from "../interfaces/QuizFlow";
import { Question } from "../interfaces/QuestionTypes";

export function DisplayQuestion (): JSX.Element {
    const [currentQuestion, setCurrentQuestion] = useState<Question>(getFirstQuestion());
    const [localAnswer, setLocalAnswer] = useState<string[]>([]);
    const [isQuizComplete, setIsQuizComplete] = useState<boolean>(false);


    const handleNextQuestion = () => {
        const userAnswer = localAnswer.join(", ");
        const nextQuestion = getNextQuestion(currentQuestion.id, userAnswer);

        if (nextQuestion) {
            setCurrentQuestion(nextQuestion);
            setLocalAnswer([]); // Reset local answer for the next question
        } else {
            setIsQuizComplete(true);
        }
    };

    
    const questionComponentProps = {
        question: currentQuestion.prompt,
        options: currentQuestion.options ?? [],
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