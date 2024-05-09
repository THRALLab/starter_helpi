import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import './Pages.css';
import './questions.css';
import OpenAI from 'openai';

const keyUser = JSON.stringify(key);

interface ResultsProps {
    handlePage: (page: string) => void;
    questionsAndAnswers: string;
    apiKey: string; // Add prop for API key
}

const Results: React.FC<ResultsProps> = ({ handlePage, questionsAndAnswers, apiKey }) => {
    const [jobSuggestion, setJobSuggestion] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const generateJobSuggestion = async () => {
            setLoading(true);
            try {
                const openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true });

                const chatResponse = await openai.chat.completions.create({
                    messages: [
                      { role: "system", content: "You are giving a career quiz, give a reccommendation for 3 solid career options based on the user responses, explaining each and why. Only return responses, no questions."}, 
                      { role: "user", content: questionsAndAnswers }
                    ],
                    model: "gpt-4"
                  });
                setJobSuggestion(chatResponse.choices[0]);
            } catch (error) {
                console.error('Error generating job suggestion:', error);
            } finally {
                setLoading(false);
            }
        };

        generateJobSuggestion();
    }, [questionsAndAnswers, apiKey]);

    return (
        <div>
            <div className="column">
                <h2 className="results-title">Your Job Suggestion</h2>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <pre>{jobSuggestion}</pre>
                )}
            </div>
            <Button onClick={() => handlePage('Home')}>Back to Home</Button>
        </div>
    );
}

export default Results;