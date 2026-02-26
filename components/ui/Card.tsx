'use client';

import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  variant?: 'default' | 'info' | 'warning' | 'danger';
  className?: string;
}

export function Card({ children, variant = 'default', className = '' }: CardProps) {
  const variants = {
    default: 'bg-neutral-100',
    info: 'bg-neutral-100',
    warning: 'bg-[#fff8e1]',
    danger: 'bg-[#fff5f5]',
  };

  return (
    <div className={`rounded-3xl p-6 ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
}

interface CardTitleProps {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}

export function CardTitle({ children, icon, className = '' }: CardTitleProps) {
  return (
    <div className={`flex items-center gap-2.5 text-[15px] font-semibold text-navy-950 mb-2 ${className}`}>
      {icon && <span className="w-5 h-5 text-accent">{icon}</span>}
      {children}
    </div>
  );
}

interface CardTextProps {
  children: ReactNode;
  className?: string;
}

export function CardText({ children, className = '' }: CardTextProps) {
  return (
    <p className={`text-[14px] text-slate-500 leading-[1.7] ${className}`}>
      {children}
    </p>
  );
}
