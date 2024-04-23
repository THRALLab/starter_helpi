
import React, { } from 'react';
import {Button} from 'react-bootstrap';
import BrainIcon from './modifiedBrainIcon.svg';
import homeIcon from './house.svg';
import './Pages.css';
import './questions.css';

interface DetailedProp {
    handlePage: (page: string) => void;
}

interface QuestionOption {
    question: string;
    options: string[];
}

const Detailed: React.FC<DetailedProp> = ({ handlePage }) => { /* Handes page changes */
    const handleOptionClick = (option: string) => {
        console.log(option); 
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

    return (
        <div>
       <header className="header" /* Top of page */>
        <div className="title-container">
        <img src={BrainIcon} alt="Brain Icon" className="brainIcon" onClick ={() => handlePage('Home')} /* Brain icon (Can switch to home page on click) */ />
        <h2 className="title" onClick ={() => handlePage('Home')}>Brain Spark</h2>
            <Button className="home-button" onClick={() => handlePage('Home')}><img src={homeIcon} alt="Home Page" className="homeIcon" /* Home button (switch to home page on click) */ /></Button>
        </div>
        </header>
        <div className="column" /* Box that contains all the questions */>
            {questions.map((q, idx) => (
                <div key={idx}>
                    <h3 className="question">{q.question}</h3>
                    <div className="questionContainer">
    {q.options.filter(option => option !== "").map((option, i) => ( /* Filters empty strings and maps buttons */
        <div key={i} className="option">
            <label>{option}</label>
            <input
                type="radio" /* Radio buttons */
                name={`question_${idx}`}
                value={option}
                onClick={() => handleOptionClick(option)}
            />
        </div>
    ))}
</div>
            </div>
        ))}
    </div>
    <footer className="footer-space" /* Leaves empty space in footer */ ></footer>
</div>
)
}

export default Detailed;