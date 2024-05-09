import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Container} from "react-bootstrap";
import { Footer } from "../components/Footer";
import "../App.css";
import React, { useState } from 'react';
import Basic from "../views/Basic_Questions"
import Detail from "../views/Detail_Questions"

function Home() {
  const [currentPage, setCurrentPage] = useState<string>('HomePage');


  function HomePageContent() {
    return (
        <div style = {{position: 'relative', top: '100px'}} className="text-center">
            <h1 className="text-center">
                FindYourCareer
            </h1>
            <h5 className="text-center">
                for
            </h5>
            <h4 className="text-center">
                UNIVERSITY OF DELAWARE STUDENTS
            </h4>
        
            <div style = {{position: 'relative', top: '150px'}}>
                <Row className='text-center'>
                    <Col style = {{border: '2px solid black'}}>
                        <h3>
                            Basic Questions
                        </h3>
                        <h5 style = {{padding: '10px'}}>
                        Discover Your Career Fit with Ease
                        </h5>
                        <h6 style = {{padding: '20px'}}>
                        Our basic questions career assessment is a quick and straightforward way to explore potential career
                        paths based on your interests, skills, and personality. Answer a few simple questions, and
                        get personalized career suggestions that align with your strengths and aspirations. Perfect
                        for those seeking a quick overview of their career options.
                        </h6>
                    </Col>
                    <Col style = {{border: '2px solid black'}}>
                        <h3>
                            Detailed Questions
                        </h3>
                        <h5 style = {{padding: '10px'}}>
                        Dive Deep Into Your Career Potential
                        </h5>
                        <h6 style = {{padding: '20px'}}>
                        Our detailed questions career assessment provides an in-depth analysis of your 
                        interests, skills, personality traits, and values to uncover a comprehensive 
                        range of career possibilities. Receive personalized career recommendations, 
                        along with insights into educational paths, certifications, and resources 
                        to support your career journey. Ideal for those seeking a thorough exploration 
                        of their career options.
                        </h6>
                    </Col>
                </Row>
                <Footer/>
            </div>
        </div>
    )
  }

  function BasicPageContent() {
    return (
      <div>
        <Basic/>
      </div>
    );
  }

  function DetailedPageContent() {
    return (
      <div>
        <Detail/>
      </div>
    );
  }

  return (
    <div>
      <Container className="page-container">
        <Row>
        <Col className="page-navigation" style={{borderBottom: '2px solid black', textAlign: 'left'}}>
        <span style = {{padding: '10px', fontSize: '30px', verticalAlign: 'center', fontWeight: 'bold'}}>
          FindYourCareer
        </span>
        </Col>
        <Col className="page-navigation" style={{borderBottom: '2px solid black', textAlign: 'right'}}>
        <button className="button btn1" style={{ verticalAlign: 'middle', alignSelf: 'right' }} onClick={() => setCurrentPage('HomePage')}>
            <span>Home Page</span>
          </button>
          <button className="button btn1" style={{ verticalAlign: 'middle' }}onClick={() => setCurrentPage('BasicPage')}>
            <span>Basic Quiz</span>
            </button>
          <button className="button btn1" style={{ verticalAlign: 'middle' }} onClick={() => setCurrentPage('DetailPage')}>
            <span>Detailed Quiz</span>
            </button>
        </Col>
        </Row>
        <div className="page-content" style={{textAlign: 'center'}}>
          {currentPage === 'HomePage' && <HomePageContent />}
          {currentPage === 'BasicPage' && <BasicPageContent />}
          {currentPage === 'DetailPage' && <DetailedPageContent />}
        </div>
      </Container>
    </div>
  );
}





export default Home;