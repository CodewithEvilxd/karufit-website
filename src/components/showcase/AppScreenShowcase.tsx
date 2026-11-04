'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { SectionHeader } from '@/components/ui/SectionHeader';
import {
  VideoIcon,
  PdfIcon,
  SlidersIcon,
  StorageIcon,
  ShieldLockIcon,
  CheckIcon,
  LightningIcon,
  CpuIcon,
  SparklesIcon,
  AndroidIcon,
} from '@/components/ui/Icons';
import { soundFx } from '@/lib/soundFx';

export const AppScreenShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'engine' | 'tools' | 'vault' | 'settings' | 'quick'>('home');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const screens = {
    home: {
      id: 'home',
      title: 'KaruFit Studio Dashboard',
      subtitle: 'On-Device File Lightener & Privacy Engine',
      icon: VideoIcon,
      badge: '01 / Dashboard',
      badgeColor: 'yellow' as const,
      imageSrc: '/assets/karufit_app_screen1.png',
      description:
        'Personal greeting card with instant access to 4K Video Compressor, Photo Compressor, Photos to PDF, and PDF Compressor. Everything operates 100% on your device with zero telemetry.',
      highlights: [
        'Hardware-accelerated MediaCodec GPU transcoding',
        'All files stay in RAM - 100% private & air-gapped',
        'Direct 1-tap launcher for video, photo & PDF tools',
        'Built-in Android Share Sheet intent listener',
      ],
      stats: {
        engine: 'MediaCodec Fast',
        mode: '100% On-Device',
        privacy: 'Zero Server',
      },
    },
    engine: {
      id: 'engine',
      title: '100% On-Device Architecture',
      subtitle: 'Air-Gapped Media Transcoding & Security Card',
      icon: CpuIcon,
      badge: '02 / Silicon Engine',
      badgeColor: 'emerald' as const,
      imageSrc: '/assets/karufit_app_screen2.png',
      description:
        'Detailed on-device architecture card highlighting the 100% On-Device Engine. All files are compressed locally on your phone with zero server uploads, keeping documents private and secure.',
      highlights: [
        'Hardware MediaCodec acceleration directly on silicon',
        'Transparent privacy pledge: zero analytics & zero logs',
        'Offline PDF engine with 28+ specialized tools',
        'Storage reclaim odometer & real-time space stats',
      ],
      stats: {
        engine: 'Pure Silicon',
        mode: '100% Offline',
        privacy: 'Zero Server',
      },
    },
    tools: {
      id: 'tools',
      title: 'All Tools Hub (30 Utilities)',
      subtitle: 'Instant Search & Segmented PDF/Media Studio',
      icon: PdfIcon,
      badge: '03 / Studio Hub',
      badgeColor: 'rose' as const,
      imageSrc: '/assets/karufit_app_screen3.png',
      description:
        'Instant searchable utility hub with categorized filters for 28+ PDF tools and GPU media processors. Split, merge, encrypt, watermark, and re-order documents in milliseconds.',
      highlights: [
        'Instant fuzzy search for merge, split, rotate, bates',
        'Segmented filter pills: All (30), PDF Studio (28), Media (2)',
        'Lossless zero-server native processing pipelines',
        'Background task manager with progress notifications',
      ],
      stats: {
        engine: 'All (30)',
        mode: 'Instant Search',
        privacy: 'Local Execution',
      },
    },
    vault: {
      id: 'vault',
      title: 'Storage Vault & Analytics',
      subtitle: 'Cumulative Savings Odometer & Activity Ledger',
      icon: StorageIcon,
      badge: '04 / Storage Vault',
      badgeColor: 'yellow' as const,
      imageSrc: '/assets/karufit_app_screen_stats2.png',
      description:
        'Keep track of every megabyte reclaimed from your device storage. View total space reclaimed, files processed breakdown, and a clean local audit history log with zero cloud telemetry.',
      highlights: [
        'Real-time space reclaimed odometer (MB / GB / TB)',
        'Detailed breakdown: Videos, Photos, PDFs, and Studio Tools',
        'Recent activity log with safe gallery share & history clear',
        'Local SQLite storage ledger without network requests',
      ],
      stats: {
        engine: 'Local Ledger',
        mode: 'Transient Cache',
        privacy: 'No Cloud Logs',
      },
    },
    settings: {
      id: 'settings',
      title: 'Hardware Engine & Preferences',
      subtitle: 'Overheat Throttling, Sleep Locks & Gallery Routing',
      icon: SlidersIcon,
      badge: '05 / Preferences',
      badgeColor: 'sky' as const,
      imageSrc: '/assets/karufit_app_screen_settings2.png',
      description:
        'Fine-grained hardware controls: enable automatic KaruFit export prefix, auto-save to dedicated gallery album, hardware temperature spike alerts for 4K encodes, and screen wake-lock.',
      highlights: [
        'Hardware overheat warning during intensive 4K VBR',
        'Screen wake-lock prevents sleep during batch transcoding',
        'Custom export prefix and automatic gallery album routing',
        'Configurable hardware MediaCodec profile & bitrate bounds',
      ],
      stats: {
        engine: 'Silicon Tuned',
        mode: 'Hardware Guards',
        privacy: 'Local SharedPreferences',
      },
    },
    quick: {
      id: 'quick',
      title: 'Quick Studio Bottom Sheet',
      subtitle: 'Ergonomic 1-Tap Media & PDF Shortcuts',
      icon: SparklesIcon,
      badge: '06 / Quick Sheet',
      badgeColor: 'indigo' as const,
      imageSrc: '/assets/karufit_app_screen_plus.png',
      description:
        'Thumb-friendly bottom sheet modal triggered by the bottom floating dock pill. Offers instantaneous access to video compression presets, photo optimization, and PDF generation.',
      highlights: [
        'Ergonomic reachability designed for one-handed Android use',
        'Smooth bottom-sheet spring transitions at 120 FPS',
        'Direct hardware GPU fast-lane shortcuts',
        'Full 12+ studio tool drawer access in one tap',
      ],
      stats: {
        engine: 'Fast-Lane',
        mode: 'One-Tap Modal',
        privacy: 'Air-Gapped',
      },
    },
  };

  const current = screens[activeTab];

  return (
    <section id="screens" className="py-20 sm:py-28 bg-[#FAF8F5] border-b-2 border-[#161424] select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badgeText="Inside The App"
          badgeColor="indigo"
          title="Engineered for Pure On-Device Power"
          handwrittenNote="captured live from physical device"
          description="Explore the authentic mobile screens running inside KaruFit. Click any feature tab to inspect the actual on-device interface pulled directly over USB debugging."
        />

        {/* Top Interactive Feature Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {(
            [
              { id: 'home', label: 'Dashboard', icon: VideoIcon },
              { id: 'engine', label: 'Silicon Engine', icon: CpuIcon },
              { id: 'tools', label: 'All Tools (30)', icon: PdfIcon },
              { id: 'vault', label: 'Storage Vault', icon: StorageIcon },
              { id: 'settings', label: 'Engine Settings', icon: SlidersIcon },
              { id: 'quick', label: 'Quick Studio', icon: SparklesIcon },
            ] as const
          ).map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  soundFx.playClick(640);
                  setActiveTab(tab.id);
                }}
                className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-mono font-bold transition-all flex items-center gap-2 cursor-pointer border-2 ${
                  isActive
                    ? 'bg-[#17365D] text-white border-[#161424] shadow-scribely translate-y-[-2px]'
                    : 'bg-white text-[#17365D] border-[#161424]/30 hover:border-[#161424]'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Feature Detail Showcase Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white border-2 border-[#161424] rounded-3xl p-6 sm:p-10 shadow-scribely-lg">
          {/* Left Column: Screen Specifications & Capabilities */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#FEF08A] border-2 border-[#161424] text-[#17365D] shadow-2xs">
                {current.badge}
              </span>
            </div>

            <h3 className="font-display font-black text-2xl sm:text-4xl text-[#17365D] tracking-tight mb-2">
              {current.title}
            </h3>
            <p className="font-mono text-xs sm:text-sm font-bold text-[#0284C7] mb-4">
              {current.subtitle}
            </p>

            <p className="font-sans text-sm sm:text-base text-[#475569] leading-relaxed mb-6">
              {current.description}
            </p>

            {/* Checklist items */}
            <div className="space-y-2.5 mb-8 w-full">
              {current.highlights.map((h) => (
                <div
                  key={h}
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-[#FAF8F5] border border-[#161424]/15 text-xs sm:text-sm font-sans font-semibold text-[#17365D]"
                >
                  <div className="w-5 h-5 rounded-md bg-emerald-100 border border-emerald-400 flex items-center justify-center text-emerald-800 shrink-0">
                    <CheckIcon className="w-3.5 h-3.5" />
                  </div>
                  <span>{h}</span>
                </div>
              ))}
            </div>

            {/* Live Spec Indicators */}
            <div className="grid grid-cols-3 gap-2 w-full pt-4 border-t-2 border-dashed border-[#161424]/15 mb-6">
              <div className="p-2 rounded-xl bg-amber-50 border border-amber-300 text-center">
                <span className="text-[10px] font-mono uppercase text-amber-900 font-bold block">
                  Engine
                </span>
                <span className="text-xs sm:text-sm font-mono font-black text-[#17365D]">
                  {current.stats.engine}
                </span>
              </div>

              <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-300 text-center">
                <span className="text-[10px] font-mono uppercase text-emerald-900 font-bold block">
                  Execution
                </span>
                <span className="text-xs sm:text-sm font-mono font-black text-emerald-900">
                  {current.stats.mode}
                </span>
              </div>

              <div className="p-2 rounded-xl bg-sky-50 border border-sky-300 text-center">
                <span className="text-[10px] font-mono uppercase text-sky-900 font-bold block">
                  Telemetry
                </span>
                <span className="text-xs sm:text-sm font-mono font-black text-sky-900">
                  {current.stats.privacy}
                </span>
              </div>
            </div>

            {/* Inspect Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-5 py-2.5 rounded-xl bg-[#FEF08A] hover:bg-[#FDE047] text-[#17365D] font-mono font-bold text-xs border-2 border-[#161424] shadow-scribely-sm flex items-center gap-2 cursor-pointer transition-colors"
            >
              <AndroidIcon className="w-4 h-4 text-emerald-700" />
              <span>Zoom &amp; Inspect Live Android Screen</span>
            </button>
          </div>

          {/* Right Column: Authentic Android Flagship Phone Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              onClick={() => setIsModalOpen(true)}
              className="relative w-full max-w-[280px] sm:max-w-[310px] bg-[#161424] border-4 border-[#161424] rounded-[3rem] p-2.5 shadow-scribely-lg cursor-pointer group transition-all"
              title="Click to zoom in"
            >
              {/* Phone Inner Shell */}
              <div className="relative rounded-[2.5rem] overflow-hidden border border-neutral-700/60 bg-black aspect-[1080/2372]">
                {/* Android Status Bar */}
                <div className="h-6 w-full bg-[#121212] px-5 flex items-center justify-between text-[10px] font-mono text-neutral-300 select-none relative z-30">
                  <span className="font-semibold text-white">9:41</span>
                  {/* Punch-hole camera */}
                  <div className="w-3 h-3 rounded-full bg-black ring-1 ring-neutral-800 flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-[#1a2333]" />
                  </div>
                  <span className="font-bold text-[9px]">100%</span>
                </div>

                {/* Real Screen Capture Image */}
                <Image
                  src={current.imageSrc}
                  alt={current.title}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 280px, 310px"
                  priority
                />

                {/* Android Bottom Navigation Pill */}
                <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full bg-white/40 z-30" />
              </div>

              {/* Volume Rockers */}
              <div className="absolute -left-[6px] top-24 w-[2px] h-10 bg-neutral-600 rounded-l" />
              <div className="absolute -left-[6px] top-36 w-[2px] h-10 bg-neutral-600 rounded-l" />
              {/* Power Key */}
              <div className="absolute -right-[6px] top-28 w-[2px] h-14 bg-neutral-600 rounded-r" />
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox / Zoom Inspector Modal */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in select-none"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative bg-white border-2 border-[#161424] rounded-3xl max-w-2xl w-full p-6 shadow-scribely-lg max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b-2 border-dashed border-[#161424]/20 pb-4 mb-4">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-300">
                  Physical Device Verification
                </span>
                <h4 className="font-display font-black text-xl text-[#17365D] mt-1">
                  {current.title}
                </h4>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 rounded-full border-2 border-[#161424] bg-[#FEF08A] hover:bg-[#FDE047] font-mono font-black text-sm flex items-center justify-center text-[#17365D] cursor-pointer shadow-scribely-sm"
              >
                ✕
              </button>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="relative w-64 h-[480px] rounded-2xl overflow-hidden border-2 border-[#161424] bg-[#1A1A24] shrink-0">
                <Image
                  src={current.imageSrc}
                  alt={current.title}
                  fill
                  className="object-contain"
                  sizes="260px"
                />
              </div>

              <div className="flex flex-col text-left space-y-3">
                <p className="font-sans text-sm text-[#475569] leading-relaxed">
                  {current.description}
                </p>

                <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs font-mono text-[#17365D] space-y-1">
                  <div><strong>Package:</strong> com.codewithevilxd.karufit</div>
                  <div><strong>Target:</strong> Android 8.0 - Android 15</div>
                  <div><strong>Screen Resolution:</strong> 1080 × 2372 PX (FHD+)</div>
                  <div><strong>Capture Method:</strong> ADB USB Screencap</div>
                </div>

                <div className="space-y-1.5 pt-2">
                  {current.highlights.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs font-sans font-semibold text-[#17365D]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
