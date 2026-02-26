'use client';

import { useTraining } from '@/context/TrainingContext';
import { CheckIcon, LockIcon, ExternalLinkIcon } from '@/components/ui/Icons';
import { EXTERNAL_LINKS, TOTAL_CHAPTERS } from '@/lib/constants';
import { CHAPTERS } from '@/lib/chapters';
import { Step } from '@/types';

function getStepGroup(step: Step): string {
  return step.group;
}

export function DesktopSidebar() {
  const { state, currentStepData, goToStep, progress, isChapterUnlocked, isFinalExamUnlocked } = useTraining();

  // Build a condensed sidebar nav:
  // Welcome, Registration, then 12 chapters (single entry each), then Final Exam, Certification, Complete
  const navItems: Array<{
    label: string;
    stepIndex: number;
    group: string;
    isChapter?: boolean;
    chapterIndex?: number;
  }> = [];

  // Welcome & Registration
  navItems.push({ label: 'Welcome', stepIndex: 0, group: 'Getting Started' });
  navItems.push({ label: 'Registration', stepIndex: 1, group: 'Getting Started' });

  // Chapters — each chapter maps to its content step (first of the 3-step block)
  for (let i = 0; i < TOTAL_CHAPTERS; i++) {
    const contentStepIndex = 2 + i * 3; // 2 is offset for welcome + registration
    navItems.push({
      label: `Ch ${i + 1}: ${CHAPTERS[i].title}`,
      stepIndex: contentStepIndex,
      group: 'Training',
      isChapter: true,
      chapterIndex: i,
    });
  }

  // Certification steps
  const certStartIndex = 2 + TOTAL_CHAPTERS * 3;
  navItems.push({ label: 'Final Exam', stepIndex: certStartIndex, group: 'Certification' });
  navItems.push({ label: 'Exam Results', stepIndex: certStartIndex + 1, group: 'Certification' });
  navItems.push({ label: 'Certification', stepIndex: certStartIndex + 2, group: 'Certification' });
  navItems.push({ label: 'Complete', stepIndex: certStartIndex + 3, group: 'Certification' });

  let currentGroup = '';

  return (
    <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-80 bg-[#020617] text-white flex-col">
      {/* Logo */}
      <div className="p-6 pb-4">
        <div className="flex items-center gap-3">
          <img src="/logo-light.svg" alt="NWS University" className="w-10 h-10 rounded-xl object-contain" />
          <div>
            <h1 className="font-bold text-[17px] tracking-[-0.02em]">NWS University</h1>
            <p className="text-[11px] text-slate-400">Water Specialist Training</p>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="px-6 pb-6">
        <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2">
          <span>Progress</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-[3px] bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-brand-500 to-brand-400 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Step navigation */}
      <nav className="flex-1 overflow-y-auto px-4 pb-4">
        <div className="space-y-0.5">
          {navItems.map((item, idx) => {
            const group = item.group;
            const showGroup = group !== currentGroup;
            if (showGroup) currentGroup = group;

            // Determine state
            let isLocked = false;
            let isCompleted = false;
            let isCurrent = false;
            let scoreBadge: number | null = null;

            if (item.isChapter && item.chapterIndex !== undefined) {
              isLocked = !isChapterUnlocked(item.chapterIndex);
              const attempt = state.chapterAttempts[item.chapterIndex];
              isCompleted = !!attempt?.passed;
              scoreBadge = attempt?.score ?? null;
              // Current if we're on any of the 3 steps for this chapter
              const chapterStartStep = item.stepIndex;
              isCurrent = state.currentStep >= chapterStartStep && state.currentStep < chapterStartStep + 3;
            } else if (item.label === 'Final Exam' || item.label === 'Exam Results') {
              isLocked = !isFinalExamUnlocked();
              isCompleted = !!state.examAttempt?.passed;
              if (state.examAttempt) scoreBadge = state.examAttempt.score;
              isCurrent = state.currentStep === item.stepIndex;
            } else {
              isCompleted = state.currentStep > item.stepIndex;
              isCurrent = state.currentStep === item.stepIndex;
            }

            const canNavigate = !isLocked && (isCompleted || isCurrent || state.currentStep >= item.stepIndex);

            return (
              <div key={idx}>
                {showGroup && (
                  <div className="px-3 pt-5 pb-2 text-[10px] font-semibold text-slate-400 uppercase tracking-[0.08em]">
                    {group}
                  </div>
                )}
                <button
                  onClick={() => canNavigate && goToStep(item.stepIndex)}
                  disabled={!canNavigate}
                  className={`
                    w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left
                    transition-all duration-300 ease-out
                    ${isCurrent
                      ? 'bg-accent text-white'
                      : isCompleted
                      ? 'text-slate-300 hover:bg-white/[0.06] cursor-pointer'
                      : isLocked
                      ? 'text-slate-600 cursor-not-allowed'
                      : 'text-slate-400 cursor-pointer hover:bg-white/[0.06]'
                    }
                  `}
                >
                  <div
                    className={`
                      w-[22px] h-[22px] rounded-full flex items-center justify-center flex-shrink-0
                      text-[11px] font-semibold transition-all duration-300
                      ${isCompleted
                        ? 'bg-success text-white'
                        : isCurrent
                        ? 'bg-white text-accent'
                        : isLocked
                        ? 'bg-white/5 text-slate-600'
                        : 'bg-white/10 text-slate-500'
                      }
                    `}
                  >
                    {isLocked ? (
                      <LockIcon className="w-3 h-3" />
                    ) : isCompleted ? (
                      <CheckIcon className="w-3 h-3" />
                    ) : (
                      <span className="text-[10px]">{idx + 1}</span>
                    )}
                  </div>
                  <span className="text-[13px] font-medium truncate flex-1">
                    {item.label}
                  </span>
                  {scoreBadge !== null && isCompleted && (
                    <span className="text-[11px] font-semibold text-success">
                      {scoreBadge}%
                    </span>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </nav>

      {/* Quick links */}
      <div className="p-4 border-t border-white/10">
        <div className="flex items-center justify-center gap-2">
          <a
            href={EXTERNAL_LINKS.support}
            className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-[11px] font-medium text-slate-400 hover:text-white hover:bg-white/[0.06] rounded-xl transition-all duration-200"
          >
            Support
            <ExternalLinkIcon className="w-3 h-3" />
          </a>
        </div>
      </div>
    </aside>
  );
}
