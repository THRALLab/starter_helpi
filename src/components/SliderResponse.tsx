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
    onNext,
    isFirst
}: {
    question: string;
    options: string[];
    onNext: (answer: string) => void;
    isFirst: boolean;
}): JSX.Element {
    const [localAnswer, setLocalAnswer] = useState<string>("50");
    
    return(
        <div>
            <h3>{question}</h3>
            <Form.Group>
                <Form.Label>{localAnswer}</Form.Label>
                <Form.Range
                    value={localAnswer}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setLocalAnswer(event.target.value)}
                />
                <Button
                    variant={isFirst ? "outline-primary" : "primary"}
                    disabled={isFirst}
                    onClick={() => onNext(localAnswer)}>Back</Button>
                <Button onClick={() => onNext(localAnswer)}>Next</Button>
            </Form.Group>
        </div>
    )
}

