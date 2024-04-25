import React, { useState, useContext } from "react";
import { Form } from "react-bootstrap";
import { AnswerContext } from "../AnswerContext";

export function Q8(): JSX.Element {
  const [userInfo, setUserInfo] = useState<string>("");
  const { userAnswers, setUserAnswers } = useContext(AnswerContext);
  function updateUserInfo(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInfo(event.target.value);
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
      What is your favorite subject?
      <br></br>
      <Form.Control type="textbox" value={userInfo} onChange={updateUserInfo} />
    </div>
  );
}
