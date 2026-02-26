'use client';

import { useTraining } from '@/context/TrainingContext';
import { ArrowLeftIcon } from '@/components/ui/Icons';
import { EXTERNAL_LINKS } from '@/lib/constants';

export function Header() {
  const { state, prevStep, currentStepData } = useTraining();
  const isFirstStep = state.currentStep === 0;
  const isComplete = currentStepData.type === 'complete';

  let stepText = '';
  if (currentStepData.type === 'welcome') {
    stepText = '';
  } else if (isComplete) {
    stepText = 'Complete';
  } else {
    stepText = `Step ${state.currentStep + 1} of ${state.steps.length}`;
  }

  return (
    <header className="sticky top-0 z-20 bg-white/90 backdrop-blur-xl shadow-sm lg:hidden">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <button
            onClick={prevStep}
            disabled={isFirstStep}
            className={`
              w-9 h-9 rounded-full flex items-center justify-center
              transition-all duration-300
              ${isFirstStep
                ? 'opacity-30 cursor-not-allowed'
                : 'hover:bg-black/[0.04] active:bg-black/[0.06] cursor-pointer'
              }
            `}
            aria-label="Go back"
          >
            <ArrowLeftIcon className="w-5 h-5" />
          </button>
          <span className="text-[13px] font-medium text-slate-400">
            {stepText}
          </span>
        </div>

        <span className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1.5 font-semibold text-[14px] tracking-[-0.01em] text-navy-950">
          NWSU
        </span>

        <a
          href={EXTERNAL_LINKS.support}
          className="text-[13px] font-medium text-accent px-3 py-2 rounded-full hover:bg-accent/[0.06] transition-colors duration-200"
        >
          Need help?
        </a>
      </div>
    </header>
  );
}
