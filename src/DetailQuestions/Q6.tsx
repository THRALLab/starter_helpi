import React, { useState, useContext } from "react";
import { Form } from "react-bootstrap";
import { AnswerContext } from "../AnswerContext";

export function Q6():JSX.Element {
    const [userInfo, setUserInfo] = useState<string>("");
    const { userAnswers, setUserAnswers } = useContext(AnswerContext);
    function updateUserInfo(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setUserInfo(event.target.value);
        setUserAnswers((prevAnswers: string[]) => {
            const answer = event.target.value;
            const updatedAnswers = [...prevAnswers];
            updatedAnswers[14] = answer;
            return updatedAnswers;
          });
          console.log(userAnswers);
    }
    return (
        <div>
            <Form.Group controlId="preferance">
            <br></br>
            <Form.Label>Are you comfortable working in a fast-paced, high-stress environment or do you prefer a slower pace?</Form.Label>
            <br></br>
            <br></br>
            <Form.Control
            as="textarea"
            rows={5}
            value={userInfo}
            onChange={updateUserInfo} />
            </Form.Group>
        </div>
    );
}