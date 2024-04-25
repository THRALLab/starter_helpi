import { Question } from "./QuestionTypes"

export interface PromptQuestionsSetup {
    questionsAns: QuestionAnswer[]
    status: string,
    interests: string,
    experience: string,
    specificNeeds: string,
}

export type QuestionAnswer = {
    question: Question,
    answer: string
}