import React, { useState, useEffect } from 'react';
import './Pages.css';
import './questions.css';
import './Results.css';
import OpenAI from 'openai';
import brainIcon from './modifiedBrainIcon.svg';

interface ResultsProps {
    handlePage: (page: string) => void;
    questionsAndAnswers: string;
    apiKey: string;
}

const Results: React.FC<ResultsProps> = ({ questionsAndAnswers, apiKey }) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [results, setResults] = useState<string | null>("");

    useEffect(() => {
        const generateJobSuggestion = async () => {
            setLoading(true);
            try {
                const openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true });

                const chatResponse = await openai.chat.completions.create({
                    messages: [
                        {
                            role: "system",
                            content: "You are giving a career quiz, give a recommendation for 3 career options based on the user responses, explaining each and why. Format the careers as a list, separating each career with an '**' symbol. Preface/index relevant information like salary and job growth with a '*'. For example: **Career 1*Salary: $xx,xxx*Job Growth: xx%**Career 2*Salary: $xx,xxx*Job Growth: xx%**Career 3*Salary: $xx,xxx*Job Growth: xx%"
                        },
                        { role: "user", content: questionsAndAnswers }
                    ],
                    model: "gpt-4o"
                });
                setResults(chatResponse.choices[0].message.content);
            } catch (error) {
                console.error('Error generating job suggestion:', error);
            } finally {
                setLoading(false);
            }
        };

        generateJobSuggestion();
    }, [questionsAndAnswers, apiKey]);

    const parseResults = (results: string | null) => {
        if (!results) return [];
        return results.split("**").filter(career => career.trim() !== "").map(career => {
            const [title, ...details] = career.split("*").map(detail => detail.trim());
            const salary = details.find(detail => detail.startsWith("Salary"));
            const jobGrowth = details.find(detail => detail.startsWith("Job Growth"));
            const description = details.filter(detail => !detail.startsWith("Salary") && !detail.startsWith("Job Growth")).join(" ");
            return { title, salary, jobGrowth, description };
        });
    };

    const parsedResults = parseResults(results);

    return (
        <div className="results-container">
            {loading ? (
                <div>
                <p className="loading-text">Loading...</p>
                <div className="loading-container">
                    <img src={brainIcon} alt="Brain Icon" className="loading-icon" />
                </div>
                </div>
            ) : (
                parsedResults.map((career, index) => (
                    <div key={index} className="career-suggestion">
                        <h3 className="career-title">{career.title}</h3>
                        <p className="career-detail">{career.salary}</p>
                        <p className="career-detail">{career.jobGrowth}</p>
                        <p className="career-description">{career.description}</p>
                    </div>
                ))
            )}
            <footer className="foot-space"></footer>
        </div>
    );
}

export default Results;