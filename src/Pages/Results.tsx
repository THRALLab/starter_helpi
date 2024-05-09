import React, { } from 'react';
import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap';
import './Pages.css';
import './questions.css';

interface ResultsProp {
    handlePage: (page: string) => void;
}

const Results: React.FC<ResultsProp> = ({ handlePage }) => { /* Handes page changes */
    return (
        <>
        <div className="borderDiv">
        </div>
        <Container className="mt-5"> 
        <Row className="mt-5">
            <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="Overview" title="Overview" id="box">
                    <h1 style={{backgroundColor: "86c0ff"}}>Software Engineer</h1>
                    <br/>
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
        </>
    );
}

export default Results;