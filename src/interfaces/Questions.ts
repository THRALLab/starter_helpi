import { QuestionWithLogic } from './QuestionTypes';
import { Initializer } from './QuestionLogic';

export const questions: Record<string, QuestionWithLogic> = {
  question1: {
    id: "question1",
    type: "multiple-choice",
    prompt: "What is your favorite programming language?",
    options: ["C++", "JavaScript", "Python", "Rust"],
    getNextQuestionId: Initializer
  },
  // Additional questions can be added here
};