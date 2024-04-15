import React, { useState } from 'react';
import './App.css';
import { Button, Form } from 'react-bootstrap';
import { Header } from "./sections/Header"
import BasicQuestions from './BasicQuestions';
import DetailedQuestions from './DetailedQuestions';


//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}
function App() {
  const [key, setKey] = useState<string>(keyData); // For API key input
  const [activeSection, setActiveSection] = useState<'basic' | 'detailed' | ''>(''); // For question page selection

  // Sets the local storage item to the API key the user inputed
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); // When making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
  }
  
  // Whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }

  return (
    <div className="App">
      <Header />
      <div className="central-container">
        <h1>Cool Career Corner</h1>
        <p>Welcome to Cool Career Corner, where your captivating journey towards a compelling and customized career path commences! Crafted with care, our unique Career Cuiz catalyzes curiosity, connecting you with careers that celebrate your capabilities, creativity, and character. What "Cuiz" will you choose?</p>
        <div className="button-container">
          <Button variant="outline-dark" onClick={() => setActiveSection('basic')}>Basic Questions</Button>
          <Button variant="outline-dark" onClick={() => setActiveSection('detailed')}>Detailed Questions</Button>
        </div>
        <div>
          {activeSection === 'basic' && <BasicQuestions />}
          {activeSection === 'detailed' && <DetailedQuestions />}
        </div>
        <footer>
          <p>Home | Donate | Contact Us | Terms of Service</p>
        </footer>
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
export default App;