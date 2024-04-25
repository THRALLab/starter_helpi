import React, { useState, useContext } from "react";
import { Form } from "react-bootstrap";
import { AnswerContext } from "../AnswerContext";

export function Q3(): JSX.Element {
  const [data, setData] = useState<string>("NA");
  const { userAnswers, setUserAnswers } = useContext(AnswerContext);

  function updateData(event: React.ChangeEvent<HTMLSelectElement>) {
    setData(event.target.value);
    setUserAnswers((prevAnswers: string[]) => {
      const answer = event.target.value;
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[2] = answer;
      return updatedAnswers;
    });
    console.log(userAnswers);
  }

  return (
    <div>
      <Form.Group controlId="userData">
        <Form.Label>
          What is the highest education you have completed?
        </Form.Label>
        <br></br>
        <Form.Select value={data} onChange={updateData}>
          <option value="NA">Select an option</option>
          <option value="middleSchool">Middle School</option>
          <option value="highSchool">High School</option>
          <option value="associate">Associate Degree</option>
          <option value="bachelor">Bachelor's Degree</option>
          <option value="master">Master's Degree</option>
          <option value="doctor">Doctoral Degree</option>
        </Form.Select>
      </Form.Group>
    </div>
  );
}
