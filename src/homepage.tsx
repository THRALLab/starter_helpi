import React, { useState } from 'react';
import logo  from "./images/CISC-Logo.png";
import simple_logo  from "./images/CISC-Footer-Logo.png";
import github from "./images/CISC-Footer-GIT.png";
import easy_cat  from "./images/CISC-GPS-Easy.png";
import hard_cat from "./images/CISC-MAP-Hard.png";
import './homepage.css';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import BrowserRouter and other necessary components


//import Questionnaire from './basicQuestion';

//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

function Homepage() {
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
  return (
    <><div className="App">
      <header className="App-header">
        <div className="image">
          <img
              src={logo}
              alt="logo"
              id="logo-pic"
          />
        </div>
        <div className="text">
          <h1>Career Cat-ylist Quiz</h1> 
          <nav>
            <Link to ="/homepage">
            <Button className='nav-btn'>Home</Button>
            </Link>
            <Link to ="/basicQuestion">
            <Button className='nav-btn'>Basic Quiz</Button>
            </Link>
            <Link to = "/DetailedQuestion">
            <Button className='nav-btn'>Detailed Quiz</Button>
            </Link>
            <Link to ="/AboutMe">
            <Button className='nav-btn'>About</Button>
            </Link>
          </nav>
        </div>
        
      </header>

      <body>
        <div className="homepage_body">
          <div className="homepage_quiz_section">
            <div className="homepage_box">
            <img
                  src={easy_cat}
                  alt="Easy Pic"
                  className ="image-structure"
              />

              <h3>THE EASY ROUTE</h3>
              <p>
                This is the basic version of our career quiz. It consists of simple multiple choice
                The purpose of this quiz is meant to have more generic questions with a more limited answer
                choices. It prioritized to be answered relatively quickly and easy to answer with a quick glance.
                This can be useful for those that already have confidence within their desired career and want
                reassurance or need specification in what they want.
              </p>
            </div>
            <Button className="homepage_buttons">Take Basic Questions</Button>
          </div>

          <div className="homepage_quiz_section">
            <div className="homepage_box">
            <img
                  src={hard_cat}
                  alt="Hard Pic"
                  className ="image-structure"
              />

              <h3>THE JOURNEY</h3>
              <p>
                The Journey is meant to be more thought-provoking type of quiz. This quiz is designed to have
                more complex and demanding questions that needs a deep reflection into your own soul to respond
                to these questions. This is meant for those that have the time and patience. These questions more
                reflect questions that follow more a personailty style rather than those of 'would-you-rathers' to
                really encourage a deeper connection with the results.
              </p>
            </div>
            <Button className="homepage_buttons">Take Detailed Questions</Button>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
      </body>

      <footer>
        <div className="footer_decorative">
          <div id="logo-text-footer">
              <img
                src={simple_logo}
                alt="Hard Pic"
                className ="footer-logo"
              />
               <p className="team-name-footer">@SWE TEAM</p>
          </div>
          <a href='https://github.com/VikiNiki123/starter_helpi' className="contact-info-footer">
            <img
                    src={github}
                    alt="GitHub"
                    className ="footer-logo"
                />
          </a>
        </div>
        <div className="API_footer">
          <Form>
            <Form.Label>API Key: </Form.Label>
            <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
            <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
          </Form>
        </div>

      </footer>
        {/*
           <Link to="/basic-quiz"><Button>Basic Quiz</Button></Link>
           <Routes><Route path="/basic-quiz" element={<Questionnaire />} /></Routes>
        */}
        <br></br>
    </div></>
  );
}
export default Homepage;
