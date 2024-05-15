import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap';
import './Pages.css';
import './questions.css';
import OpenAI from 'openai';
interface ResultsProps {
    handlePage: (page: string) => void;
    questionsAndAnswers: string;
    apiKey: string; // Add prop for API key
}

const Results: React.FC<ResultsProps> = ({ handlePage, questionsAndAnswers, apiKey }) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [results, setResults] = useState<string|null>("");
     useEffect(() => {
        const generateJobSuggestion = async () => {
            setLoading(true);
            try {
                const openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true });

                const chatResponse = await openai.chat.completions.create({
                    messages: [
                      { role: "system", content: "You are giving a career quiz, give a reccommendation for 3 career options based on the user responses, explaining each and why. Moreover, below the why section add some sections like this for example: relevant information like salary, job growth, and a brief description of the job."}, 
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
                    <div> {results}</div>
                )}
            </div>
        </div>
        <Container className="mt-5"> 
        <Row className="mt-5">
            <Tabs
                defaultActiveKey="Overview"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="Overview" title="Overview" id="box">
                    <h1 style={{backgroundColor: "86c0ff"}}>Software Engineer</h1>
                    <br/>
                    <div className='color-box'>
                        Median Income: $100,000
                        <br />
                        Average Income: $120,000
                        <br />
                        Interests:
                        <span style={{ color: 'blue' }}> 1. Investigative</span>
                        <span style={{ color: 'red' }}> 2. Realistic</span>
                        <span style={{ color: 'green' }}> 3. Artistic</span>
                        <br/>
                        Project Job Growth: 22%
                    </div>
                    <div>
                        <br />
                        <h3>Job Description</h3>
                        Research, design, and develop computer and network software or specialized utility programs. Analyze user needs and develop software solutions, applying principles and techniques of computer science, engineering, and mathematical analysis. Update software or enhance existing software capabilities. May work with computer hardware engineers to integrate hardware and software systems, and develop specifications and performance requirements. May maintain databases within an application area, working individually or coordinating database development as part of a team.
                    </div>
                    Research, design, and develop computer and network software or specialized utility programs. Analyze user needs and develop software solutions, applying principles and techniques of computer science, engineering, and mathematical analysis. Update software or enhance existing software capabilities. May work with computer hardware engineers to integrate hardware and software systems, and develop specifications and performance requirements. May maintain databases within an application area, working individually or coordinating database development as part of a team.

                </Tab>
                <Tab eventKey="profile" title="Profile">
                    Tab content for Profile
                </Tab>
                <Tab eventKey="contact" title="Contact" disabled>
                    Tab content for Contact
                </Tab>
            </Tabs>
        </Row>
    </Container>
        </div>
            )
    }


export default Results;