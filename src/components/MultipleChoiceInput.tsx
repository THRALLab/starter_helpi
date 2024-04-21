import { Form } from "react-bootstrap";
import React from 'react';
import "./MultipleChoiceInput.css";

interface MultipleChoiceInputProps {
    selectedOption: string | null;
    handleOptionChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function MultipleChoiceInput({ selectedOption, handleOptionChange }: MultipleChoiceInputProps): JSX.Element {
    const answerOptions: string[] = [
        "Strongly Disagree",
        "Disagree",
        "Neutral",
        "Agree",
        "Strongly Agree"
    ];

    return (
        <div className="MultipleChoiceInput">
            <Form>
                {answerOptions.map((answer, index) => (
                    <div className="radio-inline" key={index}>
                        <Form.Check
                            type="radio"
                            name="responseGroup"
                            label={answer}
                            value={answer}
                            checked={selectedOption === answer}
                            onChange={handleOptionChange}
                        />
                    </div>
                ))}
            </Form>
        </div>
    );
}