import React from 'react'
import './BasicPage.css'
import Accordion from 'react-bootstrap/Accordion';




export function BasicPage() {
    const questions: string[] = ["Question 1", "Question 2", "Question 3"]
    let eventKey = 0;
    return (
        <div className='accordion-container'>
            <Accordion defaultActiveKey="0" style={{ width: '50%', backgroundColor: '#21273b' }} >
                {questions.map((question: string) => (
                    <Accordion.Item key={eventKey} eventKey={(eventKey++).toString()} style={{ backgroundColor: '#21273b', color: 'white' }}>
                        <Accordion.Header style={{ backgroundColor: '#21273b', color: 'white' }} >{question}</Accordion.Header>
                        <Accordion.Body style={{ backgroundColor: '#21273b', color: 'white' }}>
                            Choices
                        </Accordion.Body>
                    </Accordion.Item>
                )
                )}
            </Accordion>
        </div>
    )
}
