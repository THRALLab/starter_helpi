import { useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from 'react-bootstrap';

export function TextResponse({
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
    const [localAnswer, setLocalAnswer] = useState<string>("");
    
    return(
        <div>
            <h3>{question}</h3>
            <Form.Group>
                <Form.Control
                    as="textarea" rows={3}
                    placeholder="Enter answer here"
                    value={localAnswer}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setLocalAnswer(event.target.value)}
                />
                <Button
                    variant={isFirst ? "outline-primary" : "primary"}
                    disabled={isFirst}
                    onClick={() => onNext(localAnswer)}>Back</Button>
                <Button 
                    variant={localAnswer === "" ? "outline-primary" : "primary"}
                    disabled={localAnswer === ""}
                    onClick={() => onNext(localAnswer)}
                >Next</Button>
            </Form.Group>
        </div>
    )
}

