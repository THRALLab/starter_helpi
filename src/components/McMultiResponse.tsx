import { useState } from 'react';
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
    onNext: (next: boolean) => void;
}): JSX.Element {
    const [localAnswer, setLocalAnswer] = useState<string[]>([]);
    function setterLocal(currAnswer: string): boolean {
        if (localAnswer.includes(currAnswer)) {
            setLocalAnswer(localAnswer.filter((target: string) => target !== currAnswer));
            return false;
        } else {
            setLocalAnswer([...localAnswer, currAnswer]);
            return true;
        }
    }
    function addAnswer(currAnswer: string) {
        /*
        if (localAnswer.includes(currAnswer)) {
            setLocalAnswer(localAnswer.filter((target: string) => target !== currAnswer));
        } else {
            setLocalAnswer([...localAnswer, currAnswer]);
        }
        */
        const status = setterLocal(currAnswer);
        console.log("Right before reduce")
        console.log("The setter version is ", [...localAnswer, currAnswer])
        console.log(localAnswer)
        if (status) {
            console.log("The reduced version", ([...localAnswer, currAnswer]).reduce((combined: string, selected: string) => combined ? combined + ", " + selected : combined + selected, ""))
            setAnswer(([...localAnswer, currAnswer]).reduce((combined: string, selected: string) => combined ? combined + ", " + selected : combined + selected, ""))
        }
        else {
            console.log("The reduced version", (localAnswer.filter((target: string) => target !== currAnswer)).reduce((combined: string, selected: string) => combined ? combined + ", " + selected : combined + selected, ""))
            setAnswer((localAnswer.filter((target: string) => target !== currAnswer)).reduce((combined: string, selected: string) => combined ? combined + ", " + selected : combined + selected, ""));
        }
        //setAnswer(localAnswer.reduce((combined: string, selected: string) => combined ? combined + ", " + selected : combined + selected, ""))
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
                <Button onClick={() => onNext(true)}>Next</Button>
            </Form>
        </div>
    );
}
