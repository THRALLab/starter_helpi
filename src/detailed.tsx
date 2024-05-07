import React, { useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

interface Responses {
    question1: string;
    question2: string;
    question3: string;
    question4: string;
    question5: string;
    question6: string;
    question7: string;
    [key: string]: string;  // Index signature
}

function DetailedQuestion() {
    // States for all detailed questions responses
    const [response, setResponse] = useState<Responses>({
        question1: '',
        question2: '',
        question3: '',
        question4: '',
        question5: '',
        question6: '',
        question7: '',
    });

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const navigate = useNavigate();
    const questions = [
        { label: "1. What careers seem interesting to you? Why?", name: "question1" },
        { label: "2. What are your current skills? (Hard Skills and Soft Skills)", name: "question2" },
        { label: "3. What is your highest level of education or training?", name: "question3" },
        { label: "4. What is your ideal Work-life balance?", name: "question4" },
        { label: "5. What are you willing to give up for better career opportunities?", name: "question5" },
        { label: "6. How important is money?", name: "question6" },
        { label: "7. What impact do you want to make on the world?", name: "question7" },
        { label: "You have completed all questions!", name: "done"}
    ];

    const [responses, setResponses] = useState<{ question: string, answer: string }[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setResponse(prevResponses => ({
            ...prevResponses,
            [name]: value,
        }));
    };

    const submitAssessment = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('User Responses: ', response);
    };

    const handleNavigation = (direction: 'next' | 'prev') => {
        setResponses([...responses, { question: questions[currentQuestionIndex].label, answer: response[questions[currentQuestionIndex].name] }]);
        setCurrentQuestionIndex(prevIndex => 
            direction === 'next' ? Math.min(questions.length - 1, prevIndex + 1) : Math.max(0, prevIndex - 1)
        );
    };

    const currentQuestion = questions[currentQuestionIndex];

    const storeResponsesAndNavigate = () => {
        navigate("/result", { state: { responses } });
    };


    return (
        <div className='App'>
            <header className='App-header'>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px', backgroundColor: '#4B6D7A' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color:"#000",marginBottom: '20px', fontSize: '40px', fontWeight: 'bold'}}>
                    <h1><b>Detailed Questions</b></h1> </div>
                    <form onSubmit={submitAssessment}>
                        <div>
                            {currentQuestionIndex < questions.length - 1 &&(
                                <><label>{currentQuestion.label}</label><br /><br />
                                <textarea
                                    id={currentQuestion.name}
                                    name={currentQuestion.name}
                                    rows={4}
                                    cols={60}
                                    value={response[currentQuestion.name]}
                                    onChange={handleChange} /></>
                             )}
                             {currentQuestionIndex === questions.length -1 &&(
                                <><label>{currentQuestion.label}</label><br /><br /><br /><br /></>
                             )}
                        </div>
                        <div style={{ marginTop: 20 }}>
                            {currentQuestionIndex > 0 && (
                                <button type="button" onClick={() => handleNavigation('prev')} className='Detailed-button'>Previous</button>
                            )}
                            {currentQuestionIndex < questions.length - 2 && (
                                <button type="button" onClick={() => handleNavigation('next')} className='Detailed-button'>Next</button>
                            )}
                            {currentQuestionIndex === questions.length - 2 && (
                                <button type="button" onClick={() => handleNavigation('next')} className='Detailed-button'>Next</button>
                            )}
                            {currentQuestionIndex === questions.length - 1 && (
                                <button type = "button" onClick={storeResponsesAndNavigate} className='Detailed-button'>Results</button>
                            )}
                            <div className='progress'>
                            
                                <p style={{ color: '#fff', fontSize: '18px', fontWeight: 'bold' }}>Progress</p>
                                <div style={{
                                    backgroundColor: '#18c002',
                                    height: '10px',
                                    width: String(currentQuestionIndex * 150) + 'px',
                                    display: "inline-block",
                                    verticalAlign: "top",
                                    marginLeft: "0%"
                                }}>
                                </div>
                                <div style={{
                                    backgroundColor: '#fff',
                                    height: '10px',
                                    width: String((7 - currentQuestionIndex) * 150) + 'px',
                                    display: "inline-block",
                                    verticalAlign: "top",
                                    marginLeft: "0%"
                                }}>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </header>
        </div>
    );
}

export default DetailedQuestion;