import React, { useState } from "react";
import logo from "../styles/logo.svg";
import "../styles/App.css";
import { Button, Form } from "react-bootstrap";
import { ButtonToPages } from "../components/ButtonToPages";
import NavigationBar from "../components/NavigationBar";
import OpenAI from "openai";
//import { LocalLink } from './LocalLink';
//import { HashRouter, Routes, Route } from 'react-router-dom';

//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}


export function Counter(): JSX.Element {
  const [value, setValue] = useState<number>(0);
  return (
      <span>
          <Button onClick={() => setValue(1 + value)}>Add One</Button>
          to {value}.
      </span>
  );
}





export function Home() {
  const [key, setKey] = useState<string>(keyData); //for api key input

  //sets the local storage item to the api key the user inputed
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
    const openai = new OpenAI(apiKey: );
  }

  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Matthew Holinger</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p> Jordan Photis </p>
        <p>Seth Thompson</p>
    
        <hr></hr>
        <ButtonToPages></ButtonToPages>
      </header>
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
  );
}

export default Home;
