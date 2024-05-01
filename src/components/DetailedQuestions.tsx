import React, { useState } from "react";
import { Form } from "react-bootstrap";


export function DetailedQuestions({question,questionNumber,currentQuestion, updateNumAnswered}: {question: string; questionNumber:number;currentQuestion:number; updateNumAnswered: (value: number) => void}): JSX.Element {
    const [input, setInput] = useState<string>("");
    const [alreadyAnswered, setAlreadyAnswered] = useState<boolean>(false);
    function updateInput(event: React.ChangeEvent<HTMLInputElement>){
        setInput(event.target.value);
        if(alreadyAnswered && event.target.value === ""){
            setAlreadyAnswered(false);
            updateNumAnswered(-10)
        }
        else if(!alreadyAnswered){
            setAlreadyAnswered(true);
            updateNumAnswered(10);
        }
    }
    return(
        <div>
            {questionNumber !== currentQuestion ? "" : <p>Question {questionNumber}: {question}</p>}
            <Form.Group controlId="checkInput">
                <Form.Control type="text" value={input} hidden={questionNumber !== currentQuestion} onChange={updateInput} />
            </Form.Group>
        </div>
    );
}