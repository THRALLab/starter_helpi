import React from 'react'
import './DetailedPage.css'
import { Card, Form } from 'react-bootstrap'

export function DetailedPage() {
    return (
        <div className='page-container'>
            <h1>Detailed Page</h1>
            <Card className='question-card' style={{ backgroundColor: "var(--light-bg)"}}>
            <Card.Header as='h4' style={{color:'white', padding: '1rem 0'}}>
                Question 1
            </Card.Header>
            <Card.Body>
                <Form>
                    <Form.Group style={{ textAlign: 'left' }}>
                        <Form.Label style={{ color: 'white' }}>Answer</Form.Label>
                        <Form.Control as='textarea' rows={3} placeholder='Enter your answer' />
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
        </div >
    )

}
