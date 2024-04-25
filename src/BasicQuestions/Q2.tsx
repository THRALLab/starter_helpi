import React, { useState, useContext } from "react";
import { Form } from "react-bootstrap";
import { AnswerContext } from "../AnswerContext";

export function Q2(): JSX.Element {
  const [age, setAge] = useState<string>("");
  const { userAnswers, setUserAnswers } = useContext(AnswerContext);

  function updateAge(event: React.ChangeEvent<HTMLInputElement>) {
    setAge(event.target.value);
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
      How old are you?
      <br></br>
      <Form.Control type="textbox" value={age} onChange={updateAge} />
    </div>
  );
}
