import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import { sendDetailedQuizQuery } from "./GPT";
import Report from "./Report";
import { CareerRecommendation } from "./GPT";

export default function DetailedQuiz({ keyData }: { keyData: string }) {
  const defaultOption = "";
  const QuestionList = [
    "What type of career are you interested in?",
    "In your ideal work environment, what type of schedule dynamic would you like for yourself?",
    "What is the highest level of education you have and would like to achieve?",
    "Reflecting on your skills and strengths, what types of roles or careers do you think would allow you to leverage them most effectively?",
    "Have you ever thought about turning a hobby or personal interest into a career? If so, how do you imagine that transition happening?",
    "Are there any emerging trends or technologies that excite you, and could potentially open up new career paths for you? If so, what are they and why?",
    "Have you ever considered starting your own business? If so, what skills or expertise do you possess that could be marketable in those areas?",
    "Have you ever thought about pursuing a career that involves travel or allows you to work remotely? What aspects of such a career appeal to you?",
  ];

  const [answers, setAnswers] = useState<string[]>(
    new Array(8).fill(defaultOption)
  );
  const [questionsComplete, setQuestionsComplete] = useState<number>(0);
  const [recJobs, setRecJobs] = useState<CareerRecommendation | null>(null);
  const [showReport, setShowReport] = useState(false);
  const totalQuestions = 8;

  const updateAnswer = (index: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
    setQuestionsComplete(
      newAnswers.filter((answer) => answer.length > 3).length
    );
  };

  async function submitAnswers() {
    setShowReport(true);
    setRecJobs(await sendDetailedQuizQuery(QuestionList, answers, keyData));
  }

  return (
    <div>
      {!showReport ? (
        <div>
          <ProgressBar
            questionsComplete={questionsComplete}
            totalQuestions={totalQuestions}
          />
          <h1>
            <u> Detailed Quiz </u>
          </h1>

          <hr></hr>

          <div className="row">
            {[...Array(8)].map((_, index) => (
              <div className="column" key={index}>
                <ol start={index + 1}>
                  <li>
                    <div style={{ border: "1px solid black", padding: "2px" }}>
                      {QuestionList[index]}{" "}{answers[index].length > 3 ? " ✔️" : " ❌"}
                    </div>
                  </li>
                  <input
                    type="text"
                    value={answers[index]}
                    onChange={(e) => updateAnswer(index, e.target.value)}
                    style={{ width: "100%", height: "auto" }}
                  />
                </ol>
              </div>
            ))}
            <hr></hr>
            {questionsComplete === answers.length ? (
              <span>
                <div>All Questions Complete!</div>
                <div>
                  When Ready, Please Hit Submit Below to Generate your Results!
                </div>
                <button
                  className="submit mx-auto"
                  onClick={() => submitAnswers()}
                >
                  Submit
                </button>
                <hr></hr>
              </span>
            ) : (
              <span>
                <p>
                  Once you answers all the questions, a button will appear here
                  to submit your answers.
                </p>
                <hr></hr>
              </span>
            )}
          </div>
        </div>
      ) : (
        <div>
          <div className="Report-Header">
            <div className="Report-Intro">
              <h1>
                <u>Detailed Quiz Report</u>
              </h1>
              <h4>
                Based on your answers to the quiz, here are some jobs that you
                might be interested in
              </h4>
              </div>
          </div>
          <Report
            Overview={recJobs?.overview ?? null}
            RecCareer={recJobs?.jobTitle ?? null}
            Description={recJobs?.jobDescription ?? null}
            Salary={recJobs?.averageSalary.join(", ") ?? null}
            Education={recJobs?.requirements ?? null}
            Fit={recJobs?.applicationToCareer ?? null}
            OtherJobs={recJobs?.otherJobs ?? null}
            RelatedAspects={recJobs?.relatedAspects ?? null}
          />
          {/* button allowing user to go back to quiz with answers still filled */}
          <div className="Back-to-Quiz">
            <br></br>
            <button onClick={() => setShowReport(false)}>
              Go Back to Quiz
            </button>
            <hr></hr>
          </div>
        </div>
      )}
    </div>
  );
}
