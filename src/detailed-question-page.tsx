import React, { useState } from "react";
import { Button, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import "./detailed-question-page.css";
import { ChatGPT } from "./AI";
import { generateDetailedAnswers} from "./ai_query";

export function DetailedQuestionPage({userKey}: {userKey: string}): JSX.Element {
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

    //State to track current question

    type questions = 'Q1' | 'Q2' |'Q3' |'Q4' |'Q5' |'Q6' |'Q7' | 'Results' | 'Q0' | 'Q8'
    
    const [currentQuestion, setCurrentQuestion] = useState<questions>('Q0')
    
    const allQuestionsAnswered = answer1 && answer2 && answer3 && answer4 && answer5 && answer6 && answer7 && answer8;
    const numberQuestionsAnswered = (answer1 ? 1:0) + (answer2 ? 1:0) + (answer3 ? 1:0) + (answer4 ? 1:0) + (answer5 ? 1:0) + (answer6 ? 1:0) + (answer7 ? 1:0) + (answer8 ? 1:0);

    // State variable to track progress
    const [progress] = useState(0);

    // const handleAnswerQuestion = () => {
    //     setProgress(prevProgress => prevProgress + 1);
    // };
    // const resetProgress  = () =>{
    //     setProgress(0);
    // }
    const questOrderForward: Record<questions,questions> = {
        Q1: 'Q2',
        Q2: 'Q3',
        Q3: "Q4",
        Q4: "Q5",
        Q5: "Q6",
        Q6: "Q7",
        Q7: "Q8",
        Q8: "Results",
        Results: "Results",
        Q0: "Q1"
      }
  
      const questOrderBackward: Record<questions,questions> = {
        Q1: 'Q1',
        Q2: 'Q1',
        Q3: "Q2",
        Q4: "Q3",
        Q5: "Q4",
        Q6: "Q5",
        Q7: "Q6",
        Q8: "Q7",
        Results: "Q8",
        Q0: 'Q0'
      }
  
      const nextQuestion = (questNum: questions) =>{
        const newQuest = questOrderForward[questNum]
  setCurrentQuestion(newQuest)
  
      }
  
      const lastQuestion = (questNum: questions) =>{
        const newQuest = questOrderBackward[questNum]
  setCurrentQuestion(newQuest)
  
      }
  
      function validateInput(ans: string): Boolean{
        if (ans.length > 20){
            return true;
        }
        else{
            return false;
        }
      }
      // State variable to track if the answers have been submitted
    const [answersSubmitted, setAnswersSubmitted] = useState(false);

    // Function to handle form submission
    const handleSubmit = () => {
        // Handle form submission here, e.g., submit the answers to a server
        // After submission, set answersSubmitted to true
        setAnswersSubmitted(true);
    };
    const goBackBtn = () => {
        setAnswersSubmitted(false);
    }

    const answers: string[] = [answer1,answer2,answer3,answer4,answer5,answer6,answer7,answer8] 

    return (
    
        <><><div hidden={answersSubmitted}>
            <h2 hidden={currentQuestion !== "Q0"}>Detailed Career Assessment</h2>
            <hr className="lines"></hr>
            <p className="bodyText" hidden={currentQuestion !== "Q0"}>The Career Helpi's Detailed Career Assessment allows users to fill out
                a more personal quiz that reflects their specific interest and goals.
                Here, users' results will be more personalized to who you are. Providing
                extra detail allows the Career Helpi to better match a potential career.</p>
            <div hidden={currentQuestion !== 'Q0'}>
                <button className="submitAns" onClick={() => nextQuestion("Q0")}>Start</button>


            </div>
            <hr hidden={currentQuestion !== "Q0"} className="lines"></hr>
            <div hidden={currentQuestion !== 'Q1'}>

                <h4 className="bodyText">What are some skills you have or are planning to learn that will help you would like to apply to your career? (ex. Writing, Coding, Public Speaking, Foreign Languages, etc)</h4>
                <FormGroup>
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
                {!validateInput(answer1) && <div className="validation">Please include more than 20 characters</div>}
                <button className='resetbutton' onClick={() => setAnswer1("")}>Reset Answer</button>
                <hr className="lines"></hr>
                <button className="submitAns" onClick={() => nextQuestion("Q1")}>Next</button>

            </div>

            <div hidden={currentQuestion !== 'Q2'}>
                <h4 className="bodyText">What do you want your work environment to look like?</h4>
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
                {!validateInput(answer2) && <div className="validation">Please include more than 20 characters</div>}
                <button className='resetbutton' onClick={() => setAnswer2("")}>Reset Answer</button>
                <hr className="lines"></hr>
                <button className="submitAns" onClick={() => lastQuestion("Q2")}>Prev</button><button className="submitAns" onClick={() => nextQuestion("Q2")}>Next</button>

            </div>

            <div hidden={currentQuestion !== 'Q3'}>

                <h4 className="bodyText">How much collaboration do you want in your job?</h4>
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
                {!validateInput(answer3) && <div className="validation">Please include more than 20 characters</div>}
                <button className='resetbutton' onClick={() => setAnswer3("")}>Reset Answer</button>
                <hr className="lines"></hr>
                <button className="submitAns" onClick={() => lastQuestion("Q3")}>Prev</button><button className="submitAns" onClick={() => nextQuestion("Q3")}>Next</button>

            </div>

            <div hidden={currentQuestion !== 'Q4'}>


                <h4 className="bodyText">Do you have any passions or interests that you would like to incorporate into your career?</h4>
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
                {!validateInput(answer4) && <div className="validation">Please include more than 20 characters</div>}
                <button className='resetbutton' onClick={() => setAnswer4("")}>Reset Answer</button>
                <hr className="lines"></hr>
                <button className="submitAns" onClick={() => lastQuestion("Q4")}>Prev</button><button className="submitAns" onClick={() => nextQuestion("Q4")}>Next</button>

            </div>
            <div hidden={currentQuestion !== 'Q5'}>
                <h4 className="bodyText">What type of people do you see yourself working with?</h4>
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
                {!validateInput(answer5) && <div className="validation">Please include more than 20 characters</div>}
                <button className='resetbutton' onClick={() => setAnswer5("")}>Reset Answer</button>
                <hr className="lines"></hr>
                <button className="submitAns" onClick={() => lastQuestion("Q5")}>Prev</button><button className="submitAns" onClick={() => nextQuestion("Q5")}>Next</button>

            </div>

            <div hidden={currentQuestion !== 'Q6'}>

                <h4 className="bodyText">Do you enjoy work that is Structured or open-ended and flexible?</h4>
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
                {!validateInput(answer6) && <div className="validation">Please include more than 20 characters</div>}
                <button className='resetbutton' onClick={() => setAnswer6("")}>Reset Answer</button>
                <hr className="lines"></hr>
                <button className="submitAns" onClick={() => lastQuestion("Q6")}>Prev</button><button className="submitAns" onClick={() => nextQuestion("Q6")}>Next</button>

            </div>
            <div hidden={currentQuestion !== 'Q7'}>
                <h4 className="bodyText">What are some of your long term career goals?</h4>
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
                {!validateInput(answer7) && <div className="validation">Please include more than 20 characters</div>}
                <button className='resetbutton' onClick={() => setAnswer7("")}>Reset Answer</button>
                <hr className="lines"></hr>
                <button className="submitAns" onClick={() => lastQuestion("Q7")}>Prev</button><button className="submitAns" onClick={() => nextQuestion("Q7")}>Next</button>

            </div>
            <div hidden={currentQuestion !== 'Q8'}>
                <h4 className="bodyText">What are some jobs/careers that you are not interested in?</h4>
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
                {!validateInput(answer8) && <div className="validation">Please include more than 20 characters</div>}
                
                <button className='resetbutton' onClick={() => setAnswer8("")}>Reset Answer</button>
                <div></div>
                <hr className="lines"></hr>
                <button className="submitAns" onClick={() => lastQuestion("Q8")}>Prev</button>


            </div>

            <div hidden={currentQuestion !== "Results"}>
                <button className="submitAns" onClick={() => lastQuestion("Results")}>Prev</button><button className="submitAns" onClick={() => nextQuestion("Results")}>Next</button>


            </div>


            <div className="progress-container">
                <div className="progress">
                    <div className="progress-bar" style={{ width: `${(numberQuestionsAnswered / 8) * 100}%` }} role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={7}></div>
                </div>
            </div>
            {allQuestionsAnswered && validateInput(answer8) && validateInput(answer7) && validateInput(answer6) && validateInput(answer5) && validateInput(answer4) && validateInput(answer3) && validateInput(answer2) && validateInput(answer1) &&
                <div>
                    <p className="questions">All questions answered!</p>
                    <Button onClick={handleSubmit} className="submitAns">Submit Answers</Button>
                </div>}
        </div><div hidden={!answersSubmitted || currentQuestion === "Results"}>
                <h1>Results Page</h1>
                <h3>Your Answers Are:</h3>
                <p>What are some skills you have or are planning to learn that will help you would like to apply to your career? (ex. Writing, Coding, Public Speaking, Foreign Languages, etc): {answer1}</p>
                <p>What do you want your work environment to look like?: {answer2}</p>
                <p>How much collaboration do you want in your job?: {answer3}</p>
                <p>Do you have any passions or interests that you would like to incorporate into your career?: {answer4}</p>
                <p>What type of people do you see yourself working with?: {answer5}</p>
                <p>Do you enjoy work that is Structured or open-ended and flexible?: {answer6}</p>
                <p>What are some of your long term career goals?: {answer7}</p>
                <p>What are some jobs/careers that you are not interested in?: {answer8}</p>
                <button className="submitAns" onClick={goBackBtn}>Go Back To Questions</button>
                <button className="submitAns" onClick={() => nextQuestion('Results')}>Get Your Personalized Career Match</button>

            </div></><div className="CareerMatchText" hidden={currentQuestion !== 'Results'}>
                <h1>Your Personalized Career Suggestions</h1>
                <div></div>
                <div className="bodyText">
                <ChatGPT userKey={userKey} content={generateDetailedAnswers(answers)}></ChatGPT>
                </div>
            </div></>
    );
}