import { Question } from "./QuestionTypes"

export interface PromptQuestionsSetup {
    questionsAns: QuestionAnswer[]
    status: string
    quiz: string
}

export type QuestionAnswer = {
    question: Question,
    answer: string
}