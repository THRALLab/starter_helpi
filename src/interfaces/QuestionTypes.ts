export interface Question {
  id: string;
  type: string; // E.g., "MC_SINGLE_RESPONSE", "MC_MULTI_RESPONSE"
  prompt: string;
  options: string[];
  description: string;
}

export interface QuestionComponentProps {
  question: string;
  description: string;
  options: string[];
  onNext: (answer: string, forewards: boolean) => void; // submits the current answer and switches the question
  isFirst: boolean; // determines if the question is the first in the quiz
  prevAnswer: string;
};