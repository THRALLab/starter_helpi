 import { Button, Form } from "react-bootstrap";
import { BasicQuestions } from "../components/BasicQuestions";
import { useState } from "react";
import { ProgressBar } from "../components/progressBar";
import "./basicPage.css";

import job1 from "../images/job1.jpg";
import job2 from "../images/job2.jpg";
import job3 from "../images/job3.jpg";
import job4 from "../images/job4.jpg";
import job5 from "../images/job5.jpg";
import OpenAI from "openai";

let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData);
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

export function BasicPage() {
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [numAnswered, setNumAnswered] = useState<number>(0);
  const [resultArray, setResultArray] = useState<string[]>(["","","","","","","","","",""]);
  const [careers, setCareers] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const updateSubmitted = (bool: boolean) => {
    setSubmitted(bool);
  }

  const updateLoading = (bool: boolean) => {
    setLoading(bool);
  }

  const updateCareers = (response: string) => {
    setCareers(response);
  }

  const updateResultArray = (answer: string, num: number) => {
    const tempArray = [...resultArray];
    tempArray.splice(num, 1, answer)
    setResultArray(tempArray);
  }

  const updateNumAnswered = (value: number) => {
    setNumAnswered(numAnswered + value);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };
  const handlePrevQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion - 1);
  };

  const resetQuiz = () => {
    setCurrentQuestion(1);
    setNumAnswered(0);
    setLoading(true);
    setSubmitted(false);
  };
  const [key, setKey] = useState<string>(keyData);

  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }

  async function results(answers: string[]) {
    console.log(answers);
    let Key = localStorage.getItem("MYKEY");
    if(Key !== null) {
      Key = JSON.parse(Key);
    }
    if(Key === null) {
      throw new Error("API key not found");
    }
    const openai = new OpenAI({apiKey: Key, dangerouslyAllowBrowser: true});
    try {
    const completion = await openai.chat.completions.create({
      messages: [
        {role: "system", content: "You are a helpful assistant. Your answers will be used as the results of an ideal career questionnaire."},
        {role: "user", content: `The questions are as follows: Question 1: How much experience do you have with working?; Question 2: How comfortable are you with public speaking?; Question 3: About how much money would you like to earn?; Question 4: Which one of these words best describes you?; Question 5: How much would you like your job to help people?; Question 6: How many hours would you like to work; Question 7: How good are you at planning?; Question 8: Which of the following sounds the most interesting?; Question 9: How much are you willing to do any sort of manual labor?; Question 10: What would you rather do with your free time? Generate possible career choices for someone who responded to the quiz questions. Their answers are for those questions are stored in this array: ${answers}.`},
      ],
      model: "gpt-4-turbo",
    })
    if(completion.choices[0].message.content !== null) {
      updateCareers(completion.choices[0].message.content);
      updateLoading(false);

    } else {
      updateCareers("No careers found");
      updateLoading(false);

    }
  } catch {
    updateCareers("An error occured while searching for careers");
    updateLoading(false);
  }
  }

  const handleSubmit = () => { 
    updateSubmitted(true);
    results(resultArray);
    console.log(careers);
  };

  return (
    //The Basic Page will have questions be answered in mulitple choice form
    <>
      <div className="basic-title">
        <h1>Welcome To Our Basic Questions</h1>
      </div>
      <ProgressBar numAnswered={numAnswered}></ProgressBar>
      <div className="question">
        <BasicQuestions
          question="How much experience do you have with working?"
          questionNumber={1}
          image={job1}
          answers={[
            "I have had several different jobs at different places",
            "I have only had a 2-3 different jobs",
            "I have only had one singlular job my whole life",
            "I have never had a job before",
          ]}
          currentQuestion={currentQuestion}
          updateNumAnswered={updateNumAnswered}
          updateResultArray={updateResultArray}
        ></BasicQuestions>

        <BasicQuestions
          question="How comfortable are you with public speaking?"
          questionNumber={2}
          image={job2}
          answers={[
            "I'm extremely comfortable and am willing to do it",
            "I'm fine with it whenever I have to do it",
            "I would rather not have to do it",
            "I cannot get myself to do this even if I tried",
          ]}
          currentQuestion={currentQuestion}
          updateNumAnswered={updateNumAnswered}
          updateResultArray={updateResultArray}
        ></BasicQuestions>

        <BasicQuestions
          question="About how much money would you like to earn?"
          image={job3}
          questionNumber={3}
          answers={[
            "I want to become really, really rich",
            "I would like to be able to buy whatever I want and still live a comfortable life",
            "I'm fine with any amount as long as I live comfortably",
            "Money doesn't have an impact on my decision",
          ]}
          currentQuestion={currentQuestion}
          updateNumAnswered={updateNumAnswered}
          updateResultArray={updateResultArray}
        ></BasicQuestions>

        <BasicQuestions
          question="Which one of these words best describes you?"
          questionNumber={4}
          image={job4}
          answers={[
            "Center of Attention",
            "Participating",
            "In the crowd",
            "Alone",
          ]}
          currentQuestion={currentQuestion}
          updateNumAnswered={updateNumAnswered}
          updateResultArray={updateResultArray}
        ></BasicQuestions>

        <BasicQuestions
          question="How much would you like your job to help people?"
          questionNumber={5}
          image={job5}
          answers={[
            "I want it to be my sole purpose",
            "I would really like if my job helped others in need",
            "I would be fine if helping people was a side effect of me doing my job",
            "I couldn't care less how my actions may impact someone",
          ]}
          currentQuestion={currentQuestion}
          updateNumAnswered={updateNumAnswered}
          updateResultArray={updateResultArray}
        ></BasicQuestions>

        <BasicQuestions
          question="How many hours would you like to work"
          questionNumber={6}
          image={job1}
          answers={[
            "I'm fine with whatever I am assigned, even if I have to work overtime",
            "I would like to work a 9-5 (or any other 8 hour period)",
            "I would prefer to work a lot less than 8 hours a day",
            "I would rather create my own hours and work to my own schedule",
          ]}
          currentQuestion={currentQuestion}
          updateNumAnswered={updateNumAnswered}
          updateResultArray={updateResultArray}
        ></BasicQuestions>

        <BasicQuestions
          question="How good are you at planning?"
          questionNumber={7}
          image={job2}
          answers={[
            "I usually have a schedule planning literally every part of my day out",
            "I prioritize and and keep track of big events but not about the daily tasks",
            "I try to keep my plan organized but usually don't do a good job with it",
            "I don't keep a schedule and I deal with things as they come",
          ]}
          currentQuestion={currentQuestion}
          updateNumAnswered={updateNumAnswered}
          updateResultArray={updateResultArray}
        ></BasicQuestions>

      <BasicQuestions
        question="Which of the following sounds the most interesting?"
        questionNumber={8}
        image={job3}
        answers={[
          "Electronic & Programs",
          "History & Culture",
          "Biology & Anatomy",
          "Sports & Fitness",
        ]}
        currentQuestion={currentQuestion}
        updateNumAnswered={updateNumAnswered}
        updateResultArray={updateResultArray}
      ></BasicQuestions>

      <BasicQuestions
        question="How much are you willing to do any sort of manual labor?"
        questionNumber={9}
        image={job4}
        answers={[
          "I would prefer to do manual labor in my job",
          "I am fine with some manual labor in my job",
          "I would prefer not to have manual labor in my job",
          "I will never want to do any manual labor in my job",
        ]}
        currentQuestion={currentQuestion}
        updateNumAnswered={updateNumAnswered}
        updateResultArray={updateResultArray}
      ></BasicQuestions>

      <BasicQuestions
        question="What would you rather do with your free time?"
        questionNumber={10}
        image={job5}
        answers={[
          "Learn a new skill",
          "Relax",
          "Have fun with a hobby",
          "Spend the time with friends/loved ones",
        ]}
        currentQuestion={currentQuestion}
        updateNumAnswered={updateNumAnswered}
        updateResultArray={updateResultArray}
      ></BasicQuestions>
      </div>
      <div>
        {numAnswered === 100 ? (
          <center>
            <h2>You Have Answered All Questions, Go to Last Page to Submit!</h2>{" "}
          </center>
        ) : (
          <hr></hr>
        )}
      </div>

      <div className="next-container">
        <div className="prev">
          {currentQuestion > 1 ? (
            <Button onClick={handlePrevQuestion}>Prev </Button>
          ) : (
            <hr></hr>
          )}
        </div>

        <div className="next">
          {currentQuestion < 10 ? (
            <Button onClick={handleNextQuestion}>Next</Button>
          ) : (
            <Button onClick={handleSubmit} disabled={numAnswered !== 100}>
              Submit
            </Button>
          )}
          {submitted && <Button onClick={resetQuiz}>Reset Quiz</Button>}
        </div>
      
      </div>
      
      
      {submitted ? (
        <center>
          {loading ? (
            <p>loading your results</p>
          ) : (
            <p>Here are your results: {careers}</p>
          )
          }
        </center>
      ) : (
        ""
      )}
    </>
  );
}