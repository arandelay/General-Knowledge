import React from 'react';
import { Timer } from './components/Timer';
import { Question } from './components/Question';
import { QuizResult } from './components/QuizResult';
import { useQuiz } from './hooks/useQuiz';

function App() {
  const { currentQuestion, timeRemaining, isFinished, handleAnswer, getResult, restart } = useQuiz();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Knowledge Quiz</h1>
          <Timer timeRemaining={timeRemaining} />
        </div>

        {!isFinished ? (
          <Question
            question={currentQuestion}
            onAnswer={handleAnswer}
          />
        ) : (
          <QuizResult
            result={getResult()}
            onRestart={restart}
          />
        )}
      </div>
    </div>
  );
}

export default App;