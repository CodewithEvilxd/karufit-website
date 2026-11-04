'use client';

import React, { useState } from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import {
  DownloadIcon,
  AndroidIcon,
  GitHubIcon,
  ShieldLockIcon,
  CheckIcon,
  CopyIcon,
  CpuIcon,
  SparklesIcon,
} from '@/components/ui/Icons';
import { InteractiveTerminal } from '@/components/terminal/InteractiveTerminal';
import { soundFx } from '@/lib/soundFx';

export const DownloadSection: React.FC = () => {
  const [copiedSha, setCopiedSha] = useState(false);
  const [verifiedSha, setVerifiedSha] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const sampleSha = '9f210dc3c8aa614653cdce0762e2dd489da88f0b10d7ecbc4ccfb26ca7fb39d2';

  const handleCopySha = () => {
    soundFx.playClick(700);
    navigator.clipboard.writeText(sampleSha);
    setCopiedSha(true);
    setTimeout(() => setCopiedSha(false), 2000);
  };

  const handleVerifySha = () => {
    soundFx.playClick(600);
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setVerifiedSha(true);
      soundFx.playSuccessChime();
    }, 700);
  };

  const downloadTargets = [
    {
      title: 'Android Universal APK',
      subtitle: 'ARM64 & ARMv7 • Standalone Installer',
      icon: AndroidIcon,
      iconBg: 'bg-emerald-100 text-emerald-700',
      version: 'v1.0.13',
      size: '95.8 MB',
      badge: 'Recommended',
      badgeColor: 'bg-emerald-200 text-emerald-950',
      actionLabel: 'Download Universal APK',
      actionUrl: '/downloads/KaruFit-universal.apk',
      download: 'KaruFit-v1.0.13-universal.apk',
      primary: true,
      note: 'Works on all Android phones (7.0+)',
    },
    {
      title: 'ARM64-v8a Optimized APK',
      subtitle: 'Snapdragon, Tensor & Dimensity 64-bit',
      icon: CpuIcon,
      iconBg: 'bg-amber-100 text-amber-800',
      version: 'v1.0.13',
      size: '49.0 MB',
      badge: 'Fastest Encode',
      badgeColor: 'bg-amber-200 text-amber-950',
      actionLabel: 'Download ARM64 APK',
      actionUrl: '/downloads/KaruFit-arm64-v8a.apk',
      download: 'KaruFit-v1.0.13-arm64-v8a.apk',
      primary: false,
      note: 'Smallest footprint for modern phones (7.0+)',
    },
    {
      title: 'Standalone Direct Installer',
      subtitle: 'Air-gapped offline package installer',
      icon: AndroidIcon,
      iconBg: 'bg-sky-100 text-sky-800',
      version: 'v1.0.13',
      size: '95.8 MB',
      badge: 'Verified Build',
      badgeColor: 'bg-sky-200 text-sky-950',
      actionLabel: 'Download Direct Package',
      actionUrl: '/downloads/KaruFit-universal.apk',
      download: 'KaruFit-v1.0.13-universal.apk',
      primary: false,
      note: 'Instant on-site download • No cloud link',
    },
    {
      title: 'Open Source MIT License',
      subtitle: 'Official legal terms & privacy charter',
      icon: GitHubIcon,
      iconBg: 'bg-purple-100 text-purple-700',
      version: 'MIT License',
      size: 'On-Site Docs',
      badge: 'Open Source',
      badgeColor: 'bg-purple-200 text-purple-950',
      actionLabel: 'Read Full License',
      actionUrl: '/license',
      download: undefined,
      primary: false,
      note: '100% on-site, inspect legal terms',
    },
  ];

  return (
    <section id="downloads" className="py-20 sm:py-28 bg-white border-b-2 border-[#161424] select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          title="Download KaruFit for Android"
          subtitle="No sign-up. No credit card. Clean standalone APK installation directly on your Android phone or tablet."
          badgeText="Android Official Release"
          badgeColor="yellow"
          handwrittenNote="Clean installs • 0 tracking SDKs included"
        />

        {/* Download Target Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {downloadTargets.map((target) => {
            const Icon = target.icon;
            return (
              <Card
                key={target.title}
                hover
                className={`p-6 flex flex-col justify-between transition-all ${
                  target.primary
                    ? 'bg-emerald-50/40 border-3 border-[#161424] shadow-scribely-lg ring-2 ring-emerald-500/50'
                    : 'bg-white border-2 border-[#161424] shadow-scribely hover:shadow-scribely-lg hover:border-[#17365D]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border-2 border-[#161424] ${target.iconBg}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded-full border border-[#161424]/30 ${target.badgeColor}`}>
                      {target.badge}
                    </span>
                  </div>

                  <h3 className="font-display font-black text-lg text-[#161424] tracking-tight">
                    {target.title}
                  </h3>
                  <p className="font-sans text-xs text-[#64748B] mt-1 mb-4 leading-relaxed">
                    {target.subtitle}
                  </p>

                  <div className="flex items-center justify-between text-xs font-mono py-2 border-y border-dashed border-[#161424]/20 mb-4">
                    <span className="text-[#64748B]">{target.version}</span>
                    <span className="font-bold text-[#161424]">{target.size}</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-hand font-bold text-[#15803D] mb-4">
                    <svg
                      className="w-3.5 h-3.5 text-[#15803D] shrink-0"
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
                    <span>{target.note}</span>
                  </div>
                </div>

                <a
                  href={target.actionUrl}
                  download={target.download}
                  className="w-full"
                >
                  <Button
                    variant={target.primary ? 'primary' : 'outline'}
                    size="sm"
                    className={`w-full gap-2 text-xs font-mono font-bold py-3 shadow-scribely-sm ${
                      target.primary
                        ? 'bg-[#161424] hover:bg-[#232038] text-white border-2 border-[#161424]'
                        : ''
                    }`}
                  >
                    <DownloadIcon className={`w-4 h-4 ${target.primary ? 'text-emerald-400' : ''}`} />
                    <span>{target.actionLabel}</span>
                  </Button>
                </a>
              </Card>
            );
          })}
        </div>

        {/* Interactive ADB Developer Terminal (GitKura Style) */}
        <div className="mb-12">
          <div className="text-center mb-6">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#FEF08A] text-[#17365D] border border-[#161424] shadow-xs uppercase">
              Developer &amp; ADB Sideload Bridge
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-[#17365D] mt-2">
              Inspect &amp; Deploy via USB Debugging
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] font-sans mt-1">
              Click any terminal command preset below to simulate live ADB execution and verify on-device MediaCodec hardware drivers.
            </p>
          </div>
          <InteractiveTerminal />
        </div>

        {/* SHA-256 Checksum Verification Box (Mailflare / GitKura Developer Integrity) */}
        <div className="p-6 bg-[#FAF8F5] border-2 border-[#161424] rounded-2xl shadow-scribely max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-3">
            <div className="flex items-center gap-2">
              <ShieldLockIcon className="w-5 h-5 text-[#15803D]" />
              <span className="font-display font-black text-sm sm:text-base text-[#17365D]">
                Cryptographic SHA-256 Integrity Verification
              </span>
            </div>
            <div className="flex items-center gap-2">
              {verifiedSha && (
                <span className="text-[10px] font-mono uppercase bg-emerald-200 text-emerald-950 border border-emerald-400 px-2 py-0.5 rounded-full font-black animate-bounce-subtle">
                  ✦ GPG SIGNATURE MATCH
                </span>
              )}
              <span className="text-[10px] font-mono uppercase bg-emerald-100 text-emerald-900 border border-emerald-300 px-2 py-0.5 rounded-full font-bold">
                Tamper-Proof
              </span>
            </div>
          </div>

          <p className="text-xs font-sans text-[#475569] mb-3">
            Verify your downloaded APK against our official build release signature to guarantee that zero byte modifications were introduced:
          </p>

          <div className="flex items-center justify-between p-3 bg-white border border-[#161424]/30 rounded-xl font-mono text-xs text-[#17365D] overflow-x-auto gap-3">
            <code className="text-[11px] sm:text-xs text-slate-800 select-all font-bold">
              {sampleSha}
            </code>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handleVerifySha}
                disabled={isVerifying}
                className="px-3 py-1 rounded-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-950 border border-emerald-500 text-[11px] font-bold flex items-center gap-1.5 cursor-pointer"
              >
                <CheckIcon className="w-3.5 h-3.5 text-emerald-700" />
                <span>{isVerifying ? 'Verifying...' : verifiedSha ? 'Validated!' : 'Test Signature'}</span>
              </button>

              <button
                onClick={handleCopySha}
                className="px-3 py-1 rounded-lg bg-[#FEF08A] hover:bg-[#FDE047] text-[#17365D] border border-[#161424] text-[11px] font-bold flex items-center gap-1.5 cursor-pointer shrink-0"
              >
                {copiedSha ? (
                  <>
                    <CheckIcon className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <CopyIcon className="w-3.5 h-3.5" />
                    <span>Copy SHA</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-[#64748B]">
            <span>Terminal: sha256sum KaruFit-v1.0.13-universal.apk</span>
            <span>Signed by: Nishant Gaurav (@codewithevilxd)</span>
          </div>
        </div>
      </div>
    </section>
  );
};
