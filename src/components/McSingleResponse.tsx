import { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export function McSingleResponse({
    question,
    options,
    aboluteAnswer,
    setAnswer,
    onNext
}: {
    question: string;
    options: string[];
    aboluteAnswer: string;
    setAnswer: (answer: string) => void;
    onNext: () => void;
}): JSX.Element {
    const [localAnswer, setLocalAnswer] = useState<string>("");

    useEffect(() => {
        setAnswer(localAnswer);
    });
    
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
                <Button onClick={onNext}>Next</Button>
            </Form>
        </div>
    );
}
