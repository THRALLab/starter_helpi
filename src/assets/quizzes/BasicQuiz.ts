import { Question } from "../../interfaces/QuestionTypes";

export const basicQuiz: Record<string, Question> = {
  question1: {
    id: "question1",
    type: "MC_SINGLE_RESPONSE",
    prompt: "What is your highest level of education?",
    options: ["High School", "Bachelor's", "Master's", "PhD"],
  },
  question2: {
    id: "question2",
    type: "MC_MULTI_RESPONSE",
    prompt: "Which area interests you the most?",
    options: ["Science", "Arts", "Business", "Technology"],
  },
  question3: {
    id: "question3",
    type: "USER_RANKING",
    prompt: "Rank these workplace environments in the order in which they appeal to you:",
    options: [
      "Collaborative",
      "Enterprise/Competitive",
      "Hybrid/Virtual",
      "Investigative",
      "Traditional Largescale Business Model/Hierarchy",
      "Production"
    ],
  },
  question4: {
    id: "question4",
    type: "TEXT_RESPONSE",
    prompt: "What is your favorite class you have taken?",
    options: [],
  },
  question5: {
    id: "question5",
    type: "SLIDER_RESPONSE",
    prompt: "What is your favorite number 1 to 100",
    options: [],
    getNextQuestionId: (userAnswer: string) => determineNextQuestionId("question5", userAnswer)
  },
};