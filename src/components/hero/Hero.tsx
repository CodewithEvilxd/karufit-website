'use client';

import {
  AndroidIcon,
  CpuIcon,
  DownloadIcon,
  ShieldLockIcon,
  SlidersIcon
} from '@/components/ui/Icons';
import { soundFx } from '@/lib/soundFx';
import confetti from 'canvas-confetti';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

export const Hero: React.FC = () => {
  const [activeChip, setActiveChip] = useState<'universal' | 'arm64' | 'source'>('universal');
  const [heroScreenIndex, setHeroScreenIndex] = useState(0);
  const [copiedAdb, setCopiedAdb] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  const heroScreens = [
    { name: 'Dashboard', src: '/assets/karufit_app_screen1.png', tag: 'Studio Home' },
    { name: 'Silicon Engine', src: '/assets/karufit_app_screen2.png', tag: 'On-Device VBR' },
    { name: 'All Tools (30)', src: '/assets/karufit_app_screen3.png', tag: 'Instant Search' },
    { name: 'Storage Vault', src: '/assets/karufit_app_screen_stats2.png', tag: 'Reclaim Ledger' },
    { name: 'Quick Studio', src: '/assets/karufit_app_screen_plus.png', tag: 'Bottom Sheet' },
  ];

  const handleDownloadClick = () => {
    soundFx.playSuccessChime();
    try {
      confetti({
        particleCount: 35,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FEF08A', '#17365D', '#FF3D6E', '#10B981', '#38BDF8'],
      });
    } catch (_) {}
  };

  const handleCopyAdb = () => {
    soundFx.playSuccessChime();
    navigator.clipboard.writeText('adb install KaruFit-v1.0.13-arm64.apk');
    setCopiedAdb(true);
    try {
      confetti({
        particleCount: 15,
        spread: 45,
        origin: { y: 0.65 },
        colors: ['#FEF08A', '#17365D'],
      });
    } catch (_) {}
    setTimeout(() => setCopiedAdb(false), 2000);
  };

  const releaseData = {
    universal: {
      label: 'Download APK',
      badge: 'Version 1',
      detail: 'v1.0.13 • 95.8 MB (Universal Android)',
      href: '/downloads/KaruFit-universal.apk',
      download: 'KaruFit-v1.0.13-universal.apk',
      note: 'Direct on-site download • Android 7.0+',
    },
    arm64: {
      label: 'Download ARM64',
      badge: 'ARM64',
      detail: 'v1.0.13 • 49.0 MB (64-bit Silicon)',
      href: '/downloads/KaruFit-arm64-v8a.apk',
      download: 'KaruFit-v1.0.13-arm64-v8a.apk',
      note: 'Snapdragon, Tensor & Dimensity direct',
    },
    source: {
      label: 'View MIT License',
      badge: 'MIT',
      detail: '100% On-Device • Official MIT License',
      href: '/license',
      download: undefined,
      note: 'Full license & zero-cloud terms on site',
    },
  };

  const current = releaseData[activeChip];

  return (
    <section className="relative isolate pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden select-none bg-iso-grid">
      {/* Background Subtle Warm Dot Pattern (GitKura paper style) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#17365D_1px,transparent_1px)] [background-size:24px_24px] z-0"
        aria-hidden="true"
      />

      {/* Embedded Landscape Scenery ("image page ke under hai" with full-width seamless white smoke shadow) */}
      <div
        className="absolute top-0 inset-x-0 w-full h-[700px] sm:h-[820px] md:h-[900px] pointer-events-none z-0 overflow-hidden flex items-center justify-center select-none"
        aria-hidden="true"
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Base Landscape Image with Ultra-Wide Feathered Radial Mask */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-[center_38%]"
            style={{
              backgroundImage: 'url(/assets/ghibli_landscape.png)',
              maskImage:
                'radial-gradient(ellipse 95% 80% at 50% 48%, black 40%, rgba(0,0,0,0.85) 65%, rgba(0,0,0,0.2) 88%, transparent 100%)',
              WebkitMaskImage:
                'radial-gradient(ellipse 95% 80% at 50% 48%, black 40%, rgba(0,0,0,0.85) 65%, rgba(0,0,0,0.2) 88%, transparent 100%)',
              opacity: 0.92,
            }}
          />

          {/* Golden Hour Sunlight Bloom radiating from the wheat horizon */}
          <div
            className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[360px] pointer-events-none rounded-full blur-3xl opacity-60"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(254, 240, 138, 0.45) 0%, rgba(253, 224, 71, 0.18) 50%, transparent 80%)',
            }}
          />

          {/* Ambient Dust Motes / Sunbeam Pollen Specks (Studio Ghibli atmosphere) */}
          <div className="absolute top-[36%] left-[24%] w-1.5 h-1.5 rounded-full bg-amber-300/80 blur-[0.5px] animate-pulse" />
          <div className="absolute top-[46%] left-[32%] w-1 h-1 rounded-full bg-yellow-200/90 blur-[0.5px] animate-ping" style={{ animationDuration: '4s' }} />
          <div className="absolute top-[40%] right-[26%] w-1.5 h-1.5 rounded-full bg-amber-200/80 blur-[0.5px] animate-pulse" style={{ animationDuration: '3.5s' }} />
          <div className="absolute top-[50%] right-[19%] w-1 h-1 rounded-full bg-yellow-100/90 blur-[0.5px] animate-pulse" style={{ animationDuration: '5s' }} />
          <div className="absolute top-[32%] left-[44%] w-1 h-1 rounded-full bg-amber-200/70 blur-[0.5px] animate-ping" style={{ animationDuration: '6s' }} />

          {/* Multi-Stop Photographic Smoke Gradients - Left and Right 100% invisible falloff */}
          <div
            className="absolute inset-y-0 left-0 w-56 sm:w-80 md:w-[420px] lg:w-[480px] pointer-events-none"
            style={{
              background:
                'linear-gradient(to right, #FAF8F5 0%, #FAF8F5 18%, rgba(250,248,245,0.92) 42%, rgba(250,248,245,0.65) 68%, rgba(250,248,245,0.18) 88%, transparent 100%)',
            }}
          />
          <div
            className="absolute inset-y-0 right-0 w-56 sm:w-80 md:w-[420px] lg:w-[480px] pointer-events-none"
            style={{
              background:
                'linear-gradient(to left, #FAF8F5 0%, #FAF8F5 18%, rgba(250,248,245,0.92) 42%, rgba(250,248,245,0.65) 68%, rgba(250,248,245,0.18) 88%, transparent 100%)',
            }}
          />

          {/* Multi-Stop Photographic Smoke Gradients - Top and Bottom */}
          <div
            className="absolute inset-x-0 top-0 h-36 sm:h-48 pointer-events-none"
            style={{
              background:
                'linear-gradient(to bottom, #FAF8F5 0%, #FAF8F5 22%, rgba(250,248,245,0.82) 55%, rgba(250,248,245,0.25) 82%, transparent 100%)',
            }}
          />
          <div
            className="absolute inset-x-0 bottom-0 h-52 sm:h-72 pointer-events-none"
            style={{
              background:
                'linear-gradient(to top, #FAF8F5 0%, #FAF8F5 28%, rgba(250,248,245,0.92) 58%, rgba(250,248,245,0.55) 78%, rgba(250,248,245,0.15) 92%, transparent 100%)',
            }}
          />

          {/* Radial Smoke Vignette for smooth 360-degree diffusion */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 96% 84% at 50% 48%, transparent 32%, rgba(250,248,245,0.38) 58%, rgba(250,248,245,0.85) 78%, #FAF8F5 98%)',
            }}
          />

          {/* Organic White Smoke Fog Clouds around edges */}
          <div className="absolute top-1/4 -left-20 w-[480px] h-[480px] bg-[#FAF8F5]/92 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/4 -right-20 w-[480px] h-[480px] bg-[#FAF8F5]/92 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -top-16 left-12 w-[540px] h-52 bg-[#FAF8F5]/85 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -top-16 right-12 w-[540px] h-52 bg-[#FAF8F5]/85 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[950px] h-56 bg-[#FAF8F5]/95 rounded-full blur-3xl pointer-events-none" />

          {/* Soft inner ambient smoke shadow */}
          <div className="absolute inset-0 shadow-[inset_0_0_160px_80px_#FAF8F5] pointer-events-none" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center text-center">
        {/* 3D Rectangular Sketch Badge with Solid Black 3D Shade */}
        <div className="mb-6 inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-1.5 sm:py-2 rounded-xl bg-[#FEF08A] text-[#161424] border-2 border-[#161424] shadow-[4px_4px_0px_#161424] select-none">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse border border-[#161424] shrink-0" />
          <span className="font-hand font-bold text-lg sm:text-2xl tracking-wide text-[#161424]">
            100% on-device &bull; hardware silicon direct &bull; zero cloud upload
          </span>
          <span className="text-sm font-bold text-[#161424] shrink-0">✦</span>
        </div>

        {/* Main Title: Balanced display typography, sentence case, tight tracking */}
        <div className="relative mb-6 max-w-4xl mx-auto">
          {/* Soft smoke halo backlight for maximum typography punch */}
          <div className="absolute -inset-x-8 -inset-y-4 bg-[#FAF8F5]/75 rounded-3xl blur-xl -z-10 pointer-events-none" />
          <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl text-[#161424] tracking-[-0.035em] leading-[1.06] select-text">
            Shrink 4K Videos by{' '}
            <span className="inline-block px-3 sm:px-4 py-0.5 sm:py-1 rounded-2xl bg-[#FEF08A] text-[#161424] border-2 border-[#161424] shadow-[3px_3px_0px_#161424] align-baseline font-black">
              85%
            </span>{' '}
            <br className="hidden sm:inline" />
            Directly on Android Silicon.
          </h1>
        </div>

        {/* Subtitle: Crisp & Concise with two-tone visual hierarchy */}
        <div className="relative max-w-2xl mx-auto mb-8 select-text">
          <div className="absolute -inset-x-6 -inset-y-2 bg-[#FAF8F5]/70 rounded-2xl blur-lg -z-10 pointer-events-none" />
          <p className="font-sans text-base sm:text-lg md:text-xl leading-relaxed">
            <span className="font-semibold text-[#161424]">Fast, private, and 100% offline.</span>{' '}
            <span className="text-[#475569] font-normal">
              Compress gigabytes of camera footage and run 28+ PDF tools without a single byte leaving your phone.
            </span>
          </p>
        </div>

        {/* macOS-Style Segmented APK Architecture Selector with 3D Back Shadow */}
        <div className="flex items-center gap-1.5 p-1.5 bg-white border-2 border-[#161424] rounded-2xl shadow-[3px_3px_0px_#161424] mb-6 max-w-xl w-full justify-center">
          {(
            [
              { id: 'universal', label: 'Universal', badge: '95.8 MB' },
              { id: 'arm64', label: 'ARM64', badge: '49.0 MB' },
              { id: 'source', label: 'License', badge: 'MIT' },
            ] as const
          ).map((item) => {
            const isSelected = activeChip === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  soundFx.playClick(720);
                  setActiveChip(item.id);
                }}
                className={`flex-1 py-2 sm:py-2.5 px-2 sm:px-3 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all flex items-center justify-center gap-1 sm:gap-1.5 whitespace-nowrap cursor-pointer select-none ${
                  isSelected
                    ? 'bg-[#FEF08A] text-[#161424] shadow-inner font-extrabold border border-[#161424]/40'
                    : 'text-[#475569] hover:text-[#161424] hover:bg-[#FAF8F5]'
                }`}
              >
                <span className="whitespace-nowrap">{item.label}</span>
                <span className={`text-[10px] sm:text-[11px] font-mono whitespace-nowrap shrink-0 ${isSelected ? 'text-[#161424] font-black' : 'text-[#94A3B8]'}`}>
                  ({item.badge})
                </span>
              </button>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
          <a
            href={current.href}
            download={current.download}
            onClick={handleDownloadClick}
            className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-2xl bg-[#FEF08A] hover:bg-[#FDE047] text-[#161424] border-2 border-[#161424] shadow-[3px_3px_0px_#161424] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-150 flex items-center gap-2.5 font-bold cursor-pointer group"
          >
            <span className="w-5 h-5 rounded-full bg-[#161424] flex items-center justify-center text-[#FEF08A] text-xs">
              <AndroidIcon className="w-3.5 h-3.5" />
            </span>
            <span className="font-display font-extrabold text-sm sm:text-base">Download APK</span>
            <span className="text-xs px-2 py-0.5 rounded-md bg-[#161424]/10 font-mono font-bold text-[#161424]">
              {current.badge}
            </span>
            <span className="text-sm font-black group-hover:translate-x-0.5 transition-transform">→</span>
          </a>

          <a
            href="/split-test"
            className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-2xl bg-white hover:bg-[#FAF8F5] text-[#161424] border-2 border-[#161424] shadow-[3px_3px_0px_#161424] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-150 flex items-center gap-2.5 font-bold cursor-pointer group"
          >
            <SlidersIcon className="w-4 h-4 text-[#161424]" />
            <span className="font-display font-extrabold text-sm sm:text-base">Compare Quality</span>
            <span className="text-sm font-black group-hover:translate-x-0.5 transition-transform">→</span>
          </a>
        </div>

        {/* Sub-CTA Security & License Guarantee */}
        <p className="font-hand font-bold text-sm sm:text-base text-[#475569] mb-12 select-none">
          Free &amp; open source &bull; 100% offline &bull; Android 7.0 to 15 &bull; Zero analytics
        </p>

        {/* =========================================================================
            FLAGSHIP ANDROID SMARTPHONE MOCKUP (Clean, Centered)
           ========================================================================= */}
        <div className="w-full max-w-sm mx-auto flex flex-col items-center mt-8 sm:mt-12 pt-2 select-none">
          {/* Centerpiece: Flagship Android Smartphone Mockup */}
          <div className="relative w-full max-w-[340px] sm:max-w-[370px] bg-[#161424] border-4 border-[#161424] rounded-[3.2rem] p-3 shadow-scribely-lg hover:shadow-scribely-xl transition-all">
            {/* Outer Titanium Trim Edge */}
            <div className="relative bg-black rounded-[2.6rem] overflow-hidden border border-neutral-700/60 shadow-inner">
              {/* Android Status Bar with centered punch-hole camera */}
              <div className="h-7 w-full bg-[#121212] px-6 flex items-center justify-between text-[11px] font-mono text-neutral-300 select-none relative z-20">
                <span className="font-semibold text-white">9:41</span>
                
                {/* Centered Android Punch-hole Camera */}
                <div className="absolute left-1/2 -translate-x-1/2 top-1.5 w-3.5 h-3.5 rounded-full bg-black ring-1 ring-neutral-800 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1a2333]/90" />
                </div>

                {/* Android Status Icons */}
                <div className="flex items-center gap-1.5 text-neutral-300">
                  <span className="text-[10px] font-bold">5G</span>
                  <svg className="w-3.5 h-3.5 text-neutral-200" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3c-4.97 0-9.49 2.02-12.73 5.27l1.41 1.41C3.39 6.97 7.43 5.17 12 5.17c4.57 0 8.61 1.8 11.32 4.51l1.41-1.41C21.49 5.02 16.97 3 12 3zm0 4.33c-3.77 0-7.2 1.53-9.66 4l1.41 1.41c2.1-2.1 4.99-3.41 8.25-3.41s6.15 1.31 8.25 3.41l1.41-1.41c-2.46-2.47-5.89-4-9.66-4zm0 4.34c-2.57 0-4.91 1.04-6.6 2.73l1.41 1.41c1.33-1.33 3.16-2.14 5.19-2.14 2.03 0 3.86.81 5.19 2.14l1.41-1.41c-1.69-1.69-4.03-2.73-6.6-2.73zm0 4.33c-1.37 0-2.61.56-3.51 1.46L12 21.01l3.51-3.55c-.9-.9-2.14-1.46-3.51-1.46z" />
                  </svg>
                  <div className="flex items-center border border-neutral-400 rounded-sm px-0.5 py-0.2 text-[8px] font-bold">
                    100%
                  </div>
                </div>
              </div>

              {/* Real Screen Capture Image Container */}
              <div className="relative aspect-[1080/2372] w-full bg-[#1A1A24] overflow-hidden">
                <Image
                  src={heroScreens[heroScreenIndex].src}
                  alt={`KaruFit Android - ${heroScreens[heroScreenIndex].name}`}
                  fill
                  className="object-cover object-top transition-opacity duration-300"
                  priority
                  sizes="(max-width: 768px) 340px, 370px"
                />

                {/* Subtle Glass Sheen Gradient */}
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent"
                  aria-hidden="true"
                />
              </div>

              {/* Android Bottom Navigation Pill */}
              <div className="h-4 w-full bg-[#121212] flex items-center justify-center">
                <div className="w-28 h-1 rounded-full bg-neutral-500" />
              </div>
            </div>

            {/* Hardware Trim Details */}
            <div className="absolute -left-[7px] top-28 w-[3px] h-12 bg-neutral-700 rounded-l-md" />
            <div className="absolute -left-[7px] top-44 w-[3px] h-12 bg-neutral-700 rounded-l-md" />
            <div className="absolute -right-[7px] top-32 w-[3px] h-16 bg-neutral-700 rounded-r-md" />
          </div>

          {/* Screen Switcher Tabs directly below the phone */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-white border-2 border-[#161424] rounded-2xl shadow-scribely-sm z-20">
            {heroScreens.map((s, idx) => (
              <button
                key={s.name}
                onClick={() => {
                  soundFx.playPop(540);
                  setHeroScreenIndex(idx);
                }}
                className={`px-3 py-1 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer border ${
                  heroScreenIndex === idx
                    ? 'bg-[#17365D] text-white border-[#161424] shadow-xs'
                    : 'bg-[#FAF8F5] text-[#17365D] border-transparent hover:border-[#161424]/30'
                }`}
              >
                <span>{s.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
