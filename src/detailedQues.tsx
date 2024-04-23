import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const Question = [
  "What are your top 5 skills?",
  "What are your main goals for your career and how do you plan to achieve them?",
  "What aspects of your current job do you find most fulfilling? Why?",
  "What aspects of your current job or experience do you find most challenging? Why?",
  "How important is it that your career has an impact on society?",
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
    setQIndex((prevIndex) => (prevIndex + 1) % Question.length); // Loops back to first at the end
  };

  const prevQuestion = () => {
    setQIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : Question.length - 1
    ); // Loops back to last at the start
  };
  const [progress, setProgress] = useState(0);
  const handleButtonClick = () => {
    if (progress < 99) {
      setProgress(progress + 20);
    }
  };

  const handlePrevious = () => {
    if (progress > 0) {
      setProgress(progress - 20);
    }
  };
  const getColor = () => {
    if (progress < 40) {
      return "#ff0000";
    } else if (progress < 70) {
      return "#ffa500";
    } else {
      return "#2eec71";
    }
  };
  function handleNext() {
    handleButtonClick();
    nextQuestion();
  }
  function handlePrev() {
    handlePrevious();
    prevQuestion();
  }
  return (
    <div>
      <Form>
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
              fontSize: "30px", // Added px for fontSize
            }}
          />
        </Form.Group>
        <div style={{ textAlign: "center", margin: "20px" }}>
          <Button
            onClick={handlePrev}
            disabled={qIndex === 0}
            className="button"
            style={{
              marginRight: "20px", // Adjusted right to marginRight for proper CSS in React
            }}
          >
            Previous
          </Button>
          <Button
            onClick={handleNext}
            disabled={qIndex === Question.length - 1}
            className="button"
            style={{
              marginLeft: "20px", // Adjusted left to marginLeft for proper CSS in React
            }}
          >
            Next
          </Button>
        </div>
        <div className="container">
          <div className="progress-bar">
            <div
              className="progress-bar-fill"
              style={{ width: `${progress}%`, backgroundColor: getColor() }}
            ></div>
          </div>
          <div className="progress-label">{progress}%</div>
          {/* <button onClick={handleButtonClick}>Progress</button>
          {<button onClick={handlePrevious}>Previous</button>} */}
        </div>
      </Form>
    </div>
  );
}
