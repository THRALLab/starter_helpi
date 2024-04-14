import React, { useState } from 'react';
import '../App.css';
import {Button, Form} from "react-bootstrap";
import {Q1} from "../DetailQuestions/Q1";
import {Q2} from "../DetailQuestions/Q2";
import {Q3} from "../DetailQuestions/Q3";
import {Q4} from "../DetailQuestions/Q4";
import {Q5} from "../DetailQuestions/Q5";
import {Q6} from "../DetailQuestions/Q6";
import {Q7} from "../DetailQuestions/Q7";
import { Footer } from "../components/Footer";


function Detail_Questions(): JSX.Element {
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questions = [<Q1 />, <Q2 />, <Q3 />, <Q4 />, <Q5 />, <Q6 />, <Q7 />];

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

  return (
    <div style = {{position: 'relative', top: '100px'}}className="App">

      <h1 className="Detail_Question">Detail Questions</h1>
      <br></br>
      
      {questions[currentQuestion]}
      <br></br>
      <Button variant="primary" onClick={handlePrevClick} disabled={currentQuestion === 0}>
        Previous
      </Button>
      <Button variant="primary" onClick={handleNextClick} disabled={currentQuestion === questions.length - 1}>
        Next
      </Button>
      <br></br>

      <Footer/>
    </div>
  );
}

export default Detail_Questions;
