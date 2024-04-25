import React, { useState, useContext } from "react";
import { Form } from "react-bootstrap";
import { AnswerContext } from "../AnswerContext";

export function Q2(): JSX.Element {
  const [userInfo, setUserInfo] = useState<string>("");
  const { userAnswers, setUserAnswers } = useContext(AnswerContext);
  function updateUserInfo(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const answer = event.target.value;
    setUserInfo(answer);
    setUserAnswers((prevAnswers: string[]) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[0] = answer;
      return updatedAnswers;
    });
    console.log(userAnswers);
  }
  return (
    <div>
      <Form.Group controlId="work-schedule">
        <Form.Label>What is your ideal working schedule?</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          value={userInfo}
          onChange={updateUserInfo}
        />
      </Form.Group>
    </div>
  );
}
