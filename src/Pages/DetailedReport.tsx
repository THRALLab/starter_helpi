import React, { useState } from "react";
import OpenAIAPi from "openai";
import { Button, Form, Spinner } from "react-bootstrap";
import { LinkButton } from "../Components/LinkButton";
import { DarkModeToggle, bodyClassName } from "../Components/DarkModeToggle";
import { DetailedQuestion } from "../QuestionData/DetailedQuestion";
import { slidenums } from "./DetailedQuestions";
import jsonData from "../QuestionData/DetailedQuestions.json";
import "bootstrap/dist/css/bootstrap.min.css";
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
  const [loading, setLoading] = useState(false);

  //sets the local storage item to the api key the user inputed
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
  }

  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }

  //gets all 30 questions into an array from DetailedQuestions.json
  const getQuestions = () => {
    const parsedData = JSON.parse(JSON.stringify(jsonData));
    const detailedQuestions: DetailedQuestion[] = parsedData.DETAILED_QUESTIONS;
    return detailedQuestions.map((x) => x.question);
  };

  const joinQuestionsToAnswers = () => {
    return getQuestions().map((x, i) => {
      return x + ": " + slidenums[i] + " ";
    });
  };

  const userData =
    "I have rated these questions from 0 to 100 (100 being I strongly agree and 0 being strongly disagree)" +
    joinQuestionsToAnswers();

    const exampleFormat = "(no beginning sentence, just get right into the report, but include the '@' symbol) Sample Career: 2-3 sentences of why this is a good fit@Another Sample Career: 2-3 sentences of why this is a good fit@Final Sample Career: 2-3 sentences of why this is a good fit"

  const [responseData, setResponseData] = useState<string>(""); //Stores ChatGPTs response
  //Queries ChatGPT to generate report
  async function ChatGPT() {
    setLoading(true);
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
          content:
            "You are a helpful career advisor. You will be provided a students result to a career quiz. Provide a report of 3 careers, splitting each section with an @ symbol. No need for numbering Here is the format: " + exampleFormat,
        },
        { role: "user", content: "What should my career be? " + userData },
      ],
      model: "gpt-3.5-turbo",
    });
    //Stores response data
    if (completion.choices[0].message.content !== null) {
      setResponseData(completion.choices[0].message.content);
    } else {
      setResponseData("Error! Maybe you forgot to input the API key?");
    }
    setLoading(false);
  }

  const careerList = responseData.split("@");

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
        <div className="Report-header">View your Detailed Quiz Results!</div>
        <Form className="Report-body">
          <Button className="Button-chatGPT" onClick={ChatGPT}>
            Generate Report
          </Button>
        </Form>
        {loading && (
          <div>
            <Spinner animation="border" role="status">
              <span className="sr-only"></span>
            </Spinner>
            <p>Generating Your Results...</p>
          </div>
        )}
        {!loading && careerList.length === 3 && <div className="Report-results">
          Based on your results:
          <ol>
            <li>{careerList[0]}</li>
            <li>{careerList[1]}</li>
            <li>{careerList[2]}</li>
          </ol>  
        </div>}
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
