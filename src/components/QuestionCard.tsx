import React, { useState } from "react";
import MultipleChoiceQuestion from "../question-format-components/MultipleChoiceQuestion";
import ProgressBar from "./progressBar";
import "../styles/QuestionCard.css";

interface QuestionCardProps {
  questions: {
    questionType: "Multiple Choice" | "Open Response";
    question: string;
    choices: string[];
    otherOptionIndex?: number;
  }[];
}

interface ApiAnswer {
  question: string;
  answer: string | null;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(string | null)[]>(
    Array(questions.length).fill(null)
  );
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleAnswerQuestion = (choice: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = choice;
    setAnswers(newAnswers);
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // If it's the last question, submit the answers
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
    // Prepare the API answers object
    const apiAnswers: ApiAnswer[] = questions.map((value, index) => ({
      question: value.question,
      answer: answers[index],
    }));
    console.log("Submitted answers:", apiAnswers);
  };

  // Extract otherOptionIndex from questions
  const otherOptionIndex = questions[currentQuestion].otherOptionIndex;

  return (
    <div className="question-card">
      <h2>{questions[currentQuestion].question}</h2>
      <MultipleChoiceQuestion
        choices={questions[currentQuestion].choices}
        selectedChoice={answers[currentQuestion] || ""}
        onSelectChoice={handleAnswerQuestion}
        otherOptionIndex={otherOptionIndex}
        disabled={submitted}
      />
      <ProgressBar
        totalQuestions={questions.length}
        answeredQuestions={answers.filter((value) => value !== null).length}
      />
      <div className="navigation">
        <button
          className="prev-btn btn"
          onClick={prevQuestion}
          disabled={currentQuestion === 0 || submitted}
        >
          Previous
        </button>
        <button
          className="next-btn btn"
          onClick={nextQuestion}
          disabled={submitted}
        >
          {currentQuestion === questions.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;
