import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export function McSingleResponse({
    question,
    options,
    setAnswer,
    onNext
}: {
    question: string;
    options: string[];
    setAnswer: (answer: string) => void;
    onNext: (next: boolean) => void;
}): JSX.Element {
    const [localAnswer, setLocalAnswer] = useState<string>("");

    function updateAnswer(currAnswer: string) {
        setLocalAnswer(currAnswer)
        setAnswer(currAnswer)
    }
    
    return (
        <div>
            <h3>{question}</h3>
            <Form>
                <ul style={{ listStyleType: "none" }}>
                    {options.map((choice) => (
                        <li key={choice}>
                            <Form.Check
                                type="radio"
                                id={choice}
                                label={choice}
                                value={choice}
                                checked={localAnswer === choice}
                                onChange={() => updateAnswer(choice)}
                            />
                        </li>
                    ))}
                </ul>
                <Button onClick={() => onNext(true)}>Next</Button>
            </Form>
        </div>
    );
}
