import { useState } from 'react';
import { Form, Button, ToggleButton } from 'react-bootstrap';

export function McSingleResponse({
    question,
    options,
    onNext,
    isFirst
}: {
    question: string;
    options: string[];
    onNext: (answer: string) => void;
    isFirst: boolean;
}): JSX.Element {
    const [localAnswer, setLocalAnswer] = useState<string>("");
    
    return (
        <div>
            <h3>{question}</h3>
            <Form>
                <div>
                    {options.map((choice) => (
                            <ToggleButton
                                key={`${choice}Select`}
                                type="radio"
                                id={choice}
                                value={choice}
                                checked={localAnswer === choice}
                                variant={localAnswer === choice ? "primary" : "outline-secondary"}
                                onChange={() => setLocalAnswer(choice)}
                                    > {choice}
                                </ToggleButton>
                    ))}
                </div>
                <Button
                    variant={isFirst ? "outline-primary" : "primary"}
                    disabled={isFirst}
                    onClick={() => onNext(localAnswer)}>Back</Button>
                <Button
                    variant={localAnswer === "" ? "outline-primary" : "primary"}
                    disabled={localAnswer === ""}
                    onClick={() => onNext(localAnswer)}> Next</Button>
            </Form>
        </div>
    );
}
