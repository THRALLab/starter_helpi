import { Button } from "react-bootstrap";
import "./Question.css";
import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

interface QuestionProps {
    questionArray: string[];
}

export const basicQuestions: string[] = [
    "I express my creativity whenever I work.", 
    "I think more logically than emotionally when solving problems.", 
    "I naturally act as a leader and enjoy leading others to a common goal.", 
    "I work well with others.",  
    "I excel with time management and prioritizing tasks.", 
    "I want my future career to involve helping others and making a positive impact on the community.",  
    "Collaborating with others brings out the best in my work.", 
    "I enjoy brainstorming and coming up with innovative solutions.", 
    "Peers often look to me for guidance and advice.", 
    "I thrive in environments where teamwork and cooperation are essential.", 
    "I consistently meet or exceed deadlines in my personal and professional endeavors.", 
    "I often find myself thinking outside the box to solve problems.", 
    "I value objectivity and reason in decision-making processes.", 
    "I enjoy connecting people to help form relationships."
];

export const detailedQuestions: string[] = [
    "What moral values are most important to you in your career?",
    "What extracurricular activities or hobbies do you enjoy in your free time?",
    "What subjects or topics do you excel at in school or work?",
    "What are your top three strengths or skills?",
    "What kind of work environment do you thrive in?",
    "Are you more drawn to working independently or as part of a team?",
    "What aspects of your current or past jobs have you enjoyed the most?",
    "How do you handle challenges or setbacks in your work or personal life?",
    "What kind of impact do you hope to make through your career?",
    "What industries or sectors are you most passionate about?",
    "How do you handle pressure and tight deadlines?",
    "What is your desired salary range for your future job?"
];

export const Question: React.FC<QuestionProps> = ({questionArray}) => {
    const [questions] = useState<string[]>(questionArray);
    const [index, setIndex] = useState(0);
    const nextClick = () => {
        if (index < questions.length - 1 ){
            setIndex(index + 1);
        }
        else {
            setIndex(index);
        }
    }
    const previousClick = () => {
        if (index > 0 && index < questions.length){
            setIndex(index - 1);
        }
        else {
            setIndex(index);
        }
    }
    return (
        <div className="Question"> 
            <ProgressBar current={index + 1} max={questions.length} />
            <h2>Question {index + 1}:</h2>
            <div className="question-container">
                <p>{ questions[index] }</p>
            </div>
            <div className="button-container">
            <Button onClick={previousClick} disabled={index === 0}>Previous</Button>
            <Button onClick={nextClick} disabled={index === questions.length - 1}>Next</Button>
            <Button onClick={nextClick} disabled={index !== questions.length - 1}>Finish</Button>
            </div>
        </div>
    );
}

export default Question;