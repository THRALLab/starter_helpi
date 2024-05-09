import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import './basicQuestion.css';
import catHeaderBasic from './images/basic-cat-header.webp'
import pawButtonNext from './images/detailed_next_button.png'
import pawButtonPrev from './images/detailed_prev_button.png'
import OpenAI from 'openai';
import ProgressBar from './ProgressBar';
//Hello 

const questions = [
  {
    question: 'Question 1: If you have a year paid-time off and the company gives you money to pursue every interest you want, what would you choose to do with that time?',
    answers: ['Learn programming', 'Travel', 'Go to workshops and make more connections', 'I do not know yet, will go with the flow', 'Learn several sports'],
  },
  {
    question: 'Question 2: When working on a team project, you are most likely to:',
    answers: ['Take on a leadership role and delegate tasks to others.', 'Contribute ideas and insights during brainstorming sessions.', 'Support your team members and ensure everyone voices are heard.', 'Focus on completing your assigned tasks efficiently and effectively.'],
  },
  {
    question: 'Question 3: Reflect on your past experiences working in teams. Do you thrive in collaborative environments, enjoying the synergy of different perspectives, or do you prefer to work independently, focusing on your own tasks and goals?',
    answers: ['I prefer working alone','I prefer working with people'],
  },
  {
    question: 'Question 4: Reflect on your problem-solving approach. Do you excel at finding innovative solutions to complex challenges, thinking outside the box and embracing ambiguity, or do you prefer to analyze data and follow established procedures to reach a solution?',
    answers: ['I prefer making careful analytics and following an established procdedure', 'I love thinking of new ways to solve a problem'],
  },
  {
    question: 'Question 5: Reflect on your organizational skills. Do you thrive in environments where you can meticulously plan and organize tasks, ensuring everything runs smoothly, or do you prefer more flexibility and adaptability, thriving in situations that require quick decision-making and problem-solving?',
    answers: ['I want to make detailed plans and make sure everything is super organized','I want to focus more on adaptability and problem solving on the spot'],
  },
  {
    question: 'Question 6: "What motivates you the most in your career: achieving recognition and success, making a positive impact on others or society, or continuous learning and growth?',
    answers: ['I want to have achievements and recognition', 'I want to make a positive impact on the world', 'I want to learn and grow during my career trajectory'],
  },
  {
    question: 'Question 7: How do you prefer to communicate with colleagues and clients: face-to-face interactions, written communication (emails, reports), or virtual meetings and video calls?',
    answers: ['I definitely want to meet them in person', 'Written communication is my strong suits', 'I prefer having virtual meeting and video calls'],
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
    //const [questionsState, setQuestionsState] = useState(questions);
  
//sets the local storage item to the api key the user inputed
    /*
Handles the selection of an answer for a question in the questionnaire. This function updates the state to record the selected answer and adjusts the progress bar based on the number of questions answered.

Parameters:
    - answerIndex (number): Index of the selected answer in the answers array for the current question.

Returns:
    - N/A
*/
    const handleAnswerSelection = (answerIndex: number) => {
      const newSelectedAnswers = [...selectedAnswers];
      newSelectedAnswers[currentQuestionIndex] = questions[currentQuestionIndex].answers[answerIndex];
      setSelectedAnswers(newSelectedAnswers);
    };
/*
Handles the navigation to the next question in the questionnaire. It checks if there are more questions available and updates the current question index accordingly.

Parameters:
    - None

Returns:
    - N/A
*/
    const handleNextQuestion = () => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }

      // Update the progress of the current question
      /*const updatedQuestions = [...questionsState];
      updatedQuestions[currentQuestionIndex].progress += 13;
      setQuestionsState(updatedQuestions);*/
      
    };

/*
Handles the navigation to the previous question in the questionnaire. It checks if there are previous questions available and updates the current question index accordingly.

Parameters:
    - None

Returns:
    - N/A
*/
    const handlePreviousQuestion = () => {
      if (currentQuestionIndex > 0) {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
      }
    };
    
    const progress = Math.round(((currentQuestionIndex)/questions.length)*100);
/*
Handles the submission of the questionnaire. It sends the selected answers to OpenAI for completion and navigates to the result page with the received content.

Parameters:
    - None

Returns:
    - N/A
*/ 
    const handleSubmission = async () => {
      console.log('Submitting...');
      try {
        const openAI = new OpenAI({
          apiKey: key,
          dangerouslyAllowBrowser: true,
        });

        /*Open AI set up*/
        const completion = await openAI.chat.completions.create({
          messages: [
            /*Sets up the system and user roles for gpt-4-turbo*/ 
            { role: 'system', content: 'You are a helpful career. You will be provided a top 5 student results to a career quiz with as well as providing some basic details such as salary and degree requirements' },
            { role: 'user', content: `My answers are: ${selectedAnswers.join('\n')}` }
          ],
          model: 'gpt-4-turbo',
        });
    
        if (completion.choices[0].message.content != null) {
          /*Takes what gpt prints out and routes it the result page which will then displays the result  */
          navigate('/basicresult', { state: { result: completion.choices[0].message.content } });
        } else {
          /*Error handling */
          console.log('Error! Maybe you forgot the API key.');
        }
      } catch (error) {
        console.error('Error in OpenAI integration:', error);
      }

    };    
    return (
      <div>
        <img
          src={catHeaderBasic}
          alt="cat-header-basic"
          className='cat-header-basic'
        />
        <img className="cat-logo" alt="con meo cute" />
        <div className="questionnaire-container">
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
          <div>
            <ProgressBar progress={progress}></ProgressBar>
          </div>
          {currentQuestionIndex > 0 && (
            <button 
                onClick={handlePreviousQuestion}
                className='previous-button'
                style={{
                  backgroundImage: `url(${pawButtonPrev})`,
                  backgroundSize: 'cover',
                  width: '80px',
                  height: '80px',
                  backgroundColor: '#FFA3B1',
                  fontSize: '15px',
                  color: 'black',
                  borderRadius: '50%',
              }}
            ></button>
          )}
          {currentQuestionIndex === questions.length - 1 && (
            <button onClick={handleSubmission} className="submit-button">Submit</button>
          )}
          {currentQuestionIndex !== questions.length - 1 && (
            <button 
                onClick={handleNextQuestion} 
                className="next-button"
                style={{
                  backgroundImage: `url(${pawButtonNext})`,
                  backgroundSize: 'cover',
                  width: '80px',
                  height: '80px',
                  backgroundColor: '#FFA3B1',
                  fontSize: '15px',
                  color: 'black',
                  borderRadius: '50%',
              }}
                ></button>
          )}
          </div>
        </div>
    );
  };
  
  export default Questionnaire;