import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hoverEffect = false,
  hover = false,
  ...props
}) => {
  const isHover = hoverEffect || hover;
  return (
    <div
      className={twMerge(
        clsx(
          'bg-white dark:bg-[#1A1828] border-2 border-[#161424] dark:border-[#3A3654] rounded-2xl shadow-brutal dark:shadow-brutal-sm p-6 transition-all duration-200',
          isHover &&
            'hover:shadow-brutal-lg hover:border-[#17365D] dark:hover:border-amber-400 cursor-pointer',
          className
        )
      )}
      {...props}
    >
      {children}
    </div>
  );
};

