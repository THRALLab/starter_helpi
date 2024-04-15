import React, { useState } from "react";
import { Button } from "react-bootstrap";
// import { BasicQuizInfo } from "./BasicQuiz";
// import { BasicQuestion } from "./BasicQuiz2";
import "./App.css";

export function BasicQuiz() {
  // function openPopup(): void {
  //   const screenLeft = window.screenLeft ? window.screenLeft : window.screenX;
  //   const screenTop = window.screenTop ? window.screenTop : window.screenY;
  //   const width = window.innerWidth;
  //   const height = window.innerHeight;
  //   const left = screenLeft + (width - 500) / 2;
  //   const top = screenTop + (height - 500) / 2;
  //   const openWindow = window.open(
  //     "",
  //     "popup",
  //     `width=500,height=500,left=${left},top=${top}`
  //   );
  //   if (openWindow) {
  //     openWindow.document.write(`<div>${BasicQuestion}</div>`);
  //   }
  //   handleButton();
  // }
  const [displayText, setDisplayText] = useState(false);
  const handleButton = () => {
    setDisplayText(!displayText);
  };
  return (
    <div>
      <div>
        <h1 className="App-buttons4">Basic Quiz</h1>
        <p className="Career-Quiz-text">
          Basic Quiz provides the option of "Check All That Apply" questions,
          letting users select various answers per question. This facilitates a
          more precise generation of career results.
        </p>
      </div>
      <div>
        <h1>
          <Button onClick={handleButton} className="Career-Quiz2">
            Basic Quiz
          </Button>
          {displayText && (
            <>
              {/* <BasicQuizInfo></BasicQuizInfo> */}
              {/* <BasicQuestion
                questions={""}
                answers={[]}
                userAnswer={undefined}
                questionNr={0}
                totalQuestions={0}
              ></BasicQuestion> */}
            </>
          )}
        </h1>
      </div>
    </div>
  );
}

export function DetailedQuiz() {
  const [displayText, setDisplayText] = useState(false);
  const handleButton = () => {
    setDisplayText(!displayText);
  };
  return (
    <div>
      <div>
        <h1 className="App-buttons4">Detailed Quiz</h1>
        <p className="Career-Quiz-text">
          Detailed Quiz presents questions that require users to fill in the
          blank, providing them with the liberty to answer in their own unique
          way for each question. This method ensures a more precise
          determination of their career outcome.
        </p>
      </div>
      <div>
        <h1>
          <Button onClick={handleButton} className="Career-Quiz2">
            {/* <FaArrowRight /> */}
            Detailed Quiz
          </Button>
          {displayText && (
            <div className="Basic-QuizText">
              <p></p>
            </div>
          )}
        </h1>
      </div>
    </div>
  );
}
