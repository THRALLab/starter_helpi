import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './App.css';
import { responseBasic } from './ChatGPT';


function Results(){
    const location = useLocation();
    const responses = (location.state as { responses: { question: string, answer: string }[] }).responses;

    const [generatedResponse, setGeneratedResponse] = useState<string | null>('');
    useEffect(() => {
        const getResponse = async () => {
            const result = await responseBasic(responses);
            setGeneratedResponse(result);
            console.log(result); 
        };

        getResponse();
    }, [responses]);

    const[email, setEmail] = useState<string>("");

    function updateEmail(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setEmail(event.target.value);
    };
    function send() {
    }

    

    return(
        <div className='App'>
            <header className="App-header">
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <h1>Result Page</h1>
                    <p style={{position: 'absolute', top: '20%', textAlign: 'center'}}>Your result will be shown here:</p>
                    <div>
                      <h2>Your Responses:</h2>
                      {responses.map((response, index) => (
                        <p key={index}>{response.question}: {response.answer}</p>
                      ))}
                      {generatedResponse && (
                        <div>
                          <h2>AI Suggestion:</h2>
                          {generatedResponse.split(".").map((sentence, index) => (
    <p key={index}>{sentence}.</p>
))}
                        </div>
                      )}
                    </div>
                    <Link to="/Home" className="container" style={{ textAlign:'center', padding: '10px 20px', backgroundColor: '#dc3545', color: '#fff', borderRadius: '5px', textDecoration: 'none', fontSize: '16px', fontWeight: 'bold', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', cursor: 'pointer'}}>
                        Back to Home
                    </Link>
                </div>
                <div>
                    <textarea
                    rows={2}
                    cols={20}
                    onChange={updateEmail}
                    /><br />
                    <p>{email}</p>
                    <button type="button" onClick={() => send} className='Detailed-button'>Send Email</button>
                </div>
            </header>
        </div>
    );
}

export default Results;
