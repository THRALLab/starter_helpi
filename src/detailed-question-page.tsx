import React, { useState } from "react";
import { Button, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import "./detailed-question-page.css";

export function DetailedQuestionPage(): JSX.Element {
    const [answer1, setAnswer1] = useState<string>("");
    const [answer2, setAnswer2] = useState<string>("");
    const [answer3, setAnswer3] = useState<string>("");
    const [answer4, setAnswer4] = useState<string>("");
    const [answer5, setAnswer5] = useState<string>("");
    const [answer6, setAnswer6] = useState<string>("");
    const [answer7, setAnswer7] = useState<string>("");
    const [answer8, setAnswer8] = useState<string>("");

    function updateAnswer1(event: React.ChangeEvent<HTMLInputElement>) {setAnswer1(event.target.value);}
    function updateAnswer2(event: React.ChangeEvent<HTMLInputElement>) {setAnswer2(event.target.value);}
    function updateAnswer3(event: React.ChangeEvent<HTMLInputElement>) {setAnswer3(event.target.value);}
    function updateAnswer4(event: React.ChangeEvent<HTMLInputElement>) {setAnswer4(event.target.value);}
    function updateAnswer5(event: React.ChangeEvent<HTMLInputElement>) {setAnswer5(event.target.value);}
    function updateAnswer6(event: React.ChangeEvent<HTMLInputElement>) {setAnswer6(event.target.value);}
    function updateAnswer7(event: React.ChangeEvent<HTMLInputElement>) {setAnswer7(event.target.value);}
    function updateAnswer8(event: React.ChangeEvent<HTMLInputElement>) {setAnswer8(event.target.value);}
    
    const allQuestionsAnswered = answer1 && answer2 && answer3 && answer4 && answer5 && answer6 && answer7 && answer8;
    const numberQuestionsAnswered = (answer1 ? 1:0) + (answer2 ? 1:0) + (answer3 ? 1:0) + (answer4 ? 1:0) + (answer5 ? 1:0) + (answer6 ? 1:0) + (answer7 ? 1:0) + (answer8 ? 1:0);

    // State variable to track progress
    const [progress, setProgress] = useState(0);

    const handleAnswerQuestion = () => {
        setProgress(prevProgress => prevProgress + 1);
    };
    // const resetProgress  = () =>{
    //     setProgress(0);
    // }
    return (
        <div>
            <h2>Detailed Career Assessment</h2>
            <hr></hr>
            <p>The Career Helpi's Detailed Career Assessment allows users to fill out 
                a more personal quiz that reflects their specific interest and goals. 
                Here, users' results will be more personalized to who you are. Providing 
                extra detail allows the Career Helpi to better match a potential career.</p>
            <hr></hr>
            <h4>What are some skills you have or are planning to learn that will help you would like to apply to your career? (ex. Writing, Coding, Public Speaking, Foreign Languages, etc)</h4>
                <FormGroup >
                    <FormLabel>Answer:</FormLabel>
                    <div></div>
                    <FormControl
                        as="textarea"
                        rows={5}
                        value={answer1}
                        onChange={updateAnswer1}
                        className="responsebox"
                    ></FormControl>
                </FormGroup>
                <button className='submitbutton' onClick={handleAnswerQuestion}>Submit</button>
                <button className='resetbutton' onClick={() => setAnswer1("")}>Reset Answer</button>
            <hr></hr>
            <h4>What do you want your work environment to look like?</h4>
            <FormGroup>
                <FormLabel>Answer:</FormLabel>
                <div></div>
                <FormControl
                    as="textarea"
                    rows={5}
                    value={answer2}
                    onChange={updateAnswer2}
                    className="responsebox"
                ></FormControl>
            </FormGroup>
            <button className='submitbutton' onClick={handleAnswerQuestion}>Submit</button>
            <button className='resetbutton' onClick={() => setAnswer2("")}>Reset Answer</button>
            <hr></hr>
            <h4>How much collaboration do you want in your job?</h4>
            <FormGroup>
                <FormLabel>Answer:</FormLabel>
                <div></div>
                <FormControl
                    as="textarea"
                    rows={5}
                    value={answer3}
                    onChange={updateAnswer3}
                    className="responsebox"
                ></FormControl>
            </FormGroup>
            <button className='submitbutton' onClick={handleAnswerQuestion}>Submit</button>
            <button className='resetbutton' onClick={() => setAnswer3("")}>Reset Answer</button>
            <hr></hr>
            <h4>Do you have any passions or interests that you would like to incorporate into your career?</h4>
            <FormGroup>
                <FormLabel>Answer:</FormLabel>
                <div></div>
                <FormControl
                    as="textarea"
                    rows={5}
                    value={answer4}
                    onChange={updateAnswer4}
                    className="responsebox"
                ></FormControl>
            </FormGroup>
            <button className='submitbutton' onClick={handleAnswerQuestion}>Submit</button>
            <button className='resetbutton' onClick={() => setAnswer4("")}>Reset Answer</button>
            <hr></hr>
            <h4>What type of people do you see yourself working with?</h4>
            <FormGroup>
                <FormLabel>Answer:</FormLabel>
                <div></div>
                <FormControl
                    as="textarea"
                    rows={5}
                    value={answer5}
                    onChange={updateAnswer5}
                    className="responsebox"
                ></FormControl>
            </FormGroup>
            <button className='submitbutton' onClick={handleAnswerQuestion}>Submit</button>
            <button className='resetbutton' onClick={() => setAnswer5("")}>Reset Answer</button>
            <hr></hr>
            <h4>Do you enjoy work that is Structured or open-ended and flexible?</h4>
            <FormGroup>
                <FormLabel>Answer:</FormLabel>
                <div></div>
                <FormControl
                    as="textarea"
                    rows={5}
                    value={answer6}
                    onChange={updateAnswer6}
                    className="responsebox"
                ></FormControl>
            </FormGroup>
            <button className='submitbutton' onClick={handleAnswerQuestion}>Submit</button>
            <button className='resetbutton' onClick={() => setAnswer6("")}>Reset Answer</button>
            <hr></hr>
            <h4>What are some of your long term career goals?</h4>
            <FormGroup>
                <FormLabel>Answer:</FormLabel>
                <div></div>
                <FormControl
                    as="textarea"
                    rows={5}
                    value={answer7}
                    onChange={updateAnswer7}
                    className="responsebox"
                ></FormControl>
            </FormGroup>
            <button className='submitbutton' onClick={handleAnswerQuestion}>Submit</button>
            <button className='resetbutton' onClick={() => setAnswer7("")}>Reset Answer</button>
            <hr></hr>
            <h4>What are some jobs/careers that you are not interested in?</h4>
            <FormGroup>
                <FormLabel>Answer:</FormLabel>
                <div></div>
                <FormControl
                    as="textarea"
                    rows={5}
                    value={answer8}
                    onChange={updateAnswer8}
                    className="responsebox"
                ></FormControl>
            </FormGroup>
            <button className='submitbutton' onClick={handleAnswerQuestion}>Submit</button>
            <button className='resetbutton' onClick={() => setAnswer8("")}>Reset Answer</button>

            <div className="progress">
                <div className="progress-bar" style={{ width: `${(numberQuestionsAnswered / 8) * 100}%` }} role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={7}></div>
            </div>
            {allQuestionsAnswered && 
                <div>
                    <p className="questions">All questions answered!</p>
                    <Button className="submitAns">Submit Answers</Button>
                </div>}
            </div>
    );
}