// Import necessary hooks and components
import React, { useState } from "react";
import { Question, QuestionComponentProps } from "../interfaces/QuestionTypes";
import { McSingleResponse } from "./McSingleResponse";
import { McMultiResponse } from "./McMultiResponse";
import { TextResponse } from "./TextResponse"
import { UserRanking } from "./UserRanking"

type DisplayQuizProps = Record<string, Question>;

type QuestionAns = {
    questionId: string,
    answer: string
}

export function DisplayQuiz(
    { 
        quiz,
        title,
        questionsAnswerd,
        setQuestionsAnswerd } 
    : 
    {
        title: string,
        quiz : DisplayQuizProps,
        questionsAnswerd : number,
        setQuestionsAnswerd : (questionsAnswerd: number) => void 
    }
    ): JSX.Element {
    const [currentQuestionId, setCurrentQuestionId] = useState<string>("question1"); // Starting question ID
    const [isQuizComplete, setIsQuizComplete] = useState<boolean>(false); // Used to determine when quiz is complete
    const [answers, setAnswers] = useState<QuestionAns[]>([]); // Array of all question answers

    // used to determine next question
    const determineNextQuestionId = (currentQuestionId: string, quiz: DisplayQuizProps): string => {
        // questions are id'd as `quiestion${questionNumber}`
        if (currentQuestionId.includes("question")) {
          const newId = `question${parseInt(currentQuestionId.substring(8)) + 1}`;
          if (newId in quiz) return (newId);
          else return "";
        } 
        else return "";
      };

    /**
     * 
     * @param answer - the answer for the current question
     * when an answer is submitted the answer is passed and added to the answers
     * the next question is then displayed
     * if there is no next question then the quiz is over
     */
    const handleAnswerSubmit = (answer: string) => {
        setAnswers([...answers, {questionId: currentQuestionId, answer: answer}])
        const nextQuestionId = determineNextQuestionId(currentQuestionId, quiz);
        setQuestionsAnswerd(questionsAnswerd + 1)
        if (nextQuestionId === "") {
            setIsQuizComplete(true); // End of the quiz
        } else {
            setCurrentQuestionId(nextQuestionId); // Move to the next question
        }
    }

    if (isQuizComplete) {
        return (<>
        <h2>End of question bank for {title}. This is the point at which GPT would take over asking questions.</h2>
        <br></br>
        <div style={{textAlign: "left"}}>
        <h3>Our vision for this feature is that GPT will be given a prompt (populated by 
            previous user answers up until now)</h3>
        <span>GPT will be given the option of three actions to make:</span>
        <ul>
            <li><strong>Ask Question:</strong> (GPT returns parameters to feed into question component)</li>
            <li><strong>End quiz:</strong> (Only ends on user’s side. Triggers AI to start to formulating final output)</li>
            <li><strong>Final Output:</strong> (Quiz complete)</li>
        </ul>
        <br></br> 
        <br></br>
        <br></br>
        <br></br>
        <h3>Current Answers:</h3>
        <ol>
        {answers.map((target: QuestionAns) => (<li key={target.questionId}>{target.answer}</li>))}
        </ol>
        </div>
        </>)
    }

    const currentQuestion = quiz[currentQuestionId];

    const questionComponentProps: QuestionComponentProps = {
        question: currentQuestion.prompt,
        options: currentQuestion.options,
        onNext: handleAnswerSubmit
    };


    //displays the curent question type
    switch (currentQuestion.type) {
        case "MC_SINGLE_RESPONSE":
            return <McSingleResponse {...questionComponentProps} />;
        case "MC_MULTI_RESPONSE":
            return <McMultiResponse {...questionComponentProps} />;
        case "USER_RANKING":
            return <UserRanking {...questionComponentProps} />;
        case "TEXT_RESPONSE":
            return <TextResponse {...questionComponentProps} />;
        default:
            return <h1>Unknown question type</h1>;
    }
}
