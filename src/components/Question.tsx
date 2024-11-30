import React from 'react';
import { Question as QuestionType } from '../types/quiz';

interface QuestionProps {
  question: QuestionType;
  onAnswer: (answerIndex: number) => void;
}

export const Question: React.FC<QuestionProps> = ({ question, onAnswer }) => {
  return (
    <div className="w-full max-w-2xl">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">{question.text}</h2>
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(index)}
            className="w-full p-4 text-left bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};