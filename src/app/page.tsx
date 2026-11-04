import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/navbar/Navbar';
import { Hero } from '@/components/hero/Hero';
import { MarqueeRibbon } from '@/components/marquee/MarqueeRibbon';
import { TaglineReveal } from '@/components/hero/TaglineReveal';
import { ComparisonsMatrix } from '@/components/features/ComparisonsMatrix';
import { Footer } from '@/components/footer/Footer';
import { FloatingDock } from '@/components/dock/FloatingDock';
import {
  SlidersIcon,
  StorageIcon,
  CpuIcon,
  PdfIcon,
  SparklesIcon,
  CheckIcon,
  AndroidIcon,
} from '@/components/ui/Icons';

export default function Home() {
  const studioFeatures = [
    {
      id: 'split-test',
      tag: '01 / Visual Proof',
      badgeColor: 'rose',
      title: 'Interactive 4K Split Test',
      subtitle: 'See the pixel fidelity before you save',
      description:
        'Slide our interactive divider across synchronized 4K video frames. Inspect macroblocks, fine foliage, and high-frequency edges with a 4× zoom loupe.',
      href: '/split-test',
      ctaText: 'Launch Split Studio',
      icon: SlidersIcon,
      accentBg: 'bg-rose-50/70',
      highlights: ['Synchronized 4K frame-accurate playback', 'Instant space saved counter in MB & percent', '4× zoom pixel inspection loupe'],
    },
    {
      id: 'calculator',
      tag: '02 / Space Ledger',
      badgeColor: 'emerald',
      title: 'Storage Savings Calculator',
      subtitle: 'Calculate your reclaimed phone gigabytes',
      description:
        'Select your Android flagship (Galaxy S24, Pixel 9 Pro, OnePlus 12) and shooting format to calculate how many hours of continuous 4K footage you regain.',
      href: '/calculator',
      ctaText: 'Open Storage Calculator',
      icon: StorageIcon,
      accentBg: 'bg-emerald-50/70',
      highlights: ['Flagship sensor bitrate presets (4K 60fps to 1080p)', 'Real-time SSD space reclamation odometer', 'Cloud fee savings breakdown ($38+/year)'],
    },
    {
      id: 'features',
      tag: '03 / Silicon Core',
      badgeColor: 'indigo',
      title: 'Hardware MediaCodec Pipeline',
      subtitle: 'Direct silicon transcoding, not FFmpeg',
      description:
        'Zero battery overheating with dedicated hardware silicon blocks. Instant 4K 60fps transcode at up to 120 FPS encode speed in lean 49.0 MB APK.',
      href: '/features',
      ctaText: 'Explore Architecture',
      icon: CpuIcon,
      accentBg: 'bg-indigo-50/70',
      highlights: ['Direct Qualcomm, MediaTek & Tensor C2 pipeline', 'Zero cloud telemetry & 100% air-gapped security', 'Silicon benchmark simulator vs legacy FFmpeg'],
    },
    {
      id: 'pdf-studio',
      tag: '04 / Swiss Knife',
      badgeColor: 'amber',
      title: '28+ Offline PDF Studio',
      subtitle: 'Replace bloated subscription scanner apps',
      description:
        'Complete offline document toolkit. Merge, split, compress, watermark, crop, reverse, flatten, and encrypt in milliseconds directly in phone RAM.',
      href: '/pdf-studio',
      ctaText: 'Browse 28+ PDF Tools',
      icon: PdfIcon,
      accentBg: 'bg-amber-50/70',
      highlights: ['Drag-and-drop filmstrip page organizer', 'Official Bates legal numbering & sequential pagination', 'Military-grade 256-bit AES password encryption'],
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#161424] overflow-x-hidden selection:bg-[#FEF08A] selection:text-[#17365D]">
      {/* Floating Pill Dock Navbar */}
      <Navbar />

      {/* Hero Section with Flagship Android Phone Mockup & 3D Tactile Buttons */}
      <Hero />

      {/* Hardware Ticker Marquee Ribbon */}
      <MarqueeRibbon />

      {/* Apple-style Editorial Tagline Reveal Section */}
      <TaglineReveal />

      {/* Studio Suite Hub: Clean Dedicated Page Hub Cards with Apple Pro App Craft */}
      <section className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6 select-none">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#FEF08A] text-[#161424] mb-4 border border-black/10 shadow-2xs">
            <SparklesIcon className="w-3.5 h-3.5 text-amber-700" />
            <span>Dedicated Studio Modules</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#161424] tracking-tight mb-4">
            Four Dedicated Tools. Zero Cloud Overhead.
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#64748B] leading-relaxed">
            Every studio module operates 100% offline directly in phone RAM. Click any card below to launch its dedicated interactive workspace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {studioFeatures.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.id}
                className="apple-card rounded-3xl p-7 sm:p-9 flex flex-col justify-between border-2 border-[#161424] shadow-[5px_5px_0px_#17365D,0_10px_25px_rgba(23,54,93,0.08)] hover:shadow-[6px_6px_0px_#17365D,0_14px_30px_rgba(23,54,93,0.12)] transition-all duration-200 ease-fluid bg-white"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAF8F5] rounded-full border border-black/[0.06] text-xs font-mono font-semibold text-[#161424]">
                      <Icon className="w-3.5 h-3.5 text-[#161424]" />
                      <span>{feat.tag}</span>
                    </span>
                    <span className="text-[10px] font-mono font-bold uppercase bg-emerald-50 text-emerald-800 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      OFFLINE &bull; RAM
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-[#161424] tracking-tight mb-1.5">
                    {feat.title}
                  </h3>
                  <p className="font-sans font-semibold text-xs sm:text-sm text-[#0284C7] mb-3">
                    {feat.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed font-sans mb-6">
                    {feat.description}
                  </p>

                  <div className="space-y-2 mb-8 pt-4 border-t border-black/[0.06]">
                    {feat.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm font-sans font-medium text-[#161424]">
                        <div className="w-4 h-4 rounded-full bg-emerald-50 border border-emerald-300 flex items-center justify-center text-emerald-800 shrink-0">
                          <CheckIcon className="w-2.5 h-2.5" />
                        </div>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={feat.href}
                  className="inline-flex items-center justify-between w-full px-5 py-3 rounded-2xl bg-[#161424] hover:bg-[#232038] text-white font-mono font-bold text-xs sm:text-sm border-2 border-[#161424] shadow-[3px_3px_0px_#FEF08A] hover:shadow-[4px_4px_0px_#FEF08A] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#FEF08A] transition-all duration-150 ease-fluid group"
                >
                  <span>{feat.ctaText}</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-150 ease-fluid">&rarr;</span>
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* Comparisons Matrix Section */}
      <ComparisonsMatrix />

      {/* Quick Launch & Download Banner: Solar Yellow Tactile Card */}
      <section className="pb-24 max-w-5xl mx-auto px-4 sm:px-6 select-none w-full">
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#FEF08A] via-[#FDE047] to-[#FACC15] text-[#161424] border-3 border-[#161424] shadow-[6px_6px_0px_#161424,0_16px_36px_rgba(22,20,36,0.12)] flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          {/* Subtle warm glow particle */}
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/25 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-[#161424] text-[#FEF08A] border border-[#161424] mb-3.5 shadow-2xs">
              <AndroidIcon className="w-3.5 h-3.5 text-[#22C55E]" />
              <span>Android 7.0 to 15 Ready &bull; 100% Offline</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight mb-3 text-[#161424] leading-[1.1]">
              Reclaim 85% Storage on Your Phone.
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#161424]/85 leading-relaxed font-medium">
              No cloud accounts. No subscriptions. Direct hardware transcoding with zero thermal throttle.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto relative z-10">
            {/* Download APK Button: High-contrast Obsidian Pill with Tactile 3D Shadow */}
            <Link
              href="/downloads"
              className="w-full sm:w-auto h-12 px-6 rounded-full bg-[#161424] hover:bg-[#232038] text-white font-mono font-bold text-xs sm:text-sm border-2 border-[#161424] shadow-[3.5px_3.5px_0px_#17365D] hover:shadow-[4.5px_4.5px_0px_#17365D] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#17365D] transition-all duration-150 ease-fluid flex items-center justify-center gap-2"
            >
              <AndroidIcon className="w-4 h-4 text-[#22C55E]" />
              <span>Download APK</span>
            </Link>

            {/* Read FAQ Button: Crisp White Pill with Tactile 3D Shadow */}
            <Link
              href="/faq"
              className="w-full sm:w-auto h-12 px-6 rounded-full bg-white hover:bg-slate-50 text-[#161424] font-mono font-bold text-xs sm:text-sm border-2 border-[#161424] shadow-[3.5px_3.5px_0px_#161424] hover:shadow-[4.5px_4.5px_0px_#161424] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#161424] transition-all duration-150 ease-fluid flex items-center justify-center gap-1.5"
            >
              <span>Read FAQ</span>
              <span className="text-sm font-bold">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Floating Bottom Quick Action Dock */}
      <FloatingDock />

      {/* Footer */}
      <Footer />
    </main>
  );
}
