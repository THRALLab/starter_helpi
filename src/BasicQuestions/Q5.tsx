import React, { useState, useContext } from "react";
import { Form } from "react-bootstrap";
import { AnswerContext } from "../AnswerContext";

export function Q5(): JSX.Element {
  const [data, setData] = useState<string>("NA");
  const { userAnswers, setUserAnswers } = useContext(AnswerContext);

  function updateData(event: React.ChangeEvent<HTMLSelectElement>) {
    setData(event.target.value);
    setUserAnswers((prevAnswers: string[]) => {
      const answer = event.target.value;
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[4] = answer;
      return updatedAnswers;
    });
    console.log(userAnswers);
  }

  return (
    <div>
      <Form.Group controlId="userData">
        <Form.Label>What is your gender?</Form.Label>
        <br></br>
        <Form.Select value={data} onChange={updateData}>
          <option value="NA">Select an option</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="trans">Other</option>
        </Form.Select>
      </Form.Group>
    </div>
  );
}
