import React, { useState } from 'react';
import './App.css';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

function Detailed() {
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

// useState and update function for Question 1

  const [q1Response, setQ1Response] = useState<string>("");

  function updateQ1Response(event: React.ChangeEvent<HTMLInputElement>) {
    setQ1Response(event.target.value)
  }

// useState and update function for Question 2

const [q2Response, setQ2Response] = useState<string>("");

function updateQ2Response(event: React.ChangeEvent<HTMLInputElement>) {
  setQ2Response(event.target.value)
}

// useState and update function for Question 3

const [q3Response, setQ3Response] = useState<string>("");

function updateQ3Response(event: React.ChangeEvent<HTMLInputElement>) {
  setQ3Response(event.target.value)
}

// useState and update function for Question 4

const [q4Response, setQ4Response] = useState<string>("");

function updateQ4Response(event: React.ChangeEvent<HTMLInputElement>) {
  setQ4Response(event.target.value)
}

// useState and update function for Question 5

const [q5Response, setQ5Response] = useState<string>("");

function updateQ5Response(event: React.ChangeEvent<HTMLInputElement>) {
  setQ5Response(event.target.value)
}

// useState and update function for Question 6

const [q6Response, setQ6Response] = useState<string>("");

function updateQ6Response(event: React.ChangeEvent<HTMLInputElement>) {
  setQ6Response(event.target.value)
}

// useState and update function for Question 7

const [q7Response, setQ7Response] = useState<string>("");

function updateQ7Response(event: React.ChangeEvent<HTMLInputElement>) {
  setQ7Response(event.target.value)
}

// submit button useState
const [submitted, setSubmitted] = useState<boolean>(false);





  return (
    <div className="App">
      <header className="App-header">
        
      <h1>Detailed Questions!</h1>

      <Form.Group controlId="question1">
      <Form.Label>Describe your hobbies and interests:</Form.Label>
      <Form.Control
        value={q1Response}
        onChange={updateQ1Response} />
  </Form.Group>

  <Form.Group controlId="question2">
      <Form.Label>Describe your soft skills (teamwork, problem solving, leadership, communication, etc):</Form.Label>
      <Form.Control
        value={q2Response}
        onChange={updateQ2Response} />
  </Form.Group>

  <Form.Group controlId="question3">
      <Form.Label>What subject areas intrigue you the most?</Form.Label>
      <Form.Control
        value={q3Response}
        onChange={updateQ3Response} />
  </Form.Group>

  <Form.Group controlId="question4">
      <Form.Label>Where do you envision your career path evolving towards?</Form.Label>
      <Form.Control
        value={q4Response}
        onChange={updateQ4Response} />
  </Form.Group>

  <Form.Group controlId="question3">
      <Form.Label>What technical skills do you possess or are interested in developing?</Form.Label>
      <Form.Control
        value={q5Response}
        onChange={updateQ5Response} />
  </Form.Group>

  <Form.Group controlId="question6">
      <Form.Label>What is your dream place to live?</Form.Label>
      <Form.Control
        value={q6Response}
        onChange={updateQ6Response} />
  </Form.Group>

  <Form.Group controlId="question7">
      <Form.Label>Describe your personal values:</Form.Label>
      <Form.Control
        value={q7Response}
        onChange={updateQ7Response} />

        <br></br>

  <Button onClick={() => <span>Sending Responses to GPT!!!!</span>} disabled={!submitted}>Get Career Choices</Button>

  </Form.Group>
  
        <br></br>        
        <p>
        <Link to="/">go back</Link>
        </p>
        
      </header>
      <Form>
        <Form.Label>API Key:</Form.Label>
        <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
        <br></br>
        <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
      </Form>


    </div>
  );
}

export default Detailed;