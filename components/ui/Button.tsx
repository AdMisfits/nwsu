'use client';

import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: ReactNode;
  icon?: ReactNode;
  href?: string;
  external?: boolean;
  fullWidth?: boolean;
}

export function Button({
  variant = 'primary',
  children,
  icon,
  href,
  external,
  fullWidth,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center gap-2
    px-8 py-4 rounded-full
    text-[15px] font-semibold
    cursor-pointer transition-all duration-300 ease-out
    w-full lg:w-auto
    disabled:cursor-not-allowed
  `;

  const variants = {
    primary: `
      bg-accent text-white shadow-sm
      hover:bg-accent-hover
      active:bg-brand-700
      disabled:bg-slate-300 disabled:shadow-none
    `,
    secondary: `
      bg-neutral-100 text-navy-950
      hover:bg-neutral-200
      disabled:text-slate-400
    `,
    ghost: `
      bg-transparent text-slate-500
      hover:text-navy-950
      py-3
      disabled:text-slate-400
    `,
  };

  const widthClass = fullWidth ? 'lg:w-full' : '';
  const classes = `${baseStyles} ${variants[variant]} ${widthClass} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={classes}
      >
        {children}
        {icon}
      </a>
    );
  }

  return (
    <button className={classes} disabled={disabled} {...props}>
      {children}
      {icon}
    </button>
  );
}
