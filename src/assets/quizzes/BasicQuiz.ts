import { Question } from "../../interfaces/QuestionTypes";

export const basicQuiz: Record<string, Question> = {
  question1: {
    id: "question1",
    type: "MC_SINGLE_RESPONSE",
    prompt: "What is your highest level of education?",
    description: "If currently in school, select your current level",
    options: ["High School", "Bachelor's", "Master's", "PhD"]
  },
  question2: {
    id: "question2",
    type: "MC_MULTI_RESPONSE",
    prompt: "Which area interests you the most?",
    description: "Select all that apply",
    options: ["Science", "Arts", "Business", "Technology"]
  },
  question3: {
    id: "question3",
    type: "USER_RANKING",
    prompt: "Rank these workplace environments in the order in which they appeal to you:",
    description: "Use the arrow buttons to change the order of questions",
    options: [
      "Collaborative",
      "Enterprise/Competitive",
      "Hybrid/Virtual",
      "Investigative",
      "Traditional Largescale Business Model/Hierarchy",
      "Production"
    ]
  },
  question4: {
    id: "question4",
    type: "TEXT_RESPONSE",
    prompt: "What is your favorite class you have taken?",
    description: "Feel free to list multiple classes",
    options: []
  },
  question5: {
    id: "question5",
    type: "SLIDER_RESPONSE",
    prompt: "What percentage of your day do you spend on a computer?",
    description: "Rough estimate is ok",
    options: [],
  },
  question6: {
    id: "question6",
    type: "MC_SINGLE_RESPONSE",
    prompt: "What working environment do you prefer the most?",
    description: "Think about hybrid vs in person vs virtual",
    options: ["Outdoors", "Indoors away from home", "Indoors at home"],
  },
  question7: {
    id: "question7",
    type: "SLIDER_RESPONSE",
    prompt: "How many hours would you be willing to work in a week?",
    description: "Rough estimate is ok",
    options: []
  },
};