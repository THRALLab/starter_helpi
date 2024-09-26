import React, { useState } from "react";
import "./App.css";
import { Button, Form, Modal } from "react-bootstrap";
import "./Buttons.css";
function Buttons() {
  const [buttonOn, setButtonOn] = useState(false);
  return (
    <header className="App-buttons">
      <h1>Career Quizzes</h1>
      <h3>
        Have you ever wondered what you wanted to do in life, but could never
        find a passionate career? Well, now you can, with the Basic Quiz and
        Detailed Quiz, you can figure out your future. Anyone, from any age,
        race, ethnicity, sex, and nationality can take this quiz.
      </h3>

      <body>
        <header className="App-header2">
          <h1>Basic Quiz</h1>
        </header>
        <p>
          Basic Quiz offers a "Check All That Apply" questions. This allows the
          user to choose multiple answers for each question to generate a more
          accurate career result.
        </p>
        <button className="button-style" onClick={() => setButtonOn(true)}>
          Take Quiz
        </button>
        <div className="full-screen hidden-popup flex-container-center">
          <button className="button-style ">X</button>
        </div>
      </body>

      <header className="App-header2">
        <h1>Detailed Quiz</h1>
      </header>
      <p>
        Detailed Quiz offers fill in the blank questions. This allows the user
        to answer with their own freedom for each question to generate a more
        accurate career result.
      </p>
      <a
        href="https://Careerquizlo.org/Detailed"
        target="_blank"
        rel="noreferrer"
      >
        <button className="button-style">Take Quiz</button>
      </a>
      <header className="App-header2">
        <h1>Career Tips</h1>
      </header>
      <p>
        Career Tips allows users to learn how to get thier potential career.
        This page will enlighten users about useful sites and the hiring
        process.
      </p>
      <a href="https://Careerquizlo.org/Tips" target="_blank" rel="noreferrer">
        <button className="button-style">View Tips</button>
      </a>
    </header>
  );
}
export default Buttons;
