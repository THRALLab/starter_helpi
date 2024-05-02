import React from 'react';
import { Row } from 'react-bootstrap';

interface QuestionData {
    question: string;
    answer: string;
  }  

export function ResultsPage({basicQuestionData, detailQuestionData} : {basicQuestionData: QuestionData[], detailQuestionData: QuestionData[]}) {
    console.log(basicQuestionData);
    console.log(detailQuestionData);
    
    return (
        <>
            <div className='main-component'>
                <h1>ResultsPage</h1>
                <div>
                    <Row>
                        <div className="spinner-grow text-blurple" style={{ width: "5rem", height: "5rem", marginTop: "2.5rem", marginRight: ".5rem" }} role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-blurple" style={{ width: "10rem", height: "10rem" }} role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-blurple" style={{  width: "5rem", height: "5rem", marginTop: "2.5rem", marginLeft: ".5rem" }} role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </Row>
                </div>
            </div>
        </>
    )
}