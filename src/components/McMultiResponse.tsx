import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export function McMultiResponse({
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
                <ul>
                    {options.map((choice) => (
                        <li key={choice}>
                            <Form.Check
                                key={`${choice}Select`}
                                type="checkbox"
                                id={choice}
                                label={choice}
                                onChange={() => addAnswer(choice)}
                                checked={localAnswer.includes(choice)}
                            />
                        </li>
                    ))}
                </ul>
                <Button onClick={() => onNext(compressAnswer())}>Next</Button>
            </Form>
        </div>
    );
}
