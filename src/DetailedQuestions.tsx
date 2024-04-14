import React, { useState, useEffect } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './General.css';
import './DetailedQuestions.css';
import LinkButton from './LinkButton';
import SliderQuestion from './SliderQuestion'
import { DarkModeToggle, bodyClassName } from './DarkModeToggle';
import jsonData from './DetailedQuestions.json';

interface DetailedQuestion{
  num: number;
  question: string;
}

//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

function DetailedQuestions() {
  const [key, setKey] = useState<string>(keyData); //for api key input
  let slidenums = new Array<number>(30);
  const [sliderValues, setSliderValues] = useState<number[]>(slidenums.map((x)=>x=50));
  const [currSliderValue, setCurrSliderValue] = useState<number>(50);
  const [questions, setQuestions] = useState<DetailedQuestion[]>([]);
  const [numberOfQuestions, setNumberOfQuestions] = useState(15)
  const [questionNumber, setQuestionNumber] = useState(0)
  const [questionBody, setQuestionBody] = useState("Question...")
  //const [numberOfQuestions] = useState("10")
  //const [questionNumber, setQuestionNumber] = useState("1")
  const [color, setColor] = useState("")

  const colors = ["red", "orange", "green", "blue", "purple", "pink", "brown"]

  useEffect(() => {
    loadQuestions()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadQuestions = () => {
    const parsedData = JSON.parse(JSON.stringify(jsonData));
    const detailedQuestions: DetailedQuestion[] = parsedData.DETAILED_QUESTIONS;
    setQuestions(detailedQuestions)
    setNumberOfQuestions(detailedQuestions.length)
    setQuestionNumber(questionNumber + 1)
    setColor(colors[Math.floor(Math.random() * colors.length)])
    setQuestionBody(detailedQuestions[questionNumber].question)
  }

  const nextQuestion = () => {
    let tempSliderValues = [...sliderValues];
    tempSliderValues[questionNumber] = currSliderValue;
    setSliderValues(()=> [...tempSliderValues])
    if (questionNumber < numberOfQuestions) {
      setQuestionNumber(questionNumber + 1)
      setColor(colors[Math.floor(Math.random() * colors.length)])
      setQuestionBody(questions[questionNumber].question)
    }  else {
      // End of quiz...
      window.alert("You've completed the Detailed Quiz!")
    }   
  }
  
  //sets the local storage item to the api key the user inputed
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
  }

  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }

  return (
    <div className={bodyClassName} id='bigBody'>
      <header className="General-header"><span className='Header-toggle'><DarkModeToggle></DarkModeToggle></span><span>The Career Lab </span><span className='Header-button'><LinkButton to="/" label="Home"></LinkButton></span> </header>
      
      <div className='Page-body'>
        <Button onClick={()=>nextQuestion()}>Next</Button>
        <p className='Detailed-report-button'><LinkButton to="/detailedreport" label="Report"></LinkButton></p>
        <Container>
          <Row>
            <Col className="DetailedQuestions-questions">
              <SliderQuestion value={currSliderValue} onChange={setCurrSliderValue} label={"Question "+questionNumber+":"} question={questionBody}></SliderQuestion>
            </Col>
            <Col>
              <div className = "DetailedQuestions-progress-bar" style={{backgroundColor: color}}>
                <span className = "DetailedQuestions-question-number">Question {questionNumber}/{numberOfQuestions}</span>
                <span className = "DetailedQuestions-progress-bar-percentage">
                  {Math.trunc(100 * (questionNumber / numberOfQuestions))}% completed
                </span>
                <span className = "DetailedQuestions-progress-bar-foreground" style={{height: `${(100 * (questionNumber / numberOfQuestions))}%`, backgroundColor: "rgba(0, 0, 0, 0.3)"}}></span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className='API-Footer'>
        <Form>
          <Form.Label>API Key:</Form.Label>
          <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
          <br></br>
          <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
        </Form>
      </div>
    </div>
  );
}
export default DetailedQuestions;