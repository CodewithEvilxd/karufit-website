import React from 'react';
import { SparklesIcon } from '@/components/ui/Icons';

interface SectionHeaderProps {
  badgeText?: string;
  tapeText?: string;
  badgeColor?: 'indigo' | 'rose' | 'amber' | 'emerald' | 'sky' | 'yellow';
  tapeColor?: 'indigo' | 'rose' | 'amber' | 'emerald' | 'sky' | 'yellow';
  title: string;
  handwrittenNote?: string;
  description?: string;
  subtitle?: string;
  align?: 'center' | 'left';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badgeText,
  tapeText,
  badgeColor = 'indigo',
  tapeColor,
  title,
  handwrittenNote,
  description,
  subtitle,
  align = 'center',
}) => {
  const isCenter = align === 'center';
  const displayBadgeText = badgeText || tapeText || 'Features';
  const displayDesc = description || subtitle || '';
  const chosenColor = tapeColor || badgeColor;

  const badgeColorClasses: Record<string, string> = {
    indigo: 'bg-indigo-100 text-indigo-900 border-indigo-300 dark:bg-indigo-950/60 dark:text-indigo-300',
    rose: 'bg-rose-100 text-rose-900 border-rose-300 dark:bg-rose-950/60 dark:text-rose-300',
    amber: 'bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-950/60 dark:text-amber-300',
    yellow: 'bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-950/60 dark:text-amber-300',
    emerald: 'bg-emerald-100 text-emerald-900 border-emerald-300 dark:bg-emerald-950/60 dark:text-emerald-300',
    sky: 'bg-sky-100 text-sky-900 border-sky-300 dark:bg-sky-950/60 dark:text-sky-300',
  };

  return (
    <div className={`relative mb-12 sm:mb-16 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'}`}>
      {/* Top Section Category Badge */}
      <div className={`flex items-center ${isCenter ? 'justify-center' : 'justify-start'} mb-3.5`}>
        <div
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-mono font-extrabold uppercase tracking-wider shadow-2xs ${
            badgeColorClasses[chosenColor] || badgeColorClasses.indigo
          }`}
        >
          <SparklesIcon className="w-3.5 h-3.5" />
          <span>{displayBadgeText}</span>
        </div>
      </div>

      <div>
        <h2 className="text-3xl sm:text-5xl font-display font-black text-[#17365D] tracking-tight leading-tight">
          {title}
        </h2>
      </div>

      {displayDesc && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
          {displayDesc}
        </p>
      )}

      {/* Hand-Drawn Note with Curved Arrow Pointing to Feature Content */}
      {handwrittenNote && (
        <div className={`mt-3.5 flex items-center ${isCenter ? 'justify-center' : 'justify-start'} gap-1.5 select-none`}>
          <span className="font-hand font-bold text-base sm:text-lg text-[#0284C7] rotate-[-1deg]">
            {handwrittenNote}
          </span>
          <svg
            className="w-5 h-5 text-[#0284C7] shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M 6 4 C 12 4, 18 8, 18 18" />
            <path d="M 12 14 L 18 18 L 22 13" />
          </svg>
        </div>
      )}
    </div>
  );
};
