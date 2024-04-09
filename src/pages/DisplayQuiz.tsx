import React, { useState } from "react";
import { Button} from "react-bootstrap";
import { QuestionProps } from "../interfaces/QuestionProps";
import { DisplayQuestion } from "../components/DisplayQuestion";
import quiz1 from "../assets/test_data/quiz1.json";

export function DisplayQuiz(): JSX.Element {
    const [answers, setAnswers] = useState<string[][]>([["this is where answers are stored"]]);
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
                        order={question.order}
                        options={question.options}
                        answers={answers}
                        setAnswers={setAnswers}
                        submitting={submitting}
                    ></DisplayQuestion>
                ))
            }
            <Button
                onClick={submitQuiz}
            >Submit Quiz</Button>
            {submitting ? <h1>submitting</h1> : <h1>not submitting</h1>}

            <h2>Check:</h2>
            {
                answers.map((answer: string[]) => (
                    <><br></br>
                    <span>
                        {answer.map((singleAnswer: string) => (
                            `${singleAnswer}, `
                        ))}
                    </span>
                    </>
                ))

            }
        </div>
    )
}