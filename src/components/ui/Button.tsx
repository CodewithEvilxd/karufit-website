'use client';

import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'yellow' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-display font-bold tracking-tight rounded-xl transition-all duration-150 select-none cursor-pointer';

  const sizeClasses = {
    sm: 'px-3.5 py-1.5 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-7 py-3.5 text-base gap-2.5',
  };

  const variantClasses = {
    primary:
      'bg-[#161424] text-white border-2 border-[#161424] shadow-brutal hover:bg-[#232038] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none dark:bg-amber-400 dark:text-[#161424] dark:border-white dark:shadow-[4px_4px_0px_#FFFFFF]',
    secondary:
      'bg-white text-[#161424] border-2 border-[#161424] shadow-brutal hover:bg-[#FBF8F2] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none dark:bg-[#1C1A29] dark:text-white dark:border-[#38354D] dark:shadow-brutal-sm',
    yellow:
      'bg-amber-400 text-[#161424] border-2 border-[#161424] shadow-brutal hover:bg-amber-300 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none',
    outline:
      'bg-transparent text-[#161424] border-2 border-[#161424] hover:bg-[#161424]/5 active:translate-x-[1px] active:translate-y-[1px] dark:text-white dark:border-white/30 dark:hover:bg-white/5',
    ghost:
      'bg-transparent text-[#161424] hover:bg-[#161424]/10 active:bg-[#161424]/15 dark:text-white dark:hover:bg-white/10',
  };

  return (
    <button
      className={twMerge(
        clsx(baseClasses, sizeClasses[size], variantClasses[variant], className)
      )}
      {...props}
    >
      {children}
    </button>
  );
};
