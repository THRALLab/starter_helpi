import React, { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import { AnswerContext } from "../AnswerContext";

export function Q2():JSX.Element {
    const [data, setData] = useState<string>("");
    const { userAnswers, setUserAnswers } = useContext(AnswerContext);

    function updateData(event: React.ChangeEvent<HTMLSelectElement>) {
        setData(event.target.value);
        setUserAnswers((prevAnswers: string[]) => {
            const answer = event.target.value;
            const updatedAnswers = [...prevAnswers];
            updatedAnswers[1] = answer;
            return updatedAnswers;
          });
          console.log(userAnswers);
    }

    return (
        <div>
            <Form.Group controlId="userInput">
                <br></br>
                <br></br>
                <Form.Label>Do you have any short-term or long-term goals?</Form.Label>
                <br></br>
                <br></br>
                <br></br>
                <Form.Select value={data} onChange={updateData}>
                    <option value="--">--</option>
                    <option value="true">True</option>
                    <option value="false">False</option>
                </Form.Select>
            </Form.Group>
        </div>
    );
}