import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./HomePage.css";

//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

export function HomePage() {
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
  function navigateToCareerAssessmentPage() {
    window.location.href = "/Basic-Career-assessment";
  }
  return (
    <div>
      <div className="mainHome">
        <h1>Home Page</h1>
        <div>
          <div className="row">
            <div className="column">
            <header>Basic Questions Page</header>
              <p>
                The "Basic" button will take you to the Basic Questions Page. The basic questions will take less time to complete and give you a general analysis of what career paths you should consider.
              </p>
            </div>
            <div className="column">
            <header>Detailed Questions Page</header>
              <p>
                The "Detailed" button will take you to the Detailed Questions Page. The detailed questions will take more time and will give you a more in depth analysis of the career path you should consider.
              </p>
            </div>
          </div>
        </div>
      </div>
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
