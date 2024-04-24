import React, { useState } from "react";
import OpenAIAPi from "openai";
import { Button, Form, Spinner } from "react-bootstrap";
import { LinkButton } from "../Components/LinkButton";
import { themeState } from "../Components/ThemeParent";
import { ThemeSelect } from "../Components/ThemeSelect";
import { SimpleQuestion } from "../QuestionData/SimpleQuestion";
import { getQuestions } from "../Pages/SimpleQuestions";
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

function SimpleReport() {
  const [key, setKey] = useState<string>(keyData); //for api key input
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  //sets the local storage item to the api key the user inputed
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
  }

  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }

  const [responseData, setResponseData] = useState<string>(""); //Stores ChatGPTs response
  //Queries ChatGPT to get response
  async function ChatGPT() {
    setLoading(true);
    //Create message for ChatGPT based on Simple Questions Responses
    const questions = getQuestions();
    const simpleQuestionQuizResults = questions
      .map(
        (question: SimpleQuestion) => `${question.question}: ${question.answer}`
      )
      .join(", \n");
    setPrompt(
      `Based on my quiz results, what job suits me best? Here are my results: ${simpleQuestionQuizResults}`
    );
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
            "You are a helpful career advisor. You are provided a students result to a career quiz. Please provide at least 3 possible career paths based on the results.",
        },
        { role: "user", content: "What should my career be?" + prompt },
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

  return (
    <div className={themeState} id="bigBody">
      <header className="General-header">
        <span className="Header-toggle">
          <ThemeSelect></ThemeSelect>
        </span>
        <span>The Career Lab</span>
        <span className="Header-button">
          <LinkButton to="/" label="Home"></LinkButton>
        </span>{" "}
      </header>

      <div className="Page-body">
        <div className="Report-header">View your Simple Quiz Results!</div>
        <Form className="Report-body">
          <Button
            className="Button-chatGPT"
            onClick={ChatGPT}
            disabled={loading}
          >
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
        <div className="Report-results">{responseData}</div>
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

export default SimpleReport;
