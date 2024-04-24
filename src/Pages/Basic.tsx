
import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import BrainIcon from './modifiedBrainIcon.svg';
import homeIcon from './house.svg';
import './Pages.css';
import './questions.css';
import Confetti from 'react-dom-confetti';

const config = {
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

interface BasicProp {
    handlePage: (page: string) => void;
}

interface QuestionOption {
    question: string;
    options: string[];
}

const Basic: React.FC<BasicProp> = ({ handlePage }) => {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const [confetti, setConfetti] = useState(false);
    const [confettiShown, setConfettiShown] = useState(false); 

    const handleOptionClick = (option: string, questionIndex: number) => {
        const updatedSelectedOptions = [...selectedOptions];
        updatedSelectedOptions[questionIndex] = option;
        setSelectedOptions(updatedSelectedOptions);
    };

    const questions: QuestionOption[] = [ /* Questions and Options for basic page */
        {
            question: "How much do you prefer working independently over working collaboratively?",
            options: ["Not at All", "Neutral", "Very much"]
        },
        {
            question: "How important is expressing creativity and passion in your work?",
            options: ["Not at All Important", "Neutral", "Very Important"]
        },
        {
            question: "How easily do you adapt to changes in your work environment and job responsibilities?",
            options: ["Difficult", "Neutral", "Easy"]
        },
        {
            question: "How important is it for you to make a tangible impact through your work?",
            options: ["Not at All important", "Neutral", "Very Important"]
        },
        {
            question: "How important is having a set routine in the workplace to you?",
            options: ["Not at All important", "Neutral", "Very Important"]
        },
        {
            question: "Do you see yourself as a natural leader and enjoy taking charge of projects?",
            options: ["Not at All", "Neutral", "Very Much"]
        },
        {
            question: "Do you prefer an office environment or an environment that is frequently changing?",
            options: ["Office", "Neutral", "Changing Environment"]
        }
    ];
    const allQuestionsAnswered = questions.every((q, index) => selectedOptions[index] !== undefined && selectedOptions[index] !== "");
   
    useEffect(() => {
        if (allQuestionsAnswered && !confettiShown) { // Check if all questions are answered and confetti hasn't been shown yet
            setConfetti(true);
            setConfettiShown(true); // Set confettiShown to true once confetti is shown
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
        <div className="column">
                {questions.map((q, x) => (
                    <div key={x}>
                        <h3 className="question">{q.question}</h3>
                        <div className="questionContainer">
                            {q.options.filter(option => option !== "").map((option, i) => (
                                <div key={i} className="option">
                                    <label>{option}</label>
                                    <input
                                        type="radio"
                                        name={`question_${x}`}
                                        value={option}
                                        checked={selectedOptions[x] === option}
                                        onChange={() => handleOptionClick(option, x)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            {allQuestionsAnswered && (
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

export default Basic;