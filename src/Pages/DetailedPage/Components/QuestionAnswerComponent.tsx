import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Question, placeholders } from "./DetailedPage-interface";
import "./QuestionAnswerComponent.css";

export function QuestionAnswer(): React.JSX.Element {
  const [q, setQuestion] = useState<number>(1);
  return (
    <div className="question-component">
      <div className="question-component--content">
        <h2 id="question-number"> {`Question ${q}.`}</h2>
        <h3>{ placeholders[q].name}</h3> 
        {placeholders[q].type === "radio"
          ? placeholders[q].options.map((question: string) => (
              <Form.Check
                inline
                type="radio"
                name="response"
                label={question}
              />
            ))
          : "radio"}
        <div>
          <Button onClick={() => setQuestion(q - 1)}> back </Button>
          <Button onClick={() => setQuestion(q + 1)}> forward </Button>
        </div>
      </div>
    </div>
  );
}
