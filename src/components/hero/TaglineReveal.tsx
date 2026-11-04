'use client';

import React, { useEffect, useRef, useState } from 'react';
import { CpuIcon, ShieldLockIcon, CheckIcon } from '@/components/ui/Icons';

export const TaglineReveal: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress between entering viewport (0) and reaching center (1)
      const start = windowHeight * 0.85;
      const end = windowHeight * 0.35;
      const current = rect.top;
      
      if (current >= start) {
        setScrollProgress(0);
      } else if (current <= end) {
        setScrollProgress(1);
      } else {
        setScrollProgress((start - current) / (start - end));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headline = 'Your camera captures every micro-detail. Your phone shouldn’t run out of space storing it.';
  const words = headline.split(' ');

  return (
    <section
      ref={containerRef}
      className="py-24 sm:py-32 px-4 sm:px-6 max-w-5xl mx-auto select-none"
      aria-label="Core Manifesto"
    >
      <div className="flex flex-col items-center text-center">
        {/* Subtle Apple-style System Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#161424]/10 shadow-xs mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#161424]">
            Silicon-Direct Architecture
          </span>
        </div>

        {/* Scroll-Revealed Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight leading-[1.15] max-w-4xl mx-auto mb-8">
          {words.map((word, i) => {
            const wordProgress = i / (words.length - 1);
            const isLit = scrollProgress >= wordProgress;
            return (
              <span
                key={i}
                className="inline-block mr-[0.28em] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
                style={{
                  color: isLit ? '#161424' : 'rgba(22, 20, 36, 0.22)',
                  transform: isLit ? 'translateY(0)' : 'translateY(2px)',
                }}
              >
                {word}
              </span>
            );
          })}
        </h2>

        {/* Technical Subtitle */}
        <p className="font-sans text-base sm:text-lg text-[#64748B] max-w-2xl mx-auto leading-relaxed mb-10">
          Built exclusively for Qualcomm Snapdragon, MediaTek Dimensity, and Google Tensor chips.
          Transcode 4K 60fps footage in phone RAM with zero battery overheating and zero server uploads.
        </p>

        {/* Mac / iOS Style 3-Pillar Spec Bar with 3D Back Shadow */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 w-full max-w-3xl">
          <div className="p-4 rounded-2xl bg-white border-2 border-[#161424] shadow-[3.5px_3.5px_0px_#17365D] hover:shadow-[4.5px_4.5px_0px_#17365D] transition-all duration-150 ease-fluid flex items-center gap-3 text-left">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-300">
              <CpuIcon className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-mono font-bold text-[#161424]">Hardware C2 Engine</p>
              <p className="text-[11px] text-[#64748B]">120 FPS encode speed</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border-2 border-[#161424] shadow-[3.5px_3.5px_0px_#17365D] hover:shadow-[4.5px_4.5px_0px_#17365D] transition-all duration-150 ease-fluid flex items-center gap-3 text-left">
            <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center shrink-0 border border-sky-300">
              <ShieldLockIcon className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-mono font-bold text-[#161424]">100% Air-Gapped</p>
              <p className="text-[11px] text-[#64748B]">0 bytes leave device</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border-2 border-[#161424] shadow-[3.5px_3.5px_0px_#17365D] hover:shadow-[4.5px_4.5px_0px_#17365D] transition-all duration-150 ease-fluid flex items-center gap-3 text-left">
            <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-300">
              <CheckIcon className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-mono font-bold text-[#161424]">Open Source (MIT)</p>
              <p className="text-[11px] text-[#64748B]">14.2 MB lean binary</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
