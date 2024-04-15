import { useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from 'react-bootstrap';

/**
 * 
 * @param question - input of the question
 * @param options - options of the question (the min and max of the slider)
 * @param setanswer - function for setting the answer
 * @param onNext - function for getting the next question
 * @returns 
 */
export function SliderResponse({
    question,
    options,
    setAnswer,
    onNext
}: {
    question: string;
    options: string[];
    setAnswer: (answer: string) => void;
    onNext: (next: boolean) => void;
}): JSX.Element {
    const [localAnswer, setLocalAnswer] = useState<string>("");
    function updateAnswer(currAnswer: string) {
        setLocalAnswer(currAnswer)
        setAnswer(currAnswer)
    }

    const onQuestionSubmit = () => {
        setAnswer(localAnswer);
        onNext(true);
    }
    
    return(
        <div>
            <h3>{question}</h3>
            <Form.Group>
                <Form.Label>{question}</Form.Label>
                <Form.Range
                    value={localAnswer}
                    onChange={(e) => updateAnswer(e.target.value)}
                />
                <Button onClick={() => onQuestionSubmit()}>Next</Button>
            </Form.Group>
        </div>
    )
}

