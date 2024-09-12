import {Button, Form} from "react-bootstrap"
import React, { useState } from 'react';
import './App.css';
import BaseQsDes from './BaseAsk';
import DetailQsDes from './DetailAsk';
import Questions from './BasicQuestions'
import DetQuestions from './DetailedQuestions'
import timer from './Timer';
const Basictimer = new timer();
const DetailTimer = new timer();
//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
export let keyData = "";
export const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

function App() {
  const [key, setKey] = useState<string>(keyData); //for api key input
  
  //sets the local storage item to the api key the user inputed
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
  }

  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }

  const [showBasicQuestions, setShowBasicQuestions] = useState(false);

  const toggleBasicQuestions = () => {
    setShowBasicQuestions(!showBasicQuestions);
  };

  return (
    <div className="App">
      <div>
        <p>Liam Roth</p>
        <p>Ben Bank</p>
        <p>Xander Clawson</p>
      </div>
      <div>
        <a
          href="https://liamr-cs.github.io/career_helpi/"
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            border: '2px solid gray', 
            padding: '8px', 
            textDecoration: 'none', 
            color: 'black',
            fontSize: '18px'
          }}
        >
          Homepage
        </a>
      </div>
      <div>
        <h2>Basic Quiz Instructions:</h2>
      <BaseQsDes></BaseQsDes>
      </div>
      <h1>TAKE THE BASIC QUIZ HERE:</h1>
      <button onClick={toggleBasicQuestions}><h3>Basic Quiz</h3></button>
      <button onClick={()=>Basictimer.toggle}>Start/Stop Basic Quiz Timer</button>
      {showBasicQuestions && <Questions show={showBasicQuestions} />}
      <div>
        <h2>Detailed Quiz Instructions:</h2>
      <DetailQsDes></DetailQsDes>
      </div>
      <h1>TAKE THE DETAILED QUIZ HERE:</h1>
      <button><h3>Detailed Quiz</h3></button>
      <DetQuestions></DetQuestions>
      <button onClick={()=>DetailTimer.toggle}>Start/Stop Detailed Quiz Timer</button>
      <Form>
        <Form.Label>API Key:</Form.Label>
        <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
        <br></br>
        <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
      </Form>
    </div>
  );
}

export default App;
