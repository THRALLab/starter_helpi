export interface MultiResponseQuestionProps {
    id: string;
    setId: (answer: number) => void;
    question: string;
    setQuestion: (answer: string[]) => void;
    options: string[];
    answer: string[];
    setAnswer: (answer: string[]) => void;
}

export function initializeQuesiton(
    question: string,

) {

}