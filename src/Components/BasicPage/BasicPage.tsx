import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import './BasicPage.css'




export function BasicPage() {
    const questions: string[] = ["Question 1", "Question 2", "Question 3", "Question 4", "Question 5"]
    let eventKey = 0;
    return (
        <div className='basic-page-container'>
            <h1 className='title'>Basic Quiz</h1>
            <div className='accordion-container'>
                <Accordion defaultActiveKey={questions.map((_, i) => i.toString())} style={{ width: '50%', backgroundColor: '#21273b' }} alwaysOpen>
                    {questions.map((question: string) => (
                        <Accordion.Item key={eventKey} eventKey={(eventKey++).toString()} className="item">
                            <Accordion.Header className='header'>{question}</Accordion.Header>
                            <Accordion.Body className='body'>
                                <Form>
                                    <Form.Check
                                        label="Option 1"
                                        name={`group${eventKey}`}
                                        id={`check${eventKey}1`}
                                        type='radio'
                                    />
                                    <Form.Check
                                        label="Option 2"
                                        name={`group${eventKey}`}
                                        id={`group${eventKey}2`}
                                        type='radio'
                                    />
                                    <Form.Check
                                        label="Option 3"
                                        name={`group${eventKey}`}
                                        id={`group${eventKey}3`}
                                        type='radio'
                                    />
                                </Form>
                            </Accordion.Body>
                        </Accordion.Item>
                    )
                    )}
                </Accordion>
            </div>
        </div>
    )
}
