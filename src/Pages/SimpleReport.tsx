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
import { AudioPlayer } from "../Components/AudioPlayer";

//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

// Function to generate the Report from ChatGPT based on how the user answered the questions.
function SimpleReport() {
  // State variables for the Report page
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
    const exampleFormat =
      "~Sample Career: 2-3 sentences of why this is a good fit~Another Sample Career: 2-3 sentences of why this is a good fit~Final Sample Career: 2-3 sentences of why this is a good fit";
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
            "You are a helpful career advisor. You will be provided a students result to a career quiz. Provide a list of 3 careers, with '~' as the bulletpoint. Here is the example format" +
            exampleFormat +
            "Include the tilda (~) in the report string, it is important",
        },
        { role: "user", content: prompt },
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

  const careerList = responseData.split("~");

  return (
    <div className={themeState} id="bigBody">
      <div className="Header-general" id="Header-Full">
        <span className="Header-toggle">
          <ThemeSelect></ThemeSelect>
        </span>
        <span className="Header-text">The Career Lab</span>
        <span className="Header-Audio">
          <AudioPlayer></AudioPlayer>
        </span>
        <span className="Header-button">
          <LinkButton to="/" label="Home"></LinkButton>
        </span>
      </div>

      <div className="Page-body">
        <div className="Report-space">
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
          {!loading && careerList.length >= 3 && (
            <div className="Report-results">
              Based on your results:
              <div>
                <br />
                <span className="Report-results-header">Career 1:</span>
                <li>{careerList[1]}</li>
                <br />
                <span className="Report-results-header">Career 2:</span>
                <li>{careerList[2]}</li>
                <br />
                <span className="Report-results-header">Career 3:</span>
                <li>{careerList[3]}</li>
              </div>
            </div>
          )}
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

export default SimpleReport;
