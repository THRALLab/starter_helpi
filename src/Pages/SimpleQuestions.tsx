import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { LinkButton } from "../Components/LinkButton";
import { themeState } from "../Components/ThemeParent";
import { ThemeSelect } from "../Components/ThemeSelect";
import { SimpleQuestion } from "../QuestionData/SimpleQuestion";
import jsonData from "../QuestionData/SimpleQuestions.json";
import "../Formatting/General.css";
import "../Formatting/Questions.css";
import "../Formatting/SimpleQuestions.css";

//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

let simpleQuestionQuizCompleted: SimpleQuestion[] = [];

export function getQuestions(): SimpleQuestion[] {
  return simpleQuestionQuizCompleted;
}

function SimpleQuestions() {
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

  const [questions, setQuestions] = useState<SimpleQuestion[]>([]);
  const [numberOfQuestions, setNumberOfQuestions] = useState(15);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(1);
  const [questionImage, setQuestionImage] = useState("");
  const [questionBody, setQuestionBody] = useState("Question...");
  const [option1, setOption1] = useState("Option 1...");
  const [option2, setOption2] = useState("Option 2...");
  const [backButtonDisabled, setBackButtonDisabled] = useState(true);

  useEffect(() => {
    const loadQuestions = () => {
      const parsedData = JSON.parse(JSON.stringify(jsonData));
      const simpleQuestions: SimpleQuestion[] = parsedData.SIMPLE_QUESTIONS;
      setQuestions(simpleQuestions);
      setNumberOfQuestions(simpleQuestions.length);
      setQuestionNumber(questionNumber);
      setQuestionImage(simpleQuestions[questionNumber].image);
      setQuestionBody(simpleQuestions[questionNumber].question);
      setOption1(simpleQuestions[questionNumber].option1);
      setOption2(simpleQuestions[questionNumber].option2);
    };

    loadQuestions();
  }, [questionNumber]);

  const nextQuestion = (selectedOption: string) => {
    setCurrentQuestionNumber(currentQuestionNumber + 1);
    if (questionNumber < numberOfQuestions - 1) {
      questions[questionNumber].answer = selectedOption;
      setBackButtonDisabled(false);
      const nextQuestion = questionNumber + 1;
      setQuestionNumber(nextQuestion);
      setQuestionImage(questions[nextQuestion].image);
      setQuestionBody(questions[nextQuestion].question);
      setOption1(questions[nextQuestion].option1);
      setOption2(questions[nextQuestion].option2);
    } else {
      // End of quiz...
      //window.alert("You've completed the Simple Quiz!"); Don't need this anymore!
      setQuestionBody("You have completed the quiz!");
      simpleQuestionQuizCompleted = questions;
      let nextButton = document.getElementById("nextButton");
      if (nextButton != null) {
        nextButton.classList.remove("Button-visible-true");
        nextButton.classList.add("Button-visible-false");
      }
      let reportButton = document.getElementById("reportButton");
      if (reportButton != null) {
        reportButton.classList.remove("Button-visible-false");
        reportButton.classList.add("Button-visible-true");
      }
    }
  };

  const previousQuestion = () => {
    if (questionNumber >= 0) {
      setCurrentQuestionNumber(currentQuestionNumber - 1);
      if (questionBody === "You have completed the quiz!") {
        let nextButton = document.getElementById("nextButton");
        if (nextButton != null) {
          nextButton.classList.remove("Button-visible-false");
          nextButton.classList.add("Button-visible-true");
        }
        let reportButton = document.getElementById("reportButton");
        if (reportButton != null) {
          reportButton.classList.remove("Button-visible-true");
          reportButton.classList.add("Button-visible-false");
        }
        setQuestionImage(questions[questionNumber].image);
        setQuestionBody(questions[questionNumber].question);
        setOption1(questions[questionNumber].option1);
        setOption2(questions[questionNumber].option2);
      } else {
        const previousQuestion = questionNumber - 1;
        setQuestionNumber(previousQuestion);
        setQuestionImage(questions[previousQuestion].image);
        setQuestionBody(questions[previousQuestion].question);
        setOption1(questions[previousQuestion].option1);
        setOption2(questions[previousQuestion].option2);
        if (questionNumber === 1) {
          setBackButtonDisabled(true);
        }
      }
    }
  };

  return (
    <div className={themeState} id="bigBody">
      <div className="General-header">
        <span className="Header-toggle">
          <ThemeSelect></ThemeSelect>
        </span>
        <span className="Header-text">The Career Lab</span>
        <span className="Header-button">
          <LinkButton to="/" label="Home"></LinkButton>
        </span>
      </div>

      <div className="Simple-body">
        <span className="Simple-back-top">
          <Button
            className="Button-back"
            onClick={previousQuestion}
            disabled={backButtonDisabled}
          >
            Back
          </Button>
        </span>
        <div className="Simple-progress">
          <div className="Simple-progress-outer">
            <div
              className="Simple-progress-inner"
              style={{
                width: `${
                  100 * ((currentQuestionNumber - 1) / numberOfQuestions)
                }%`,
              }}
            ></div>
            <div className="Simple-question-number">
              {currentQuestionNumber === 16
                ? "Quiz Complete!"
                : "Question " + currentQuestionNumber}
              {currentQuestionNumber === 16 ? "" : "/" + numberOfQuestions}
            </div>
            <div className="Simple-progress-percentage">
              {Math.round(
                100 * ((currentQuestionNumber - 1) / numberOfQuestions)
              )}
              % completed
            </div>
          </div>
        </div>
        <div className="Simple-textSpace">
          {currentQuestionNumber < 16 && (
            <img src={questionImage} alt="Not Available..." width="600" height="354"/>
          )}
          <div className="Simple-question-body">{questionBody}</div>
          <div className="Simple-buttons">
            <span className="Button-visible-true" id="nextButton">
              <span className="Simple-option-1">
                <Button
                  className="Button-next"
                  onClick={() => nextQuestion(option1)}
                  style={{
                    position: "absolute",
                    width: "calc(50% - 5px)",
                    left: "0",
                    margin: "0",
                    padding: "10px",
                  }}
                >
                  {option1}
                </Button>
              </span>
              <span className="Simple-option-2">
                <Button
                  className="Button-next-2"
                  onClick={() => nextQuestion(option2)}
                  style={{
                    position: "absolute",
                    width: "calc(50% - 5px)",
                    margin: "0",
                    padding: "10px",
                    left: "calc(50% + 5px)",
                  }}
                >
                  {option2}
                </Button>
              </span>
            </span>
            <span className="Button-visible-false" id="reportButton">
              <span className="Button-report">
                <LinkButton to="/simplereport" label="Report"></LinkButton>
              </span>
            </span>
          </div>
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

export default SimpleQuestions;
