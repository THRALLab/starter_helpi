import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './General.css';
import './DetailedQuestions.css';
import LinkButton from './LinkButton';
import SliderQuestion from './SliderQuestion'
import { DarkModeToggle, bodyClassName } from './DarkModeToggle';

//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

function DetailedQuestions() {
  const [key, setKey] = useState<string>(keyData); //for api key input
  const [sliderValue1, setSliderValue1] = useState<number>(50);
  const [sliderValue2, setSliderValue2] = useState<number>(50);

  //const [numberOfQuestions, setNumberOfQuestions] = useState("10")
  const [numberOfQuestions] = useState("10")
  const [questionNumber, setQuestionNumber] = useState("1")
  const [color, setColor] = useState("")

  const colors = ["red", "orange", "green", "blue", "purple", "pink", "brown"]
  
  const generateSimpleQuestionPage = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    setColor(randomColor);
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
        <Button onClick={generateSimpleQuestionPage}>Generate Detailed Question Page</Button>
        <Button onClick={()=>setQuestionNumber((parseInt(questionNumber)+1).toString())}>Next</Button>
        <p className='Detailed-report-button'><LinkButton to="/detailedreport" label="Report"></LinkButton></p>
        <Container>
          <Row>
            <Col className="DetailedQuestions-questions">
              <SliderQuestion value={sliderValue1} onChange={setSliderValue1} label="Question 1:" question="I am a hard worker"></SliderQuestion>
              <SliderQuestion value={sliderValue2} onChange={setSliderValue2} label="Question 2:" question="XYZ"></SliderQuestion>
            </Col>
            <Col>
              <div className = "DetailedQuestions-progress-bar" style={{backgroundColor: color}}>
                <span className = "DetailedQuestions-question-number">Question {questionNumber}/{numberOfQuestions}</span>
                <span className = "DetailedQuestions-progress-bar-percentage">
                  {100 * (parseInt(questionNumber) / parseInt(numberOfQuestions))}% completed
                </span>
                <span className = "DetailedQuestions-progress-bar-foreground" style={{height: `${(100 * (parseInt(questionNumber) / parseInt(numberOfQuestions)))}%`, backgroundColor: "rgba(0, 0, 0, 0.3)"}}></span>
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