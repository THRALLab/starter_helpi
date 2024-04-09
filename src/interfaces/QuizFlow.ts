import { questions } from './Questions';
import { Question } from './QuestionTypes';

export const getFirstQuestion = (): Question => {
  return questions[Object.keys(questions)[0]]; // Returns the first question
};

export const getNextQuestion = (currentQuestionId: string, userAnswer: string): Question | null => {
  const currentQuestion = questions[currentQuestionId];
  if ('getNextQuestionId' in currentQuestion) { // Type guard for safety
    const nextQuestionId = currentQuestion.getNextQuestionId(userAnswer);
    return questions[nextQuestionId] || null;
  }
  return null;
};