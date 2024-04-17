
import React, { CSSProperties } from 'react';
import {Button} from 'react-bootstrap';
import BrainIcon from './modifiedBrainIcon.svg';
import './Pages.css';

interface BasicProp {
    handlePage: (page: string) => void;
}

interface QuestionOption {
    question: string;
    options: string[];
}

const Basic: React.FC<BasicProp> = ({ handlePage }) => {
    const style: { column: CSSProperties, optionsContainer: CSSProperties, button: CSSProperties } = {
        column: {
            border: '1px solid #ccc',
            margin: '10px', // Corrected the missing 'px'
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column'
        },
        optionsContainer: {
            display: 'flex',
            justifyContent: 'center', // Centers the buttons horizontally
            alignItems: 'center', // Aligns items vertically
            marginBottom: '20px', // Adds space below each question's options
            flexWrap: 'wrap' // Ensures wrapping if not enough space
        },
        button: {
            margin: '0 5px', // Adds space between buttons
            backgroundColor: '#007bff',
            color: 'white',
            borderRadius: '20px',
            padding: '10px 20px',
            border: 'none',
            cursor: 'pointer',
            outline: 'none'
        }
    };

    const questions: QuestionOption[] = [
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
            options: ["Office", "Neutral", "Changing Environment"] // Corrected options split
        }
    ];

    const handleOptionClick = (option: string) => {
        console.log(option);
    };
    return (
        <div>
        <header className="header">
            <div className="icon-container">
                <img src={BrainIcon} alt="Brain Icon" className="icon" onClick={() => handlePage('Home')} />
            </div>
            <h2 className="title" onClick={() => handlePage('Home')}>Brain Spark</h2>
            <div className="home-container">
                <Button className="home-button" onClick={() => handlePage('Home')}>Home Page</Button>
            </div>
        </header>
        <div style={style.column}>
            {questions.map((q, x) => (
                <div key={x}>
                    <h3>{q.question}</h3>
                    <div style={style.optionsContainer}>
                        {q.options.map((option, i) => (
                            <Button style={style.button} key={i} onClick={() => handleOptionClick(option)}>{option}</Button>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
    )
}

export default Basic;