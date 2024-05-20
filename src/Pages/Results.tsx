import React, { useState, useEffect } from 'react';
import './Pages.css';
import './questions.css';
import OpenAI from 'openai';
interface ResultsProps {
    handlePage: (page: string) => void;
    questionsAndAnswers: string;
    apiKey: string; // Add prop for API key
}

//type CareerSuggestions = {
//    title: string;
//    salary: string;
//    jobGrowth: string;
//    description: string;
//}

const Results: React.FC<ResultsProps> = ({  questionsAndAnswers, apiKey }) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [results, setResults] = useState<string|null>("");
    //const [suggestions, setSuggestions] = useState<CareerSuggestions[]>([]);

    // convertToSuggestions() {
    //     // convert results to list of career suggestions
    //     setSuggestions([]);
    // }

     useEffect(() => {
        const generateJobSuggestion = async () => {
            setLoading(true);
            try {
                const openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true });

                const chatResponse = await openai.chat.completions.create({
                    messages: [
                      { role: "system", content: "You are giving a career quiz, give a recommendation for 3 career options based on the user responses, explaining each and why. Format the careers as a list, separating each career with an '**' symbol. Preface/index relevant information like salary and job growth with a '*'. For example: **Career 1*Salary: $xx,xxx*Job Growth: xx%**Career 2*Salary: $xx,xxx*Job Growth: xx%**Career 3*Salary: $xx,xxx*Job Growth: xx%"}, 
                      { role: "user", content: questionsAndAnswers }
                    ],
                    model: "gpt-4-turbo"
                  });
                  setResults(chatResponse.choices[0].message.content);
            } catch (error) {
                console.error('Error generating job suggestion:', error);
            } finally {
                setLoading(false);
            }
        };

        generateJobSuggestion();
        console.log(apiKey)
    }, [questionsAndAnswers, apiKey]);

    return (
        <div className="borderDiv">
        <div>
            <div className="column">
                <h2 className="results-title">Your Job Suggestion</h2>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div> {results?.split("**").map((car)=><h3>{car}</h3>)}</div>
                )}
            </div>
        </div>
        </div>
            )
    }


export default Results;