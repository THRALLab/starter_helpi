import { Form, } from 'react-bootstrap';
export function MC_MULTI_RESPONSE({
    question,
    choices,
    answers,
    setAnswers
} : {
    question: string;
    choices: string[];
    answers: string[];
    setAnswers: (answer: string[]) => void;
}): JSX.Element {
    function addAnswer(answer: string) {
        const found = answers.filter((target: string): boolean => target===answer)
        if (!found) {
            setAnswers([...answers, answer])
        } else {
            setAnswers(answers.filter((target: string): boolean => target!==answer))
        }
    }
    return (
        <div>
            <h3>{question}</h3>
            <ul style={{ listStyleType: "none" }}>
                {choices.map((choice) => (
                    <li>
                        <Form.Check
                            type="radio"
                            id={choice}
                            label={choice}
                            onChange={() => addAnswer(choice)}
                        />
                    </li>
                )
                )}
            </ul>
        </div>
    )
}
