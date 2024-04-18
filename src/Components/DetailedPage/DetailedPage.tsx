import React from 'react'
import './DetailedPage.css'
import { Card, Form, Carousel } from 'react-bootstrap'

export function DetailedPage() {
    const questions = ['What is your name?', 'What is your age?', 'What is your?'];
    const [index, setIndex] = React.useState(0);
    let questionKey = 0;
    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    };
    return (
        <div className='page-container'>
            <h1>Detailed Page</h1>
            <Card className='question-card' style={{ backgroundColor: "var(--light-bg)" }}>
                <Card.Header as='h4' style={{ color: 'white', padding: '1rem 0' }}>
                    Question {index + 1}
                </Card.Header>
                <Card.Body>
                    <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
                        {questions.map((question) => (
                            <Carousel.Item key={questionKey++} style={{height:'20rem'}}>
                                    <h1 style={{color: 'white'}}>
                                        {question}
                                    </h1>
                                    <Form style={{ width:'50%' }}>
                                        <Form.Group style={{ textAlign: 'left' }}>
                                        <Form.Label>Your Answer</Form.Label>
                                            <Form.Control as='textarea' rows={3} placeholder='Enter your answer' />
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
