
import React, { useState } from "react";
import { Form, ProgressBar } from "react-bootstrap";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { HashRouter as Router, Link } from 'react-router-dom';
import './App.css';
//Radio Button options
const OPTIONS = [
  "Disagree",
  "Slightly Disagree",
  "Neutral",
  "Slightly Agree",
  "Agree"
]
//list of questions for basic question page
const QUESTIONS = [
  "I like creative subjects more then STEM subjects",
  "I am comfortable leading a team of people or giving orders to others",
  "I would prefer not to be behind a desk for the majority of my job",
  "I would prefer it if my work tasks varied on a day to day basis",
  "I want a hard seperation between work and home life",
  "I hope to climb the corporate ladder in one company as opposed to jumping between jobs",
  "I like needing to learn new skills to be efficient at my job",
  "I prefer working in a group setting compared to independently",
  "I value making money more then fulfillment in my job",
  "I would like it if travel was a large part of my job"
]
const BasicQuestions: React.FC = () => {
  const [chosenOption, setChosenOption] = useState<Array<string | null>>(Array(QUESTIONS.length).fill(null));
  function updateOption(event: React.ChangeEvent<HTMLInputElement>, index: number) {
    const newOptions = [...chosenOption];
    newOptions[index] = event.target.value;
    setChosenOption(newOptions);
  }
  
  const progress = (chosenOption.filter(option => option !== null).length / QUESTIONS.length) * 100;
  const allQuestionsAnswered = chosenOption.every(option => option != null);

  
  return (
      <div>
      <ProgressBar now={progress} label={`${progress.toFixed(0)}%`} />
        <h1>
          Basic Career Aptitude Test
          <div>
             <Link to = '/'>
               <button>Return to Home Page</button>
             </Link>
          </div>
        </h1>
        <p>
          Answer the following questions to the best of your ability. Then we will 
          then we will use your answers to determine possible career paths for you.
        </p>
        <div className = "basic-question-container">
          {QUESTIONS.map((question, index) => (
            <div key={question} className = "question-container">
              <div className = "question_two">{question}</div>
              <div className = "options-container">
              {OPTIONS.map((option) => (
                <Form.Check
                    key={ option }
                    style={{ marginRight: "10px"}}
                    inline
                    type="radio"
                    name={ `option-${question}` }
                    onChange={ (e) => updateOption(e, index) }
                    id={ `option-select-${option}-${question}` }
                    label={ option }
                    value={ option }
                    checked={ chosenOption[index] === option }
                    className={chosenOption[index] === option ? "option-selected" : ""}
                    />
              ))}
              </div>
            </div>
          ))}
        </div>
      {allQuestionsAnswered ? <p>Thank you for taking the time to answer the above questions! Press the below button to see results</p>: <p></p>}
          <button disabled={!allQuestionsAnswered}>See Results</button>
      </div>
  );
}

export default BasicQuestions;
