import React, { useState, useEffect } from 'react';
import { Button, ProgressBar } from 'react-bootstrap';
import './Pages.css';
import './questions.css';
import Confetti from 'react-dom-confetti';
import smileIcon from './smile.svg';
import mehIcon from './meh.svg';
import sadIcon from './sad.svg';
import brainIcon from './modifiedBrainIcon.svg';

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
    options: { label: string; iconSrc: string }[];
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

const questions: QuestionOption[] = [
    {
        question: "Do you see yourself as a natural leader and enjoy taking charge of projects?",
        options: [
            { label: "Not at All", iconSrc: sadIcon },
            { label: "Neutral", iconSrc: mehIcon },
            { label: "Very much", iconSrc: smileIcon }
        ]
    },
    {
        question: "How significant is the opportunity to be creative and have passion within your work?",
        options: [
            { label: "Not at All", iconSrc: sadIcon },
            { label: "Neutral", iconSrc: mehIcon },
            { label: "Very Significant", iconSrc: smileIcon }
        ]
    },
    {
        question: "How easily do you adapt to changes in your work environment and job responsibilities?",
        options: [
            { label: "Difficult", iconSrc: sadIcon },
            { label: "Neutral", iconSrc: mehIcon },
            { label: "Easy", iconSrc: smileIcon }
        ]
    },
    {
        question: "How important is it for you to make a measurable and meaningful impact through your work?",
        options: [
            { label: "Not at All", iconSrc: sadIcon },
            { label: "Neutral", iconSrc: mehIcon },
            { label: "Very Important", iconSrc: smileIcon }
        ]
    },
    {
        question: "How important is collaborative learning in your professional development?",
        options: [
            { label: "Not at All", iconSrc: sadIcon },
            { label: "Neutral", iconSrc: mehIcon },
            { label: "Very Important", iconSrc: smileIcon }
        ]
    },
    {
        question: "How significant is a structured routine within your workplace to your overall job satisfaction and productivity?",
        options: [
            { label: "Not at All", iconSrc: sadIcon },
            { label: "Neutral", iconSrc: mehIcon },
            { label: "Very Significant", iconSrc: smileIcon }
        ]
    },
    {
        question: "Do you prefer an office environment or an environment that is frequently changing?",
        options: [
            { label: "Office", iconSrc: sadIcon },
            { label: "Neutral", iconSrc: mehIcon },
            { label: "Changing Environment", iconSrc: smileIcon }
        ]
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

    const totalQuestions = questions.length;
    const answeredQuestions = selectedOptions.filter(option => option !== '').length;
    const progressPercentage: number = (answeredQuestions / totalQuestions) * 100;

    return (
        <div>
            {allQuestionsAnswered && (
                <div className="confetti-container">
                    <Confetti active={confetti} config={config} />
                </div>
            )}
        <header/>
        <div className="progressBarContainer">
    <ProgressBar className="progressBar" now={progressPercentage} label={`${Math.round(progressPercentage)}%`} />
    <img src={brainIcon} alt="Brain Icon" className="brain-progress-icon" style={{ left: `${progressPercentage + 0.5}%` }} />
</div>
<Button className="basic-switch" onClick={() => handlePage('Basic')}>Basic</Button><div className="column">
                {questions.map((q, idx) => (
                    <div key={idx}>
                        <h3 className="question">{q.question}</h3>
                        <div className="questionContainer">
                            {q.options.filter(option => option.label !== "").map((option, i) => (
                                <label key={i} className="option">
                                    <input
                                        type="radio"
                                        name={`question_${idx}`}
                                        value={option.label}
                                        checked={selectedOptions[idx] === option.label}
                                        onChange={() => handleOptionClick(option.label, idx)} />
                                    <img src={option.iconSrc} alt={`${option.label} Icon`} className="label-icon" />
                                    {option.label}
                                </label>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            {allQuestionsAnswered && ( /* Response displayed when all questions are answered */
      <div className="response">
        <h3>Thank you for completing the questionnaire!</h3>
        <p>Your responses have been recorded.</p>
        <Button onClick={() => handlePage('Results')} className="response-button">View Results</Button>
      </div>
            )}
            <footer className="footer-space"></footer>
        </div>
    );
}

export default Detailed;