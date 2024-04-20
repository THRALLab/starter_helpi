import { Button } from "react-bootstrap";
import { BasicQuestions } from "../components/BasicQuestions";
import { useState } from "react";
import {ProgressBar} from "../components/progressBar";

export function BasicPage() {
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleNextQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };
  const handlePrevQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion - 1);
  };

  const handleSubmit = () => { 
    setSubmitted(true);
  };
  return (
    //The Basic Page will have questions be answered in mulitple choice form
    <>
    <ProgressBar numAnswered={0}></ProgressBar>
      <h1>Basic Questionnaire</h1>
      <BasicQuestions question="How much experience do you have with working?" questionNumber= {1} answers = {["I have had several different jobs at different places", "I have only had a 2-3 different jobs", "I have only had one singlular job my whole life","I have never had a job before"]} currentQuestion={currentQuestion} ></BasicQuestions>

      <BasicQuestions question="How comfortable are you with public speaking?" questionNumber={2} answers= {["I'm extremely comfortable and am willing to do it", "I'm fine with it whenever I have to do it", "I would rather not have to do it", "I cannot get myself to do this even if I tried"]} currentQuestion={currentQuestion} ></BasicQuestions>
      
      <BasicQuestions question="About how much money would you like to earn?" questionNumber={3} answers = {["I want to become really, really rich", "I would like to be able to buy whatever I want and still live a comfortable life", "I'm fine with any amount as long as I live comfortably", "Money doesn't have an impact on my decision"]} currentQuestion={currentQuestion}></BasicQuestions>
      
      <BasicQuestions question="Which one of these words best describes you?" questionNumber={4} answers= {["Center of Attention", "Participating", "In the crowd", "Alone"]} currentQuestion={currentQuestion}></BasicQuestions>
      
      <BasicQuestions question="How much would you like your job to help people?" questionNumber={5} answers={["I want it to be my sole purpose", "I would really like if my job helped others in need", "I would be fine if helping people was a side effect of me doing my job", "I couldn't care less how my actions may impact someone"]} currentQuestion={currentQuestion}></BasicQuestions>
      
      <BasicQuestions question="How many hours would you like to work" questionNumber={6} answers={["I'm fine with whatever I am assigned, even if I have to work overtime", "I would like to work a 9-5 (or any other 8 hour period)", "I would prefer to work a lot less than 8 hours a day", "I would rather create my own hours and work to my own schedule"]} currentQuestion={currentQuestion}></BasicQuestions>
      
      <BasicQuestions question="How good are you at planning?" questionNumber={7} answers= {["I usually have a schedule planning literally every part of my day out", "I make sure to keep the big events in check but don't worry about the little parts of my schedule", "I try to keep my plan organized but usually don't do a good job with it", "I don't keep a schedule and I deal with things as they come"]} currentQuestion={currentQuestion}></BasicQuestions>

      <BasicQuestions question="Which of the following sounds the most interesting?" questionNumber={8} answers= {["Electronic & Programs", "History & Culture", "Biology & Anatomy", "Sports & Fitness"]} currentQuestion={currentQuestion} ></BasicQuestions>
      
      <BasicQuestions question="How much are you willing to do any sort of manual labor?" questionNumber={9} answers={["I would prefer to do manual labor in my job", "I am fine with some manual labor in my job", "I would prefer not to have manual labor in my job", "I will never want to do any manual labor in my job"]} currentQuestion={currentQuestion}></BasicQuestions>
      
      <BasicQuestions question="What would you rather do with your free time?" questionNumber={10} answers={["Learn a new skill", "Relax", "Have fun with a hobby", "Spend the time with friends/loved ones"]} currentQuestion={currentQuestion} ></BasicQuestions>
      
      <div>
      {currentQuestion > 1 ? (<Button onClick={handlePrevQuestion}>Prev </Button>) : <hr></hr>}
      </div>
      <div>
      {currentQuestion < 10 ? (
        <Button onClick = {handleNextQuestion}>Next</Button>
        ) : (
          <Button onClick={handleSubmit}>Submit</Button>
        )}
      </div>
      {submitted ? <h1>Good job for submitting</h1> : ""}
    </>
  );
}
