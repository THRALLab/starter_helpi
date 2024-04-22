import React from 'react'
import './AboutPage.css'
import { Container, Row, Col } from 'react-bootstrap';

export function AboutPage() {
    return (
        <Container>
            <Row>
                <Col md={6}>
                    {/* Display team member images on the left */}
                    <h2>Our Team</h2>
                    <Row>
                        <Col md={6}>
                            <img src="member1.jpg" alt="Member 1" className="img-fluid" />
                            <p>Member 1</p>
                        </Col>
                        <Col md={6}>
                            <img src="member2.jpg" alt="Member 2" className="img-fluid" />
                            <p>Member 2</p>
                        </Col>
                        {/* Add more team member images and info here */}
                    </Row>
                </Col>
                <Col md={6}>
                    {/* Display general information about the site on the right */}
                    <h1>About Us</h1>
                    <p>This is the about page content. You can write a brief introduction about your company, team, or organization here.</p>
                    <p>Feel free to add more paragraphs or sections as needed to provide comprehensive information.</p>
                </Col>
            </Row>
        </Container>
    );
}