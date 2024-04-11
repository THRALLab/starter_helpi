import { BasicQuiz } from '../assets/Quizzes/BasicQuiz';
import { Question } from './QuestionTypes';

export const getFirstQuestion = (): Question => {
  return BasicQuiz[Object.keys(BasicQuiz)[0]];
};

export const getNextQuestion = (currentQuestionId: string, userAnswer: string): Question | null => {
  const currentQuestion = BasicQuiz[currentQuestionId];
  if ('getNextQuestionId' in currentQuestion) {
    const nextQuestionId = currentQuestion.getNextQuestionId(userAnswer);
    if (nextQuestionId) {
        return BasicQuiz[nextQuestionId] || null;
    }
  }
  return null;
};