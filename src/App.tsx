import React, { useState } from 'react';
import './App.css';
import { Button, Container, Form, Row, Col } from 'react-bootstrap';
import { DetailedQuestionPage } from "./detailed-question-page";
import { BasicQuestionPage } from './basic-question-page';
import { HomePage } from './home-page';
import img from './person_thinking.jpg';

//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

function App() {
  type page = 'home' | 'detailed question page' | 'basic question page';
  const [key, setKey] = useState<string>(keyData); //for api key input
  const [currentPage, setcurrentPage] = useState<page>('home');//which page the website is currently on

  function changetoDetailedPage(): void {//switch to the detailed questions page
    setcurrentPage('detailed question page');
  }
  function changeToBasicPage(): void {
    setcurrentPage('basic question page');
  }

  function changetoHomePage(): void {//switch to the home page
    setcurrentPage('home');
  }
  
  //sets the local storage item to the api key the user inputed
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
  }
  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div><h1 className='headerTitle'>The Career Helpi</h1></div>
        <div className="wrapper">
        <Button className='homebutton' onClick={changetoHomePage}>Home</Button>
        <Button className='detailedbutton' onClick={changetoDetailedPage}>Detailed Career Assessment</Button>
        <Button className='basicButton' onClick={changeToBasicPage}>Basic Career Assessment</Button>
        </div>
      </header>
      <p hidden={currentPage !== 'detailed question page'}>
          <DetailedQuestionPage userKey={keyData}></DetailedQuestionPage>
      </p>
      <p hidden={currentPage !== 'basic question page'}>
          <BasicQuestionPage userKey={keyData}></BasicQuestionPage>
      </p>
      <p hidden={currentPage !== 'home'}>
          <HomePage></HomePage>
      </p>
      <div hidden={currentPage !== "home"} className='homePageImage'>
        <img src={img} alt="Couldn't load"></img>
      </div>
      <div hidden={currentPage !== 'home'}>
        <p className='detailed-description'>The Career Helpi's Detailed Career Assessment allows users to fill out 
        a more personal quiz that reflects their specific interest and goals. Here, users' results will be more personalized 
        to who you are. Providing extra detail allows the Career Helpi to better match a potential career.</p>
        <Button className='detailedbutton2' onClick={changetoDetailedPage}>Detailed Career Assessment</Button>
      </div>
      <div hidden={currentPage !== 'home'}>
      <p className='basic-description'>If you feel unsure about your future career but don't want to think about it too much, 
      look no further. In a few short minutes, you can get a basic idea as to what career suit you. All you have to do is 
      answer the questions below!</p>
      <Button className='basicButton2' onClick={changeToBasicPage}>Basic Career Assessment</Button>
      </div>
      <footer className="App-footer">
      <Form hidden={currentPage !== 'home'}>
        
        <Container>
          <Row>
            <Col><Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey} className='apiKeyInsert'></Form.Control></Col>
            <Col><Button className="Submit-Button" onClick={handleSubmit}>Submit</Button></Col>
          
          
          </Row>
        </Container>
      </Form>
      </footer>
    </div>
  );
}

export default App;
