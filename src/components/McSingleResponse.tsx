import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export function McSingleResponse({
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
    
    return (
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
            <Form>
                <ul style={{ listStyleType: "none" }}>
                    {options.map((choice) => (
                        <li 
                            key={choice}
                        >
                            <Form.Check
                                key={`${choice}Select`}
                                type="radio"
                                id={choice}
                                label={choice}
                                value={choice}
                                checked={localAnswer === choice}
                                onChange={() => setLocalAnswer(choice)}
                            />
                        </li>
                    ))}
                </ul>
                <Button
                    disabled={localAnswer === ""}
                    onClick={() => onNext(localAnswer)}>Next</Button>
            </Form>
        </div>
    );
}
