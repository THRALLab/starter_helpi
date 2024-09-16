import React, { useState } from 'react';
import './App.css';
import { Button, Col, Container, Form } from 'react-bootstrap';
import { BasicQuestionPage } from './form-components/BasicQuestionPage';


//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

function App() {
  const [key, setKey] = useState<string>(keyData); //for api key input
  const [isHomePage, setIsHomePage] = useState<boolean>(true);
  const [isBasicPage, setIsBasicPage] = useState<boolean>(false);
const [isDetailedPage, setIsDetailedPage] = useState<boolean>(false);
  
  //sets the local storage item to the api key the user inputed
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
  }

  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }
  function updateBasicPageButton() {
    setIsBasicPage(true);
    setIsDetailedPage(false);
    setIsHomePage(false);
}
  function updateHomePageButton() {
  setIsHomePage(true);
  setIsBasicPage(false);
  setIsDetailedPage(false);
}
  function updateDetailedPageButton() {
  setIsDetailedPage(true);
  setIsBasicPage(false);
  setIsHomePage(false);
}
  return (
    <div className="App">
      {/*Header will contain navigation bar*/}
      <header className="App-header">
  <Container fluid>
    <Col as={Button} onClick={updateHomePageButton}>Home</Col>
    <span></span>
    <Col as={Button} onClick={updateBasicPageButton}>Basic</Col>
    <span></span>
    <Col as={Button} onClick={updateDetailedPageButton}>Detailed</Col>
  </Container>
</header>
<div className='App-body'>
      {/*Home Page*/}
      {isHomePage && 
        <div>
          <h1>Career Starter</h1>
          <div className='container'>
            <div className='search-wrapper'>Our basic questions quiz provides you with short, easy to answer prompts that can help
                gauge a general career path for you!</div>
            <div className='search-wrapper'>
                    Our detailed questions quiz provides you with longer, and more in-depth prompts, that will be more 
                    effective in gauging a specific career path that suits you!
            </div>
        </div>
        </div>
      }

  {/*Basic Questions Page*/}
  {isBasicPage && 
    <div className='basic-page-container'>
      <BasicQuestionPage ></BasicQuestionPage>
    </div>
  }
     
  {/*Detailed Questions Page*/}
  {isDetailedPage && 
    <div>
      <label>Detailed Questions Page</label>
    </div>
  }
</div>
  {/*Footer contains entry for the API key*/}
<footer className='App-footer'>
<Form>
  <Form.Label>API Key:</Form.Label>
  <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
  <br></br>
  <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
</Form>
</footer> 
</div>

);  

}

export default App;
