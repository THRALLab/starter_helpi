import { basicQuiz } from '../assets/quizzes/BasicQuiz';
import { Question, QuestionComponentProps } from './QuestionTypes';

export const getFirstQuestion = (quiz: QuestionComponentProps): Question => {
  return basicQuiz[Object.keys(quiz)[0]];
};