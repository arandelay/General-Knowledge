import { useState, useEffect } from 'react';
import { questions } from '../data/questions';
import { QuizState, QuizResult } from '../types/quiz';

const QUIZ_TIME = 30; // seconds per question

export const useQuiz = () => {
  const [state, setState] = useState<QuizState>({
    currentQuestionIndex: 0,
    score: 0,
    timeRemaining: questions.length * QUIZ_TIME,
    isFinished: false
  });

  useEffect(() => {
    if (!state.isFinished && state.timeRemaining > 0) {
      const timer = setInterval(() => {
        setState(prev => ({
          ...prev,
          timeRemaining: prev.timeRemaining - 1,
          isFinished: prev.timeRemaining <= 1
        }));
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [state.isFinished, state.timeRemaining]);

  const handleAnswer = (answerIndex: number) => {
    const currentQuestion = questions[state.currentQuestionIndex];
    const isCorrect = answerIndex === currentQuestion.correctAnswer;

    setState(prev => ({
      ...prev,
      score: isCorrect ? prev.score + 1 : prev.score,
      currentQuestionIndex: prev.currentQuestionIndex + 1,
      isFinished: prev.currentQuestionIndex + 1 >= questions.length
    }));
  };

  const getResult = (): QuizResult => ({
    score: state.score,
    totalQuestions: questions.length,
    timeSpent: questions.length * QUIZ_TIME - state.timeRemaining
  });

  const restart = () => {
    setState({
      currentQuestionIndex: 0,
      score: 0,
      timeRemaining: questions.length * QUIZ_TIME,
      isFinished: false
    });
  };

  return {
    currentQuestion: questions[state.currentQuestionIndex],
    timeRemaining: state.timeRemaining,
    isFinished: state.isFinished,
    handleAnswer,
    getResult,
    restart
  };
};