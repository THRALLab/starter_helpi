import { Form, Button } from 'react-bootstrap';

export function MC_SINGLE_RESPONSE({
    question,
    options,
    answer,
    setAnswer,
    onNext
}: {
    question: string;
    options: string[];
    answer: string[];
    setAnswer: (answer: string[]) => void;
    onNext: (next: boolean) => void;
}): JSX.Element {
    return (
        <div>
            <h3>{question}</h3>
            <Form>
                <ul style={{ listStyleType: "none" }}>
                    {options.map((choice) => (
                        <li key={choice}>
                            <Form.Check
                                type="radio"
                                id={choice}
                                label={choice}
                                value={choice}
                                checked={answer[0] === choice}
                                onChange={() => setAnswer([choice])}
                            />
                        </li>
                    ))}
                </ul>
                <Button onClick={() => onNext(true)}>Next</Button>
            </Form>
        </div>
    );
}
