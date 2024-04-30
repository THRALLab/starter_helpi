import React from "react";

interface AnswerContextType {
  userAnswers: string[];
  setUserAnswers: React.Dispatch<React.SetStateAction<string[]>>;
}

export const AnswerContext = React.createContext<AnswerContextType>({
  userAnswers: [],
  setUserAnswers: () => {},
});
