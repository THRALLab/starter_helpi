import { QuestionProps } from "./QuestionProps";

export interface QuizProps {
    id: string;
    name: string;
    questions: QuestionProps[];
}