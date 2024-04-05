import React, { useState } from "react";
import { Form, } from 'react-bootstrap';

export function MC_SINGLE_RESPONSE({
    question,
    choices,
    answer,
    setAnswer
} : {
    question: string;
    choices: string[];
    answer: string;
    setAnswer: (answer: string) => void;
}): JSX.Element {
    return (
        <div>
            <h3>{question}</h3>
            <ul>
                {choices.map((choice) => (
                    <li>
                        <Form.Check
                            type="radio"
                            id={choice}
                            label={choice}
                            onChange={() => setAnswer(choice)}
                        />
                    </li>
                )
                )}
            </ul>
        </div>
    )
}