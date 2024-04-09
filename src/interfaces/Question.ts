import { QuestionWithLogic } from './QuestionTypes';
import { Initializer } from './QuestionLogic';

export const questions:QuestionWithLogic[] = [
  {
    id: "question1",
    type: "MC_MULTI_RESPONSE",
    prompt: "What is your favorite programming language?",
    options: ["C++", "JavaScript", "Python", "Rust"],
    getNextQuestionId: Initializer
  },
  // Additional questions
];
