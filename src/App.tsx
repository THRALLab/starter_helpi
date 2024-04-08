// import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Nav, NavLink, NavMenu } from "./components/Navbar/NavbarElements";
// import { Button, Form } from 'react-bootstrap';

import {
  BrowserRouter as Router,
  Routes,
  Route, Link} from "react-router-dom";
import HomePage from "./pages/HomePage" ;
import BasicQuestionPage from "./pages/BasicQuestionsPage";



//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

function App() {
  // const [key, setKey] = useState<string>(keyData); //for api key input
  
  //sets the local storage item to the api key the user inputed
  // function handleSubmit() {
  //   localStorage.setItem(saveKeyData, JSON.stringify(key));
  //   window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
  // }

  // //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  // function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
  //   setKey(event.target.value);
  // }

  function Navbar () {
    return (
      <>
      <Nav>
          <NavMenu>
              <NavLink to="/" >
                  Home
              </NavLink>
              <NavLink to="/BasicQuestionPage" >
                  Basic Question Page
              </NavLink>
          </NavMenu>
      </Nav>
  </>
     )
  }
  return (
<Router>
  <Navbar /> 
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path='/BasicQuestionPage' element={<BasicQuestionPage />} />
  </Routes>
</Router>

  );
}

export default App;
