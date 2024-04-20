import React, { useState } from "react";
import OpenAIAPi from "openai";
import { Button, Form } from "react-bootstrap";
import { LinkButton } from "../Components/LinkButton";
import { DarkModeToggle, bodyClassName } from "../Components/DarkModeToggle";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Formatting/Home.css";
import "../Formatting/General.css";
import "../Formatting/Report.css";

//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
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

  const [responseData, setResponseData] = useState<string>(""); //Stores ChatGPTs response
  //Queries ChatGPT to generate report
  async function ChatGPT() {
    //Creates ChatGPT
    const openai = new OpenAIAPi({
      apiKey: keyData,
      dangerouslyAllowBrowser: true,
    });
    //Queries ChatGPT
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant designed to output JSON.",
        },
        { role: "user", content: "Who won the world series in 2020?" },
      ],
      model: "gpt-3.5-turbo",
      response_format: { type: "json_object" },
    });
    //Stores response data
    if (completion.choices[0].message.content !== null) {
      setResponseData(completion.choices[0].message.content);
    } else {
      setResponseData("Error!");
    }
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
          <Form className="Report-body">
            <Button className="Button-ChatGPT" onClick={ChatGPT}>
              Generate Report
            </Button>
          </Form>
          {responseData}
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
