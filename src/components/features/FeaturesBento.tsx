'use client';

import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import {
  VideoIcon,
  PdfIcon,
  StorageIcon,
  CheckIcon,
  LightningIcon,
  CpuIcon,
  SlidersIcon,
  ShieldLockIcon,
  SparklesIcon,
} from '@/components/ui/Icons';
import { FEATURES_DATA } from '@/data/featuresData';

export const FeaturesBento: React.FC = () => {
  const cardThemes = [
    {
      bg: 'bg-indigo-50/70',
      border: 'border-[#161424]',
      badgeColor: 'indigo' as const,
      tapeText: 'HARDWARE DIRECT',
      tapeColor: 'indigo' as const,
      icon: CpuIcon,
      handNote: 'zero battery drain • GPU encode',
    },
    {
      bg: 'bg-rose-50/70',
      border: 'border-[#161424]',
      badgeColor: 'rose' as const,
      tapeText: 'LIVE VISUAL PROOF',
      tapeColor: 'rose' as const,
      icon: SlidersIcon,
      handNote: 'inspect pixel edges before saving',
    },
    {
      bg: 'bg-amber-50/70',
      border: 'border-[#161424]',
      badgeColor: 'amber' as const,
      tapeText: '28+ OFFLINE TOOLS',
      tapeColor: 'amber' as const,
      icon: PdfIcon,
      handNote: 'Bates numbering • AES-256 lock',
    },
    {
      bg: 'bg-emerald-50/70',
      border: 'border-[#161424]',
      badgeColor: 'emerald' as const,
      tapeText: 'AIR-GAPPED VAULT',
      tapeColor: 'emerald' as const,
      icon: StorageIcon,
      handNote: '100% on device • zero telemetry',
    },
  ];

  return (
    <section id="features" className="py-20 sm:py-28 max-w-6xl mx-auto px-4 sm:px-6 select-none">
      <SectionHeader
        badgeText="Architectural Pillars"
        badgeColor="rose"
        title="Engineered for Raw Speed & Absolute Privacy"
        handwrittenNote="handcrafted on-device engine"
        description="Four foundational pillars designed to keep your device media library compact, fast, and completely safe from cloud surveillance."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {FEATURES_DATA.map((feature, idx) => {
          const theme = cardThemes[idx] || cardThemes[0];
          const Icon = theme.icon;

          return (
            <div
              key={feature.id}
              className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between border-2 border-[#161424] shadow-scribely hover:shadow-scribely-lg hover:border-[#17365D] transition-all bg-white ${theme.bg}`}
            >
              <div>
                {/* Header row with Stamped Number & Icon */}
                <div className="flex items-center justify-between mb-4 pt-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-xl border border-[#161424]/30 shadow-xs">
                    <Icon className="w-4 h-4 text-[#17365D]" />
                    <span className="text-xs font-mono font-bold text-[#17365D] uppercase tracking-wide">
                      {feature.number} / {feature.tag}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono font-bold uppercase bg-white px-2.5 py-0.5 rounded-full border border-[#161424]/30 text-[#17365D]">
                    VERIFIED
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-black text-[#17365D] tracking-tight mb-1">
                  {feature.title}
                </h3>

                <p className="font-hand font-bold text-base sm:text-lg text-[#0284C7] mb-3">
                  {feature.subtitle}
                </p>

                <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-sans font-normal">
                  {feature.description}
                </p>
              </div>

              {/* Highlights & Dotted GitKura Divider */}
              <div className="mt-6 pt-4 border-t-2 border-dashed border-[#161424]/15 space-y-2.5">
                {feature.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 text-xs sm:text-sm font-sans font-semibold text-[#17365D]"
                  >
                    <div className="w-4 h-4 rounded-full bg-emerald-100 border border-emerald-400 flex items-center justify-center text-emerald-800 shrink-0">
                      <CheckIcon className="w-2.5 h-2.5" />
                    </div>
                    <span>{h}</span>
                  </div>
                ))}

                <div className="pt-3 flex items-center justify-between text-xs sm:text-sm font-hand font-bold text-[#0284C7]">
                  <div className="flex items-center gap-1.5">
                    <svg
                      className="w-4 h-4 text-[#0284C7] shrink-0"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M 4 4 L 4 11 C 4 13, 6 15, 8 15 L 16 15" />
                      <path d="M 12 11 L 16 15 L 12 19" />
                    </svg>
                    <span>{theme.handNote}</span>
                  </div>
                  <SparklesIcon className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
