/* Imports */
import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import "./App.css";

interface Props {
    onChange: (key: string, value: string) => void;
    onSubmit: () => void;
}



/* Detailed Quiz Questions and Answer Choices */
const questionTexts = [
    "Q1: On a scale of one to five, how much do you like programming?",
    "Q2: Using the scale below, would you consider yourself to be a leader?",
    "Q3: How correct do you feel the following statement is: Reality is objective.",
    "Q4: How often do you find yourself thinking about the future?",
    "Q5: Can you see yourself in a career that has a fast-paced work environment?",
    "Q6: Do you relate to the following statement: I want a good-work life balance.",
    "Q7: Which one of the following careers sounds the most appealing?"
];

const answerChoices = [
    ["1", "2", "3", "4", "5"],
    ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"],
    ["100% correct", "75% correct", "50% correct", "25% correct", "0% correct"],
    ["All the time", "A lot of the time", "Sometimes", "Not very often", "Never"],
    ["Yes", "Maybe", "No"],
    ["Yes, I relate to that", "I feel indifferent", "No, I do not relate to that"],
    ["Carpenter", "Tailor", "Construction Worker", "Jeweler"]
];



/* Consts for Quiz Question Rendering, Answer Changes, Previous/Next Buttons, and Submit Button */
function DetQuestions({ onChange, onSubmit }: Props) {
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [answers, setAnswers] = useState<string[]>(new Array(7).fill(""));
    const [progress, setProgress] = useState<number>(0);

    useEffect(() => {
        const answeredQuestions = answers.filter(answer => answer !== "").length;
        const newProgress = (answeredQuestions / 7) * 100;
        setProgress(newProgress);
    }, [answers]);

    const handleAnswerChange = (value: string) => {
        const updatedAnswers = [...answers];
        updatedAnswers[currentQuestion] = value;
        setAnswers(updatedAnswers);
        onChange(`answer${currentQuestion + 1}`, value);
    };

    const handleNext = () => {
        if (currentQuestion < 6) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const handleSubmit = () => {
        const allQuestionsAnswered = answers.every(answer => answer !== "");
        if (allQuestionsAnswered) {
            onSubmit();
        } else {
            alert('Please answer all questions before submitting.');
        }
    };

    
    
/* Return Statments for Progress Bar Logic, Previous/Next Buttons, and Radio Buttons */
    return (
        <div className="progress-bar-wrapper">
            <div className="progress-bar-container">
                <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
                <p className="question">{questionTexts[currentQuestion]}</p>
                <div>
                    {answerChoices[currentQuestion].map((choice, index) => (
                        <Form.Check
                            key={index}
                            type="radio"
                            onChange={() => handleAnswerChange(choice)}
                            label={choice}
                            value={choice}
                            checked={answers[currentQuestion] === choice}
                            className={`custom-radio custom-radio-${index}`}
                        />
                    ))}
                </div>
                <div>
                    <Button className="Button-previous" onClick={handlePrevious} disabled={currentQuestion === 0}>Previous</Button>
                    <Button className="Button-next" onClick={handleNext} disabled={currentQuestion === 6}>Next</Button>
                    <Button
                        className="Button-submit"
                        onClick={handleSubmit}
                        disabled={!answers.every(answer => answer !== "")}
                        style={{ backgroundColor: answers.every(answer => answer !== "") ? '#7cc452' : '#ed5151' }}
                    >
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default DetQuestions;
