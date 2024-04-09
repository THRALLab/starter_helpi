import { Question } from "../../interfaces/QuestionTypes";

const determineNextQuestionId = (currentQuestionId: string, userAnswer: string): string => {
  // Logic to determine the next question. Return an empty string if there's no next question.
  if (currentQuestionId === "root") return "question2";
  return "";
};

export const basicQuiz: Record<string, Question> = {
  root: {
    id: "question1",
    type: "MC_SINGLE_RESPONSE",
    prompt: "What is your highest level of education?",
    options: ["High School", "Bachelor's", "Master's", "PhD"],
    getNextQuestionId: (userAnswer: string) => determineNextQuestionId("root", userAnswer),
  },
  question2: {
    id: "question2",
    type: "MC_SINGLE_RESPONSE",
    prompt: "Which area interests you the most?",
    options: ["Science", "Arts", "Business", "Technology"],
    getNextQuestionId: () => "", // Currently last question, so it returns an empty string
  },
  // Additional questions can be defined similarly
};
