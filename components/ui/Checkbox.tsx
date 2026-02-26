'use client';

import { CheckIcon } from './Icons';

interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
  label: string;
  className?: string;
}

export function Checkbox({ checked, onChange, label, className = '' }: CheckboxProps) {
  return (
    <div
      className={`flex items-start gap-3 cursor-pointer ${className}`}
      onClick={onChange}
    >
      <div
        className={`
          w-[22px] h-[22px] rounded-lg border-[1.5px] flex items-center justify-center
          flex-shrink-0 mt-0.5 transition-all duration-300 ease-out
          ${checked
            ? 'bg-accent border-accent'
            : 'border-slate-300 bg-white'
          }
        `}
      >
        <CheckIcon
          className={`w-3.5 h-3.5 text-white transition-all duration-300 ${
            checked ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}
        />
      </div>
      <span className="text-[14px] font-medium leading-relaxed text-navy-950">{label}</span>
    </div>
  );
}
