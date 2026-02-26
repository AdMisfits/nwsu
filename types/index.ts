export type StepType =
  | 'welcome'
  | 'registration'
  | 'chapter_content'
  | 'chapter_quiz'
  | 'quiz_results'
  | 'final_exam'
  | 'exam_results'
  | 'certification'
  | 'complete';

export type StepGroup = 'Getting Started' | 'Training' | 'Certification';

export interface Step {
  type: StepType;
  label: string;
  group: StepGroup;
  chapterIndex?: number;
}

export type AnswerKey = 'A' | 'B' | 'C' | 'D';

export interface QuizQuestion {
  id: string;
  question: string;
  options: Record<AnswerKey, string>;
  correctAnswer: AnswerKey;
  explanation: string;
}

export interface ChapterSection {
  title: string;
  content: string;
  bullets?: string[];
}

export interface ChapterCallout {
  type: 'info' | 'warning' | 'tip';
  title: string;
  content: string;
}

export interface Chapter {
  title: string;
  subtitle: string;
  sections: ChapterSection[];
  callouts?: ChapterCallout[];
  keyTerms?: Record<string, string>;
  quizQuestions: QuizQuestion[];
}

export interface QuizAttempt {
  chapterIndex: number;
  score: number;
  total: number;
  passed: boolean;
  attemptCount: number;
  answers: Record<string, AnswerKey>;
}

export interface ExamAttempt {
  score: number;
  total: number;
  passed: boolean;
  attemptCount: number;
  answers: Record<string, AnswerKey>;
}

export interface TrainingState {
  currentStep: number;
  steps: Step[];
  traineeEmail: string;
  traineeName: string;
  traineePhone: string;
  traineeCity: string;
  traineeState: string;
  activeQuizAnswers: Record<string, AnswerKey>;
  chapterAttempts: Record<number, QuizAttempt>;
  examAttempt: ExamAttempt | null;
  certificationAcknowledged: boolean;
}
