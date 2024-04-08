import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
//import logo from './logo.svg';

//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
const saveKeyData = "MYKEY";
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
  
  //Changes page to the basic questions page
  function moveToBasic(): void {
      //Change to basic page here
  }

  //Changes page to the detailed questions page
  function moveToDetailed(): void {
    //Change to detailed page here
  }

  return (
    <div className='Home Page'>
      <header className="App-header"> The Career Lab </header>   
      <div className="PageBody">
        <Container>
          <Row>
          <Col>
              <Button onClick={moveToBasic}>Basic Quiz</Button>
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
              <Button onClick={moveToDetailed}>Detailed Quiz</Button>
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

      <hr />
      
      <div className="Footer">
      <Form>
        <Form.Label>API Key:</Form.Label>
        <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
        <br></br>
        <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
      </Form>
      </div>

      <hr />

      <div className="Simple Question Page">
        <Form.Label>Simple Question Page:</Form.Label>
        <SimpleQuestionPage></SimpleQuestionPage>
      </div>
    </div>
  );
}

//Function that generates a Simple Question Page
function SimpleQuestionPage(): JSX.Element {
  const [numberOfQuestions, setNumberOfQuestions] = useState("10")
  const [questionNumber, setQuestionNumber] = useState("1")
  const [questionBody, setQuestionBody] = useState("Question...")
  const [color, setColor] = useState("")

  const colors = ["red", "orange", "green", "blue", "purple", "pink", "brown"]

  const generateSimpleQuestionPage = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    setColor(randomColor);
  }

  return (
    <div>
      <div>
      <label htmlFor="question">Number of Questions:</label><br />
        <input type="text" id="numberOfQuestions" value={numberOfQuestions} onChange={(q) => setNumberOfQuestions(q.target.value)} /><br />
        <label htmlFor="question">Question Number:</label><br />
        <input type="text" id="questionNumber" value={questionNumber} onChange={(q) => setQuestionNumber(q.target.value)} /><br />
        <label htmlFor="question">Question:</label><br />
        <input type="text" id="question" value={questionBody} onChange={(q) => setQuestionBody(q.target.value)} /><br />
        <Button onClick={generateSimpleQuestionPage}>Generate Simple Question</Button> <br />
      </div>
      <div style={{ padding: "10px" }}>
        <div style={{ backgroundColor: color, color: "white", padding: "10px", position: "relative", display: "flex" }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: `${100 * (parseInt(questionNumber) / parseInt(numberOfQuestions))}%`, height: "100%", backgroundColor: "rgba(0, 0, 0, 0.3)" }}></div>
          Question {questionNumber}/{numberOfQuestions}
          <div style={{ marginLeft: 'auto', alignSelf: 'right' }}>
            {100 * (parseInt(questionNumber) / parseInt(numberOfQuestions))}% completed
          </div>
        </div>
      </div>
      <div style={{ padding: "10px" }}>
        <div style={{ padding: "10px", backgroundColor: color, color: "white", fontSize: "18px" }}>
          {questionBody}
        </div>
      </div>
    </div>
  );
}

export default App;