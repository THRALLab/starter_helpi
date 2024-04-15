import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export function McMultiResponse({
    question,
    options,
    setAnswer,
    onNext
}: {
    question: string;
    options: string[];
    setAnswer: (answers: string) => void;
    onNext: (next: boolean) => void;
}): JSX.Element {
    const [localAnswer, setLocalAnswer] = useState<string[]>([]);
    function addAnswer(currAnswer: string) {
        if (localAnswer.includes(currAnswer)) {
            setLocalAnswer(localAnswer.filter((target: string) => target !== currAnswer));
        } else {
            setLocalAnswer([...localAnswer, currAnswer]);
        }
        setAnswer(localAnswer.reduce((combined: string, selected: string) => combined ? combined + ", " + selected : combined + selected, ""))
    }

    return (
        <div>
            <h3>{question}</h3>
            <Form>
                <ul>
                    {options.map((choice) => (
                        <li key={choice}>
                            <Form.Check
                                type="checkbox"
                                id={choice}
                                label={choice}
                                onChange={() => addAnswer(choice)}
                                checked={localAnswer.includes(choice)}
                            />
                        </li>
                    ))}
                </ul>
                <Button onClick={() => onNext(true)}>Next</Button>
            </Form>
        </div>
    );
}
