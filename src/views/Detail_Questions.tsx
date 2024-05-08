import { useState } from "react";
import { Button } from "react-bootstrap";
import { Q1 } from "../DetailQuestions/Q1";
import { Q2 } from "../DetailQuestions/Q2";
import { Q3 } from "../DetailQuestions/Q3";
import { Q4 } from "../DetailQuestions/Q4";
import { Q5 } from "../DetailQuestions/Q5";
import { Q6 } from "../DetailQuestions/Q6";
import { Q7 } from "../DetailQuestions/Q7";
import { OpenAIOverlay } from "../components/OpenAIOverlay";
import { AnswerContext } from "../AnswerContext";

function Detail_Questions(): JSX.Element {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questionToEval, setQuestionToEval] = useState("");

  const questions = [<Q1 />, <Q2 />, <Q3 />, <Q4 />, <Q5 />, <Q6 />, <Q7 />];

  const totalQuestions = questions.length;

  const [userAnswers, setUserAnswers] = useState<string[]>(
    Array(totalQuestions).fill(""),
  );

  const handleNextClick = () => {
    setQuestionToEval(userAnswers[currentQuestion]);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevClick = () => {
    setQuestionToEval(userAnswers[currentQuestion]);
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  let keyData = "";
  const saveKeyData = "USER_OAKEY";
  const prevKey = localStorage.getItem(saveKeyData);

  if (prevKey !== null) {
    keyData = JSON.parse(prevKey);
  }

  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  return (
    <AnswerContext.Provider value={{ userAnswers, setUserAnswers }}>
      <div
        style={{
          display: "grid",
          gridTemplateRows: "1fr auto",
          minHeight: "100vh",
        }}
        className="App"
      >
        <br></br>
        <div
          style={{
            gridRow: "1 / 2",
            border: "1px solid black",
            padding: "10px",
            maxWidth: "500px",
            margin: "0 auto",
            position: "relative",
            backgroundColor: "white",
          }}
          className="bookmark-box"
        >
          <progress value={progress} max="100" style={{ width: "100%" }} />
          {questions[currentQuestion]}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <Button
              size="sm"
              variant="primary"
              onClick={handlePrevClick}
              disabled={currentQuestion === 0}
              style={{ marginRight: "10px" }}
            >
              Previous
            </Button>
            <Button
              size="sm"
              variant="primary"
              onClick={handleNextClick}
              disabled={currentQuestion === questions.length - 1}
            >
              Next
            </Button>
          </div>
          <OpenAIOverlay
            basicQuestionSet={false}
            currentQuestion={questionToEval}
            openAIKey={keyData}
          ></OpenAIOverlay>
        </div>
      </div>
      <style>
        {`
          .bookmark-box:before {
            content: "";
            position: absolute;
            bottom: -20px;
            left: 50%;
            transform: translateX(-50%);
            width: 0;
            height: 0;
            border-left: 20px solid transparent;
            border-right: 20px solid transparent;
            border-top: 20px solid white;
          }
        `}
      </style>
    </AnswerContext.Provider>
  );
}

export default Detail_Questions;
