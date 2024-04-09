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
    answer: string;
    setAnswer: (answer: string) => void;
    onNext: (next: boolean) => void;
}): JSX.Element {
    const [localAnswer, setLocalAnswer] = useState<string[]>("");
    
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
                                checked={localAnswer === choice}
                                onChange={() => setLocalAnswer([choice])}
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

