import { QuestionResponseFunction } from './QuestionTypes';

export const Initializer: QuestionResponseFunction = (userAnswer) => {
    if (userAnswer === "High School") {
      return "idOfTheNextQuestionBasedOnAnswer";
    }
    return "ID of a default follow-up question";
  };
  