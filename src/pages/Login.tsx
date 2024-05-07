//import React, { useState } from 'react';
import "../styles/BasicQuestions.css";
import NavigationBar from "../components/NavigationBar";
import React from "react";
//import { Button, Form } from 'react-bootstrap';
//import { ButtonToPages } from './ButtonToPages';

export function Login() {
  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button

  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <p>login</p>
    </div>
  );
}

export default Login;
