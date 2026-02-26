'use client';

import { useTraining } from '@/context/TrainingContext';
import { Footer } from '@/components/layout/Footer';
import { Button, CheckIcon, AwardIcon, ExternalLinkIcon } from '@/components/ui';
import { CHAPTERS } from '@/lib/chapters';
import { EXTERNAL_LINKS, TOTAL_CHAPTERS } from '@/lib/constants';

export function CompleteStep() {
  const { state } = useTraining();

  const chaptersCompleted = Object.values(state.chapterAttempts).filter((a) => a.passed).length;

  return (
    <>
      <div className="animate-fadeIn">
        <div className="text-center mb-10">
          <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-3xl bg-gradient-to-br from-[#22c55e] to-[#16a34a] flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#22c55e]/20">
            <AwardIcon className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
          </div>
          <h1 className="text-[32px] lg:text-[40px] font-bold tracking-[-0.03em] text-navy-950 mb-3">
            You&apos;re Certified!
          </h1>
          <p className="text-[17px] text-slate-500 max-w-sm mx-auto leading-[1.6]">
            Congratulations, {state.traineeName}! You are now a certified NWS Water Specialist.
          </p>
        </div>

        {/* Summary card */}
        <div className="bg-white rounded-3xl shadow-sm p-6 mb-6">
          <h3 className="text-[15px] font-semibold text-navy-950 mb-4">Training Summary</h3>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-neutral-100 rounded-2xl p-4 text-center">
              <div className="text-[28px] font-bold text-success">{chaptersCompleted}/{TOTAL_CHAPTERS}</div>
              <div className="text-[12px] text-slate-500 mt-1">Chapters Completed</div>
            </div>
            <div className="bg-neutral-100 rounded-2xl p-4 text-center">
              <div className="text-[28px] font-bold text-success">{state.examAttempt?.score || 0}%</div>
              <div className="text-[12px] text-slate-500 mt-1">Final Exam Score</div>
            </div>
          </div>

          <div className="space-y-0.5">
            {CHAPTERS.map((chapter, idx) => {
              const attempt = state.chapterAttempts[idx];
              return (
                <div
                  key={idx}
                  className="flex items-center justify-between px-3 py-2.5 rounded-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      attempt?.passed ? 'bg-success/10' : 'bg-neutral-200'
                    }`}>
                      <CheckIcon className={`w-3.5 h-3.5 ${
                        attempt?.passed ? 'text-success' : 'text-slate-400'
                      }`} />
                    </div>
                    <span className="text-[13px] font-medium text-navy-950">
                      Ch {idx + 1}: {chapter.title}
                    </span>
                  </div>
                  {attempt && (
                    <span className={`text-[12px] font-semibold ${
                      attempt.passed ? 'text-success' : 'text-danger'
                    }`}>
                      {attempt.score}%
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-accent/5 border border-accent/20 rounded-3xl p-6 text-center">
          <p className="text-[14px] text-slate-600 leading-[1.7]">
            Your certification has been recorded. You&apos;ll receive a confirmation email at <strong>{state.traineeEmail}</strong> with your certification details.
          </p>
        </div>
      </div>

      <Footer>
        <Button
          href={EXTERNAL_LINKS.support}
          external
          icon={<ExternalLinkIcon className="w-5 h-5" />}
        >
          Contact Support
        </Button>
      </Footer>
    </>
  );
}
