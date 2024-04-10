import React from 'react'
import './BasicPage.css'
import Accordion from 'react-bootstrap/Accordion';




export function BasicPage() {
    const questions: string[] = ["Question 1", "Question 2", "Question 3"]
    return (
        <div>  
                {questions.map((question: string) => (
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>{question}</Accordion.Header>
                    <Accordion.Body>
                        Choices
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        )
        )}
        </div>
)
}