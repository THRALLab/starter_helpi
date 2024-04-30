import React, { useState, useContext } from "react";
import { Form } from "react-bootstrap";
import { AnswerContext } from "../AnswerContext";

export function Q4(): JSX.Element {
  const [ethnic, setEthnic] = useState<string>("NA");
  const { userAnswers, setUserAnswers } = useContext(AnswerContext);

  function updateEthnic(event: React.ChangeEvent<HTMLSelectElement>) {
    setEthnic(event.target.value);
    setUserAnswers((prevAnswers: string[]) => {
      const answer = event.target.value;
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[3] = answer;
      return updatedAnswers;
    });
    console.log(userAnswers);
  }

  return (
    <div>
      <Form.Group controlId="userEthnicities">
        <Form.Label>What is your race/ethnicity?</Form.Label>
        <br></br>
        <Form.Select value={ethnic} onChange={updateEthnic}>
          <option value="NA">Select an option</option>
          <option value="AmericanIndianOrAlaskaNative">
            American Indian or Alaska Native
          </option>
          <option value="Black">Black</option>
          <option value="NativeHawaiian">Native Hawaiian</option>
          <option value="Latino">Hispanic or Latino</option>
          <option value="White">White</option>
          <option value="TwoOrMore">Two or More</option>
        </Form.Select>
      </Form.Group>
    </div>
  );
}
