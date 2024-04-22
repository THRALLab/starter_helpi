import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
const Question = [
  "What are your top 5 skills?",
  "What are your main goals for your career and how do you plan to achieve them?",
  "What aspects of your current job do you find most fulfilling? Why?",
  "What aspects of your current job or experience do you find most challenging? Why?",
  "How important is it that your career has an impact on society?",
  "What skills do you believe are essential for success in your field, and which of these skills would you like to develop further?",
  "What skills do you believe are essential for success in your field, and which of these skills would you like to develop further?",
];

export function DetailedQues(): JSX.Element {
  const [qIndex, setQIndex] = useState(0); // Tracks the current question index
  const [answers, setAnswers] = useState<string[]>(
    new Array(Question.length).fill("")
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newAnswers = [...answers];
    newAnswers[qIndex] = event.target.value;
    setAnswers(newAnswers);
  };

  const nextQuestion = () => {
    setQIndex(qIndex + 1); // Loop back to first at end
  };

  const prevQuestion = () => {
    setQIndex(qIndex - 1); // Loop back to last at start
  };

  return (
    <div>
      <Form.Group controlId={`Question-${qIndex}`}>
        <Form.Label
          style={{
            display: "block",
            marginBottom: "10px",
            color: "white",
            fontSize: "25px",
            textAlign: "center",
            margin: "0 auto",
            maxWidth: "80%",
          }}
        >
          {Question[qIndex]}
        </Form.Label>
        <Form.Control
          as="textarea"
          value={answers[qIndex]}
          onChange={handleInputChange}
          style={{
            margin: "20px auto",
            height: "200px",
            width: "700px",
            border: "1px solid gray",
            backgroundColor: "#1e2761",
            color: "white",
            fontSize: "30",
          }}
        />
      </Form.Group>
      <Button
        onClick={prevQuestion}
        disabled={qIndex === 0}
        className="button"
        style={{
          right: "20px",
        }}
      >
        Previous
      </Button>
      <Button
        onClick={nextQuestion}
        disabled={qIndex === Question.length - 1}
        className="button"
        style={{
          left: "20px",
          margin: "24px auto",
        }}
      >
        Next
      </Button>
    </div>
  );
}
