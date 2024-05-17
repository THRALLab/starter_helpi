/* Imports */
import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import "./App.css";

interface Props {
  onChange: (key: string, value: string) => void;
  onSubmit: () => void;
}



/* Basic Quiz Questions and Answer Choices */
const questions = [
  "Q1: Do you enjoy working with your hands?",
  "Q2: Are you interested in technology?",
  "Q3: Do you like solving puzzles or problems?",
  "Q4: Do you prefer working alone or in a team?",
  "Q5: Do you enjoy being creative?",
  "Q6: Are you good at analyzing data or information?",
  "Q7: Do you have clear goals for your future career?"
];

const answerChoices = [
  ["Yes", "No"],
  ["Yes", "No"],
  ["Yes", "Sometimes", "No"],
  ["Alone", "With Others"],
  ["Yes", "No"],
  ["Yes", "No"],
  ["Yes", "No"]
];



/* Consts for Quiz Question Rendering, Answer Changes, Previous/Next Buttons, and Submit Button */
function Questions({ onChange, onSubmit }: Props) {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [answers, setAnswers] = useState<string[]>(new Array(questions.length).fill(""));
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const answeredQuestions = answers.filter(answer => answer !== "").length;
    const newProgress = (answeredQuestions / questions.length) * 100;
    setProgress(newProgress);
  }, [answers]);

  const handleAnswerChange = (value: string) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = value;
    setAnswers(updatedAnswers);
    onChange(`answer${currentQuestion + 1}`, value);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    const allQuestionsAnswered = answers.every(answer => answer !== "");
    if (allQuestionsAnswered) {
        onSubmit();
    } else {
        alert('Please answer all questions before submitting.');
    }
  };



/* Return Statments for Progress Bar Logic, Previous/Next Buttons, and Radio Buttons */
  return (
    <div className="progress-bar-wrapper">
      <div className="progress-bar-container">
        <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
        <p className="question">{questions[currentQuestion]}</p>
        <div>
          {answerChoices[currentQuestion].map((choice, index) => (
            <Form.Check
              key={index}
              type="radio"
              onChange={() => handleAnswerChange(choice)}
              label={choice}
              value={choice}
              checked={answers[currentQuestion] === choice}
              className={`custom-radio custom-radio-${index}`}
            />
          ))}
        </div>
        <div>
        <Button className="Button-previous" onClick={handlePrevious} disabled={currentQuestion === 0}>Previous</Button>
        <Button className="Button-next" onClick={handleNext} disabled={currentQuestion === questions.length - 1}>Next</Button>
        <Button
            className="Button-submit"
            onClick={handleSubmit}
            disabled={!answers.every(answer => answer !== "")}
            style={{ backgroundColor: answers.every(answer => answer !== "") ? '#7cc452' : '#ed5151' }}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Questions;