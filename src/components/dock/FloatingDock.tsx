'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import confetti from 'canvas-confetti';
import {
  DownloadIcon,
  AndroidIcon,
  CopyIcon,
  CheckIcon,
  SlidersIcon,
  LightningIcon,
  PdfIcon,
  SparklesIcon,
} from '@/components/ui/Icons';

import { soundFx } from '@/lib/soundFx';

export const FloatingDock: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show dock once user scrolls past hero section (~380px)
      // Automatically hide when user reaches the footer so it never obstructs footer artwork
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const isNearFooter = scrollY + windowHeight >= documentHeight - 160;

      setVisible(scrollY > 380 && !isNearFooter);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyAdb = (e: React.MouseEvent) => {
    e.preventDefault();
    soundFx.playSuccessChime();
    navigator.clipboard.writeText('adb install KaruFit-v1.0.13-arm64.apk');
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);

    try {
      confetti({
        particleCount: 16,
        spread: 45,
        origin: { y: 0.9 },
        colors: ['#FEF08A', '#10B981', '#17365D'],
        disableForReducedMotion: true,
      });
    } catch (_) {}
  };

  if (!visible) return null;

  return (
    <aside
      aria-label="Quick Actions Dock"
      className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 max-w-[94vw] animate-bounce-subtle select-none"
    >
      <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/95 backdrop-blur-2xl border-2 border-[#161424] shadow-[4px_4px_0px_#161424,0_16px_40px_rgba(22,20,36,0.15)]">
        {/* Karu Mascot Mini Seal */}
        <Link
          href="/features"
          className="flex items-center gap-1.5 pl-1.5 pr-2.5 py-1 rounded-full bg-[#FAF8F5] hover:bg-slate-100 border border-[#161424]/20 transition-colors"
          title="Jump to Hardware Silicon Pipeline"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] sm:text-xs font-mono font-semibold text-[#161424]">
            v1.0.13
          </span>
        </Link>

        {/* Quick Jump Anchors */}
        <div className="hidden md:flex items-center gap-0.5 border-x border-[#161424]/15 px-2">
          <Link
            href="/split-test"
            className="px-2.5 py-1 rounded-full text-xs font-mono font-medium text-[#64748B] hover:text-[#161424] hover:bg-[#FAF8F5] transition-colors flex items-center gap-1.5"
          >
            <SlidersIcon className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>Split Test</span>
          </Link>
          <Link
            href="/features"
            className="px-2.5 py-1 rounded-full text-xs font-mono font-medium text-[#64748B] hover:text-[#161424] hover:bg-[#FAF8F5] transition-colors flex items-center gap-1.5"
          >
            <LightningIcon className="w-3.5 h-3.5 text-amber-500" />
            <span>Benchmark</span>
          </Link>
          <Link
            href="/calculator"
            className="px-2.5 py-1 rounded-full text-xs font-mono font-medium text-[#64748B] hover:text-[#161424] hover:bg-[#FAF8F5] transition-colors flex items-center gap-1.5"
          >
            <span>Calculator</span>
          </Link>
          <Link
            href="/pdf-studio"
            className="px-2.5 py-1 rounded-full text-xs font-mono font-medium text-[#64748B] hover:text-[#161424] hover:bg-[#FAF8F5] transition-colors flex items-center gap-1.5"
          >
            <PdfIcon className="w-3.5 h-3.5 text-rose-500" />
            <span>28 PDF Tools</span>
          </Link>
        </div>

        {/* ADB Quick Copy Button */}
        <button
          onClick={handleCopyAdb}
          className={`px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-mono font-semibold transition-all border flex items-center gap-1.5 cursor-pointer active:scale-[0.96] ${
            copied
              ? 'bg-emerald-100 text-emerald-900 border-emerald-400'
              : 'bg-[#FAF8F5] text-[#161424] hover:bg-slate-100 border-[#161424]/20'
          }`}
          title="Click to copy ADB installation command"
        >
          {copied ? (
            <>
              <CheckIcon className="w-3.5 h-3.5 text-emerald-600" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <CopyIcon className="w-3.5 h-3.5 text-[#64748B]" />
              <span className="hidden sm:inline">adb install</span>
              <span className="sm:hidden">ADB</span>
            </>
          )}
        </button>

        {/* Direct Download Button with 3D Back Shadow */}
        <Link
          href="/downloads"
          className="px-3.5 sm:px-4 py-1.5 rounded-full bg-gradient-to-b from-[#FEF08A] to-[#FDE047] text-[#161424] text-xs font-mono font-bold border border-[#161424] shadow-[2px_2px_0px_#161424] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[0px_0px_0px_#161424] transition-all duration-150 ease-fluid flex items-center gap-1.5"
        >
          <AndroidIcon className="w-3.5 h-3.5 text-emerald-800" />
          <span>Get APK</span>
        </Link>
      </div>
    </aside>
  );
};
