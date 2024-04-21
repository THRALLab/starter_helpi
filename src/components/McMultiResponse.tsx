import { useState } from 'react';
import { Form, Button, ToggleButton } from 'react-bootstrap';

export function McMultiResponse({
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
    const [localAnswer, setLocalAnswer] = useState<string[]>([]);

    // compresses the current answer into a string format
    function compressAnswer(): string {
        return localAnswer.reduce((combined: string, selected: string) => combined ? combined + ", " + selected : combined + selected, "")
    }

    function addAnswer(currAnswer: string) {
        if (localAnswer.includes(currAnswer)) {
            setLocalAnswer(localAnswer.filter((target: string) => target !== currAnswer));
        } else {
            setLocalAnswer([...localAnswer, currAnswer]);
        }
    }

    return (
        <div>
            <h3>{question}</h3>
            <Form>
                <ul>
                    {options.map((choice) => (
                        <li key={choice}>
                            <ToggleButton
                                variant={localAnswer.includes(choice) ? "primary" : "outline-primary"}
                                key={`${choice}Select`}
                                type="checkbox"
                                id={choice}
                                value={choice}
                                onChange={() => addAnswer(choice)}
                                checked={localAnswer.includes(choice)}
                            >
                                {choice} 
                            </ToggleButton>
                        </li>
                    ))}
                </ul>
                <Button
                    variant={isFirst ? "outline-primary" : "primary"}
                    disabled={isFirst}
                    onClick={() => onNext(compressAnswer())}>Back</Button>
                <Button onClick={() => onNext(compressAnswer())}>Next</Button>
            </Form>
        </div>
    );
}
