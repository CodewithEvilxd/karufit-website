'use client';

import React, { useId } from 'react';

interface TapeBadgeProps {
  text?: string;
  children?: React.ReactNode;
  color?: 'yellow' | 'emerald' | 'sky' | 'rose' | 'indigo' | 'amber';
  rotation?: string;
  rotate?: string;
  className?: string;
}

export const TapeBadge: React.FC<TapeBadgeProps> = ({
  text,
  children,
  color = 'yellow',
  rotation,
  rotate,
  className = '',
}) => {
  const rawId = useId();
  const id = rawId.replace(/[^a-zA-Z0-9]/g, '');

  const currentRotation = rotation || (rotate ? `rotate-[${rotate}]` : '-rotate-1');

  const colorPalettes = {
    yellow: {
      stops: ['#fef9c3', '#fef08a', '#fde047', '#fef08a'],
      fiber: 'rgba(161, 98, 7, 0.18)',
      text: 'text-amber-950',
    },
    amber: {
      stops: ['#fef3c7', '#fde68a', '#f59e0b', '#fbbf24'],
      fiber: 'rgba(180, 83, 9, 0.20)',
      text: 'text-amber-950',
    },
    emerald: {
      stops: ['#dcfce7', '#bbf7d0', '#86efac', '#bbf7d0'],
      fiber: 'rgba(21, 128, 61, 0.18)',
      text: 'text-emerald-950',
    },
    sky: {
      stops: ['#e0f2fe', '#bae6fd', '#7dd3fc', '#bae6fd'],
      fiber: 'rgba(3, 105, 161, 0.18)',
      text: 'text-sky-950',
    },
    rose: {
      stops: ['#ffe4e6', '#fecdd3', '#fda4af', '#fecdd3'],
      fiber: 'rgba(190, 18, 60, 0.18)',
      text: 'text-rose-950',
    },
    indigo: {
      stops: ['#e0e7ff', '#c7d2fe', '#a5b4fc', '#c7d2fe'],
      fiber: 'rgba(67, 56, 202, 0.18)',
      text: 'text-indigo-950',
    },
  };

  const palette = colorPalettes[color] || colorPalettes.yellow;

  return (
    <div
      className={`relative inline-flex items-center justify-center px-4 py-1.5 select-none pointer-events-none ${currentRotation} ${className}`}
      style={{
        filter:
          'drop-shadow(0px 2px 3px rgba(30, 41, 59, 0.14)) drop-shadow(0px 1px 1px rgba(30, 41, 59, 0.08))',
      }}
    >
      {/* Torn Edge Washi Tape SVG Backdrop */}
      <svg
        className="absolute inset-0 w-full h-full overflow-visible"
        viewBox="0 0 120 32"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={`tape-grad-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={palette.stops[0]} stopOpacity="0.88" />
            <stop offset="30%" stopColor={palette.stops[1]} stopOpacity="0.88" />
            <stop offset="85%" stopColor={palette.stops[2]} stopOpacity="0.88" />
            <stop offset="100%" stopColor={palette.stops[3]} stopOpacity="0.84" />
          </linearGradient>
          <pattern
            id={`kozo-fiber-${id}`}
            width="12"
            height="12"
            patternUnits="userSpaceOnUse"
          >
            <line
              x1="0"
              y1="3"
              x2="12"
              y2="3"
              stroke={palette.fiber}
              strokeWidth="0.5"
              strokeDasharray="3 4 2 3"
            />
            <line
              x1="0"
              y1="8"
              x2="12"
              y2="8"
              stroke={palette.fiber}
              strokeWidth="0.5"
              strokeDasharray="4 2 3 3"
            />
            <line
              x1="0"
              y1="11"
              x2="12"
              y2="11"
              stroke={palette.fiber}
              strokeWidth="0.4"
              strokeDasharray="2 5"
            />
            <path
              d="M 0 12 L 12 0"
              stroke={palette.fiber}
              strokeWidth="0.35"
              strokeDasharray="1 6"
            />
          </pattern>
        </defs>

        {/* Serrated Torn Edge Tape Outline */}
        <path
          d="
            M 7.5,3.2
            Q 60,1.8 112.5,3.2
            L 114.2,5.5
            L 111.8,7.8
            L 115.0,10.2
            L 112.4,13.0
            L 116.2,16.0
            L 112.0,19.2
            L 115.4,22.5
            L 112.2,25.8
            L 114.5,28.8
            Q 60,30.2 7.5,28.8
            L 5.8,26.2
            L 8.2,23.5
            L 4.8,20.0
            L 8.0,16.5
            L 4.5,13.2
            L 7.8,9.8
            L 5.2,6.5
            Z
          "
          fill={`url(#tape-grad-${id})`}
        />
        <path
          d="
            M 7.5,3.2
            Q 60,1.8 112.5,3.2
            L 114.2,5.5
            L 111.8,7.8
            L 115.0,10.2
            L 112.4,13.0
            L 116.2,16.0
            L 112.0,19.2
            L 115.4,22.5
            L 112.2,25.8
            L 114.5,28.8
            Q 60,30.2 7.5,28.8
            L 5.8,26.2
            L 8.2,23.5
            L 4.8,20.0
            L 8.0,16.5
            L 4.5,13.2
            L 7.8,9.8
            L 5.2,6.5
            Z
          "
          fill={`url(#kozo-fiber-${id})`}
        />
        {/* Subtle Tape Folds and Fiber Highlights */}
        <path
          d="M 9,3.8 Q 60,2.5 111,3.8"
          stroke="rgba(255, 255, 255, 0.75)"
          strokeWidth="0.85"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 9,28.2 Q 60,29.4 111,28.2"
          stroke="rgba(0, 0, 0, 0.10)"
          strokeWidth="0.65"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      {/* Content */}
      <span
        className={`relative z-10 font-mono font-bold text-xs uppercase tracking-wider ${palette.text}`}
      >
        {children || text}
      </span>
    </div>
  );
};
