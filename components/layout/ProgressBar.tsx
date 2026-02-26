'use client';

import { useTraining } from '@/context/TrainingContext';

export function ProgressBar() {
  const { progress } = useTraining();

  return (
    <div className="h-[2px] bg-neutral-100 lg:hidden">
      <div
        className="h-full bg-accent rounded-r-full transition-all duration-500 ease-out"
        style={{ width: `${Math.min(progress, 100)}%` }}
      />
    </div>
  );
}
