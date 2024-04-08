import { Form, } from 'react-bootstrap';
export function MC_MULTI_RESPONSE({
    question,
    options,
    answers,
    setAnswers
} : {
    question: string;
    options: string[];
    answers: string[];
    setAnswers: (answer: string[]) => void;
}): JSX.Element {
    function addAnswer(answer: string) {
        if (answers.includes(answer)) {
            setAnswers(answers.filter((target: string): boolean => target!==answer))
        } else {
            setAnswers([...answers, answer])
        }
    }

    return (
        <div>
            <h3>{question}</h3>
            <ul style={{ listStyleType: "none" }}>
                {options.map((choice) => (
                    <li>
                        <Form.Check
                            type="checkbox"
                            id={choice}
                            label={choice}
                            value={choice}
                            onChange={() => addAnswer(choice)}
                            checked={answers.includes(choice)}
                        />
                    </li>
                )
                )}
            </ul>
        </div>
    )
}
