import { useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from 'react-bootstrap';

export function TextResponse({
    question,
    options,
    onNext
}: {
    question: string;
    options: string[];
    onNext: (answer: string) => void;
}): JSX.Element {
    const [localAnswer, setLocalAnswer] = useState<string>("");
    
    return(
        <div>
            <h3>{question}</h3>
            <Form.Group>
                <Form.Label>{question}</Form.Label>
                <Form.Control
                    value={localAnswer}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setLocalAnswer(event.target.value)}
                />
                <Button 
                    disabled={localAnswer === ""}
                    onClick={() => onNext(localAnswer)}
                >Next</Button>
            </Form.Group>
        </div>
    )
}

