import { Form, } from 'react-bootstrap';

export function MC_SINGLE_RESPONSE({
    question,
    options,
    answer,
    setAnswer
} : {
    question: string; //
    options: string[]; //
    answer: string[];
    setAnswer: (answer: string[]) => void;
}): JSX.Element {
    return (
        <div>
            <h3>{question}</h3>
            <ul style={{ listStyleType: "none" }}>
                {options.map((choice) => (
                    <li>
                        <Form.Check
                            type="radio"
                            id={choice}
                            label={choice}
                            value={choice}
                            checked={answer[0] === choice}
                            onChange={() => setAnswer([choice])}
                        />
                    </li>
                )
                )}
            </ul>
        </div>
    )
}
