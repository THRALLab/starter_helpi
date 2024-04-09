import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './General.css';
import LinkButton from './LinkButton';

export function SimpleQuestions(): JSX.Element {
    const [numberOfQuestions, setNumberOfQuestions] = useState("10")
    const [questionNumber, setQuestionNumber] = useState("1")
    const [questionBody, setQuestionBody] = useState("Question...")
    const [option1, setOption1] = useState("Option 1...")
    const [option2, setOption2] = useState("Option 2...")
    const [color, setColor] = useState("")
  
    const colors = ["red", "orange", "green", "blue", "purple", "pink", "brown"]
  
    const generateSimpleQuestionPage = () => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)]
      setColor(randomColor);
    }
  
    return (
      <div>
        <header className="General-header"> <p>The Career Lab <LinkButton to="/" label="Home"></LinkButton></p> </header>
        <div>
          <label>Number of Questions:</label><br />
          <input type="text" value={numberOfQuestions} onChange={(q) => setNumberOfQuestions(q.target.value)} /><br />
          <label>Question Number:</label><br />
          <input type="text" value={questionNumber} onChange={(q) => setQuestionNumber(q.target.value)} /><br />
          <label>Question:</label><br />
          <input type="text" value={questionBody} onChange={(q) => setQuestionBody(q.target.value)} /><br />
          <label>Option 1:</label><br />
          <input type="text" value={option1} onChange={(q) => setOption1(q.target.value)} /><br />
          <label>Option 2:</label><br />
          <input type="text" value={option2} onChange={(q) => setOption2(q.target.value)} /><br />
          <Button onClick={generateSimpleQuestionPage}>Generate Simple Question Page</Button> <br />
        </div>
        <div style={{ padding: "10px" }}>
          <div style={{ backgroundColor: color, color: "white", padding: "10px", position: "relative", display: "flex" }}>
            <div style={{ position: "absolute", top: 0, left: 0, width: `${100 * (parseInt(questionNumber) / parseInt(numberOfQuestions))}%`, height: "100%", backgroundColor: "rgba(0, 0, 0, 0.3)" }}></div>
              Question {questionNumber}/{numberOfQuestions}
            <div style={{ marginLeft: "auto", alignSelf: "right" }}>
              {100 * (parseInt(questionNumber) / parseInt(numberOfQuestions))}% completed
            </div>
          </div>
        </div>
        <div style={{ padding: "10px" }}>
          <div style={{ padding: "10px", backgroundColor: color, color: "white" }}>
            {questionBody}
          </div>
        </div>
        <div style={{ padding: "10px", display: "flex", justifyContent: "center" }}>
          <Button>{option1}</Button>
          <div style={{ width: "20px" }}></div>
          <Button>{option2}</Button>
        </div>
      </div>
    );
}