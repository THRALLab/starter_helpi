import { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export function McMultiResponse({
    question,
    options,
    aboluteAnswer,
    setAnswer,
    onNext
}: {
    question: string;
    options: string[];
    aboluteAnswer: string;
    setAnswer: (answers: string) => void;
    onNext: () => void;
}): JSX.Element {
    const [localAnswer, setLocalAnswer] = useState<string[]>([]);

    useEffect(() => {
        setAnswer(localAnswer.reduce((combined: string, selected: string) => combined ? combined + ", " + selected : combined + selected, ""));
    });

    function addAnswer(currAnswer: string): void {
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
                <Button onClick={onNext}>Next</Button>
            </Form>
        </div>
    );
}
