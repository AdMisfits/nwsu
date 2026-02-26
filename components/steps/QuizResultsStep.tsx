'use client';

import { useTraining } from '@/context/TrainingContext';
import { Footer } from '@/components/layout/Footer';
import { Button, ArrowRightIcon, RefreshIcon, CheckIcon, XCircleIcon } from '@/components/ui';
import { QuizOption } from '@/components/ui/QuizOption';
import { CHAPTERS } from '@/lib/chapters';
import { AnswerKey } from '@/types';

export function QuizResultsStep() {
  const { currentStepData, state, nextStep, retryChapterQuiz, prevStep } = useTraining();
  const chapterIndex = currentStepData.chapterIndex ?? 0;
  const attempt = state.chapterAttempts[chapterIndex];
  const chapter = CHAPTERS[chapterIndex];
  const questions = chapter.quizQuestions;

  if (!attempt) {
    return null;
  }

  const handleRetry = () => {
    retryChapterQuiz(chapterIndex);
    prevStep(); // Go back to quiz step
  };

  return (
    <>
      <div className="animate-fadeIn">
        <div className="text-center mb-8">
          <div className={`w-20 h-20 lg:w-24 lg:h-24 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg ${
            attempt.passed
              ? 'bg-gradient-to-br from-[#22c55e] to-[#16a34a] shadow-[#22c55e]/20'
              : 'bg-gradient-to-br from-[#ef4444] to-[#dc2626] shadow-[#ef4444]/20'
          }`}>
            {attempt.passed ? (
              <CheckIcon className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
            ) : (
              <XCircleIcon className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
            )}
          </div>

          <h1 className="text-[28px] lg:text-[36px] font-bold tracking-[-0.03em] text-navy-950 mb-2">
            {attempt.passed ? 'Quiz Passed!' : 'Quiz Not Passed'}
          </h1>

          <p className="text-[17px] text-slate-500 mb-1">
            Chapter {chapterIndex + 1}: {chapter.title}
          </p>

          <div className="flex items-center justify-center gap-4 mt-4">
            <div className={`text-[40px] font-bold ${attempt.passed ? 'text-success' : 'text-danger'}`}>
              {attempt.score}%
            </div>
            <div className="text-left">
              <div className="text-[13px] text-slate-400">Passing score: 80%</div>
              <div className="text-[13px] text-slate-400">Attempt #{attempt.attemptCount}</div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {questions.map((q, qIdx) => {
            const userAnswer = attempt.answers[q.id] as AnswerKey | undefined;
            const isCorrect = userAnswer === q.correctAnswer;

            return (
              <div key={q.id}>
                <div className="flex items-start gap-3 mb-3">
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-[13px] font-bold ${
                    isCorrect ? 'bg-success/10 text-success' : 'bg-danger/10 text-danger'
                  }`}>
                    {qIdx + 1}
                  </span>
                  <p className="text-[15px] font-medium text-navy-950 leading-snug pt-0.5">
                    {q.question}
                  </p>
                </div>
                <div className="space-y-2 ml-10">
                  {(['A', 'B', 'C', 'D'] as AnswerKey[]).map((key) => (
                    <QuizOption
                      key={key}
                      label={key}
                      text={q.options[key]}
                      selected={userAnswer === key}
                      onSelect={() => {}}
                      disabled
                      showResult
                      isCorrect={key === q.correctAnswer}
                    />
                  ))}
                </div>
                <div className={`ml-10 mt-2 px-4 py-2.5 rounded-xl text-[13px] leading-relaxed ${
                  isCorrect ? 'bg-success/5 text-success-dark' : 'bg-danger/5 text-danger'
                }`}>
                  {q.explanation}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Footer>
        {attempt.passed ? (
          <Button onClick={nextStep} icon={<ArrowRightIcon className="w-5 h-5" />}>
            Continue to Next Chapter
          </Button>
        ) : (
          <Button onClick={handleRetry} icon={<RefreshIcon className="w-5 h-5" />}>
            Retry Quiz
          </Button>
        )}
      </Footer>
    </>
  );
}
