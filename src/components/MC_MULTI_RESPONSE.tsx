import { Form, Button } from 'react-bootstrap';

export function MC_MULTI_RESPONSE({
    question,
    options,
    answer,
    setAnswer,
    onNext
}: {
    question: string;
    options: string[];
    answer: string;
    setAnswer: (answers: string[]) => void;
    onNext: (next: boolean) => void;
}): JSX.Element {
    const [localAnswer, setLocalAnswer] = useState<string[]>("");
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
                <ul style={{ listStyleType: "none" }}>
                    {options.map((choice) => (
                        <li key={choice}>
                            <Form.Check
                                type="checkbox"
                                id={choice}
                                label={choice}
                                onChange={() => addAnswer(choice)}
                                checked={answer.includes(choice)}
                            />
                        </li>
                    ))}
                </ul>
                <Button onClick={() => onNext(true)}>Next</Button>
            </Form>
        </div>
    );
}

function useState<T>(arg0: string): [any, any] {
    throw new Error('Function not implemented.');
}

