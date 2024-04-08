import React, { useState } from "react";
import { Button} from "react-bootstrap";
import { QuestionProps } from "../interfaces/QuestionProps";
import { DisplayQuestion } from "../components/DisplayQuestion";
import quiz1 from "../assets/test_data/quiz1.json"

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