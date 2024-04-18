import React from "react";
import { DetailedQuestions } from "../components/DetailedQuestions";

export function DetailedPage() {
  return (
    <>
      <h1>Detailed Questionnaire</h1>
      <hr></hr>
      <DetailedQuestions question="(add question 1 here)" questionNumber="1"></DetailedQuestions>
      <DetailedQuestions question="(add question 2 here)" questionNumber="2"></DetailedQuestions>
      <DetailedQuestions question="(add question 3 here)" questionNumber="3"></DetailedQuestions>
      <DetailedQuestions question="(add question 4 here)" questionNumber="4"></DetailedQuestions>
      <DetailedQuestions question="(add question 5 here)" questionNumber="5"></DetailedQuestions>
      <DetailedQuestions question="(add question 6 here)" questionNumber="6"></DetailedQuestions>
      <DetailedQuestions question="(add question 7 here)" questionNumber="7"></DetailedQuestions>
      <h4>add more questions if needed</h4>
    </>
        //this can be stylized later to look better, but for now this is the basic setup
  );
}
