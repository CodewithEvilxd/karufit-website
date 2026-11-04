'use client';

import React from 'react';
import { ToolCategory } from '@/types';

interface ToolFilterTabsProps {
  selectedCategory: ToolCategory;
  onSelectCategory: (category: ToolCategory) => void;
  counts: Record<ToolCategory, number>;
}

export const ToolFilterTabs: React.FC<ToolFilterTabsProps> = ({
  selectedCategory,
  onSelectCategory,
  counts,
}) => {
  const primaryTabs: { id: ToolCategory; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'pdf_all', label: 'PDF Studio' },
    { id: 'media', label: 'Media Tools' },
  ];

  const subTabs: { id: ToolCategory; label: string }[] = [
    { id: 'pdf_edit', label: 'Merge & Split' },
    { id: 'pdf_secure', label: 'Security & Legal' },
    { id: 'pdf_convert', label: 'Conversions' },
    { id: 'pdf_layout', label: 'Optimization' },
  ];

  return (
    <div className="flex flex-col items-center gap-3 mb-10 select-none">
      {/* Primary Segmented Pills (From Real Android App) */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 p-1.5 bg-white border-2 border-[#161424] rounded-2xl shadow-scribely">
        {primaryTabs.map((tab) => {
          const isSelected = selectedCategory === tab.id;
          const count = counts[tab.id] ?? 0;

          return (
            <button
              key={tab.id}
              onClick={() => onSelectCategory(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-black transition-all cursor-pointer border-2 flex items-center gap-2 ${
                isSelected
                  ? 'bg-[#161424] text-white border-[#161424] shadow-scribely-sm translate-y-[-1px]'
                  : 'bg-white text-[#17365D] border-[#161424]/20 hover:border-[#161424]'
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`text-[10px] font-mono px-2 py-0.5 rounded-md font-bold ${
                  isSelected
                    ? 'bg-white/20 text-white'
                    : 'bg-[#FEF08A] text-[#17365D] border border-[#161424]'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Secondary Specific Category Pills */}
      <div className="flex flex-wrap items-center justify-center gap-1.5">
        {subTabs.map((tab) => {
          const isSelected = selectedCategory === tab.id;
          const count = counts[tab.id] ?? 0;

          return (
            <button
              key={tab.id}
              onClick={() => onSelectCategory(tab.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer border ${
                isSelected
                  ? 'bg-[#17365D] text-white border-[#161424] shadow-xs'
                  : 'bg-white text-[#64748B] border-[#161424]/20 hover:border-[#161424] hover:text-[#17365D]'
              }`}
            >
              <span>{tab.label}</span>
              <span className="ml-1 text-[10px] opacity-70 font-normal">({count})</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
