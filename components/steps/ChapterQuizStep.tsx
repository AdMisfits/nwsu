'use client';

import { useTraining } from '@/context/TrainingContext';
import { Footer } from '@/components/layout/Footer';
import { Button, ArrowRightIcon } from '@/components/ui';
import { QuizOption } from '@/components/ui/QuizOption';
import { CHAPTERS } from '@/lib/chapters';
import { AnswerKey } from '@/types';

export function ChapterQuizStep() {
  const { currentStepData, state, setQuizAnswer, submitChapterQuiz, nextStep } = useTraining();
  const chapterIndex = currentStepData.chapterIndex ?? 0;
  const chapter = CHAPTERS[chapterIndex];
  const questions = chapter.quizQuestions;

  const allAnswered = questions.every((q) => state.activeQuizAnswers[q.id]);

  const handleSubmit = () => {
    submitChapterQuiz(chapterIndex);
    nextStep();
  };

  return (
    <>
      <div className="animate-fadeIn">
        <div className="mb-2 text-[13px] font-semibold text-accent uppercase tracking-wide">
          Chapter {chapterIndex + 1} Quiz
        </div>

        <h1 className="text-[28px] lg:text-[36px] font-bold tracking-[-0.03em] text-navy-950 mb-2">
          {chapter.title}
        </h1>

        <p className="text-[16px] text-slate-500 mb-8 leading-[1.6]">
          Answer all {questions.length} questions. You need 80% or higher to pass.
        </p>

        <div className="space-y-8">
          {questions.map((q, qIdx) => (
            <div key={q.id}>
              <div className="flex items-start gap-3 mb-3">
                <span className="w-7 h-7 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0 text-[13px] font-bold text-slate-600">
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
                    selected={state.activeQuizAnswers[q.id] === key}
                    onSelect={() => setQuizAnswer(q.id, key)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer>
        <Button
          onClick={handleSubmit}
          disabled={!allAnswered}
          icon={<ArrowRightIcon className="w-5 h-5" />}
        >
          Submit Quiz
        </Button>
      </Footer>
    </>
  );
}
