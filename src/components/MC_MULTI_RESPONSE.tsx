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
    answer: string[];
    setAnswer: (answers: string[]) => void;
    onNext: (next: boolean) => void;
}): JSX.Element {
    function addAnswer(currAnswer: string) {
        if (answer.includes(currAnswer)) {
            setAnswer(answer.filter((target: string) => target !== currAnswer));
        } else {
            setAnswer([...answer, currAnswer]);
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
