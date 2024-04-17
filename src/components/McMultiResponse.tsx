import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export function McMultiResponse({
    question,
    options,
    onNext
}: {
    question: string;
    options: string[];
    onNext: (answer: string) => void;
}): JSX.Element {
    const [localAnswer, setLocalAnswer] = useState<string[]>([]);
    const [submitionAns, setSubmitionAns] = useState<string>("");

    function compressAnswer(answers: string[]): string {
        return localAnswer.reduce((combined: string, selected: string) => combined ? combined + ", " + selected : combined + selected, "")
    }
    function addAnswer(currAnswer: string) {
        if (localAnswer.includes(currAnswer)) {
            setLocalAnswer(localAnswer.filter((target: string) => target !== currAnswer));
        } else {
            setLocalAnswer([...localAnswer, currAnswer]);
        }
        setSubmitionAns(compressAnswer(localAnswer));
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
                <Button onClick={() => onNext(submitionAns)}>Next</Button>
            </Form>
        </div>
    );
}
