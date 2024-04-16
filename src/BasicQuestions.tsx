import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';


const OPTIONS = [
  "Disagree",
  "Slightly Disagree",
  "Neutral",
  "Slightly Agree",
  "Agree"
]
const QUESTIONS = [
  "I am more creative subjects more then STEM subjects",
  "I am comfortable leading a team of people or giving orders to others",
  "I would prefer not to be behind a desk for the majority of my job",
  "I would prefer it if my work tasks varied on a day to day basis",
  "I want a hard seperation between work and home life",
  "I hope to climb the corporate ladder in one company as opposed to jumping between jobs",
  "I like needing to learn new skills to be efficient at my job",
  "I prefer working in a group setting compared to independently",
  "Making money is more valuable to me then finding enjoyment in my job",
  "I would like it if travel was a large part of my job"
]

const BasicQuestions: React.FC = () => {
  const [chosenOption, setChosenOption] = useState<Array<string | null[]>>(Array(QUESTIONS.length).fill(null));
  const page = App();
  function updateOption(event: React.ChangeEvent<HTMLInputElement>, index: number) {
    const newOptions = [...chosenOption];
    newOptions[index] = event.target.value;
    setChosenOption(newOptions);
  }
  return (
      <div>
        <h2>
          Basic Career Aptitude Test
          <div>
            <Link to='/'>
              <button>Return to Home Page</button>
            </Link>
          </div>
        </h2>
        <p>
          Answer the following questions to the best of your ability. Then we will 
          then we will use your answers to determine possible career paths for you.
        </p>
        <div>
          {QUESTIONS.map((question, index) => (
            <div key={question} style={{ marginBottom: "20px" }}>
              <div>{question}</div>
              <div style={{ display: "flex", justifyContent: "center" }}>
              {OPTIONS.map((option) => (
                <Form.Check
                    key={ option }
                    style={{ marginRight: "10px" }}
                    inline
                    type="radio"
                    name={ `option-${question}` }
                    onChange={ (e) => updateOption(e, index) }
                    id={ `option-select-${option}-${question}` }
                    label={ option }
                    value={ option }
                    checked={ chosenOption[index] === option }
                    />
              ))}
              </div>
            </div>
          ))}
        </div>
      <p>Thank you for taking the time to answer the above questions! Press the below button to see results</p>

      </div>
  );
}

export default BasicQuestions;
