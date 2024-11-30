export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
}

export interface QuizState {
  currentQuestionIndex: number;
  score: number;
  timeRemaining: number;
  isFinished: boolean;
}

export interface QuizResult {
  score: number;
  totalQuestions: number;
  timeSpent: number;
}