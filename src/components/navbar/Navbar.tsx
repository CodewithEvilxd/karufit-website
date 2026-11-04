'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import {
  DownloadIcon,
  GitHubIcon,
  VideoIcon,
  PdfIcon,
  SlidersIcon,
  ShieldLockIcon,
  AndroidIcon,
  HelpCircleIcon,
} from '@/components/ui/Icons';
import { soundFx } from '@/lib/soundFx';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(true);

  useEffect(() => {
    setSoundOn(soundFx.isEnabled());
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleSound = () => {
    const newState = soundFx.toggle();
    setSoundOn(newState);
  };

  const navLinks = [
    { label: 'Features', href: '/features' },
    { label: 'Split Test', href: '/split-test' },
    { label: 'Calculator', href: '/calculator' },
    { label: 'PDF Studio', href: '/pdf-studio' },
    { label: 'FAQ', href: '/faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-3 sm:pt-4 pointer-events-none select-none">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Floating Minimal Pill Dock with 3D Tactile Back Shadow */}
        <div
          className={`pointer-events-auto flex items-center justify-between w-full px-4 sm:px-5 py-2.5 rounded-full border-2 border-[#161424] bg-[#FAF8F5]/90 backdrop-blur-2xl transition-all duration-300 ease-fluid ${
            scrolled ? 'shadow-[4px_4px_0px_#161424,0_12px_32px_rgba(22,20,36,0.1)] bg-white/95' : 'shadow-[3px_3px_0px_#161424,0_6px_20px_rgba(22,20,36,0.06)]'
          }`}
        >
          {/* Logo & Clean Brand */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 relative rounded-xl border-2 border-[#161424] overflow-hidden bg-white flex items-center justify-center shadow-[1.5px_1.5px_0px_#161424] group-hover:scale-105 transition-transform duration-200 ease-fluid">
              <Image
                src="/assets/logo.png"
                alt="KaruFit Logo"
                width={32}
                height={32}
                className="object-contain"
                priority
              />
            </div>
            <span className="font-display font-extrabold text-base sm:text-lg text-[#161424] tracking-tight">
              KaruFit
            </span>
          </Link>

          {/* Desktop Nav Links: Apple-style segmented pill feel */}
          <nav className="hidden md:flex items-center gap-1.5 p-1 bg-black/[0.04] rounded-full border border-[#161424]/15">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-xs font-mono font-semibold px-3 py-1 rounded-full transition-all duration-200 ease-fluid tracking-wide ${
                    isActive
                      ? 'bg-white text-[#161424] shadow-xs border border-black/[0.08]'
                      : 'text-[#64748B] hover:text-[#161424] hover:bg-white/60'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Audio Equalizer Waveform FX Toggle */}
            <button
              onClick={handleToggleSound}
              className="px-2.5 py-1.5 rounded-full border-2 border-[#161424] bg-white hover:bg-[#FEF08A] text-[#161424] shadow-[2px_2px_0px_#161424] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[0px_0px_0px_#161424] transition-all duration-150 ease-fluid flex items-center gap-1.5 cursor-pointer"
              title={soundOn ? 'Mute audio feedback' : 'Enable audio feedback'}
              aria-label="Toggle sound FX"
            >
              <span className="flex items-center gap-0.5 h-3">
                {[45, 90, 60].map((h, i) => (
                  <span
                    key={i}
                    className={`w-0.5 bg-[#161424] rounded-full transition-all ${
                      soundOn ? 'animate-pulse' : 'opacity-30'
                    }`}
                    style={{ height: soundOn ? `${h}%` : '35%' }}
                  />
                ))}
              </span>
              <span className="text-[10px] font-mono font-bold hidden sm:inline">
                {soundOn ? 'FX' : 'OFF'}
              </span>
            </button>

            {/* Tactile Solar Yellow CTA Button with 3D Back Shadow */}
            <Link href="/downloads">
              <button className="px-4 py-1.5 rounded-full border-2 border-[#161424] bg-gradient-to-b from-[#FEF08A] to-[#FDE047] text-[#161424] font-mono font-bold text-xs shadow-[2px_2px_0px_#161424] hover:shadow-[3px_3px_0px_#161424] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[0px_0px_0px_#161424] transition-all duration-150 ease-fluid flex items-center gap-1.5 cursor-pointer">
                <AndroidIcon className="w-3.5 h-3.5 text-emerald-800" />
                <span>Get APK</span>
              </button>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-full border border-[#161424]/15 text-[#161424] bg-white hover:bg-slate-50 transition-colors ml-0.5"
              aria-label="Toggle Navigation Menu"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {mobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="4" y1="8" x2="20" y2="8" />
                    <line x1="4" y1="16" x2="20" y2="16" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="pointer-events-auto md:hidden mt-2 p-4 rounded-3xl border border-[#161424]/10 bg-white/95 backdrop-blur-2xl shadow-[0_16px_40px_rgba(0,0,0,0.12)] animate-fade-in flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-2xl text-xs font-mono font-semibold flex items-center gap-2.5 transition-all duration-200 ${
                    isActive
                      ? 'bg-[#161424] text-white shadow-xs'
                      : 'text-[#161424] hover:bg-black/[0.04]'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-[#FEF08A]' : 'bg-emerald-500'}`} />
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-2 border-t-2 border-dashed border-[#161424]/15 flex items-center justify-between gap-2">
              <a
                href="https://github.com/codewithevilxd"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button variant="outline" size="sm" className="w-full justify-center gap-1.5 font-mono text-xs">
                  <GitHubIcon className="w-4 h-4" />
                  GitHub
                </Button>
              </a>
              <Link href="/downloads" className="flex-1" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="primary" size="sm" className="w-full justify-center gap-1.5 font-mono text-xs">
                  <AndroidIcon className="w-4 h-4" />
                  Download APK
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
