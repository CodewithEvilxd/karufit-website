'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { HelpCircleIcon, ShieldLockIcon, CheckIcon, AndroidIcon } from '@/components/ui/Icons';
import { Faq, type FaqItem } from './Faq';
import { soundFx } from '@/lib/soundFx';

const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'shrinkage',
    question: 'How does KaruFit achieve 80%+ file shrinkage without ruining quality?',
    answer: (
      <span>
        Smart variable bitrate (VBR) estimation targets only the bits needed for clean playback based on output resolution and motion complexity. Android hardware MediaCodec decodes and re-encodes modern codecs (HEVC / H.264) using motion vectors rather than destructive brute-force downsampling.
      </span>
    ),
  },
  {
    id: 'privacy',
    question: 'Are my videos, photos, or PDF documents sent to any server?',
    answer: (
      <span>
        Absolutely not. KaruFit has no backend server, no cloud upload, no telemetry trackers, and no analytics SDKs. All operations happen exclusively in your device RAM and MediaCodec silicon. You can turn on Airplane Mode and use 100% of the features without a single error.
      </span>
    ),
  },
  {
    id: 'ffmpeg',
    question: 'Why does KaruFit avoid FFmpeg on Android?',
    answer: (
      <span>
        Bundling FFmpeg bloats the APK size by 60MB to 90MB, drains battery heavily because it runs in software on the CPU, and causes high thermal throttling. Using Android&apos;s native MediaCodec OMX/Codec2 APIs makes KaruFit lean (18.4 MB), blazing fast, and clean under the MIT license.
      </span>
    ),
  },
  {
    id: 'integration',
    question: 'How does KaruFit integrate with Android Gallery and WhatsApp?',
    answer: (
      <span>
        KaruFit declares native Android Intent filters for video/* and image/*. When browsing your camera roll in Google Photos, Gallery, or WhatsApp, simply tap &ldquo;Share &rarr; KaruFit&rdquo; to compress or convert your files instantly without manual file browsing.
      </span>
    ),
  },
  {
    id: 'license',
    question: 'Is KaruFit free and open source?',
    answer: (
      <span>
        Yes! KaruFit is 100% free and open-source under the MIT license created by <strong>Nishant Gaurav (@codewithevilxd)</strong>. There are no subscriptions, no in-app purchases, and no advertisements. Everything is directly accessible on this site.
      </span>
    ),
  },
  {
    id: 'pdf-tools',
    question: 'Which PDF tools are included offline in the app?',
    answer: (
      <span>
        KaruFit includes 28+ offline PDF tools: Merge, Split, Compress, Bates Legal Numbering, 256-bit AES Password Encryption &amp; Decryption, Watermark, Page Reorder, Rotate, Invert, Image to PDF, PDF to Images, and more.
      </span>
    ),
  },
];

const ACCENT_OPTIONS = [
  { label: 'Sunset Coral', value: '#FC4C01' },
  { label: 'Deep Obsidian', value: '#161424' },
  { label: 'Silicon Blue', value: '#2563EB' },
  { label: 'Emerald Air', value: '#059669' },
];

export const FaqSection: React.FC = () => {
  const [accent, setAccent] = useState('#FC4C01');
  const [activeFaq, setActiveFaq] = useState<string | null>('shrinkage');

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#FAF8F5] border-b-2 border-[#161424] select-none">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeader
          title="Frequently Answered Questions"
          subtitle="Interactive chat simulation with KaruFit's on-device architecture, air-gapped privacy guarantees, and MediaCodec engine."
          badgeText="Tap Questions to Chat"
          badgeColor="yellow"
          handwrittenNote="Real spring physics • 0 telemetry"
        />

        {/* Apple iMessage / Modern Chat Bubble Canvas */}
        <div className="mt-8 rounded-3xl border-2 border-[#161424] bg-white shadow-[6px_6px_0px_#161424] overflow-hidden">
          {/* Chat Header Bar */}
          <div className="px-5 py-3.5 bg-[#FAF8F5] border-b-2 border-[#161424] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#161424] border border-[#161424] flex items-center justify-center text-white shadow-xs">
                <AndroidIcon className="w-4 h-4 text-[#22C55E]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display font-black text-sm text-[#161424]">
                    KaruFit Assistant
                  </span>
                  <span className="px-1.5 py-0.2 rounded-full text-[9px] font-mono font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                    ON-DEVICE
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#64748B]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>100% Air-Gapped &bull; Instant Answers</span>
                </div>
              </div>
            </div>

            {/* Bubble Accent Color Switcher */}
            <div className="flex items-center gap-1.5 bg-white border border-[#161424]/20 rounded-full px-2.5 py-1">
              <span className="text-[10px] font-mono text-[#64748B] font-bold mr-1">
                Theme:
              </span>
              {ACCENT_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => {
                    soundFx.playClick(800);
                    setAccent(opt.value);
                  }}
                  title={opt.label}
                  className={`w-4 h-4 rounded-full transition-transform cursor-pointer border ${
                    accent === opt.value
                      ? 'scale-125 ring-2 ring-[#161424] ring-offset-1 border-[#161424]'
                      : 'border-black/20 hover:scale-110 opacity-70 hover:opacity-100'
                  }`}
                  style={{ backgroundColor: opt.value }}
                />
              ))}
            </div>
          </div>

          {/* Chat History & Interactive Bubble Stream */}
          <div className="p-6 sm:p-8 bg-[#FAF8F5]/50 flex flex-col items-center">
            {/* Timestamp Divider */}
            <div className="mb-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#161424]/15 text-[11px] font-mono text-[#64748B] shadow-2xs">
              <ShieldLockIcon className="w-3.5 h-3.5 text-emerald-600" />
              <span>End-to-End Local • Zero Server Relays</span>
            </div>

            {/* Chat Bubble FAQ Engine */}
            <Faq
              items={FAQ_ITEMS}
              accent={accent}
              value={activeFaq}
              onValueChange={(val) => {
                soundFx.playClick(650);
                setActiveFaq(val);
              }}
              className="max-w-2xl w-full"
            />
          </div>

          {/* Interactive Chat Footer Status */}
          <div className="px-5 py-3 bg-white border-t border-[#161424]/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#64748B]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Tap any question bubble above to reveal the instant reply</span>
            </div>
            <div className="flex items-center gap-2 font-mono text-[11px] text-[#161424] font-bold">
              <span>Architected by @codewithevilxd</span>
            </div>
          </div>
        </div>

        {/* Help footer card */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 border-[#161424] bg-white shadow-[3px_3px_0px_#161424] text-xs font-mono font-semibold text-[#161424]">
            <HelpCircleIcon className="w-4 h-4 text-emerald-600" />
            Have questions or want to request a PDF tool?{' '}
            <a
              href="https://github.com/codewithevilxd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#17365D] underline hover:text-[#161424] font-bold"
            >
              Contact @codewithevilxd on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
