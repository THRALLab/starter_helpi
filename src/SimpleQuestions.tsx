import React, { useState, useEffect } from 'react';
import './SimpleQuestions.css'
import './General.css';
import { DarkModeToggle, bodyClassName } from './DarkModeToggle';
import LinkButton from './LinkButton';
import { SimpleQuestion } from './SimpleQuestion';
import { Button, Form } from 'react-bootstrap';
import jsonData from './SimpleQuestions.json';

//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

export function SimpleQuestions(): JSX.Element {
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
    const [numberOfQuestions, setNumberOfQuestions] = useState(15)
    const [questionNumber, setQuestionNumber] = useState(0)
    const [questionBody, setQuestionBody] = useState("Question...")
    const [option1, setOption1] = useState("Option 1...")
    const [option2, setOption2] = useState("Option 2...")
    const [color, setColor] = useState("")
    const [backButtonDisabled, setBackButtonDisabled] = useState(true)

    const colors = ["red", "orange", "green", "blue", "purple", "pink", "brown"]

    useEffect(() => {
        loadQuestions()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const loadQuestions = () => {
        const parsedData = JSON.parse(JSON.stringify(jsonData));
        const simpleQuestions: SimpleQuestion[] = parsedData.SIMPLE_QUESTIONS;
        setQuestions(simpleQuestions)
        setNumberOfQuestions(simpleQuestions.length)
        setQuestionNumber(questionNumber)
        setColor(colors[Math.floor(Math.random() * colors.length)])
        setQuestionBody(simpleQuestions[questionNumber].question)
        setOption1(simpleQuestions[questionNumber].option1)
        setOption2(simpleQuestions[questionNumber].option2)
        if(questionNumber === 14){
            setQuestionBody("Quiz Complete!");
        }
    }

    const nextQuestion = (selectedOption: string) => {
        if (questionNumber < numberOfQuestions - 1) {
            questions[questionNumber].answer = selectedOption
            setBackButtonDisabled(false)
            const nextQuestion = questionNumber + 1
            setQuestionNumber(nextQuestion)
            setColor(colors[Math.floor(Math.random() * colors.length)])
            setQuestionBody(questions[nextQuestion].question)
            setOption1(questions[nextQuestion].option1)
            setOption2(questions[nextQuestion].option2)
        } else {
            // End of quiz...
            window.alert("You've completed the Simple Quiz!")
            let nextButton = document.getElementById("nextButton");
            if(nextButton != null) {
                nextButton.classList.remove("Button-visible-true");
                nextButton.classList.add("Button-visible-false");
            }
            let reportButton = document.getElementById("reportButton");
            if(reportButton != null) {
                reportButton.classList.remove("Button-visible-false");
                reportButton.classList.add("Button-visible-true");
            }
        }   
    }

    const previousQuestion = () => {
        if (questionNumber >= 1) {
            if(questionNumber === 14){
                let nextButton = document.getElementById("nextButton");
                if(nextButton != null) {
                    nextButton.classList.remove("Button-visible-false");
                    nextButton.classList.add("Button-visible-true");
                }
                let reportButton = document.getElementById("reportButton");
                if(reportButton != null) {
                    reportButton.classList.remove("Button-visible-true");
                    reportButton.classList.add("Button-visible-false");
                }
            }
            else {
                const previousQuestion = questionNumber - 1
                setQuestionNumber(previousQuestion)
                setColor(colors[Math.floor(Math.random() * colors.length)])
                setQuestionBody(questions[previousQuestion].question)
                setOption1(questions[previousQuestion].option1)
                setOption2(questions[previousQuestion].option2)
                if (questionNumber === 1) {
                    setBackButtonDisabled(true)
                }
            }
        }
    }

    return (
        <div className={bodyClassName} id='bigBody'>
            <header className="General-header"><span className='Header-toggle'><DarkModeToggle></DarkModeToggle></span><span>The Career Lab </span><span className='Header-button'><LinkButton to="/" label="Home"></LinkButton></span> </header>
            
            <div className='Simple-body'>
                <span className='Simple-back-top'>
                    <Button onClick={previousQuestion} disabled={backButtonDisabled}>Back</Button>
                </span>
                <div className='Simple-progress'>
                    <div style={{ backgroundColor: color, padding: "10px", position: "relative", display: "flex" }}>
                        <div style={{ position: "absolute", top: 0, left: 0, width: `${100 * ((questionNumber + 1) / numberOfQuestions)}%`, height: "100%", backgroundColor: "rgba(0, 0, 0, 0.3)" }}></div>
                        Question {questionNumber + 1}/{numberOfQuestions}
                        <div style={{ marginLeft: "auto", alignSelf: "right" }}>
                            {Math.round(100 * ((questionNumber + 1) / numberOfQuestions))}% completed
                        </div>
                    </div>
                </div>
                <div className='Simple-question'>
                    <div style={{ padding: "10px", backgroundColor: color}}>
                        {questionBody}
                    </div>
                </div>
                <div className='Simple-buttons'>
                        <span className='Button-visible-true' id="nextButton">
                            <span className='Simple-option-1'>
                                <Button className="Button-next" onClick={() => nextQuestion(option1)}>{option1}</Button>
                            </span>
                            <span className='Simple-option-2'>
                                <Button className="Button-next" onClick={() => nextQuestion(option2)}>{option2}</Button>
                            </span>
                        </span>
                        <span className='Button-visible-false' id="reportButton">
                            <p className='Button-report'><LinkButton to="/simplereport" label="Report"></LinkButton></p>
                        </span>
                </div>
            </div>
            
            <div className='API-Footer'>
                <Form>
                    <Form.Label>API Key:</Form.Label>
                    <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
                    <br></br>
                    <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
                </Form>
            </div>
        </div>
    );
}