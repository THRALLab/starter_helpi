import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { DarkModeToggle, bodyClassName } from './DarkModeToggle';
import LinkButton from './LinkButton';
import { SimpleQuestion } from './SimpleQuestion';
import jsonData from './SimpleQuestions.json';

export function SimpleQuestions(): JSX.Element {
    const [questions, setQuestions] = useState<SimpleQuestion[]>([]);
    const [numberOfQuestions, setNumberOfQuestions] = useState(15)
    const [questionNumber, setQuestionNumber] = useState(0)
    const [questionBody, setQuestionBody] = useState("Question...")
    const [option1, setOption1] = useState("Option 1...")
    const [option2, setOption2] = useState("Option 2...")
    const [color, setColor] = useState("")

    const colors = ["red", "orange", "green", "blue", "purple", "pink", "brown"]

    useEffect(() => {
        loadQuestions()
    }, []);

    const loadQuestions = () => {
        const parsedData = JSON.parse(JSON.stringify(jsonData));
        const simpleQuestions: SimpleQuestion[] = parsedData.SIMPLE_QUESTIONS;
        setQuestions(simpleQuestions)
        setNumberOfQuestions(simpleQuestions.length)
        setQuestionNumber(questionNumber + 1)
        setColor(colors[Math.floor(Math.random() * colors.length)])
        setQuestionBody(simpleQuestions[questionNumber].question)
        setOption1(simpleQuestions[questionNumber].option1)
        setOption2(simpleQuestions[questionNumber].option2)
    }

    const nextQuestion = () => {
        if (questionNumber < numberOfQuestions) {
            setQuestionNumber(questionNumber + 1)
            setColor(colors[Math.floor(Math.random() * colors.length)])
            setQuestionBody(questions[questionNumber].question)
            setOption1(questions[questionNumber].option1)
            setOption2(questions[questionNumber].option2)
        } else {
            // End of quiz...
            window.alert("You've completed the Simple Quiz!")
        }   
    }

    return (
        <div className = {bodyClassName} id="bigBody">
            <header className="General-header"><p className='Header-toggle'><DarkModeToggle></DarkModeToggle></p><p>The Career Lab </p><p className='Header-button'><LinkButton to="/" label="Home"></LinkButton></p> </header>
            <div style={{ padding: "10px" }}>
                <div style={{ backgroundColor: color, color: "white", padding: "10px", position: "relative", display: "flex" }}>
                    <div style={{ position: "absolute", top: 0, left: 0, width: `${100 * (questionNumber / numberOfQuestions)}%`, height: "100%", backgroundColor: "rgba(0, 0, 0, 0.3)" }}></div>
                        Question {questionNumber}/{numberOfQuestions}
                    <div style={{ marginLeft: "auto", alignSelf: "right" }}>
                        {Math.round(100 * (questionNumber / numberOfQuestions))}% completed
                    </div>
                </div>
            </div>
            <div style={{ padding: "10px" }}>
                <div style={{ padding: "10px", backgroundColor: color, color: "white" }}>
                    {questionBody}
                </div>
            </div>
            <div style={{ padding: "10px", display: "flex", justifyContent: "center" }}>
                <Button onClick={nextQuestion}>{option1}</Button>
                <div style={{ width: "20px" }}></div>
                <Button onClick={nextQuestion}>{option2}</Button>
            </div>
        </div>
    );
}