
//import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./basic-question-page.css";
import { useState } from "react";
import React from "react";
import { ChatGPT } from "./AI";
import { setQuery } from "./ai_query";


//import { Button } from "react-bootstrap";
export function BasicQuestionPage({userKey}: {userKey: string}): JSX.Element {
    // State variable to track progress
    const [progress, setProgress] = useState(0);
    // State to track which questions have been answered
    type multAnswers = 'Strongly Disagree' | 'Disagree' | 'Neutral' | 'Agree' | 'Strongly Agree'|''
    const [lastPress1, setLastPress1] = useState<multAnswers>('');
    const [lastPress2, setLastPress2] = useState<multAnswers>('');
    const [lastPress3, setLastPress3] = useState<multAnswers>('');
    const [lastPress4, setLastPress4] = useState<multAnswers>('');
    const [lastPress5, setLastPress5] = useState<multAnswers>('');
    const [lastPress6, setLastPress6] = useState<multAnswers>('');
    const [lastPress7, setLastPress7] = useState<multAnswers>('');
    //State to track current question

    type questions = 'Q1' | 'Q2' |'Q3' |'Q4' |'Q5' |'Q6' |'Q7' | 'End' | 'Results' | 'CareerMatch' | 'Q0'
    
    const [currentQuestion, setCurrentQuestion] = useState<questions>('Q0')

    // Function to handle user answering a question
    const handleAnswerQuestion1 = (response1: multAnswers) => {
        // Increment progress by 1 for each answered question
          if(lastPress1 === ''){
            setProgress(prevProgress => prevProgress + 1);
            const newQuest = questOrderForward['Q1']
            setCurrentQuestion(newQuest)
          }
          setLastPress1(response1)
        }
    const handleAnswerQuestion2 = (response2: multAnswers) => {
          // Increment progress by 1 for each answered question
            if(lastPress2 === ''){
              setProgress(prevProgress => prevProgress + 1);
              const newQuest = questOrderForward['Q2']
              setCurrentQuestion(newQuest)
            }setLastPress2(response2)
          }
  const handleAnswerQuestion3 = (response3: multAnswers) => {
        // Increment progress by 1 for each answered question
          if(lastPress3 === ''){
            setProgress(prevProgress => prevProgress + 1);
            const newQuest = questOrderForward['Q3']
            setCurrentQuestion(newQuest)
          }setLastPress3(response3)
        }
  const handleAnswerQuestion4 = (response4: multAnswers) => {
          // Increment progress by 1 for each answered question
            if(lastPress4 === ''){
              setProgress(prevProgress => prevProgress + 1);
              const newQuest = questOrderForward['Q4']
              setCurrentQuestion(newQuest)
            }setLastPress4(response4)
          }      
  const handleAnswerQuestion5 = (response5: multAnswers) => {
            // Increment progress by 1 for each answered question
              if(lastPress5 === ''){
                setProgress(prevProgress => prevProgress + 1);
                const newQuest = questOrderForward['Q5']
                setCurrentQuestion(newQuest)
              }setLastPress5(response5)
            }

const handleAnswerQuestion6 = (response6: multAnswers) => {
              // Increment progress by 1 for each answered question
                if(lastPress6 === ''){
                  setProgress(prevProgress => prevProgress + 1);
                  const newQuest = questOrderForward['Q6']
                  setCurrentQuestion(newQuest)
                }setLastPress6(response6)
              } 
  
  const handleAnswerQuestion7 = (response7: multAnswers) => {
                // Increment progress by 1 for each answered question
                  if(lastPress7 === ''){
                    setProgress(prevProgress => prevProgress + 1);
                    const newQuest = questOrderForward['Q7']
                    setCurrentQuestion(newQuest)
                  }setLastPress7(response7)
                }
    const resetProgress  = () =>{
        setProgress(0);
        setLastPress1('');
        setLastPress2('');
        setLastPress3('');
        setLastPress4('');
        setLastPress5('');
        setLastPress6('');
        setLastPress7('');
        setCurrentQuestion("Q1")
    }
const questOrderForward: Record<questions,questions> = {
      Q1: 'Q2',
      Q2: 'Q3',
      Q3: "Q4",
      Q4: "Q5",
      Q5: "Q6",
      Q6: "Q7",
      Q7: "Results",
      End: "Results",
      Results: "CareerMatch",
      CareerMatch: "Q0",
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
      End: "Q7",
      Results: "End",
      CareerMatch: "Results",
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



    const presses: multAnswers[] = [lastPress1, lastPress2, lastPress3, lastPress4, lastPress5, lastPress6, lastPress7];
    

    return (

        <><div>
          <div hidden={currentQuestion!=='Q0'}>
            <h2>Basic Questions Page </h2>
            <hr className="lines"></hr>
            <p>If you feel unsure about your future career but don't want to
                think about it too much, look no further. In a few short minutes,
                you can get a basic idea as to what career suit you. All you have
                to do is answer the questions below!</p>
                </div>
                <div hidden={currentQuestion!=='Q0'}>
                  <button className="submitAns" onClick={()=>nextQuestion("Q0")}>Start</button>


                

            </div>

            <hr className="lines" hidden={currentQuestion === 'Results' || currentQuestion === 'CareerMatch'}></hr>

            <div hidden={currentQuestion!=='Q1'}>
            <h4 hidden={currentQuestion!=='Q1'}>I prefer working in a group rather than alone.</h4>
            <button className={lastPress1 !== 'Strongly Disagree' ? "strong_disagree" : "current_answer"}  onClick={() => handleAnswerQuestion1('Strongly Disagree')} disabled={'Strongly Disagree' === lastPress1}>Strongly Disagree</button>
            <button className={lastPress1 !== 'Disagree' ? "disagree" : "current_answer"} onClick={() => handleAnswerQuestion1('Disagree')} disabled={'Disagree' === lastPress1}>Disagree</button>
            <button className={lastPress1 !== 'Neutral' ? "neutral" : "current_answer"} onClick={() => handleAnswerQuestion1('Neutral')} disabled={'Neutral' === lastPress1}>Neutral</button>
            <button className={lastPress1 !== 'Agree' ? "agree" : "current_answer"} onClick={() => handleAnswerQuestion1('Agree')} disabled={'Agree' === lastPress1}>Agree</button>
            <button className={lastPress1 !== 'Strongly Agree' ? "strong_agree" : "current_answer"} onClick={() => handleAnswerQuestion1('Strongly Agree')} disabled={'Strongly Agree' === lastPress1}>Strongly Agree</button>
            <div></div>
            <button className="submitAns" onClick={()=>nextQuestion("Q1")}>Next</button>
            
            <hr className="lines"></hr>
            </div>
            <div hidden={currentQuestion!=='Q2'}>
            <h4>I'd rather create something new than learn what's already out there.</h4>
            <button className={lastPress2 !== 'Strongly Disagree' ? "strong_disagree" : "current_answer"} onClick={() => handleAnswerQuestion2('Strongly Disagree')} disabled={'Strongly Disagree' === lastPress2}>Strongly Disagree</button>
            <button className={lastPress2 !== 'Disagree' ? "disagree" : "current_answer"} onClick={() => handleAnswerQuestion2('Disagree')} disabled={'Disagree' === lastPress2}>Disagree</button>
            <button className={lastPress2 !== 'Neutral' ? "neutral" : "current_answer"} onClick={() => handleAnswerQuestion2('Neutral')} disabled={'Neutral' === lastPress2}>Neutral</button>
            <button className={lastPress2 !== 'Agree' ? "agree" : "current_answer"} onClick={() => handleAnswerQuestion2('Agree')} disabled={'Agree' === lastPress2}>Agree</button>
            <button className={lastPress2 !== 'Strongly Agree' ? "strong_agree" : "current_answer"} onClick={() => handleAnswerQuestion2('Strongly Agree')} disabled={'Strongly Agree' === lastPress2}>Strongly Agree</button>
            <div></div>
            <button className="submitAns" onClick={()=>lastQuestion("Q2")}>Prev</button><button className="submitAns" onClick={()=>nextQuestion("Q2")}>Next</button>
            <hr className="lines"></hr>
            </div>
            
            <div hidden={currentQuestion!=='Q3'}>
            <h4>I value enjoyment over a high salary.</h4>
            <button className={lastPress3 !== 'Strongly Disagree' ? "strong_disagree" : "current_answer"} onClick={() => handleAnswerQuestion3('Strongly Disagree')} disabled={'Strongly Disagree' === lastPress3}>Strongly Disagree</button>
            <button className={lastPress3 !== 'Disagree' ? "disagree" : "current_answer"} onClick={() => handleAnswerQuestion3('Disagree')} disabled={'Disagree' === lastPress3}>Disagree</button>
            <button className={lastPress3 !== 'Neutral' ? "neutral" : "current_answer"} onClick={() => handleAnswerQuestion3('Neutral')} disabled={'Neutral' === lastPress3}>Neutral</button>
            <button className={lastPress3 !== 'Agree' ? "agree" : "current_answer"} onClick={() => handleAnswerQuestion3('Agree')} disabled={'Agree' === lastPress3}>Agree</button>
            <button className={lastPress3 !== 'Strongly Agree' ? "strong_agree" : "current_answer"} onClick={() => handleAnswerQuestion3('Strongly Agree')} disabled={'Strongly Agree' === lastPress3}>Strongly Agree</button>
            <div></div>
            <button className="submitAns" onClick={()=>lastQuestion("Q3")}>Prev</button><button className="submitAns" onClick={()=>nextQuestion("Q3")}>Next</button>
            <hr className="lines"></hr>
            </div>

            <div hidden={currentQuestion!=='Q4'}>
            <h4>I prefer a quiet, distraction-free environment over a busy, noisy one.</h4>
            <button className={lastPress4 !== 'Strongly Disagree' ? "strong_disagree" : "current_answer"} onClick={() => handleAnswerQuestion4('Strongly Disagree')} disabled={'Strongly Disagree' === lastPress4}>Strongly Disagree</button>
            <button className={lastPress4 !== 'Disagree' ? "disagree" : "current_answer"} onClick={() => handleAnswerQuestion4('Disagree')} disabled={'Disagree' === lastPress4}>Disagree</button>
            <button className={lastPress4 !== 'Neutral' ? "neutral" : "current_answer"} onClick={() => handleAnswerQuestion4('Neutral')} disabled={'Neutral' === lastPress4}>Neutral</button>
            <button className={lastPress4 !== 'Agree' ? "agree" : "current_answer"} onClick={() => handleAnswerQuestion4('Agree')} disabled={'Agree' === lastPress4}>Agree</button>
            <button className={lastPress4 !== 'Strongly Agree' ? "strong_agree" : "current_answer"} onClick={() => handleAnswerQuestion4('Strongly Agree')} disabled={'Strongly Agree' === lastPress4}>Strongly Agree</button>
            <div></div>
            <button className="submitAns" onClick={()=>lastQuestion("Q4")}>Prev</button><button className="submitAns" onClick={()=>nextQuestion("Q4")}>Next</button>
            <hr className="lines"></hr>
            </div>

            <div hidden={currentQuestion!=='Q5'}>
            <h4>I'm crafty and good with my hands.</h4>
            <button className={lastPress5 !== 'Strongly Disagree' ? "strong_disagree" : "current_answer"} onClick={() => handleAnswerQuestion5('Strongly Disagree')} disabled={'Strongly Disagree' === lastPress5}>Strongly Disagree</button>
            <button className={lastPress5 !== 'Disagree' ? "disagree" : "current_answer"} onClick={() => handleAnswerQuestion5('Disagree')} disabled={'Disagree' === lastPress5}>Disagree</button>
            <button className={lastPress5 !== 'Neutral' ? "neutral" : "current_answer"} onClick={() => handleAnswerQuestion5('Neutral')} disabled={'Neutral' === lastPress5}>Neutral</button>
            <button className={lastPress5 !== 'Agree' ? "agree" : "current_answer"} onClick={() => handleAnswerQuestion5('Agree')} disabled={'Agree' === lastPress5}>Agree</button>
            <button className={lastPress5 !== 'Strongly Agree' ? "strong_agree" : "current_answer"} onClick={() => handleAnswerQuestion5('Strongly Agree')} disabled={'Strongly Agree' === lastPress5}>Strongly Agree</button>
            <div></div>
            <button className="submitAns" onClick={()=>lastQuestion("Q5")}>Prev</button><button className="submitAns" onClick={()=>nextQuestion("Q5")}>Next</button>
            <hr className="lines"></hr>
            </div>

            <div hidden={currentQuestion!=='Q6'}>
            <h4>I like working through decisions instead of going with my gut.</h4>
            <button className={lastPress6 !== 'Strongly Disagree' ? "strong_disagree" : "current_answer"} onClick={() => handleAnswerQuestion6('Strongly Disagree')} disabled={'Strongly Disagree' === lastPress6}>Strongly Disagree</button>
            <button className={lastPress6 !== 'Disagree' ? "disagree" : "current_answer"} onClick={() => handleAnswerQuestion6('Disagree')} disabled={'Disagree' === lastPress6}>Disagree</button>
            <button className={lastPress6 !== 'Neutral' ? "neutral" : "current_answer"} onClick={() => handleAnswerQuestion6('Neutral')} disabled={'Neutral' === lastPress6}>Neutral</button>
            <button className={lastPress6 !== 'Agree' ? "agree" : "current_answer"} onClick={() => handleAnswerQuestion6('Agree')} disabled={'Agree' === lastPress6}>Agree</button>
            <button className={lastPress6 !== 'Strongly Agree' ? "strong_agree" : "current_answer"} onClick={() => handleAnswerQuestion6('Strongly Agree')} disabled={'Strongly Agree' === lastPress6}>Strongly Agree</button>
            <div></div>
            <button className="submitAns" onClick={()=>lastQuestion("Q6")}>Prev</button><button className="submitAns" onClick={()=>nextQuestion("Q6")}>Next</button>
            <hr className="lines"></hr>
            </div>

            <div hidden={currentQuestion!=='Q7'}>
            <h4>I enjoy keeping up with current events.</h4>
            <button className={lastPress7 !== 'Strongly Disagree' ? "strong_disagree" : "current_answer"} onClick={() => handleAnswerQuestion7('Strongly Disagree')} disabled={'Strongly Disagree' === lastPress7}>Strongly Disagree</button>
            <button className={lastPress7 !== 'Disagree' ? "disagree" : "current_answer"} onClick={() => handleAnswerQuestion7('Disagree')} disabled={'Disagree' === lastPress7}>Disagree</button>
            <button className={lastPress7 !== 'Neutral' ? "neutral" : "current_answer"} onClick={() => handleAnswerQuestion7('Neutral')} disabled={'Neutral' === lastPress7}>Neutral</button>
            <button className={lastPress7 !== 'Agree' ? "agree" : "current_answer"} onClick={() => handleAnswerQuestion7('Agree')} disabled={'Agree' === lastPress7}>Agree</button>
            <button className={lastPress7 !== 'Strongly Agree' ? "strong_agree" : "current_answer"} onClick={() => handleAnswerQuestion7('Strongly Agree')} disabled={'Strongly Agree' === lastPress7}>Strongly Agree</button>
            <div></div>
            <button className="submitAns" onClick={()=>lastQuestion("Q7")}>Prev</button>
            <hr className="lines"></hr>
            </div>
            <div hidden={currentQuestion!=='End'}>
            <button className="submitAns" onClick={()=>lastQuestion("End")}>Prev</button>
            <hr className="lines"></hr>
            </div>
            {progress === 7 && currentQuestion!=='Results' && currentQuestion!=='CareerMatch' &&
                <div>
                    
                    <p className="questions">All questions answered!</p>
                    <Button className="submitAns" onClick={() => nextQuestion('End')}>Submit Answers</Button>
                </div>}
            
            <button className="submitAns"onClick={resetProgress} hidden={currentQuestion === "Results" || currentQuestion === 'CareerMatch'}>Reset Progress</button>

              <div hidden={currentQuestion !== 'Results'}>
                <h1>Results Page</h1>
                <h3>Your Answers Are:</h3>
                <p>I prefer working in a group rather than alone: {lastPress1}</p>
                <p>I'd rather create something new than learn what's already out there: {lastPress2}</p>
                <p>I value enjoyment over a high salary: {lastPress3}</p>
                <p>I prefer a quiet, distraction-free environment over a busy, noisy one: {lastPress4}</p>
                <p>I'm crafty and good with my hands: {lastPress5}</p>
                <p>I like working through decisions instead of going with my gut: {lastPress6}</p>
                <p>I enjoy keeping up with current events: {lastPress7}</p>
                <button className="submitAns" onClick={() => lastQuestion("Q7")}>Go Back To Questions </button>
                <button className="submitAns" onClick={() => nextQuestion('Results')}>Get Your Personalized Career Match</button>
              </div>

              <div className="CareerMatchText" hidden={currentQuestion !== 'CareerMatch'}>
                <h1>Your Career Report</h1>
                {/* <h2>Top 5 Careers</h2>
                <ChatGPT userKey={userKey} content={setQuery(presses)}></ChatGPT>
                <h2>Your Top Industry Matches:</h2>
                <ChatGPT userKey={userKey} content={setQuery2(presses)}></ChatGPT>
                <h2>Your Top Job Suggestions:</h2>
                <ChatGPT userKey={userKey} content={setQuery3(presses)}></ChatGPT>
                <h2> Overall Summary:</h2>
                <ChatGPT userKey={userKey} content={setQuery4(presses)}></ChatGPT>
                <h2> Career Report:</h2> */}
                <ChatGPT userKey={userKey} content={setQuery(presses)}></ChatGPT>
              </div>
        </div>
        <div className="progress-container">
        <div className="progress">
                <div className="progress-bar" style={{ width: `${(progress / 7) * 100}%` }} role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={7}></div>
            </div></div></>


    );
    
}