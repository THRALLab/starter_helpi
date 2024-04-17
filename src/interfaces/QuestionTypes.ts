export interface Question {
  id: string;
  type: string; // E.g., "MC_SINGLE_RESPONSE", "MC_MULTI_RESPONSE"
  prompt: string;
  options: string[];
}

export interface QuestionComponentProps {
  question: string;
  options: string[];
  onNext: (answer: string) => void; // submits the current answer and switches the question
};