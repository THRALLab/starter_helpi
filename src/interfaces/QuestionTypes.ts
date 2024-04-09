export interface Question {
    id: string;
    type: string;
    prompt: string;
    options: string[]; // Optional, for questions with predefined answers
  }
  
  export type QuestionResponseFunction = (userAnswer: string) => string
  
  export interface QuestionWithLogic extends Question {
    getNextQuestionId: QuestionResponseFunction;
  }