'use client';

import { useTraining } from '@/context/TrainingContext';
import { Header, ProgressBar, DesktopSidebar } from '@/components/layout';
import {
  WelcomeStep,
  RegistrationStep,
  ChapterContentStep,
  ChapterQuizStep,
  QuizResultsStep,
  FinalExamStep,
  ExamResultsStep,
  CertificationStep,
  CompleteStep,
} from '@/components/steps';

export default function TrainingPage() {
  const { currentStepData, state, prevStep } = useTraining();

  const renderStep = () => {
    switch (currentStepData.type) {
      case 'welcome':
        return <WelcomeStep />;
      case 'registration':
        return <RegistrationStep />;
      case 'chapter_content':
        return <ChapterContentStep />;
      case 'chapter_quiz':
        return <ChapterQuizStep />;
      case 'quiz_results':
        return <QuizResultsStep />;
      case 'final_exam':
        return <FinalExamStep />;
      case 'exam_results':
        return <ExamResultsStep />;
      case 'certification':
        return <CertificationStep />;
      case 'complete':
        return <CompleteStep />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white lg:bg-neutral-100">
      {/* Desktop sidebar - fixed left */}
      <DesktopSidebar />

      {/* Mobile header and progress */}
      <Header />
      <ProgressBar />

      {/* Main content area */}
      <main className="flex-1 overflow-y-auto lg:ml-80">
        <div className="min-h-full px-5 py-8 pb-52 lg:px-12 lg:py-12 lg:pb-32">
          <div className="max-w-xl mx-auto lg:max-w-2xl">
            {/* Desktop back navigation */}
            <DesktopNav />

            {renderStep()}
          </div>
        </div>
      </main>
    </div>
  );
}

function DesktopNav() {
  const { state, prevStep, currentStepData } = useTraining();
  const isFirstStep = state.currentStep === 0;

  if (currentStepData.type === 'welcome' || currentStepData.type === 'complete') {
    return null;
  }

  return (
    <div className="hidden lg:flex items-center gap-4 mb-8">
      <button
        onClick={prevStep}
        disabled={isFirstStep}
        className={`
          flex items-center gap-2 text-sm font-medium transition-colors
          ${isFirstStep
            ? 'text-slate-300 cursor-not-allowed'
            : 'text-slate-500 hover:text-navy-950'
          }
        `}
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Back
      </button>
    </div>
  );
}
