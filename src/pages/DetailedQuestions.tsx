import "../styles/BasicQuestions.css"; // Import CSS file
import "../styles/DetailedQuestions.css"; // Import CSS file
import NavigationBar from "../components/NavigationBar";
import QuestionCard from "../components/QuestionCard";
import CustomFooter from "../components/CustomFooter";
import React from "react";
import { useEffect, useMemo, useState } from "react";
import QuizPageCard from "../components/QuizPageCard";

import { ApiAnswer } from "../components/QuestionCard";

type FollowUpQuestion = {
  question: string;
  photo: string;
  choices: string[];
};

function DetailedQuestions() {
  const [followUpQuestions, setFollowUpQuestions] = useState<
    FollowUpQuestion[]
  >([]);
  const [completed, setCompleted] = useState<boolean>(false);

  // Simulate fetching previous answers from localStorage
  const previousAnswers: ApiAnswer[] = useMemo(
    () =>
      JSON.parse(localStorage.getItem("apiAnswers") || "[]").map(
        (apiAnswer: ApiAnswer) => apiAnswer.answer
      ),
    [] // Empty dependency array to ensure it's calculated only once
  );

  function generateFollowUpQuestions(
    previousAnswers: ApiAnswer[]
  ): FollowUpQuestion[] {
    // Your logic to generate follow-up questions based on previous answers
    // For demonstration purposes, let's return some static follow-up questions
    return [
      {
        question: `What specific skills or experiences do you have that could contribute to ${previousAnswers[0]}?`,
        photo: "",
        choices: [],
      },
      {
        question: `How do you see yourself making an impact in ${previousAnswers[0]}? Can you provide an example of a problem or challenge you'd like to address within this industry?`,
        photo: "",
        choices: [],
      },
      {
        question: `In your ideal work environment (${previousAnswers[3]}), what types of tasks or projects would you be most excited to work on?`,
        photo: "",
        choices: [],
      },
      {
        question: `Can you share a personal or professional experience that highlights your strengths in the type of role you are interested in? (${previousAnswers[2]})`,
        photo: "",
        choices: [],
      },
      {
        question: `Considering your prioritized aspect in a career (${previousAnswers[3]}), what specific goals do you hope to achieve in your professional journey?`,
        photo: "",
        choices: [],
      },
      {
        question: `For someone comfortable with ${previousAnswers[4]}, what types of challenges or opportunities do you seek in your next career move?`,
        photo: "",
        choices: [],
      },
      {
        question: `How do you envision your career progressing in the next 5-10 years, given your interests and aspirations in ${previousAnswers[0]}?`,
        photo: "",
        choices: [],
      },
    ];
  }

  useEffect(() => {
    // Generate follow-up questions based on previous answers
    const generatedQuestions = generateFollowUpQuestions(previousAnswers);
    setFollowUpQuestions(generatedQuestions);
  }, [previousAnswers]);

  // Callback function to handle completion
  const handleCompletion = () => {
    setCompleted(true);
  };

  return (
    <div className="detailed-q-page">
      <NavigationBar></NavigationBar>
      {/* Render QuestionCard only if not completed */}
      {!completed && (
        <>
          <h1 className="basic-q-title">Detailed Questions Page</h1>
          {followUpQuestions.length > 0 && (
            <QuestionCard
              questions={followUpQuestions}
              onCompletion={handleCompletion}
              // handleChange={function (
              //   event: ChangeEvent<HTMLInputElement>
              // ): void {
              //   throw new Error("Function not implemented.");
              // }}
            />
          )}
        </>
      )}
      {/* Render completion message if completed */}
      {completed && (
        <div className="path-section" id="choose-path-section">
          <h1 className="path-title basic-q-title">
            You have completed the quiz!
          </h1>
          <div className="path-options">
            <QuizPageCard
              title="See Career Report Now"
              description="You Just Completed the Detailed Questionaire! Click the button below to see your results now!"
              link="/starter_helpi/#/CareerReport"
              btnText="Get Report"
            />
          </div>
        </div>
      )}
      <CustomFooter />
    </div>
  );
}

export default DetailedQuestions;
