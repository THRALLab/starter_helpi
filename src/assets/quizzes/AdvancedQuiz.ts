import { Question } from "../../interfaces/QuestionTypes";

export const advancedQuiz: Record<string, Question> = {
  question1: {
    id: "question1",
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
  question2: {
    id: "question2",
    type: "MC_MULTI_RESPONSE",
    prompt: "Which area interests you the most?",
    options: ["Science", "Arts", "Business", "Technology"],
  },
  question3: {
    id: "question3",
    type: "MC_SINGLE_RESPONSE",
    prompt: "What is your highest level of education?",
    options: ["High School", "Bachelor's", "Master's", "PhD"],
  }
};
