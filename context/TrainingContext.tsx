'use client';

import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import {
  TrainingState,
  Step,
  AnswerKey,
  QuizAttempt,
  ExamAttempt,
} from '@/types';
import { STEPS_CONFIG, QUIZ_PASS_THRESHOLD, EXAM_PASS_THRESHOLD } from '@/lib/constants';
import { CHAPTERS, FINAL_EXAM_QUESTIONS } from '@/lib/chapters';

const STORAGE_KEY = 'nwsuTraining';

const initialState: TrainingState = {
  currentStep: 0,
  steps: STEPS_CONFIG,
  traineeEmail: '',
  traineeName: '',
  traineePhone: '',
  traineeCity: '',
  traineeState: '',
  activeQuizAnswers: {},
  chapterAttempts: {},
  examAttempt: null,
  certificationAcknowledged: false,
};

type Action =
  | { type: 'NEXT_STEP' }
  | { type: 'PREV_STEP' }
  | { type: 'GO_TO_STEP'; step: number }
  | { type: 'SET_TRAINEE_INFO'; payload: { email?: string; name?: string; phone?: string; city?: string; state?: string } }
  | { type: 'SET_QUIZ_ANSWER'; questionId: string; answer: AnswerKey }
  | { type: 'SUBMIT_CHAPTER_QUIZ'; chapterIndex: number }
  | { type: 'RETRY_CHAPTER_QUIZ'; chapterIndex: number }
  | { type: 'SUBMIT_FINAL_EXAM' }
  | { type: 'RETRY_FINAL_EXAM' }
  | { type: 'ACKNOWLEDGE_CERTIFICATION' }
  | { type: 'LOAD_STATE'; state: Partial<TrainingState> }
  | { type: 'RESET' };

function gradeChapterQuiz(
  chapterIndex: number,
  answers: Record<string, AnswerKey>,
  previousAttempt?: QuizAttempt
): QuizAttempt {
  const chapter = CHAPTERS[chapterIndex];
  const questions = chapter.quizQuestions;
  let correct = 0;

  for (const q of questions) {
    if (answers[q.id] === q.correctAnswer) {
      correct++;
    }
  }

  const score = questions.length > 0 ? correct / questions.length : 0;

  return {
    chapterIndex,
    score: Math.round(score * 100),
    total: questions.length,
    passed: score >= QUIZ_PASS_THRESHOLD,
    attemptCount: (previousAttempt?.attemptCount || 0) + 1,
    answers: { ...answers },
  };
}

function gradeFinalExam(
  answers: Record<string, AnswerKey>,
  previousAttempt?: ExamAttempt | null
): ExamAttempt {
  const questions = FINAL_EXAM_QUESTIONS;
  let correct = 0;

  for (const q of questions) {
    if (answers[q.id] === q.correctAnswer) {
      correct++;
    }
  }

  const score = questions.length > 0 ? correct / questions.length : 0;

  return {
    score: Math.round(score * 100),
    total: questions.length,
    passed: score >= EXAM_PASS_THRESHOLD,
    attemptCount: (previousAttempt?.attemptCount || 0) + 1,
    answers: { ...answers },
  };
}

function reducer(state: TrainingState, action: Action): TrainingState {
  switch (action.type) {
    case 'NEXT_STEP':
      if (state.currentStep < state.steps.length - 1) {
        return { ...state, currentStep: state.currentStep + 1 };
      }
      return state;

    case 'PREV_STEP':
      if (state.currentStep > 0) {
        return { ...state, currentStep: state.currentStep - 1 };
      }
      return state;

    case 'GO_TO_STEP':
      if (action.step >= 0 && action.step < state.steps.length) {
        return { ...state, currentStep: action.step };
      }
      return state;

    case 'SET_TRAINEE_INFO':
      return {
        ...state,
        ...(action.payload.email !== undefined && { traineeEmail: action.payload.email }),
        ...(action.payload.name !== undefined && { traineeName: action.payload.name }),
        ...(action.payload.phone !== undefined && { traineePhone: action.payload.phone }),
        ...(action.payload.city !== undefined && { traineeCity: action.payload.city }),
        ...(action.payload.state !== undefined && { traineeState: action.payload.state }),
      };

    case 'SET_QUIZ_ANSWER':
      return {
        ...state,
        activeQuizAnswers: {
          ...state.activeQuizAnswers,
          [action.questionId]: action.answer,
        },
      };

    case 'SUBMIT_CHAPTER_QUIZ': {
      const attempt = gradeChapterQuiz(
        action.chapterIndex,
        state.activeQuizAnswers,
        state.chapterAttempts[action.chapterIndex]
      );
      return {
        ...state,
        chapterAttempts: {
          ...state.chapterAttempts,
          [action.chapterIndex]: attempt,
        },
      };
    }

    case 'RETRY_CHAPTER_QUIZ':
      return {
        ...state,
        activeQuizAnswers: {},
      };

    case 'SUBMIT_FINAL_EXAM': {
      const examAttempt = gradeFinalExam(state.activeQuizAnswers, state.examAttempt);
      return {
        ...state,
        examAttempt: examAttempt,
      };
    }

    case 'RETRY_FINAL_EXAM':
      return {
        ...state,
        activeQuizAnswers: {},
      };

    case 'ACKNOWLEDGE_CERTIFICATION':
      return {
        ...state,
        certificationAcknowledged: true,
      };

    case 'LOAD_STATE':
      return {
        ...state,
        ...action.state,
        steps: STEPS_CONFIG,
      };

    case 'RESET':
      return initialState;

    default:
      return state;
  }
}

