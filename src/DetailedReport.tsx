import React, { useState } from 'react';
import './App';
import './Home.css';
import './General.css';
import { DarkModeToggle, bodyClassName } from './DarkModeToggle';
import LinkButton from './LinkButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';

//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

function DetailedReport() {
  const [key, setKey] = useState<string>(keyData); //for api key input
  
  //sets the local storage item to the api key the user inputed
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
  }

  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }

  return (
    <div className={bodyClassName} id='bigBody'>
        <header className="General-header"><p className='Header-toggle'><DarkModeToggle></DarkModeToggle></p><p>The Career Lab </p><p className='Header-button'><LinkButton to="/" label="Home"></LinkButton></p> </header>
        
        <div className="Page-body">
          <p className='Page-text'>View your detailed quiz results here! </p>
        </div>

        <div className="API-Footer">
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

export default DetailedReport;