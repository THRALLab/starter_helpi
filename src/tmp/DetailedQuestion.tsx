import React, { useState } from "react";
import { Form } from "react-bootstrap";



export function DetailedQuestion({question, answer, setAnswer} : {question: string, answer: string, setAnswer: (answer : string) => void}
): JSX.Element {
    function changeAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }

    return (
        <div>
            <h3>{question}</h3>
            <Form.Group controlId="userAnswer">
                <Form.Label>Enter your answer:</Form.Label>
                <Form.Control value={answer} onChange={changeAnswer} />
            </Form.Group>
        </div>
    )
}