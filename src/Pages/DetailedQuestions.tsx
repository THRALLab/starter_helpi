import React, { useState, useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { LinkButton } from "../Components/LinkButton";
import { themeState } from "../Components/ThemeParent";
import { ThemeSelect } from "../Components/ThemeSelect";
import { DetailedQuestion } from "../QuestionData/DetailedQuestion";
import { SliderQuestion } from "../Components/SliderQuestion";
import jsonData from "../QuestionData/DetailedQuestions.json";
import "../Formatting/General.css";
import "../Formatting/Questions.css";
import "../Formatting/DetailedQuestions.css";

//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

export let slidenums = new Array<number>(30).fill(50);

function DetailedQuestions() {
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

  const [sliderValues, setSliderValues] = useState<number[]>(slidenums);
  const [currSliderValue, setCurrSliderValue] = useState<number>(50);
  const [questions, setQuestions] = useState<DetailedQuestion[]>([]);
  const [numberOfQuestions] = useState(30);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [questionBody, setQuestionBody] = useState("Question...");
  const [backButtonDisabled, setBackButtonDisabled] = useState(true);

  useEffect(() => {
    const loadQuestions = () => {
      const parsedData = JSON.parse(JSON.stringify(jsonData));
      const detailedQuestions: DetailedQuestion[] =
        parsedData.DETAILED_QUESTIONS;
      setQuestions(detailedQuestions);
      if (detailedQuestions[questionNumber] !== undefined) {
        setQuestionBody(detailedQuestions[questionNumber].question);
      }
    };
    loadQuestions();
  }, [questionNumber]);

  //Function to handle moving on to the next question
  const nextQuestion = () => {
    let tempSliderValues = [...sliderValues];
    tempSliderValues[questionNumber] = currSliderValue;
    questions[questionNumber].answer = currSliderValue.toString();
    setSliderValues(() => [...tempSliderValues]);
    if (questionNumber < numberOfQuestions - 1) {
      setCurrSliderValue(sliderValues[questionNumber + 1]);
      setQuestionBody(questions[questionNumber + 1].question);
      setQuestionNumber(questionNumber + 1);
      setBackButtonDisabled(false);
    } else {
      // End of quiz...
      //window.alert("You've completed the Detailed Quiz! Press the Report button to view your results!"); Don't need this anymore!
      setQuestionBody("You have completed the quiz!");
      setQuestionNumber(30);
      slidenums = [...sliderValues];
      let nextButton = document.getElementById("nextButton");
      if (nextButton != null) {
        nextButton.classList.remove("Button-visible-true");
        nextButton.classList.add("Button-visible-false");
      }
      let slider = document.getElementById("sliderQuestion");
      if (slider != null) {
        slider.classList.remove("Slider-visible-true");
        slider.classList.add("Slider-visible-false");
      }
      let reportButton = document.getElementById("reportButton");
      if (reportButton != null) {
        reportButton.classList.remove("Button-visible-false");
        reportButton.classList.add("Button-visible-true");
      }
    }
  };

  const previousQuestion = () => {
    let tempSliderValues = [...sliderValues];
    tempSliderValues[questionNumber] = currSliderValue;
    setSliderValues(() => [...tempSliderValues]);
    if (questionNumber > 0) {
      setCurrSliderValue(sliderValues[questionNumber - 1]);
      const previousQuestionIndex = questionNumber - 1;
      setQuestionBody(questions[previousQuestionIndex].question);
      setQuestionNumber(previousQuestionIndex);
      if (previousQuestionIndex === 0) {
        setBackButtonDisabled(true);
      }
      if (questionNumber === numberOfQuestions) {
        let nextButton = document.getElementById("nextButton");
        if (nextButton != null) {
          nextButton.classList.remove("Button-visible-false");
          nextButton.classList.add("Button-visible-true");
        }
        let slider = document.getElementById("sliderQuestion");
        if (slider != null) {
          slider.classList.remove("Slider-visible-false");
          slider.classList.add("Slider-visible-true");
        }
        let reportButton = document.getElementById("reportButton");
        if (reportButton != null) {
          reportButton.classList.remove("Button-visible-true");
          reportButton.classList.add("Button-visible-false");
        }
      }
    }
  };

  return (
    <div className={themeState} id="bigBody">
      <div className="Header-general" id="Header-Full">
        <span className="Header-toggle">
          <ThemeSelect></ThemeSelect>
        </span>
        <span className="Header-text">The Career Lab</span>
        <span className="Header-button">
          <LinkButton to="/" label="Home"></LinkButton>
        </span>
      </div>

      <div className="Page-body">
        <Container>
          <Row>
            <Col className="DetailedQuestions-questions">
              <div className="Slider-whole" id="sliderQuestion">
                <SliderQuestion
                  value={currSliderValue}
                  onChange={setCurrSliderValue}
                  label="Question: "
                  question={questionBody}
                ></SliderQuestion>
              </div>
              <span className="DetailedQuestions-buttons">
                <Button
                  className="Button-back"
                  onClick={previousQuestion}
                  disabled={backButtonDisabled}
                >
                  Back
                </Button>
                <span className="Button-visible-true" id="nextButton">
                  <Button
                    className="Button-next"
                    onClick={() => nextQuestion()}
                    style={{
                      marginLeft: "50px",
                    }}
                  >
                    Next
                  </Button>
                </span>
                <span className="Button-visible-false" id="reportButton">
                  <span
                    className="Button-report"
                    style={{ marginLeft: "50px" }}
                  >
                    <LinkButton
                      to="/detailedreport"
                      label="Report"
                    ></LinkButton>
                  </span>
                </span>
              </span>
            </Col>
            <Col>
              <div className="DetailedQuestions-progress-bar">
                <div
                  className="DetailedQuestions-progress-bar-foreground"
                  style={{
                    height: `${100 * (questionNumber / numberOfQuestions)}%`,
                  }}
                ></div>
                <span className="DetailedQuestions-question-number">
                  {questionNumber === 30
                    ? "Quiz Complete!"
                    : "Question " + (questionNumber + 1)}
                  {questionNumber === 30 ? "" : "/" + numberOfQuestions}
                </span>
                <span className="DetailedQuestions-progress-bar-percentage">
                  {Math.trunc(100 * (questionNumber / numberOfQuestions))}%
                  completed
                </span>
              </div>
              <span className="DetailedQuestions-answers-display">
                {sliderValues.map((x, i) => (
                  <p key={i}>
                    Q{i + 1}: {x}
                  </p>
                ))}
              </span>
            </Col>
          </Row>
        </Container>
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
export default DetailedQuestions;
