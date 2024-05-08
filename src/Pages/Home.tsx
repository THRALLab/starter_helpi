import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Header } from "../Components/Header";
import { LinkButton } from "../Components/LinkButton";
import { themeState } from "../Components/StateParent";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Formatting/General.css";
import "../Formatting/Home.css";
import HomePageTop from "../Images/Home-Page-Top.jpg";
import HomePageBasic from "../Images/Home-Page-Basic.jpg";
import HomePageDetailed from "../Images/Home-Page-Detailed.jpg";

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
    <div className={themeState} id="bigBody">
      <Header></Header>

      <div className="Page-body">
        <Container>
          <Row>
            <div className="Home-body">
              <img
                src={HomePageTop}
                alt="Science Laboratory"
                width="628px"
                height="417px"
                style={{ padding: "10px", borderRadius: "20px" }}
              />
              <p>
                Welcome to the Career Lab! We have two quizzes you can take to
                help find your ideal career. Your answers will be reviewed by
                ChatGPT to generate a custom report of what caeer paths suit you
                the best. This project created by: Alex Hoy, Connor Jackson,
                Ryan Jones, and Rory Jordan.
              </p>
            </div>
          </Row>
          <Row>
            <Col className="Home-text-basic">
              <div>
                <img
                  src={HomePageBasic}
                  alt="Simple Science Experiment"
                  width="400px"
                  height="287px"
                  style={{ padding: "10px", borderRadius: "20px" }}
                />
                <p className="Home-button">
                  <LinkButton
                    to="simplequestions"
                    label="Basic Quiz"
                    classNameGive="Button-link"
                  ></LinkButton>
                </p>
                This is a basic quiz with 15 questions. <br></br> It will take
                around 5 to 10 minutes to complete. <br></br> The questions are
                simple and multiple choice.
              </div>
            </Col>
            <Col className="Home-text-detailed">
              <div>
                <img
                  src={HomePageDetailed}
                  alt="Complex Science Experiment"
                  width="400px"
                  height="287px"
                  style={{ padding: "10px", borderRadius: "20px" }}
                />
                <p className="Home-button">
                  <LinkButton
                    to="detailedquestions"
                    label="Detailed Quiz"
                    classNameGive="Button-link"
                  ></LinkButton>
                </p>
                This is a detailed quiz with 30 questions. <br></br> It will
                take around 10 to 15 minutes to complete. <br></br> The
                questions are answered on a scale.
              </div>
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
