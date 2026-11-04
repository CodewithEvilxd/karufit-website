import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'amber' | 'emerald' | 'indigo' | 'rose' | 'neutral' | 'sky';
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  variant = 'neutral',
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'text-[10px] px-2 py-0.5 gap-1',
    md: 'text-xs px-2.5 py-1 gap-1.5',
  };

  const variantClasses = {
    amber: 'bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-700/50',
    emerald: 'bg-emerald-100 text-emerald-900 border-emerald-300 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-700/50',
    indigo: 'bg-indigo-100 text-indigo-900 border-indigo-300 dark:bg-indigo-950/60 dark:text-indigo-300 dark:border-indigo-700/50',
    rose: 'bg-rose-100 text-rose-900 border-rose-300 dark:bg-rose-950/60 dark:text-rose-300 dark:border-rose-700/50',
    sky: 'bg-sky-100 text-sky-900 border-sky-300 dark:bg-sky-950/60 dark:text-sky-300 dark:border-sky-700/50',
    neutral: 'bg-white text-[#161424] border-[#161424]/20 dark:bg-[#252236] dark:text-slate-200 dark:border-white/10',
  };

  return (
    <span
      className={twMerge(
        clsx(
          'inline-flex items-center font-display font-bold border rounded-lg uppercase tracking-wider select-none shadow-2xs',
          sizeClasses[size],
          variantClasses[variant],
          className
        )
      )}
    >
      {children}
    </span>
  );
};
