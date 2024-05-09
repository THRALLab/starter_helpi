import React, { useState, useContext } from "react";
import { Form } from "react-bootstrap";
import { AnswerContext } from "../AnswerContext";

export function Q8():JSX.Element {
    const [data, setData] = useState<string>("");
    const { userAnswers, setUserAnswers } = useContext(AnswerContext);
    function updateData(event: React.ChangeEvent<HTMLInputElement>) {
        setData(event.target.value);
        setUserAnswers((prevAnswers: string[]) => {
            const answer = event.target.value;
            const updatedAnswers = [...prevAnswers];
            updatedAnswers[7] = answer;
            return updatedAnswers;
          });
          console.log(userAnswers);
    }
    return (
        <div>
            <Form.Group controlId="userInput">
            <br></br>
            <br></br>
                <Form.Label>What is your dream Company?</Form.Label>
                <br></br>
                <br></br>
                <br></br>
                <Form.Control
                    type="textbox"
                    value={data}
                    onChange={updateData}
                    />
            </Form.Group>
        </div>
    );
}