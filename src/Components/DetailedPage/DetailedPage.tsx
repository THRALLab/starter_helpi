import React from 'react'
import './DetailedPage.css'
import { Card, Form, Carousel } from 'react-bootstrap'

export function DetailedPage() {
    const questions = ['What is your name?', 'What is your age?', 'What is your?', 'What is your name?', 'What is your age?', 'What is your?', 'What is your name?'];
    const [index, setIndex] = React.useState(0);
    let questionKey = 0;
    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    };
    return (
        <div className='page-container'>
            <h1>Detailed Quiz</h1>
            <Card className='question-card' style={{ backgroundColor: "var(--light-bg)" }}>
                <Card.Header as='h4' style={{ color: 'white', padding: '1rem 0' }}>
                    Question {index + 1}
                </Card.Header>
                <Card.Body>
                    <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
                        {questions.map((question) => (
                            <Carousel.Item key={questionKey++} style={{ height: '20rem' }}>
                                <h1 style={{ color: 'white' }}>
                                    {question}
                                </h1>
                                <Form style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Form.Group style={{ textAlign: 'left' }}>
                                        <Form.Label>Your Answer</Form.Label>
                                        <Form.Control
                                            as='textarea'
                                            rows={6}
                                            placeholder='Enter your answer'
                                            style={{ maxHeight: '175px', overflowY: 'auto', minHeight: '100px', width: '50vw' }}
                                        />
                                    </Form.Group>
                                </Form>
                            </Carousel.Item>
                        )
                        )}
                    </Carousel>
                </Card.Body>
            </Card>
        </div >
    )

}
