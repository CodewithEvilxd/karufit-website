'use client';

import React from 'react';
import { ToolItem } from '@/types';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { PdfIcon, VideoIcon, PhotoIcon, ShieldLockIcon, ArrowRightIcon } from '@/components/ui/Icons';

interface ToolCardProps {
  tool: ToolItem;
  onSelect?: (tool: ToolItem) => void;
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool, onSelect }) => {
  const getIcon = () => {
    switch (tool.category) {
      case 'media':
        return tool.id === 'video_compress' ? (
          <VideoIcon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
        ) : (
          <PhotoIcon className="w-5 h-5 text-rose-600 dark:text-rose-400" />
        );
      case 'pdf_secure':
        return <ShieldLockIcon className="w-5 h-5 text-red-600 dark:text-red-400" />;
      default:
        return <PdfIcon className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
    }
  };

  return (
    <Card
      hoverEffect
      onClick={() => onSelect?.(tool)}
      className="p-5 flex flex-col justify-between group bg-white dark:bg-[#1A1828] border-2 border-[#161424] dark:border-[#38354D] rounded-2xl"
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-[#252236] border border-[#161424]/20 dark:border-white/10 flex items-center justify-center transition-colors">
            {getIcon()}
          </div>

          <span
            className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${tool.pillColor}`}
          >
            {tool.pillText}
          </span>
        </div>

        <h4 className="text-base font-display font-black text-[#161424] dark:text-white group-hover:text-indigo-600 dark:group-hover:text-amber-400 transition-colors">
          {tool.title}
        </h4>

        <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
          {tool.subtitle}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-dashed border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
        <span className="font-mono text-[11px] text-slate-500 font-bold uppercase">
          {tool.engine}
        </span>
        <span className="inline-flex items-center gap-1 font-display font-bold text-indigo-600 dark:text-amber-400">
          <span>Explore</span>
          <ArrowRightIcon className="w-3.5 h-3.5" />
        </span>
      </div>
    </Card>
  );
};
