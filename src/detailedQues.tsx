import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Quizzes.css";
import Rocket from "./Rocket16.jpg";
import Chat from "./openai";

const Question = [
  "What are your top 5 skills?",
  "What are your main goals for your career and how do you plan to achieve them?",
  "What aspects of your current job do you find most fulfilling? Why?",
  "What aspects of your current job or experience do you find most challenging? Why?",
  "How important is it that your career has an impact on society?",
  "What skills do you believe are essential for success in your field, and which of these skills would you like to develop further?",
  "What role does teamwork play in your current job, and how do you contribute to a positive team environment?",
];
interface career {
  changeTab: (career: string) => void;
  careers: string[];
  setCareers: (career: string[]) => void;
}
const QUIZKEY2 = "quiz2";
export function DetailedQues({
  changeTab,
  careers,
  setCareers,
}: career): JSX.Element {
  const [visible, setVisible] = useState<boolean>(true);
  const [qIndex, setQIndex] = useState(0); // Tracks the current question index
  const [answers, setAnswers] = useState<string[]>(
    new Array(Question.length).fill("")
  );
  const [rocketPosition, setRocketPosition] = useState(0); // Tracks the rocket position
  const [progress, setProgress] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newAnswers = [...answers];
    newAnswers[qIndex] = event.target.value;
    setAnswers(newAnswers);
  };

  const nextQuestion = () => {
    setQIndex((prevIndex) => (prevIndex + 1) % Question.length); // Loops back to first at the end
    setRocketPosition(0); // Reset rocket position
  };

  const prevQuestion = () => {
    setQIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : Question.length - 1
    ); // Loops back to last at the start
    setRocketPosition(0); // Reset rocket position
  };

  const handleNextClick = () => {
    if (progress < 100) {
      setProgress(progress + 20);
      setRocketPosition(progress + 20); // Adjust rocket position based on progress
    }
  };

  const handlePreviousClick = () => {
    if (progress > 0) {
      setProgress(progress - 20);
      setRocketPosition(progress - 20); // Adjust rocket position based on progress
    }
  };
  function handleNext() {
    const error = "You need at least 20 characters";
    setVisible(!visible);
    if (answers[qIndex].length < 20) {
      setErrorMessage(error);
      return false;
    } else {
      setErrorMessage("");
      handleNextClick();
      nextQuestion();
      setRocketPosition(progress + 20); // Move the rocket forward based on progress
      return true;
    }
  }

  function handlePrev() {
    handlePreviousClick();
    prevQuestion();
    setRocketPosition(progress - 20); // Set rocket position based on progress for the previous question
  }

  function saveData() {
    const final = Question.map((Question, index) => ({
      question: Question,
      answer: answers[index],
    }));
    localStorage.setItem(QUIZKEY2, JSON.stringify(final));
    console.log(JSON.parse(localStorage.getItem(QUIZKEY2)!));
  }

  const getColor = () => {
    return "#7a2048";
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
          required
          onChange={handleInputChange}
          style={{
            margin: "20px auto",
            height: "200px",
            width: "700px",
            border: "1px solid gray",
            background: "black",
            color: "white",
            fontSize: "17px",
          }}
        />
      </Form.Group>
      <Button onClick={handlePrev} disabled={qIndex === 0} className="button">
        Previous
      </Button>
      {qIndex === Question.length - 1 && answers[qIndex].length > 20 ? (
        <Chat
          questionAndAnswer={QUIZKEY2}
          onSaveData={saveData}
          setChangeTab={changeTab}
          careers={careers}
          setCareers={setCareers}
        ></Chat>
      ) : (
        <Button
          onClick={handleNext}
          disabled={qIndex === Question.length - 1}
          className="button"
          style={{
            left: "20px",
            margin: "24px auto",
          }}
        >
          Next
        </Button>
      )}
      {!visible && errorMessage && (
        <div style={{ color: "red", textAlign: "center", marginTop: "10px" }}>
          {errorMessage}
        </div>
      )}
      <div className="container">
        <div className="progress-bar">
          <div
            className="progress-bar-fill"
            style={{ width: `${progress}%`, backgroundColor: getColor() }}
          ></div>
        </div>
        <div className="progress-label">{progress}%</div>
      </div>
      <div className="rocket-container">
        <img
          src={Rocket}
          alt="Rocket"
          className="rocket"
          style={{ left: `${rocketPosition}%` }}
        />
      </div>
    </div>
  );
}
