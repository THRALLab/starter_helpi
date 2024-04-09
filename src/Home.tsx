import React, { useState } from 'react';
import './App';
import './Home.css';
import './General.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import LinkButton from './LinkButton';

//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

function Home() {
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
    <div>
        <header className="App-header"> <p>The Career Lab <LinkButton to="/" label="Home"></LinkButton></p> </header>
        <div className="PageBody">
          <Container>
            <Row>
              <Col>
                <LinkButton to="simplequestions" label="Basic Quiz"></LinkButton>
                <p>
                  This is a basic quiz with X questions.
                </p>
                <p>
                  It will take around Y to Z minutes to complete.
                </p>
                <p>
                  The questions are simple and multiple choice.
                </p>
              </Col>
              <Col>
                <LinkButton to="detailedquestions" label="Detailed Quiz"></LinkButton>
                <p>
                  This is a detailed quiz with X questions.
                </p>
                <p>
                  It will take around Y to Z minutes to complete.
                </p>
                <p>
                  The questions are answered on a scale.
                </p>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="Footer">
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

export default Home;