import { useState } from 'react';
import '../App.css';
import {Button} from "react-bootstrap";
import {Q1} from "../BasicQuestions/Q1";
import {Q2} from "../BasicQuestions/Q2";
import {Q3} from "../BasicQuestions/Q3";
import {Q4} from "../BasicQuestions/Q4";
import {Q5} from "../BasicQuestions/Q5";
import {Q6} from "../BasicQuestions/Q6";
import {Q7} from "../BasicQuestions/Q7";
import {Q8} from "../BasicQuestions/Q8";
import { Footer } from "../components/Footer";



function Basic_Questions(): JSX.Element {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questions = [<Q1 />, <Q2 />, <Q3 />, <Q4 />, <Q5 />, <Q6 />, <Q7 />, <Q8 />];

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
      </div>

      <footer style={{ gridRow: '3 / 4', width: '100%' }} className='Footer'>
        <Footer />
      </footer>
    </div>
  );
}

export default Basic_Questions;
