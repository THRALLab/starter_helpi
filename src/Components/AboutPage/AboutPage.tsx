import React from 'react'
import './AboutPage.css'
import { Container, Row, Col } from 'react-bootstrap';
import colin_headshot from './ProfessionalHeadshot.jpg'
import CircleImage from '../CircleImages/CircleImage';

export function AboutPage() {
    return (
        <div className='about-page-container'>
            <Container>
                <Row>
                    <Col md={6}>
                        <h2 className='our-team'>Our Team</h2>
                        <Row className='team-names'>
                            <Col md={6}>
                                <CircleImage imageUrl={colin_headshot}/>
                                <p>Michael Lutz</p>
                            </Col>
                            <Col md={6}>
                                <CircleImage imageUrl={colin_headshot}/>
                                <p>Colin Parsons</p>
                            </Col>
                            <Col md={6}>
                                <CircleImage imageUrl={colin_headshot}/>
                                <p>Mike Forte</p>
                            </Col>
                            <Col md={6}>
                                <CircleImage imageUrl={colin_headshot}/>
                                <p>Jacob Wilber</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6}>
                        <div>
                            <h1 className='our-team'>About Us</h1>
                            <div className='team-names'>
                                <p>Welcome to WorkWave! WorkWave is a comprehensive career test that utilizes AI / GPT4 to determine the ideal career for you!</p>
                                <p>At the heart of our service lies a simple yet insightful quiz featuring multiple-choice questions tailored to uncover your professional preferences, strengths, and interests. 
                                    Whether you're a recent graduate embarking on your career journey or a seasoned professional seeking a change, our user-friendly interface guides you through a series of thought-provoking questions designed to illuminate potential career paths aligned with your aspirations. 
                                    For those seeking a deeper dive into their professional identity, our detailed quiz provides an interactive experience where users can input short responses to prompts related to their skills, experiences, and career goals. 
                                    Powered by state-of-the-art AI models like ChatGPT, our platform analyzes your inputs to generate personalized career insights and recommendations.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}