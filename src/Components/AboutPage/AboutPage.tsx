import React from 'react'
import './AboutPage.css'
import { Container, Row, Col } from 'react-bootstrap';
import colin_headshot from './ProfessionalHeadshot.jpg'

export function AboutPage() {
    return (
        <div className='about-page-container'>
            <Container>
                <Row>
                    <Col md={6}>
                        <h2 className='our-team'>Our Team</h2>
                        <Row className='team-names'>
                            <Col md={6}>
                                <img src={colin_headshot} alt="Michael Lutz headshot" className="img-fluid" />
                                <p>Michael Lutz</p>
                            </Col>
                            <Col md={6}>
                                <img src={colin_headshot} alt="Colin Parsons headshot" className="img-fluid" />
                                <p>Colin Parsons</p>
                            </Col>
                            <Col md={6}>
                                <img src={colin_headshot} alt="Mike Forte headshot" className="img-fluid" />
                                <p>Mike Forte</p>
                            </Col>
                            <Col md={6}>
                                <img src={colin_headshot} alt="Jacob Wilber headshot" className="img-fluid" />
                                <p>Jacob Wilber</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6}>
                        <div>
                            <h1 className='our-team'>About Us</h1>
                            <div className='team-names'>
                                <p>Welcome to WorkWave! WorkWave is a comprehensive career test that utilizes AI / GPT4 to determine the ideal career for you!</p>
                                <p>Feel free to add more paragraphs or sections as needed to provide comprehensive information.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}