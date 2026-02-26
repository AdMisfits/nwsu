'use client';

import { ReactNode } from 'react';

interface FooterProps {
  children: ReactNode;
}

export function Footer({ children }: FooterProps) {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-30 bg-white/90 backdrop-blur-xl shadow-[0_-1px_3px_rgba(0,0,0,0.05)] lg:left-80">
      <div className="px-5 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] lg:px-8 lg:py-5">
        <div className="max-w-xl mx-auto lg:max-w-2xl">
          <div className="flex flex-col gap-2.5 lg:flex-row lg:justify-end lg:gap-3">
            {children}
          </div>
        </div>
      </div>
    </footer>
  );
}
