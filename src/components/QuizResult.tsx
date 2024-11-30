import React from 'react';
import { Trophy } from 'lucide-react';
import { QuizResult as QuizResultType } from '../types/quiz';

interface QuizResultProps {
  result: QuizResultType;
  onRestart: () => void;
}

export const QuizResult: React.FC<QuizResultProps> = ({ result, onRestart }) => {
  const percentage = Math.round((result.score / result.totalQuestions) * 100);

  return (
    <div className="text-center">
      <div className="mb-8">
        <Trophy className="w-16 h-16 mx-auto text-yellow-500" />
      </div>
      <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
      <div className="space-y-2 mb-8">
        <p className="text-lg">
          Score: <span className="font-semibold">{result.score}</span> out of {result.totalQuestions}
        </p>
        <p className="text-lg">
          Percentage: <span className="font-semibold">{percentage}%</span>
        </p>
        <p className="text-lg">
          Time Spent: <span className="font-semibold">{result.timeSpent} seconds</span>
        </p>
      </div>
      <button
        onClick={onRestart}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
      >
        Try Again
      </button>
    </div>
  );
};