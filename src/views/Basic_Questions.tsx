import React, { useState } from 'react';
import { Button } from "react-bootstrap";
import { Q1 } from "../BasicQuestions/Q1";
import { Q2 } from "../BasicQuestions/Q2";
import { Q3 } from "../BasicQuestions/Q3";
import { Q4 } from "../BasicQuestions/Q4";
import { Q5 } from "../BasicQuestions/Q5";
import { Q6 } from "../BasicQuestions/Q6";
import { Q7 } from "../BasicQuestions/Q7";
import { Q8 } from "../BasicQuestions/Q8";
import { Footer } from "../components/Footer";

function Basic_Questions(): JSX.Element {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questions = [<Q1 />, <Q2 />, <Q3 />, <Q4 />, <Q5 />, <Q6 />, <Q7 />, <Q8 />];
  const totalQuestions = questions.length;

  const handleNextClick = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  return (
    <div style={{ position: 'relative', top: '200px' }} className="App">
      <h1 className="Basic_Question">Basic Questions</h1>
      <progress value={progress} max="100" style={{ width: '100%' }} />
      <br />
      {questions[currentQuestion]}
      <Button size="sm" variant="primary" onClick={handlePrevClick} disabled={currentQuestion === 0}>
        Previous
      </Button>
      <Button size="sm" variant="primary" onClick={handleNextClick} disabled={currentQuestion === totalQuestions - 1}>
        Next
      </Button>
      <Footer />
    </div>
  );
}

export default Basic_Questions;