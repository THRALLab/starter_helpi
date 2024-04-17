export interface Question {
  id: string;
  type: string; // E.g., "MC_SINGLE_RESPONSE", "MC_MULTI_RESPONSE"
  prompt: string;
  options: string[];
  getNextQuestionId: (userAnswer: string) => string; // Returns next question ID or an empty string for the last question of quiz
}

export interface questionComponentProps {
  question: string;
  options: string[];
  aboluteAnswer: string;
  setAnswer: (userAnswer: string) => void;
  onNext: (status: boolean) => void;
};