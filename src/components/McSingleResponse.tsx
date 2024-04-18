import { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export function McSingleResponse({
    question,
    options,
    onNext
}: {
    question: string;
    options: string[];
    onNext: (answer: string) => void;
}): JSX.Element {
    const [localAnswer, setLocalAnswer] = useState<string>("");
    
    return (
        <div>
            <h3>{question}</h3>
            <Form>
                <ul style={{ listStyleType: "none" }}>
                    {options.map((choice) => (
                        <li key={choice}>
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
