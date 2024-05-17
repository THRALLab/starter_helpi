/* Imports/Exports */
import { Button, Form } from "react-bootstrap";
import React, { useState } from 'react';
import './App.css';
import BasicPage from "./BasicQuestionsPage";
import DetailedQuestionsPage from "./DetailedQuestionsPage";

export let keyData = "";
export const saveKeyData = "MYKEY";

const prevKey = localStorage.getItem(saveKeyData);
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}



/* Consts for Basic/Detailed Questions, Dark/Light Mode, and API Key */
function App() {
  const [key, setKey] = useState<string>(keyData);
  const [showBasicQuestions, setShowBasicQuestions] = useState(false);
  const [showDetailedQuestions, setShowDetailedQuestions] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  const handleSubmit = () => {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload();
  };

  const changeKey = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKey(event.target.value);
  };

  const toggleBasicQuestions = () => {
    setShowBasicQuestions(!showBasicQuestions);
  };

  const toggleDetailedQuestions = () => {
    setShowDetailedQuestions(!showDetailedQuestions);
  };

  const navigateToHomepage = () => {
    setShowBasicQuestions(false);
    setShowDetailedQuestions(false);
  };



/* Return Statements for Rendering Text, Descriptions, and Quiz Elements */
  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="header">
        <label className="switch switch-left">
          <input type="checkbox" onChange={toggleDarkMode} checked={darkMode} />
          <span className="slider"></span>
        </label>
        <div className="centered-text">
          <h1 className={showBasicQuestions || showDetailedQuestions ? 'fade-out' : ''}>CAREER QUIZ</h1>
        </div>
        <div className="subtext-text">
          <p className={showBasicQuestions || showDetailedQuestions ? 'fade-out' : ''}>Find out your future career now!</p>
        </div>
        <div className="basicquiz-text">
          <p className={showBasicQuestions || showDetailedQuestions ? 'fade-out' : ''}>BASIC QUIZ</p>
        </div>
        <div className="detailedquiz-text">
          <p className={showBasicQuestions || showDetailedQuestions ? 'fade-out' : ''}>DETAILED QUIZ</p>
        </div>
        <div className="basicquizdesc-text">
          <p className={showBasicQuestions || showDetailedQuestions ? 'fade-out' : ''}>- Seven simple questions designed to unveil your future career path.</p>
          <p className={showBasicQuestions || showDetailedQuestions ? 'fade-out' : ''}>- Explore your interests and skills through this career-focused quiz.</p>
          <p className={showBasicQuestions || showDetailedQuestions ? 'fade-out' : ''}>- Unlock insights that could shape your professional journey.</p>
        </div>
        <div className="detailedquizdesc-text">
          <p className={showBasicQuestions || showDetailedQuestions ? 'fade-out' : ''}>- Seven detailed questions designed to unveil your future career path.</p>
          <p className={showBasicQuestions || showDetailedQuestions ? 'fade-out' : ''}>- Explore your passions and skills through this comprehensive quiz.</p>
          <p className={showBasicQuestions || showDetailedQuestions ? 'fade-out' : ''}>- Gain insights into potential career paths with each question.</p>
        </div>
        <div className={`repositionable-box ${showBasicQuestions || showDetailedQuestions ? 'fade-out' : ''}`}></div>
        <div className={`mirrored-box ${showBasicQuestions || showDetailedQuestions ? 'fade-out' : ''}`}></div>
        <div className={`dark-mode-toggle ${darkMode ? 'dark-mode-text' : 'light-mode-text'}`} onClick={toggleDarkMode}></div>
        <div className="App-logo"></div>
        <div className="quizzi-text" onClick={navigateToHomepage}>Quizzi</div>
      </div>
      {!showBasicQuestions && !showDetailedQuestions ? (
        <div>
          <button className="button-basic-quiz" onClick={toggleBasicQuestions}><h3>Basic Quiz</h3></button>
          <button className="button-detailed-quiz" onClick={toggleDetailedQuestions}><h3>Detailed Quiz</h3></button>
        </div>
      ) : showBasicQuestions ? (
        <div>     
          <BasicPage></BasicPage>
        </div>
      ) : (
        <div>
          <DetailedQuestionsPage></DetailedQuestionsPage>
        </div>
      )}
      
      {!showBasicQuestions && !showDetailedQuestions && ( /* API Key Functionality and Rendering Logic */
        <div className="api-key-container">
          <Form>
            <Form.Label></Form.Label>
            <Form.Control className="api-key-input" type="password" placeholder="" onChange={changeKey}></Form.Control>
            <br></br>
            <Button className="Submit-Button" onClick={handleSubmit}>SUBMIT API</Button>
          </Form>
        </div>
      )}
    </div>
  );
}

export default App;
