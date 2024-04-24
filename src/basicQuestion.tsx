import React, { useState } from 'react';
import './basicQuestion.css';
import CollapsibleNavbar from './navbar';
const questions = [
  {
    question: 'Question 1: If you have a year paid-time off and the company gives you money to pursue every interest you want, what would you choose to do with that time?',
    answers: ['Learn pottery', 'Learn programming', 'Travel', 'Go to workshops and make more connections', 'I do not know yet, will go with the flow', 'Learn several sports']
  },
  {
    question: 'Question 2: When working on a team project, you are most likely to:',
    answers: ['Take on a leadership role and delegate tasks to others.', 'Contribute ideas and insights during brainstorming sessions.', 'Support your team members and ensure everyone voices are heard.', 'Focus on completing your assigned tasks efficiently and effectively.']
  },
  {
    question: 'Question 3: Reflect on your past experiences working in teams. Do you thrive in collaborative environments, enjoying the synergy of different perspectives, or do you prefer to work independently, focusing on your own tasks and goals?',
    answers: ['I prefer working alone','I prefer working with people']
  },
  {
    question: 'Question 4: Reflect on your problem-solving approach. Do you excel at finding innovative solutions to complex challenges, thinking outside the box and embracing ambiguity, or do you prefer to analyze data and follow established procedures to reach a solution?',
    answers: ['I prefer making careful analytics and following an established procdedure', 'I love thinking of new ways to solve a problem']
  },
  {
    question: 'Question 5: Reflect on your organizational skills. Do you thrive in environments where you can meticulously plan and organize tasks, ensuring everything runs smoothly, or do you prefer more flexibility and adaptability, thriving in situations that require quick decision-making and problem-solving?',
    answers: ['Learn pottery', 'Learn programming', 'Travel', 'Go to workshops and make more connections', 'I do not know yet, will go with the flow', 'Learn several sports']
  },
  {
    question: 'Question 6: If you have a year paid-time off and the company gives you money to pursue every interest you want, what would you choose to do with that time?',
    answers: ['Learn pottery', 'Learn programming', 'Travel', 'Go to workshops and make more connections', 'I do not know yet, will go with the flow', 'Learn several sports']
  },
  {
    question: 'Question 7: If you have a year paid-time off and the company gives you money to pursue every interest you want, what would you choose to do with that time?',
    answers: ['Learn pottery', 'Learn programming', 'Travel', 'Go to workshops and make more connections', 'I do not know yet, will go with the flow', 'Learn several sports']
  },
];

const Questionnaire: React.FC = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>(Array(questions.length).fill(''));
  // Function to handle selecting an answer
    const handleAnswerSelection = (questionIndex: number, answerIndex: number) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[questionIndex] = questions[questionIndex].answers[answerIndex];
    setSelectedAnswers(newSelectedAnswers);
  };

  return (
    <div>
      <CollapsibleNavbar/>
      <div className="questionnaire-container">
        <h1 className="questionnaire-heading">Basic Questions</h1>
        {questions.map((question, questionIndex) => (
          <div key={questionIndex} className="question">
            <h3 className="question-text">{question.question}</h3>
            <div className="answer-options">
              {question.answers.map((answer, answerIndex) => (
                <button
                  key={answerIndex}
                  onClick={() => handleAnswerSelection(questionIndex, answerIndex)}
                  className={`answer-option ${selectedAnswers[questionIndex] === answer ? 'selected' : ''}`}
                >
                  {answer}
                </button>
              ))}
            </div>
          </div>
        ))}
        <button onClick={() => console.log(selectedAnswers)} className="submit-button">Submit</button>
      </div>
    </div>
  );
};

export default Questionnaire;
