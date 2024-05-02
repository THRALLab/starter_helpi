import React from 'react';
import { Row } from 'react-bootstrap';
import './ResultsPage.css'
import { LoadingAnimation } from '../LoadingAnimation/LoadingAnimation'

interface QuestionData {
    question: string;
    answer: string;
  }  

export function ResultsPage({basicQuestionData, detailQuestionData} : {basicQuestionData: QuestionData[], detailQuestionData: QuestionData[]}) {
    console.log(basicQuestionData);
    console.log(detailQuestionData);
    
    return (
        <LoadingAnimation></LoadingAnimation>
    )
}