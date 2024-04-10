// Import necessary hooks and components
import React, { useState } from "react";
import { Question } from "../interfaces/QuestionTypes";
import { MC_SINGLE_RESPONSE } from "./MC_SINGLE_RESPONSE";
import { MC_MULTI_RESPONSE } from "./MC_MULTI_RESPONSE";

interface DisplayQuizProps {
    quiz: Record<string, Question>;
}

export function DisplayQuiz({ quiz }: DisplayQuizProps ): JSX.Element {
    const [currentQuestionId, setCurrentQuestionId] = useState<string>("root"); // Starting question ID
    const [isQuizComplete, setIsQuizComplete] = useState<boolean>(false);
    const [answers, setAnswers] = useState<string[]>([]);
    const [currentAnswer, setCurrentAnswer] = useState<string>("");

    const handleAnswerSubmit = () => {
        setAnswers([...answers, currentAnswer])
        const nextQuestionId = quiz[currentQuestionId].getNextQuestionId(currentAnswer);
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
            return <MC_SINGLE_RESPONSE {...questionComponentProps} />;
        case "MC_MULTI_RESPONSE":
            return <MC_MULTI_RESPONSE {...questionComponentProps} />;
        default:
            return <h1>Unknown question type</h1>;
    }
}
