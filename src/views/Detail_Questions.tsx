import React, { useState } from 'react';
import { Button } from "react-bootstrap";
import { Q1 } from "../DetailQuestions/Q1";
import { Q2 } from "../DetailQuestions/Q2";
import { Q3 } from "../DetailQuestions/Q3";
import { Q4 } from "../DetailQuestions/Q4";
import { Q5 } from "../DetailQuestions/Q5";
import { Q6 } from "../DetailQuestions/Q6";
import { Q7 } from "../DetailQuestions/Q7";
import { Footer } from "../components/Footer";

function Detail_Questions(): JSX.Element {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questions = [<Q1 />, <Q2 />, <Q3 />, <Q4 />, <Q5 />, <Q6 />, <Q7 />,];
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
      <h1 className="Detail_Questions">Detail Questions</h1>
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

export default Detail_Questions;
