import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";



export function DetailedQuestion(): JSX.Element {
    const [answer, changeAnswer] = useState<string>(" ");

    function setAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        changeAnswer(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="userAnswer">
                        <Form.Label>Enter your answer:</Form.Label>
                        <Form.Control value={answer} onChange={setAnswer} />
            </Form.Group>
            <Button onClick={() => console.log("submit :)")}></Button>
        </div>
    )
}