interface TrainingContextValue {
  state: TrainingState;
  currentStepData: Step;
  progress: number;
  totalSteps: number;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: number) => void;
  setTraineeInfo: (info: { email?: string; name?: string; phone?: string; city?: string; state?: string }) => void;
  setQuizAnswer: (questionId: string, answer: AnswerKey) => void;
  submitChapterQuiz: (chapterIndex: number) => void;
  retryChapterQuiz: (chapterIndex: number) => void;
  submitFinalExam: () => void;
  retryFinalExam: () => void;
  acknowledgeCertification: () => void;
  isChapterUnlocked: (chapterIndex: number) => boolean;
  isFinalExamUnlocked: () => boolean;
  reset: () => void;
}

const TrainingContext = createContext<TrainingContextValue | null>(null);

export function TrainingProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Load state from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        dispatch({
          type: 'LOAD_STATE',
          state: {
            currentStep: parsed.s || 0,
            traineeEmail: parsed.e || '',
            traineeName: parsed.n || '',
            traineePhone: parsed.ph || '',
            traineeCity: parsed.ci || '',
            traineeState: parsed.st || '',
            activeQuizAnswers: parsed.aq || {},
            chapterAttempts: parsed.ca || {},
            examAttempt: parsed.ea || null,
            certificationAcknowledged: parsed.ck || false,
          },
        });
      }
    } catch (e) {
      console.error('Failed to load saved state:', e);
    }
  }, []);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          s: state.currentStep,
          e: state.traineeEmail,
          n: state.traineeName,
          ph: state.traineePhone,
          ci: state.traineeCity,
          st: state.traineeState,
          aq: state.activeQuizAnswers,
          ca: state.chapterAttempts,
          ea: state.examAttempt,
          ck: state.certificationAcknowledged,
        })
      );
    } catch (e) {
      console.error('Failed to save state:', e);
    }
  }, [state]);

  const isChapterUnlocked = (chapterIndex: number): boolean => {
    if (chapterIndex === 0) {
      // Chapter 0 unlocks after registration (step 1 completed = currentStep >= 2)
      return state.currentStep >= 2 || state.traineeEmail !== '';
    }
    // Chapter N requires Chapter N-1 quiz passed
    const prevAttempt = state.chapterAttempts[chapterIndex - 1];
    return !!prevAttempt?.passed;
  };

  const isFinalExamUnlocked = (): boolean => {
    for (let i = 0; i < 12; i++) {
      if (!state.chapterAttempts[i]?.passed) return false;
    }
    return true;
  };

  const value: TrainingContextValue = {
    state,
    currentStepData: state.steps[state.currentStep],
    progress: state.steps.length > 1
      ? (state.currentStep / (state.steps.length - 1)) * 100
      : 0,
    totalSteps: state.steps.length,
    nextStep: () => dispatch({ type: 'NEXT_STEP' }),
    prevStep: () => dispatch({ type: 'PREV_STEP' }),
    goToStep: (step: number) => dispatch({ type: 'GO_TO_STEP', step }),
    setTraineeInfo: (info) => dispatch({ type: 'SET_TRAINEE_INFO', payload: info }),
    setQuizAnswer: (questionId, answer) => dispatch({ type: 'SET_QUIZ_ANSWER', questionId, answer }),
    submitChapterQuiz: (chapterIndex) => dispatch({ type: 'SUBMIT_CHAPTER_QUIZ', chapterIndex }),
    retryChapterQuiz: (chapterIndex) => dispatch({ type: 'RETRY_CHAPTER_QUIZ', chapterIndex }),
    submitFinalExam: () => dispatch({ type: 'SUBMIT_FINAL_EXAM' }),
    retryFinalExam: () => dispatch({ type: 'RETRY_FINAL_EXAM' }),
    acknowledgeCertification: () => dispatch({ type: 'ACKNOWLEDGE_CERTIFICATION' }),
    isChapterUnlocked,
    isFinalExamUnlocked,
    reset: () => dispatch({ type: 'RESET' }),
  };

  return (
    <TrainingContext.Provider value={value}>
      {children}
    </TrainingContext.Provider>
  );
}

export function useTraining() {
  const context = useContext(TrainingContext);
  if (!context) {
    throw new Error('useTraining must be used within a TrainingProvider');
  }
  return context;
}
