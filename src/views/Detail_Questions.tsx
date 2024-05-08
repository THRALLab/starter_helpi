import React, { useState, useEffect } from 'react';
import { Button } from "react-bootstrap";
import { Q1 } from "../DetailQuestions/Q1";
import { Q2 } from "../DetailQuestions/Q2";
import { Q3 } from "../DetailQuestions/Q3";
import { Q4 } from "../DetailQuestions/Q4";
import { Q5 } from "../DetailQuestions/Q5";
import { Q6 } from "../DetailQuestions/Q6";
import { Q7 } from "../DetailQuestions/Q7";

function Detail_Questions(): JSX.Element {
  const [currentQuestion, setCurrentQuestion] = useState(() => {
    const storedIndex = localStorage.getItem('currentQuestion');
    return storedIndex ? parseInt(storedIndex, 10) : 0;
  });

  const questions = [<Q1 />, <Q2 />, <Q3 />, <Q4 />, <Q5 />, <Q6 />, <Q7 />];

  const totalQuestions = questions.length;

  const handleNextClick = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  useEffect(() => {
    localStorage.setItem('currentQuestion', currentQuestion.toString());
  }, [currentQuestion]);

  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  return (
    <div style={{ display: 'grid', gridTemplateRows: '1fr auto', minHeight: '100vh' }} className="App">
      <br></br>

      <div style={{ gridRow: '1 / 2', border: '1px solid black', padding: '10px', maxWidth: '500px', margin: '0 auto' }}>
        {questions[currentQuestion]}
        <div style={{ gridRow: '2 / 3', display: 'flex', justifyContent: 'space-between', marginTop: 'auto' }}>
        <Button size="sm" variant="primary" onClick={handlePrevClick} disabled={currentQuestion === 0}>
          Previous
        </Button>
        <Button size="sm" variant="primary" onClick={handleNextClick} disabled={currentQuestion === questions.length - 1}>
          Next
        </Button>
      </div>
      <progress value={progress} max="100" style={{ width: '100%' }} />
      </div>

      
    </div>
  );
}

export default Detail_Questions;
