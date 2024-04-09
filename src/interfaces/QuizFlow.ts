import { basicQuiz } from '../assets/Quizzes/BasicQuiz';
import { Question } from './QuestionTypes';

export const getFirstQuestion = (): Question => {
  return basicQuiz[Object.keys(basicQuiz)[0]];
};

export const getNextQuestion = (currentQuestionId: string, userAnswer: string): Question | null => {
  const currentQuestion = basicQuiz[currentQuestionId];
  if ('getNextQuestionId' in currentQuestion) {
    const nextQuestionId = currentQuestion.getNextQuestionId(userAnswer);
    if (nextQuestionId) {
        return basicQuiz[nextQuestionId] || null;
    }
  }
  return null;
};