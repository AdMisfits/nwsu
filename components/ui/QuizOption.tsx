'use client';

import { CheckIcon, XCircleIcon } from './Icons';

type AnswerKey = 'A' | 'B' | 'C' | 'D';

interface QuizOptionProps {
  label: AnswerKey;
  text: string;
  selected: boolean;
  onSelect: () => void;
  disabled?: boolean;
  showResult?: boolean;
  isCorrect?: boolean;
}

export function QuizOption({
  label,
  text,
  selected,
  onSelect,
  disabled,
  showResult,
  isCorrect,
}: QuizOptionProps) {
  let borderColor = 'border-slate-200';
  let bgColor = 'bg-white';
  let labelBg = 'bg-neutral-100 text-slate-600';
  let textColor = 'text-navy-950';

  if (showResult && selected) {
    if (isCorrect) {
      borderColor = 'border-success';
      bgColor = 'bg-success/5';
      labelBg = 'bg-success text-white';
    } else {
      borderColor = 'border-danger';
      bgColor = 'bg-danger/5';
      labelBg = 'bg-danger text-white';
    }
  } else if (showResult && isCorrect) {
    borderColor = 'border-success';
    bgColor = 'bg-success/5';
    labelBg = 'bg-success text-white';
  } else if (selected) {
    borderColor = 'border-accent';
    bgColor = 'bg-accent/5';
    labelBg = 'bg-accent text-white';
  }

  return (
    <button
      onClick={onSelect}
      disabled={disabled}
      className={`
        w-full flex items-center gap-3.5 px-4 py-3.5
        border-[1.5px] ${borderColor} ${bgColor}
        rounded-2xl text-left
        transition-all duration-200
        ${disabled ? 'cursor-default' : 'cursor-pointer hover:border-accent/50'}
      `}
    >
      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-[13px] font-bold ${labelBg} transition-all duration-200`}>
        {showResult && selected && isCorrect ? (
          <CheckIcon className="w-4 h-4" />
        ) : showResult && selected && !isCorrect ? (
          <XCircleIcon className="w-4 h-4" />
        ) : showResult && isCorrect ? (
          <CheckIcon className="w-4 h-4" />
        ) : (
          label
        )}
      </div>
      <span className={`text-[14px] font-medium leading-snug ${textColor}`}>{text}</span>
    </button>
  );
}
