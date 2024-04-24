
import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import BrainIcon from './modifiedBrainIcon.svg';
import homeIcon from './house.svg';
import './Pages.css';
import './questions.css';
import Confetti from 'react-dom-confetti';
import happyIcon from './smile.svg';
import mehIcon from './meh.svg';
import sadIcon from './sad.svg';

const config = { /* Configuration for confetti */
    angle: 90,
    spread: 150,
    startVelocity: 35,
    elementCount: 200,
    dragFriction: 0.12,
    duration: 9000,
    stagger: 3,
    width: "0.9vw",
    height: "0.9vw",
    perspective: "500px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
    recycle: false,
  };

interface DetailedProp {
    handlePage: (page: string) => void;
}

interface QuestionOption {
    question: string;
    options: string[];
}

const Detailed: React.FC<DetailedProp> = ({ handlePage }) => { /* Handes page changes */
const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
const [confetti, setConfetti] = useState(false);
const [confettiShown, setConfettiShown] = useState(false); 

const handleOptionClick = (option: string, questionIndex: number) => {
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[questionIndex] = option;
    setSelectedOptions(updatedSelectedOptions);
};

    const questions: QuestionOption[] = [ /* Questions and Options for detailed page */
        {
            question: "Do you see yourself as a natural leader and enjoy taking charge of projects?",
            options: ["Not at All", "", "Neutral", "","Very much"]
        },
        {
            question: "How significant is the opportunity to be creative and have passion within your work?",
            options: ["Not at All", "", "Neutral","", "Very Significant"]
        },
        {
            question: "How easily do you adapt to changes in your work environment and job responsibilities?",
            options: ["Difficult", "", "Neutral","","Easy"]
        },
        {
            question: "How important is it for you to make a measurable and meaningful impact through your work?",
            options: ["Not at All", "", "Neutral", "", "Very Important"]
        },
        {
            question: "How important is collaborative learning in your professional development?",
            options: ["Not at All", "", "Neutral", "", "Very Important"]
        },
        {
            question: "How significant is a structured and consistent routine within your workplace to your overall job satisfaction and productivity?",
            options: ["Not at All", "", "Neutral", "", "Very Significant"]
        },
        {
            question: "Do you prefer an office environment or an environment that is frequently changing?",
            options: ["Office", "", "Neutral", "", "Changing Environment"]
        }
    ];
    const allQuestionsAnswered = questions.every((q, index) => selectedOptions[index] !== undefined && selectedOptions[index] !== "");
   
    useEffect(() => {
        if (allQuestionsAnswered && !confettiShown) { /* Confetti effect when all questions are answered */
            setConfetti(true);
            setConfettiShown(true); 
            setTimeout(() => {
                setConfetti(false);
            }, 2000);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedOptions, confettiShown]);

    return (
        <div>
        <header className="header" /* Top of page */>
        {allQuestionsAnswered && (
      <div className="confetti-container">
        <Confetti active={confetti} config={config} />
      </div>
            )} 
        <div className="title-container">
        <img src={BrainIcon} alt="Brain Icon" className="brainIcon" onClick ={() => handlePage('Home')} /* Brain icon (Can switch to home page on click) */ />
        <h2 className="title" onClick ={() => handlePage('Home')}>Brain Spark</h2>
            <Button className="home-button" onClick={() => handlePage('Home')}><img src={homeIcon} alt="Home Page" className="homeIcon" /* Home button (switch to home page on click) */ /></Button>
        </div>
        </header>
        <Button className="basic-switch" onClick={() => handlePage('Basic')}>Basic</Button>
        <div className="column">
                {questions.map((q, idx) => (
                    <div key={idx}>
                        <h3 className="question">{q.question}</h3>
                        <div className="questionContainer">
                            {q.options.filter(option => option !== "").map((option, i) => ( /* Creates questions with radio buttons */
                                <div key={i} className="option">
                                    <label>{option}</label>
                                    <input
                                        type="radio"
                                        name={`question_${idx}`}
                                        value={option}
                                        checked={selectedOptions[idx] === option}
                                        onChange={() => handleOptionClick(option, idx)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            {allQuestionsAnswered && ( /* Response displayed when all questions are answered */
      <div className="response">
        <h3>Thank you for completing the questionnaire!</h3>
        <p>Your responses have been recorded.</p>
        <Button onClick={() => handlePage('Result')} className="response-button">View Results</Button>
      </div>
            )}
            <footer className="footer-space"></footer>
        </div>
    );
}

export default Detailed;