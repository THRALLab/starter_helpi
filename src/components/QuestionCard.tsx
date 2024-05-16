import "../styles/QuestionCard.css";
import MultipleChoiceQuestion from "../question-format-components/MultipleChoiceQuestion";
import OpenResponse from "../question-format-components/OpenResponse"; // Import the OpenResponse component
import { useState } from "react";
import ProgressBar from "./progressBar";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import OpenAI from "openai";
import { ChatCompletionMessageParam } from "openai/resources";

// The API object needed to do API calls which requires a working API key
export let openai: OpenAI;
export let apiQuestions: ChatCompletionMessageParam[];
export let userAnswers: ChatCompletionMessageParam[];

interface QuestionCardProps {
  questions: {
    photo: string;
    question: string;
    choices: string[];
  }[];
  onCompletion: () => void; // Add the onCompletion prop
  //imageSize: string; // Add imageSize prop
  // handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Add handleChange prop
}

export interface ApiAnswer {
  question: string;
  answer: string | null;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  questions,
  onCompletion,
  // handleChange,
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(string | null)[]>(
    Array(questions.length).fill(null)
  );
  const [submitted, setSubmitted] = useState(false);

  // State to track the number of answered questions
  const [, setAnsweredQuestions] = useState(0);

  // Function to handle answering a question
  const handleAnswerQuestion = () => {
    // Logic to handle answering the question
    // Increment the number of answered questions
    setAnsweredQuestions((prevCount) => prevCount + 1);
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleChoiceChange = (choice: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = choice;
    setAnswers(newAnswers);
    handleAnswerQuestion();
  };

  const handleSubmit = () => {
    setSubmitted(true);

    // You can handle the submission of answers here, for example, sending them to an API
    const saveAnswersKey = "apiAnswers";
    const previousData = localStorage.getItem(saveAnswersKey);
    localStorage.removeItem(saveAnswersKey);
    let apiAnswers: ApiAnswer[] = questions.map((value, index) => {
      return { question: value.question, answer: answers[index] };
    });

    let loadedData: ApiAnswer[] = previousData ? JSON.parse(previousData) : [];

    // If the data doesn't exist, `getItem` returns null
    if (previousData !== null) {
      loadedData = JSON.parse(previousData);
    }

    const isFirstQuizCompleted = loadedData.length === 9;

    if (!isFirstQuizCompleted) {
      // Store answers for the first quiz
      loadedData = apiAnswers;
    } else {
      // reset localStorage and then load data
      if (apiAnswers.length === 9) {
        loadedData = apiAnswers;
      } else {
        // Store answers for the second quiz
        loadedData = [...loadedData, ...apiAnswers];
      }
    }
    

    // Limit the total length to 16 elements
    if (loadedData.length > 16) {
      loadedData = loadedData.slice(0, 16);
    }

    localStorage.setItem(saveAnswersKey, JSON.stringify(loadedData));

    // Check if all questions are answered
    if (answers.every((answer) => answer !== null)) {
      onCompletion(); // Call the onCompletion function
    }
  };

  const allQuestionsAnswered = answers.every((answer) => answer !== null);

  return (
    <div className="question-card">
      <h2>{questions[currentQuestion].question}</h2>
      <Container>
        <Row>
          {/* Render the image in the first column */}
          {questions[currentQuestion].photo && (
            <Col className="image-column">
              <img
                src={questions[currentQuestion].photo}
                alt="Question"
                className="question-photo"
                style={{ width: 375, height: "auto" }}
              />
            </Col>
          )}
          <Col className="options-column">
            {/* Render answer choices in the second column */}
            {questions[currentQuestion].choices.length > 0 ? (
              <MultipleChoiceQuestion
                choices={questions[currentQuestion].choices}
                selectedChoice={answers[currentQuestion] || ""}
                onSelectChoice={handleChoiceChange}
                disabled={submitted}
                onAnswer={handleAnswerQuestion}
              />
            ) : (
              <OpenResponse
                value={answers[currentQuestion] || ""}
                onChange={(text) => {
                  const newAnswers = [...answers];
                  newAnswers[currentQuestion] = text;
                  setAnswers(newAnswers);
                  handleAnswerQuestion();
                }}
                className="textbox"
                disabled={submitted}
              />
            )}
          </Col>
        </Row>
      </Container>
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
          disabled={
            currentQuestion === questions.length - 1 ||
            submitted ||
            (questions[currentQuestion].choices.length > 0 &&
              answers[currentQuestion] === null) ||
            (questions[currentQuestion].choices.length === 0 &&
              (answers[currentQuestion] === null ||
                answers[currentQuestion] === ""))
          }
        >
          Next
        </button>
        <button
          className="submit-btn btn"
          onClick={handleSubmit}
          disabled={!allQuestionsAnswered || submitted}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;