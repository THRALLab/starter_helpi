import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function BasicQuestions({question,questionNumber, answer1, answer2, answer3, answer4}:
{question: string; questionNumber:string;answer1:string;answer2:string;answer3:string;answer4:string}): JSX.Element {
    const [input, setInput] = useState<string>("");
    function updateInput(event: React.ChangeEvent<HTMLInputElement>){
        setInput(event.target.value);
    }
    return(
    <div>
        Question {questionNumber}: {question}
        <Form.Check type="radio" onChange={updateInput} id="basic-questions" label={answer1} value={answer1} checked={input === answer1} />
        <Form.Check type="radio" onChange={updateInput} id="basic-questions" label={answer2} value={answer2} checked={input === answer2} />
        <Form.Check type="radio" onChange={updateInput} id="basic-questions" label={answer3} value={answer3} checked={input === answer3} />
        <Form.Check type="radio" onChange={updateInput} id="basic-questions" label={answer4} value={answer4} checked={input === answer4} />
    </div>
    )
}