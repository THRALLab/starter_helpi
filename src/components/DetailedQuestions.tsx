import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function DetailedQuestions({question,questionNumber}: {question: string; questionNumber:string;}): JSX.Element {
    const [input, setInput] = useState<string>("");

    function updateInput(event: React.ChangeEvent<HTMLInputElement>){
        setInput(event.target.value);
    }

    return(
        <div>
            Question {questionNumber}: {question}
            <Form.Group controlId="checkInput">
                <Form.Control type="text" value={input} onChange={updateInput} />
            </Form.Group>
        </div>
    );
}