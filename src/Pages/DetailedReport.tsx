import React, { useState } from "react";
import "../Formatting/Home.css";
import "../Formatting/General.css";
import "../Formatting/Report.css";
import { DarkModeToggle, bodyClassName } from "../Components/DarkModeToggle";
import LinkButton from "../Components/LinkButton";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { keyData, saveKeyData, updateKeyData } from "../APIFooter";
//import OpenAIRequest from './OpenAITest';

//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  updateKeyData(JSON.parse(prevKey));
}

function DetailedReport() {
  const [key, setKey] = useState<string>(keyData); //for api key input

  //sets the local storage item to the api key the user inputed
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
  }

  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }

  return (
    <div className={bodyClassName} id="bigBody">
      <header className="General-header">
        <span className="Header-toggle">
          <DarkModeToggle></DarkModeToggle>
        </span>
        <span>The Career Lab</span>
        <span className="Header-button">
          <LinkButton to="/" label="Home"></LinkButton>
        </span>{" "}
      </header>

      <div className="Page-body">
        <div className="Page-text">
          <p className="Report-header">View your Detailed Quiz Results!</p>
          <p className="Report-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>

      <div className="API-Footer">
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
    </div>
  );
}

export default DetailedReport;
