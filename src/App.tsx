import React, { useState } from 'react';
import './App.css';
import { Button, Container, Form} from 'react-bootstrap';
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
  const [result, setResult] = useState<string[]>([]);
  const [detailedAnswers] = useState<string[]>(["","","","","","",""]); 
  const [basicAnswers] = useState<string[]>(["","","","","","",""]); // Initialize the state with an array of 7 empty strings
  const [key, setKey] = useState<string>(keyData); //for api key input
  const [page, setPage] = useState<string>("Home");
  const [loading, isLoading] = useState<boolean>(false);
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
    if (keyData === ""){
      setPage("Results");
      setResult(["Please enter an API Key"]);
    }
  }
  //changes the page to the detailed questions page
  function changePageDetail() {
    setPage("Detail");
    console.log("changed")
    setResult([""])
    if (keyData === ""){
      setPage("Results");
      setResult(["Please enter an API Key"]);
    }
  }
  //changes the page to the page where the results of the detailed quiz are displayed
  async function changePageResultsD() {
    setResult([""])
    setPage("Results");
    isLoading(true);
    generateDetailed(detailedAnswers).then(resolvedValue => {
      setResult(resolvedValue || ["","","","","","","","","","","","","",""]); // Provide a default value for setResult
      isLoading(false);
    });
    console.log(result);
  }
  //changes the page to the page where the results of the basic quiz are displayed
  function changePageResultsB() {
    setResult([""])
    setPage("Results");
    isLoading(true);
    generateBasic(basicAnswers).then(resolvedValue => {
      setResult(resolvedValue || ["","","","","","","","","","","","","",""]); // Provide a default value for setResult
      isLoading(false);
    });
  }
  

  return (
    //displays the layout for each page
    <div className='background'>
      <div className = "diffHeader">
        <img className = "yo" src = "https://i.imgur.com/30zTzzz.png" onClick={changePageHome} alt = "homebutton" ></img>
      </div>
        {page === 'Basic' && (
        <div className="Basic">
        <MCQs></MCQs>
        <Button className="Submit-Button" variant="primary" onClick={changePageResultsB}>Submit</Button>
        <footer className="basic-footer">
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
      )}
      {page === 'Detail' && (
        <div className="Detail">
          <DetailedQs></DetailedQs>
          <Button className="Submit-Button" variant = "primary" onClick = {changePageResultsD}>Submit</Button>
          <footer className="detail-footer">
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
        
      )}
      {page === 'Results' && (
        <div className="Results">
        {loading && (
          <div>
            <p className='Home-header'> Analyzing Answers... </p>
            <img src="https://imgur.com/q8wZzGY.gif" alt="Loading GIF" className = ""/>
          </div>
        )}          
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
          <footer className="results-footer">
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
      )}
      {page === 'Home' && (
        <div className="Home">

          <Container>
            <img src="https://imgur.com/YGfDoV2.png" alt="Career Quiz" className = "Pic"/>
            <div className="App-rect1">Basic Questions
              <p> 
                This Button will take you to our "Basic Questions" quiz, which consists of 7 multiple choice questions. If you would like more questions,
                you can click the "Generate more questions" button to generate 7 more questions for more accurate results. If you do not want to answer all of the questions that is fine and you may submit at any time.
              </p> 
              <Button className = "lightButton" variant= "primary" onClick={changePageBasic}>Basic Questions</Button>
            </div>           
            <img src="https://i.imgur.com/beA1q0N.png" alt="Career Quiz" className = "Pic2"/>

            <div className="App-rect2">Detailed Questions
                <p>
                  This Button will take you to our "Detailed Questions" quiz, which consists of 7 short respose questions. Take this quiz for a more in depth career analysis. If you would like more questions,
                  you can click the "Generate more questions" button to generate 7 more questions for more accurate results. If you do not want to answer all of the questions that is fine and you may submit at any time.
                </p>
              <Button className = "lightButton" variant= "primary" onClick={changePageDetail}>Detailed Questions</Button>
            </div>
          </Container>
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
      </div>)}
    </div>
  );
}

export default App;
