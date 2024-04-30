import React, { useState, useContext } from "react";
import { Form } from "react-bootstrap";
import { AnswerContext } from "../AnswerContext";

export function Q1(): JSX.Element {
  const [color, setColor] = useState<string>("NA");
  const { userAnswers, setUserAnswers } = useContext(AnswerContext);

  function updateColor(event: React.ChangeEvent<HTMLSelectElement>) {
    setColor(event.target.value);
    setUserAnswers((prevAnswers: string[]) => {
      const answer = event.target.value;
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[0] = answer;
      return updatedAnswers;
    });
    console.log(userAnswers);
  }

  return (
    <div>
      <Form.Group controlId="colors">
        <Form.Label>What is your favorite color?</Form.Label>

        <Form.Select size="sm" value={color} onChange={updateColor}>
          <option value="NA">Select an option</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
        </Form.Select>
      </Form.Group>
    </div>
  );
}
