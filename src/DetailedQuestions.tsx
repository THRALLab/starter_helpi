import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './General.css';
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

    const [numberOfQuestions, setNumberOfQuestions] = useState("10")
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
      <header className="General-header"><p className='Header-toggle'><DarkModeToggle></DarkModeToggle></p><p>The Career Lab </p><p className='Header-button'><LinkButton to="/" label="Home"></LinkButton></p> </header>
      <header className="DetailedQuestions-header">
        <div className='Page-body'>
        <div>
          <label>Number of Questions:</label><br />
          <input type="text" value={numberOfQuestions} onChange={(q) => setNumberOfQuestions(q.target.value)} /><br />
          <label>Question Number:</label><br />
          <input type="text" value={questionNumber} onChange={(q) => setQuestionNumber(q.target.value)} /><br />
          <label>Question:</label><br />
          
          <Button onClick={generateSimpleQuestionPage}>Generate Detailed Question Page</Button> <br />
          <Button onClick={()=>setQuestionNumber((parseInt(questionNumber)+1).toString())}>Next</Button> <br />
        </div>
          <SliderQuestion value={sliderValue1} onChange={setSliderValue1} label="Question 1:" question="I am a hard worker"></SliderQuestion>

          <SliderQuestion value={sliderValue2} onChange={setSliderValue2} label="Question 2:" question=""></SliderQuestion>
        </div>
      </header>
      <div style={{ padding: "10px" }}>
          <div style={{ backgroundColor: color, color: "white", padding: "10px", position: "relative", display: "flex" }}>
            <div style={{ position: "absolute", top: 0, left: 0, width: `${100 * (parseInt(questionNumber) / parseInt(numberOfQuestions))}%`, height: "100%", backgroundColor: "rgba(0, 0, 0, 0.3)" }}></div>
              Question {questionNumber}/{numberOfQuestions}
            <div style={{ marginLeft: "auto", alignSelf: "right" }}>
              {100 * (parseInt(questionNumber) / parseInt(numberOfQuestions))}% completed
            </div>
          </div>
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