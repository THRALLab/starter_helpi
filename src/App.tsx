import React, { useState } from 'react';
import './App.css';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import {MCQs} from './components/MCQs';
import { generateDetailed,generateBasic } from './components/ChatGPT';
import {DetailedQs} from './components/DetailedQs';
//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

function App() {
  const [result, setResult] = useState<string[]>(["Loading Results..."]);
  const [detailedAnswers] = useState<string[]>(["","","","","","",""]); 
  const [basicAnswers] = useState<string[]>(["","","","","","",""]); // Initialize the state with an array of 7 empty strings
  const [key, setKey] = useState<string>(keyData); //for api key input
  const [page, setPage] = useState<string>("Home");
  //sets the local storage item to the api key the user inputed
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
    setPage("Home");
  }
  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }
  //changes the page to the home page
  function changePageHome() {
    setPage("Home");
    console.log("changed")
  }
  //changes the page to the basic questions page
  function changePageBasic() {
    setPage("Basic");
    console.log("changed")
  }
  //changes the page to the detailed questions page
  function changePageDetail() {
    setPage("Detail");
    console.log("changed")
  }
  //changes the page to the page where the results of the detailed quiz are displayed
  async function changePageResultsD() {
    setResult(["Loading Results..."])
    setPage("Results");
    generateDetailed(detailedAnswers).then(resolvedValue => {
      setResult(resolvedValue || ["","","","","",""]); // Provide a default value for setResult
    });
    console.log(result);
  }
  //changes the page to the page where the results of the basic quiz are displayed
  function changePageResultsB() {
    setResult(["Loading Results..."])
    setPage("Results");
    generateBasic(basicAnswers).then(resolvedValue => {
      setResult(resolvedValue || ["","","","","",""]); // Provide a default value for setResult
    });
  }

  return (
    //displays the logo
    <div className='background'>
      <div className = "diffHeader">
        <Button className="homeButton" variant= "secondary" onClick={changePageHome} >Home</Button>
        <img className = "logo" src="https://i.imgur.com/wnwq3pn.png" alt="Logo of UNC" />
      </div>
        {page === 'Basic' && (
        <div className="Basic">
        <MCQs></MCQs>
        <Button className="Submit-Button" variant="secondary" onClick={changePageResultsB}>Submit</Button>
        </div>
      )}
      {page === 'Detail' && (
        <div className="Detail">
          <DetailedQs></DetailedQs>
          <Button className="Submit-Button" variant = "secondary" onClick = {changePageResultsD}>Submit</Button>
        </div>
      )}
      {page === 'Results' && (
        <div className="Results">
          <p className='chatResults'> {result[0]} </p>
          <p className='chatResults'> 
            <a href=  {"https://" + (result[1] ? result[1].replace(/\s/g, '') : '' )} target="_blank" rel="noreferrer" >
            {result[1]}
            </a> 
          </p>          
          <p className='chatResults'> {result[2]} </p>
          <p className='chatResults'> 
            <a href= {"https://" + (result[3] ? result[3].replace(/\s/g, '') : '') } target="_blank" rel="noreferrer" >
            {result[3]}
            </a> 
          </p>          
          <p className='chatResults'> {result[4]} </p>
          <p className='chatResultsfinal'> 
            <a href= {"https://" + (result[5] ? result[5].replace(/\s/g, '') : '')} target="_blank" rel="noreferrer">
            {result[5]}
            </a> 
          </p>
        </div>
      )}
      {page === 'Home' && (
        <div className="Home">
        <header className="Home-header">
        Use these quizzes to help you find a career you love!
        </header>
        <p className="Description"> We use AI to analyze your answers to help you find the perfect career based on your interests and qualities</p>
        <Container>
      <Row className='col'>
        <Col>
          <div className="App-rect1">Basic Questions
          <p> This Button will take you to some basic questions</p> 
          <Button className = "lightButton" variant= "secondary" onClick={changePageBasic}>Basic Questions</Button>
          </div>           
        </Col>
        <Col>
          <div className="App-rect2">Detailed Questions
          <p>This Button will take you to some detailed questions</p>
          <Button className = "lightButton" variant= "secondary" onClick={changePageDetail}>Detailed Questions</Button>
          </div>
        </Col>
      </Row>
    </Container>
      </div>)}
        <footer className="Home-footer">
      These quizzes should not be used as the sole decision when considering a career
        </footer>
        <div className="API">
          <Form className = "API-Key">
          <Form.Label>API Key:</Form.Label>
          <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
          <br></br>
          <Button variant = "secondary" onClick={handleSubmit}>Submit</Button>
      </Form>
          </div>
    </div>
  );
}

export default App;
