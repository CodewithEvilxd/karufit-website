'use client';

import React from 'react';
import Link from 'next/link';
import { CheckIcon, AndroidIcon, ShieldLockIcon, CpuIcon } from '@/components/ui/Icons';

export const ComparisonsMatrix: React.FC = () => {
  const comparisonRows = [
    {
      metric: 'Transcoding Architecture',
      karufit: 'Hardware Silicon C2 MediaCodec',
      ffmpeg: 'Software CPU emulation (libx264)',
      cloud: 'Remote server farm encoding',
      highlight: true,
    },
    {
      metric: 'Encode Throughput (4K 60fps)',
      karufit: '95 – 120 FPS Realtime',
      ffmpeg: '14 – 22 FPS Slow crawl',
      cloud: 'Queue wait + Network upload',
      highlight: true,
    },
    {
      metric: 'Device Thermal & Battery Impact',
      karufit: '0.4% Battery / 0°C Thermal delta',
      ffmpeg: '7.8% Battery / Overheats CPU',
      cloud: 'High 5G modem radio drain',
      highlight: false,
    },
    {
      metric: 'Data Privacy & Cloud Security',
      karufit: '100% Air-Gapped in phone RAM',
      ffmpeg: 'Local disk scratch files',
      cloud: 'Raw video stored on remote servers',
      highlight: true,
    },
    {
      metric: 'App Installer Size',
      karufit: '14.2 MB (ARM64-v8a) lean',
      ffmpeg: '85+ MB bloated static build',
      cloud: 'Web browser upload interface',
      highlight: false,
    },
    {
      metric: 'Subscription & Pricing',
      karufit: 'Free & Open Source (MIT)',
      ffmpeg: 'Ad-supported shareware wrappers',
      cloud: '$12 – $29 / month recurring',
      highlight: true,
    },
  ];

  return (
    <section className="py-20 sm:py-28 max-w-5xl mx-auto px-4 sm:px-6 select-none" aria-label="Architecture Comparison">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#FEF08A] text-[#161424] mb-3 border border-black/10">
          <span>Objective Architecture Comparison</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-[#161424] mb-4">
          Why Hardware MediaCodec Outclasses Everything Else.
        </h2>
        <p className="font-sans text-sm sm:text-base text-[#64748B] leading-relaxed">
          Legacy Android apps bundle bloated FFmpeg binaries that overheat your phone CPU. KaruFit speaks directly to Qualcomm, MediaTek, and Tensor silicon blocks.
        </p>
      </div>

      {/* Mac-Style Comparison Window with 3D Back Shadow */}
      <div className="overflow-hidden rounded-3xl border-2 border-[#161424] bg-white shadow-[6px_6px_0px_#17365D,0_16px_36px_rgba(23,54,93,0.12)]">
        {/* Window Title Bar */}
        <div className="flex items-center justify-between border-b-2 border-[#161424] bg-[#FAF8F5] px-6 py-3.5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
            <span className="ml-3 text-xs font-mono font-semibold text-[#161424]">architecture_matrix.spec</span>
          </div>
          <span className="text-[11px] font-mono text-[#64748B]">Updated for Android 15 &bull; Snapdragon 8 Elite</span>
        </div>

        {/* Table Content */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-black/[0.06] bg-[#FAF8F5]/40 text-xs font-mono text-[#64748B]">
                <th className="py-4 px-6 font-semibold">Metric / Feature</th>
                <th className="py-4 px-6 font-bold text-[#161424] bg-emerald-50/50">
                  <div className="flex items-center gap-1.5 text-emerald-950 font-bold">
                    <AndroidIcon className="w-4 h-4 text-emerald-600" />
                    <span>KaruFit (MediaCodec)</span>
                  </div>
                </th>
                <th className="py-4 px-6 font-medium">Legacy FFmpeg Apps</th>
                <th className="py-4 px-6 font-medium">Cloud Web Converters</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/[0.05]">
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-4 px-6 font-mono text-xs font-semibold text-[#161424]">
                    {row.metric}
                  </td>
                  <td className="py-4 px-6 font-sans font-bold text-emerald-900 bg-emerald-50/40">
                    <div className="flex items-center gap-1.5">
                      <CheckIcon className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{row.karufit}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 font-sans text-[#64748B]">
                    {row.ffmpeg}
                  </td>
                  <td className="py-4 px-6 font-sans text-[#64748B]">
                    {row.cloud}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table Footer */}
        <div className="p-4 sm:p-5 bg-[#FAF8F5]/50 border-t border-black/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#64748B]">
          <span className="flex items-center gap-1.5">
            <ShieldLockIcon className="w-3.5 h-3.5 text-emerald-600" />
            Tested on Samsung Galaxy S24 Ultra, Pixel 9 Pro, and OnePlus 12.
          </span>
          <Link
            href="/features"
            className="text-[#161424] hover:underline font-bold flex items-center gap-1"
          >
            <span>Read full pipeline benchmarks &rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
