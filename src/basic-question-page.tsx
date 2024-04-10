
//import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./basic-question-page.css";
import { useState } from "react";

//import { Button } from "react-bootstrap";
export function BasicQuestionPage(): JSX.Element {
    // State variable to track progress
    const [progress, setProgress] = useState(0);

    // Function to handle user answering a question
    const handleAnswerQuestion = () => {
        // Increment progress by 1 for each answered question
        setProgress(prevProgress => prevProgress + 1);
    };
    const resetProgress  = () =>{
        setProgress(0);
    }
    return (

        <><div>
            <h2>Basic Questions Page</h2>
            <hr></hr>
            <p>If you feel unsure about your future career but don't want to
                think about it too much, look no further. In a few short minutes,
                you can get a basic idea as to what career suit you. All you have
                to do is answer the questions below!</p>
            <hr></hr>
            <h4>I prefer working in a group rather than alone.</h4>
            <button className="submitAns" onClick={handleAnswerQuestion}>Answer</button>
            <hr></hr>
            <h4>I'd rather create something new than learn what's already out there.</h4>
            <button className="submitAns" onClick={handleAnswerQuestion}>Answer</button>
            <hr></hr>
            <h4>I value enjoyment over a high salary.</h4>
            <button className="submitAns" onClick={handleAnswerQuestion}>Answer</button>
            <hr></hr>
            <h4>I prefer a quiet, distraction-free environment over a busy, noisy one.</h4>
            <button className="submitAns" onClick={handleAnswerQuestion}>Answer</button>
            <hr></hr>
            <h4>I'm crafty and good with my hands.</h4>
            <button className="submitAns" onClick={handleAnswerQuestion}>Answer</button>
            <hr></hr>
            <h4>I like working through decisions instead of going with my gut.</h4>
            <button className="submitAns" onClick={handleAnswerQuestion}>Answer</button>
            <hr></hr>
            <h4>I enjoy keeping up with current events.</h4>
            <button className="submitAns" onClick={handleAnswerQuestion}>Answer</button>
            
            {progress === 7 && 
                <div>
                    <hr></hr>
                    <p className="questions">All questions answered!</p>
                    <Button className="submitAns">Submit Answers</Button>
                </div>}
            <hr></hr>
            <button className="submitAns"onClick={resetProgress}>Reset Progress</button>
        </div><div className="progress">
                <div className="progress-bar" style={{ width: `${(progress / 7) * 100}%` }} role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={7}></div>
            </div></>


    );
    
}