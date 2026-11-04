'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ToolCategory, ToolItem } from '@/types';
import { TOOLS_DATA } from '@/data/toolsData';
import { ToolFilterTabs } from './ToolFilterTabs';
import { ToolCard } from './ToolCard';
import { SearchIcon, CheckIcon } from '@/components/ui/Icons';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { soundFx } from '@/lib/soundFx';

export const PdfToolsCatalog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ToolCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalTool, setActiveModalTool] = useState<ToolItem | null>(null);
  const [simulatedRun, setSimulatedRun] = useState<boolean>(false);

  const counts: Record<ToolCategory, number> = useMemo(() => {
    return {
      all: TOOLS_DATA.length,
      pdf_all: TOOLS_DATA.filter((t) => t.category !== 'media').length,
      media: TOOLS_DATA.filter((t) => t.category === 'media').length,
      pdf_edit: TOOLS_DATA.filter((t) => t.category === 'pdf_edit').length,
      pdf_secure: TOOLS_DATA.filter((t) => t.category === 'pdf_secure').length,
      pdf_convert: TOOLS_DATA.filter((t) => t.category === 'pdf_convert').length,
      pdf_layout: TOOLS_DATA.filter((t) => t.category === 'pdf_layout').length,
    };
  }, []);

  const filteredTools = useMemo(() => {
    return TOOLS_DATA.filter((tool) => {
      const matchesCategory =
        selectedCategory === 'all'
          ? true
          : selectedCategory === 'pdf_all'
          ? tool.category !== 'media'
          : tool.category === selectedCategory;
      const matchesSearch =
        tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.engine.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="pdf-tools" className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-8">
      <SectionHeader
        badgeText="On-Device Suite"
        badgeColor="amber"
        title="30 Offline Media & PDF Tools"
        handwrittenNote="all unlocked forever"
        description="Every tool runs directly inside your device memory. No cloud upload, no document limits, and no subscriptions."
      />

      {/* Hand-drawn Sketch Art Spotlight for PDF Studio */}
      <div className="max-w-4xl mx-auto mb-10 p-5 sm:p-6 bg-white border-3 border-[#161424] rounded-3xl shadow-scribely relative overflow-hidden flex flex-col md:flex-row items-center gap-6">
        <div className="relative w-full md:w-64 aspect-[4/3] rounded-2xl overflow-hidden border-2 border-[#161424] shrink-0 bg-[#FAF8F5] shadow-inner">
          <Image
            src="/assets/sketch/pdf_studio_sketch.jpg"
            alt="Hand-drawn stationery workshop sketch for KaruFit PDF Studio"
            fill
            className="object-cover"
          />
          <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-[#FEF08A] border border-[#161424] text-[9px] font-mono font-black text-[#17365D]">
            HANDMADE ART
          </div>
        </div>

        <div className="flex-1 text-left">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono font-black text-emerald-800 uppercase tracking-wider">
              100% Offline Document Workshop
            </span>
          </div>
          <h3 className="font-display font-black text-xl sm:text-2xl text-[#17365D] leading-tight">
            Handcrafted Stationery &amp; PDF Craftsmanship
          </h3>
          <p className="font-sans text-xs sm:text-sm text-[#475569] mt-1.5 leading-relaxed">
            Every document stays purely in your phone&apos;s volatile RAM. Merge contracts, watermark invoices, split bank statements, and OCR receipts with zero cloud exposure.
          </p>
          <div className="mt-3 pt-2.5 border-t border-dashed border-[#161424]/20 flex flex-wrap items-center gap-3 text-xs font-mono font-bold text-[#17365D]">
            <span>✦ Zero Document Uploads</span>
            <span>✦ No 3-Page Limits</span>
            <span>✦ Instant Device Memory</span>
          </div>
        </div>
      </div>

      {/* Search Input Bar */}
      <div className="max-w-xl mx-auto mb-8 relative">
        <div className="relative flex items-center">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search tools (e.g. merge, compress, watermark, bates)..."
            className="w-full pl-11 pr-4 py-3 bg-white dark:bg-[#1A1828] border-2 border-[#161424] dark:border-[#38354D] rounded-2xl shadow-brutal-sm text-sm font-sans text-[#161424] dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder-slate-400"
          />
          <SearchIcon className="w-5 h-5 text-slate-400 absolute left-3.5 pointer-events-none" />
        </div>
      </div>

      {/* Filter Tabs */}
      <ToolFilterTabs
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        counts={counts}
      />

      {/* Tools Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
        {filteredTools.map((tool) => (
          <ToolCard
            key={tool.id}
            tool={tool}
            onSelect={(t) => {
              soundFx.playPop(580);
              setActiveModalTool(t);
            }}
          />
        ))}
      </div>

      {filteredTools.length === 0 && (
        <div className="text-center py-12 bg-white dark:bg-[#1A1828] rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-800 p-8">
          <p className="font-display font-bold text-lg text-slate-700 dark:text-slate-300">
            No tools matched your search query.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="mt-3 text-xs font-display font-bold text-indigo-600 dark:text-amber-400 hover:underline cursor-pointer"
          >
            Clear filters and show all 30 tools
          </button>
        </div>
      )}

      {/* Tool Detail Interactive Modal (Openside & Pippo style) */}
      {activeModalTool && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white border-2 border-[#161424] rounded-3xl shadow-scribely-lg max-w-lg w-full p-6 animate-bounce-subtle relative">
            <div className="flex items-center justify-between pb-4 border-b-2 border-[#161424]">
              <div className="flex items-center gap-2">
                <span className={`text-[11px] font-mono font-bold px-2.5 py-1 rounded-full border border-[#161424]/30 ${activeModalTool.pillColor}`}>
                  {activeModalTool.pillText}
                </span>
                <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-300">
                  OFFLINE 100%
                </span>
              </div>
              <button
                onClick={() => {
                  setActiveModalTool(null);
                  setSimulatedRun(false);
                }}
                className="w-8 h-8 rounded-xl border-2 border-[#161424] flex items-center justify-center text-slate-700 hover:bg-[#FEF08A] transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="py-4 space-y-3">
              <h3 className="text-xl sm:text-2xl font-display font-black text-[#17365D]">
                {activeModalTool.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                {activeModalTool.subtitle}
              </p>

              {/* Simulation Sandbox Box */}
              <div className="p-4 bg-[#FAF8F5] rounded-2xl border-2 border-[#161424] shadow-scribely-sm space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-[#64748B] uppercase">
                    On-Device Execution Pipeline:
                  </span>
                  <span className="text-[10px] font-mono font-bold text-[#17365D]">
                    {activeModalTool.engine}
                  </span>
                </div>

                {/* Input & Output mock preview */}
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="p-2.5 rounded-xl bg-white border border-[#161424]/20">
                    <span className="text-[9px] text-[#64748B] block uppercase font-bold">Mock Input</span>
                    <span className="font-bold text-[#17365D] block truncate">doc_raw.pdf</span>
                    <span className="text-[10px] text-rose-600 font-bold">28.4 MB (Raw)</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-[#161424]/20">
                    <span className="text-[9px] text-[#64748B] block uppercase font-bold">Processed Result</span>
                    <span className="font-bold text-[#17365D] block truncate">
                      {simulatedRun ? 'doc_clean.pdf' : 'Waiting...'}
                    </span>
                    <span className="text-[10px] text-emerald-600 font-bold">
                      {simulatedRun ? '2.4 MB (-91.5%)' : 'Tap Simulate'}
                    </span>
                  </div>
                </div>

                {/* Simulation trigger */}
                <button
                  onClick={() => {
                    soundFx.playSuccessChime();
                    setSimulatedRun(true);
                  }}
                  className={`w-full py-2.5 rounded-xl text-xs font-mono font-bold transition-all border-2 border-[#161424] shadow-scribely-sm flex items-center justify-center gap-1.5 cursor-pointer ${
                    simulatedRun
                      ? 'bg-emerald-100 text-emerald-900 border-emerald-500'
                      : 'bg-[#FEF08A] hover:bg-[#FDE047] text-[#17365D]'
                  }`}
                >
                  <CheckIcon className="w-3.5 h-3.5" />
                  <span>{simulatedRun ? '✦ 100% Offline Simulation Passed' : 'Simulate On-Device Run'}</span>
                </button>
              </div>
            </div>

            <div className="pt-3 border-t-2 border-[#161424] flex items-center justify-between gap-3">
              <span className="text-[10px] font-mono text-[#64748B]">
                Included in KaruFit APK v1.0.13
              </span>
              <div className="flex items-center gap-2">
                <Link
                  href="/downloads"
                  onClick={() => setActiveModalTool(null)}
                  className="px-4 py-2 bg-[#17365D] hover:bg-[#1E4472] text-white rounded-xl text-xs font-mono font-bold border-2 border-[#161424] shadow-scribely-sm transition-colors cursor-pointer"
                >
                  Get APK
                </Link>
                <button
                  onClick={() => {
                    setActiveModalTool(null);
                    setSimulatedRun(false);
                  }}
                  className="px-4 py-2 bg-[#FAF8F5] text-[#17365D] rounded-xl text-xs font-mono font-bold border-2 border-[#161424] cursor-pointer hover:bg-white"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
