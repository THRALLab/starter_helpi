import React, { useState } from "react";
import "../Formatting/Home.css";
import "../Formatting/General.css";
import { DarkModeToggle, bodyClassName } from "../Components/DarkModeToggle";
import LinkButton from "../Components/LinkButton";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

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
    <div className={bodyClassName} id="bigBody">
      <div className="General-header">
        <span className="Header-toggle">
          <DarkModeToggle></DarkModeToggle>
        </span>
        <span className="Header-text">The Career Lab</span>
        <span className="Header-button">
          <LinkButton to="/" label="Home"></LinkButton>
        </span>
      </div>

      <div className="Page-body">
        <p className="Page-text">
          Welcome to the Career Lab! We have two quizzes you can take to help
          find your ideal career. Your answers will be reviewed by ChatGPT to
          generate a custom report of what caeer paths suit you the best. This
          project created by: Alex Hoy, Connor Jackson, Ryan Jones, and Rory
          Jordan
        </p>
        <Container>
          <Row>
            <Col>
              <p className="Button-format">
                <LinkButton
                  to="simplequestions"
                  label="Basic Quiz"
                ></LinkButton>
              </p>
              <p className="Text-basic">
                This is a basic quiz with 15 questions.
              </p>
              <p className="Text-basic">
                It will take around X to Y minutes to complete.
              </p>
              <p className="Text-basic">
                The questions are simple and multiple choice.
              </p>
            </Col>
            <Col>
              <p className="Button-format">
                <LinkButton
                  to="detailedquestions"
                  label="Detailed Quiz"
                ></LinkButton>
              </p>
              <p className="Text-detailed">
                This is a detailed quiz with 30 questions.
              </p>
              <p className="Text-detailed">
                It will take around Y to Z minutes to complete.
              </p>
              <p className="Text-detailed">
                The questions are answered on a scale.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="API-Footer">
        <Form>
          <Form.Label>API Key:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Insert API Key Here"
            onChange={changeKey}
          ></Form.Control>
          <br></br>
          <Button className="Submit-Button" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Home;
