import React from 'react';

interface QuestionData {
    question: string;
    answer: string;
  }  

export function ResultsPage({basicQuestionData, detailQuestionData} : {basicQuestionData: QuestionData[], detailQuestionData: QuestionData[]}) {
    return (
        <h1>ResultsPage</h1>
    )
}