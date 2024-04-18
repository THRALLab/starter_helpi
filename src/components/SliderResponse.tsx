import { useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from 'react-bootstrap';

/**
 * 
 * @param question - input of the question
 * @param options - options of the question (the min and max of the slider)
 * @param setanswer - function for setting the answer
 * @param onNext - function for getting the next question
 * @returns 
 */
export function SliderResponse({
    question,
    description,
    options,
    onNext
}: {
    question: string;
    description: string;
    options: string[];
    onNext: (answer: string) => void;
}): JSX.Element {
    const [tooltip, setTooltip] = useState<string>("");
    const [localAnswer, setLocalAnswer] = useState<string>("");
    
    return(
        <div>
            <h3
                onMouseEnter={() => setTooltip(`${description}`)}
                onMouseLeave={() => setTooltip("")}
            >{question}</h3>
            {tooltip && (
                <div style={{
                    position: "relative", 
                    border: "1px solid black",
                    padding: "10px", 
                    backgroundColor: "white", 
                    pointerEvents: "none" 
                }}>
                    {tooltip}
                </div>
            )}
            <Form.Group>
                <Form.Label>{question}</Form.Label>
                <Form.Range
                    value={localAnswer}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setLocalAnswer(event.target.value)}
                />
                <Button onClick={() => onNext(localAnswer)}>Next</Button>
            </Form.Group>
        </div>
    )
}

