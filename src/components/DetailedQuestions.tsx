import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./DetailedQuestions.css";

export function DetailedQuestions({
  question,
  questionNumber,
  image,
  currentQuestion,
  updateNumAnswered,
  updateResultArray,
}: {
  question: string;
  questionNumber: number;
  currentQuestion: number;
  image: string;
  updateNumAnswered: (value: number) => void;
  updateResultArray: (value: string, num: number) => void;
}): JSX.Element {
  const [input, setInput] = useState<string>("");
  const [alreadyAnswered, setAlreadyAnswered] = useState<boolean>(false);
  function updateInput(event: React.ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value);
    updateResultArray(input, questionNumber);
    if (alreadyAnswered && event.target.value === "") {
      setAlreadyAnswered(false);
      updateNumAnswered(-10);
    } else if (!alreadyAnswered) {
      setAlreadyAnswered(true);
      updateNumAnswered(10);
    }
  }
  return (
    <div>
      {questionNumber !== currentQuestion ? (
        ""
      ) : (
        <div className="quiz-box">
          <p className="question-p">
            Question {questionNumber}: {question}
          </p>

          <img src={image} className="detailedQ-img" alt="questionImg"></img>

          <Form.Group controlId="checkInput">
            <Form.Control
              placeholder="Write Your Answer Here"
              type="text"
              value={input}
              hidden={questionNumber !== currentQuestion}
              onChange={updateInput}
              className="textbox"
            />
          </Form.Group>
        </div>
      )}
    </div>
  );
}
