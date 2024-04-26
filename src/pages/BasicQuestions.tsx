import "../App";
import "../styles/BasicQuestions.css";
import NavigationBar from "../components/NavigationBar";
import QuestionCard from "../components/QuestionCard";
import { useState } from "react";
import React from "react";

// Define an array of question objects
const questions = [
  {
    question: "Which of the following industries interests you the most: technology, healthcare, finance, or creative arts?",
    choices: ["Technology", "Healthcare", "Finance", "Creative arts", "Other (please specify)"]
  },
  {
    question: "Do you prefer working independently or as part of a team?",
    choices: ["Independently", "Part of a team", "Both, depending on the situation", "Other (please specify)"]
  },
  {
    question: "Are you more interested in technical roles, creative roles, or leadership positions?",
    choices: ["Technical roles", "Creative roles", "Leadership positions", "Other (please specify)"]
  },
  {
    question: "Would you rather work in a fast-paced, dynamic environment or a stable, predictable one?",
    choices: ["Fast-paced, dynamic environment", "Stable, predictable environment", "Both, depending on the situation", "Other (please specify)"]
  },
  {
    question: "Do you enjoy solving complex problems, working with people, or managing projects?",
    choices: ["Solving complex problems", "Working with people", "Managing projects", "Other (please specify)"]
  },
  {
    question: "Which of the following work settings appeals to you: office, remote, or hybrid?",
    choices: ["Office", "Remote", "Hybrid (combination of office and remote)", "Other (please specify)"]
  },
  {
    question: "Are you interested in pursuing further education or training in your career field?",
    choices: ["Yes, definitely", "Maybe, if it's necessary for my career goals", "No, I prefer on-the-job learning and experience", "Other (please specify)"]
  },
  {
    question: "Do you value job security and stability over potential for growth and advancement?",
    choices: ["Job security and stability", "Potential for growth and advancement", "Both are equally important", "Other (please specify)"]
  },
  {
    question: "What level of responsibility are you comfortable with in a professional role?",
    choices: ["Entry-level tasks and responsibilities", "Mid-level tasks and responsibilities", "Senior-level tasks", "Other (please specify)"]
  }
];


export function BasicQuestions() {
  // State to track completion status
  const [completed, setCompleted] = useState(false);

  // Callback function to handle completion
  const handleCompletion = () => {
    setCompleted(true);
  };

  return (
    <div className="basic-questions-page">
      <NavigationBar />
      <h1 className="basic-q-title">Basic Question Career Quiz</h1>
      {/* Render QuestionCard only if not completed */}
      {!completed && <QuestionCard questions={questions} onCompletion={handleCompletion} />}
      {/* Render completion message if completed */}
      {completed && <p style={{ fontSize: '24px' }}>You have completed the quiz!</p>}
    </div>
  );
}

export default BasicQuestions;
