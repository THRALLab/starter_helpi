import React, { useState, useEffect } from 'react';
import { Button, ProgressBar } from 'react-bootstrap';
import brainIcon from './modifiedBrainIcon.svg';
import './Pages.css';
import './questions.css';

interface DetailedProp {
  handlePage: (page: string, data?: string) => void;
}

interface ShortAnswerQuestion {
  question: string;
  answer: string;
}

const Detailed: React.FC<DetailedProp> = ({ handlePage }) => {
  const [questions, setQuestions] = useState<ShortAnswerQuestion[]>([
    { question: "Do you enjoy being a leader in the workplace?", answer: "" },
    { question: "How significant is the opportunity to be creative and have passion within your work?", answer: "" },
    { question: "How easily do you adapt to changes in your work environment and job responsibilities?", answer: "" },
    { question: "How important is it for you to make a measurable and meaningful impact through your work?", answer: "" },
    { question: "How important is collaborative learning in your professional development?", answer: "" },
    { question: "How significant is a structured and consistent routine within your workplace to your overall job satisfaction and productivity?", answer: "" },
    { question: "Do you prefer an office environment or an environment that is frequently changing?", answer: "" }
  ]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => Math.min(questions.length - 1, prevIndex + 1));
  };

  const handleAnswerChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestionIndex].answer = event.target.value;
    setQuestions(updatedQuestions);
  };

  const generateQuestionsAndAnswers = (questions: ShortAnswerQuestion[]) => {
    return questions.map((q, index) => {
      return `Question ${index + 1}: ${q.question}\nAnswer ${index + 1}: ${q.answer}`;
    }).join('\n');
  }

  const handleFormSubmit = () => {
    const compiledAnswers = generateQuestionsAndAnswers(questions);
    console.log("Submitted answers:", compiledAnswers);
    handlePage('Results', compiledAnswers);
  };

  useEffect(() => {
    // Do something on question change if needed
  }, [currentQuestionIndex]);

  const totalQuestions = questions.length;
  const answeredQuestions = questions.filter((q) => q.answer.trim() !== "").length;
  const progressPercentage: number = (answeredQuestions / totalQuestions) * 100;

  return (
    <div>
      <header />
      <div className="progressBarContainer">
        <ProgressBar className="progressBar" now={progressPercentage} label={`${Math.round(progressPercentage)}%`} />
        <img src={brainIcon} alt="Brain Icon" className="brain-progress-icon" style={{ left: `${progressPercentage + 0.5}%` }} />
      </div>
      <Button className="basic-switch" onClick={() => handlePage('Basic')}>Basic</Button>
      <div className="column">
        <h3 className="question">{questions[currentQuestionIndex].question}</h3>
        <div className="questionContainer">
          <textarea
            style={{ width: "100%", minHeight: "200px", marginBottom: "50px", minWidth: "500px", marginTop: "50px" }} // Adjust width and height as needed
            value={questions[currentQuestionIndex].answer}
            onChange={handleAnswerChange}
            placeholder="Type your answer here..." />
        </div>
        <div className="navigationButtons" style={{ marginBottom: "10px" }}>
          <Button onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>Previous</Button>
          <Button onClick={handleNextQuestion} style={{ marginLeft: "10px", marginRight: "10px" }}>Next</Button>
          {answeredQuestions === totalQuestions && (
            <Button onClick={handleFormSubmit} style={{ marginLeft: "10px" }}>Submit</Button>
          )}
        </div>
      </div>
      <footer className="footer-space"></footer>
    </div>
  );
};

export default Detailed;