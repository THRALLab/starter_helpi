import React, { useState } from "react";
import { Button} from "react-bootstrap";
import { QuestionProps } from "../Interfaces/QuestionProps";
import { QuizProps } from "../Interfaces/QuizProps";
import { DisplayQuestion } from "../Components/DisplayQuestion";

const quiz1: QuizProps = {
    id: "first-quiz",
    name: "Test Quiz",
    questions: [
        {
            type: "MC_SINGLE_RESPONSE",
            question: "I am _____ years old.",
            options: ["1","2","3","4","5"]
        },
        {
            type: "MC_MULTI_RESPONSE",
            question: "I enjoy learning about _____.",
            options: ["Math","History","Science","Writing","Arts"]
        }
    ]
}

export function BasicQuiz(): JSX.Element {
    const [answers, setAnswers] = useState<string[][]>([[]]);
    const [submitting, setSubmitting] = useState<boolean>(false);

    function submitQuiz() {
        setSubmitting(true)
    }

    return (
        <div
            style={{ justifyContent: "left" }}
        >
            <h1>{quiz1.name}</h1>
            {
                quiz1.questions.map((question: QuestionProps) => (
                    <DisplayQuestion
                        type={question.type}
                        question={question.question}
                        options={question.options}
                        answers={answers}
                        setAnswers={setAnswers}
                        submitting={submitting}
                    ></DisplayQuestion>
                ))
            }
            <Button
                onClick={() => submitQuiz}
            >Submit Quiz</Button>

            <h2>Check:</h2>
            {
                answers.map((answer: string[]) => (
                    answer.map((singleAnswer) => (
                        <p>{singleAnswer}</p>
                    ))
                ))
            }
        </div>
    )
}