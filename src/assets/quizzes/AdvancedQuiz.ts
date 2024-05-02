import { Question } from "../../interfaces/QuestionTypes";

export const advancedQuiz: Record<string, Question> = {
  question1: {
    id: "question1",
    type: "TEXT_RESPONSE",
    prompt: "Briefly summarize your current professional or academic experience.",
    description: "Keep in mind that giving more information improves the AI responsiveness.",
    options: [],
  },
  question2: {
    id: "question2",
    type: "TEXT_RESPONSE",
    prompt: "How do you feel about your current path?",
    description: "If you aren't sure, describe what you like learning about.",
    options: []
  },
  question3: {
    id: "question3",
    type: "MC_SINGLE_RESPONSE",
    prompt: "Which of these describe you best?",
    description: "If you have an unique situation, describe it in the other option.",
    options: [
      "Unsure about what Career I want",
      "Know the general field I would like to pursue",
      "Know the specific field I would like to specialize in",
      "Already have a lot of exprience and am looking to take the next step to further my career",
      "Have a lot of expeience in my current career, but am looking to make a career change",
      "Other"
    ]
  }
};
