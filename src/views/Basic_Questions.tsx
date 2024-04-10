import React, { useState } from 'react';
import '../App.css';
import {Button, Form} from "react-bootstrap";
import {Q1} from "../BasicQuestions/Q1";
import {Q2} from "../BasicQuestions/Q2";
import {Q3} from "../BasicQuestions/Q3";
import {Q4} from "../BasicQuestions/Q4";
import {Q5} from "../BasicQuestions/Q5";
import {Q6} from "../BasicQuestions/Q6";
import {Q7} from "../BasicQuestions/Q7";
import {Q8} from "../BasicQuestions/Q8";

//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

function Basic_Questions(): JSX.Element {
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



  return (
    <div className="App">

      <header className="Basic_Question">Home/Basic Questions</header>
      <br></br>

      <Q1></Q1>
      <Q2></Q2>
      <Q3></Q3>
      <Q4></Q4>
      <Q5></Q5>
      <Q6></Q6>
      <Q7></Q7>
      <Q8></Q8>

      <Form>
        <Form.Label>API Key:</Form.Label>
        <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
        <br></br>
        <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
      </Form>
    </div>
  );
}

export default Basic_Questions;
