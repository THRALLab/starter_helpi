import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import './basicQuestion.css';
import OpenAI from 'openai';
//Hello 

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
  // Add more questions here...

let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

  const Questionnaire: React.FC = () => {
    const [selectedAnswers, setSelectedAnswers] = useState<string[]>(Array(questions.length).fill(''));
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const navigate = useNavigate(); // Use useNavigate instead of useHistory
    const [key] = useState<string>(keyData); //for api key input
  
//sets the local storage item to the api key the user inputed
    
    const handleAnswerSelection = (answerIndex: number) => {
      const newSelectedAnswers = [...selectedAnswers];
      newSelectedAnswers[currentQuestionIndex] = questions[currentQuestionIndex].answers[answerIndex];
      setSelectedAnswers(newSelectedAnswers);
    };
    
    const handleNextQuestion = () => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    };
    
    const handlePreviousQuestion = () => {
      if (currentQuestionIndex > 0) {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
      }
    };
    
    const handleSubmission = async () => {
      console.log('Submitting...');
      try {
        const openAI = new OpenAI({
          apiKey: key,
          dangerouslyAllowBrowser: true,
        });
    
        const completion = await openAI.chat.completions.create({
          messages: [
            { role: 'system', content: 'You are a helpful career. You will be provided a top 5 student results to a career quiz with as well as providing some basic details such as salary and degree requirements' },
            { role: 'user', content: `My answers are: ${selectedAnswers.join('\n')}` }
          ],
          model: 'gpt-4-turbo',
        });
    
        if (completion.choices[0].message.content != null) {
          navigate('/result', { state: { result: completion.choices[0].message.content } });
        } else {
          console.log('Error! Maybe you forgot the API key.');
        }
      } catch (error) {
        console.error('Error in OpenAI integration:', error);
      }
    };    
    return (
      <div>
        <img className="cat-logo" alt="con meo cute" />
        <div className="questionnaire-container">
          <h1 className="questionnaire-heading">BASIC QUESTION</h1>
          <div key={currentQuestionIndex} className="question">
            <h3 className="question-text">{questions[currentQuestionIndex].question}</h3>
            <div className="answer-options">
              {questions[currentQuestionIndex].answers.map((answer, answerIndex) => (
                <button
                  key={answerIndex}
                  onClick={() => handleAnswerSelection(answerIndex)}
                  className={`answer-option ${selectedAnswers[currentQuestionIndex] === answer ? 'selected' : ''}`}
                >
                  {answer}
                </button>
              ))}
            </div>
          </div>
          {currentQuestionIndex > 0 && (
            <button onClick={handlePreviousQuestion} className="previous-button">Previous</button>
          )}
          {currentQuestionIndex === questions.length - 1 && (
            <button onClick={handleSubmission} className="submit-button">Submit</button>
          )}
          {currentQuestionIndex !== questions.length - 1 && (
            <button onClick={handleNextQuestion} className="next-button">Next</button>
          )}
        </div>
      </div>
    );
  };
  
  export default Questionnaire;