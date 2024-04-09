import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './General.css';
import LinkButton from './LinkButton';

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
  
  //sets the local storage item to the api key the user inputed
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
  }

  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }

  function updateSliderValue1 (event: React.ChangeEvent<HTMLInputElement>){
    setSliderValue1(parseInt(event.target.value));
  }

  function updateSliderValue2 (event: React.ChangeEvent<HTMLInputElement>){
    setSliderValue2(parseInt(event.target.value));
  }

  return (
    <div className="DetailedQuestions">
      <header className="General-header"> <p>The Career Lab <LinkButton to="/" label="Home"></LinkButton></p> </header>
      <header className="DetailedQuestions-header">
        <label>Question 1:</label><br />
        <Form.Range style={{ transform: 'rotate(270deg)', width: '90px', marginLeft: '100px' }} value={sliderValue1} onChange={updateSliderValue1}/>
        <p>Selected Value: {sliderValue1}</p>

        <label>Question 2:</label><br />
        <Form.Range style={{ transform: 'rotate(270deg)', width: '90px', marginLeft: '100px' }} value={sliderValue2} onChange={updateSliderValue2} />
        <p>Selected Value: {sliderValue2}</p>

      </header>
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