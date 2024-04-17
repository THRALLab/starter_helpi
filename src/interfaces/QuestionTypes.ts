export interface Question {
  id: string;
  type: string; // E.g., "MC_SINGLE_RESPONSE", "MC_MULTI_RESPONSE"
  prompt: string;
  options: string[];
}

export interface questionComponentProps {
  question: string;
  options: string[];
  onNext: (answer: string) => void;
};