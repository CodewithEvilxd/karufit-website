'use client';

import React, { useState } from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import {
  CpuIcon,
  CheckIcon,
  LightningIcon,
  ShieldLockIcon,
  LayersIcon,
  SlidersIcon,
  SparklesIcon,
  AndroidIcon,
} from '@/components/ui/Icons';
import { soundFx } from '@/lib/soundFx';

export const NativePipelineSection: React.FC = () => {
  const [isExploded, setIsExploded] = useState<boolean>(true);
  const [activeLayer, setActiveLayer] = useState<number | null>(null);

  // Silicon Benchmark Simulation States
  const [selectedChipsetIndex, setSelectedChipsetIndex] = useState<number>(0);
  const [isBenchmarking, setIsBenchmarking] = useState<boolean>(false);
  const [benchmarkProgress, setBenchmarkProgress] = useState<number>(100);
  const [benchmarkFinished, setBenchmarkFinished] = useState<boolean>(true);
  const [currentFps, setCurrentFps] = useState<number>(128);
  const [currentTemp, setCurrentTemp] = useState<number>(31);
  const [currentRam, setCurrentRam] = useState<number>(26);

  const chipsets = [
    {
      id: 'snapdragon-8-gen-3',
      brand: 'Qualcomm',
      name: 'Snapdragon 8 Gen 3',
      gpu: 'Adreno 750 + Hexagon NPU',
      pipeline: 'Direct MediaCodec C2.qcom',
      isNative: true,
      baseFps: 128,
      baseTemp: 31,
      baseRam: 26,
      batteryDrain: '< 0.3% (GPU VBR)',
      encodeTime: '2.8s',
    },
    {
      id: 'dimensity-9300',
      brand: 'MediaTek',
      name: 'Dimensity 9300+',
      gpu: 'Immortalis-G720 + APU 790',
      pipeline: 'Direct MediaCodec C2.mtk',
      isNative: true,
      baseFps: 122,
      baseTemp: 32,
      baseRam: 28,
      batteryDrain: '< 0.4% (All Big-Core)',
      encodeTime: '3.1s',
    },
    {
      id: 'tensor-g4',
      brand: 'Google',
      name: 'Tensor G4',
      gpu: 'Mali-G715 + Tensor TPU',
      pipeline: 'Direct MediaCodec C2.google',
      isNative: true,
      baseFps: 104,
      baseTemp: 33,
      baseRam: 30,
      batteryDrain: '< 0.5% (TPU Assist)',
      encodeTime: '3.6s',
    },
    {
      id: 'exynos-2400',
      brand: 'Samsung',
      name: 'Exynos 2400',
      gpu: 'AMD RDNA3 Xclipse 940',
      pipeline: 'Direct MediaCodec C2.samsung',
      isNative: true,
      baseFps: 114,
      baseTemp: 33,
      baseRam: 29,
      batteryDrain: '< 0.4% (RDNA3 Encode)',
      encodeTime: '3.4s',
    },
    {
      id: 'ffmpeg-software',
      brand: 'Legacy Wrappers',
      name: 'CPU Software FFmpeg',
      gpu: 'Emulated CPU Thread Loop',
      pipeline: 'Bundled /bin/ffmpeg exec',
      isNative: false,
      baseFps: 18,
      baseTemp: 46,
      baseRam: 380,
      batteryDrain: '~4.8% (CPU Throttling)',
      encodeTime: '24.2s',
    },
  ];

  const currentChip = chipsets[selectedChipsetIndex];

  const runBenchmark = () => {
    if (isBenchmarking) return;
    soundFx.playSwitch(false);
    setIsBenchmarking(true);
    setBenchmarkProgress(0);
    setBenchmarkFinished(false);

    let progress = 0;
    const interval = setInterval(() => {
      progress += currentChip.isNative ? 4 : 1.5;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setBenchmarkProgress(100);
        setIsBenchmarking(false);
        setBenchmarkFinished(true);
        soundFx.playSuccessChime();
        setCurrentFps(currentChip.baseFps);
        setCurrentTemp(currentChip.baseTemp);
        setCurrentRam(currentChip.baseRam);
      } else {
        setBenchmarkProgress(Math.floor(progress));
        // Add subtle realistic fluctuations
        const jitter = Math.floor(Math.random() * 6) - 3;
        setCurrentFps(Math.max(8, currentChip.baseFps + jitter));
        setCurrentTemp(Math.min(50, currentChip.baseTemp + Math.floor(progress / 25)));
        setCurrentRam(Math.min(450, currentChip.baseRam + Math.floor(progress / 15)));
      }
    }, 60);
  };

  const layers = [
    {
      num: 4,
      title: 'App Surface & Direct Controls',
      badge: 'LAYER 04 · UI/UX',
      badgeColor: 'yellow' as const,
      color: 'bg-[#FEF08A]',
      textColor: 'text-amber-950',
      desc: 'Native 120 FPS Android interface, instant gallery picker, and zero-webview UI. Receives direct Android Share Sheet intents from Google Photos & WhatsApp.',
      tech: 'Android Surface & Intent Arbiter',
    },
    {
      num: 3,
      title: 'VBR Rate-Distortion Core',
      badge: 'LAYER 03 · ALGORITHM',
      badgeColor: 'rose' as const,
      color: 'bg-[#FECDD3]',
      textColor: 'text-rose-950',
      desc: 'Calculates optimal variable bitrate (VBR) per frame. Preserves keyframe I-frames with high fidelity while shaving redundant B-frame weight.',
      tech: 'KaruFit VBR Rate Engine',
    },
    {
      num: 2,
      title: 'RAM-Only Air-Gapped Sandbox',
      badge: 'LAYER 02 · PRIVACY',
      badgeColor: 'sky' as const,
      color: 'bg-[#BAE6FD]',
      textColor: 'text-sky-950',
      desc: 'Transcoded chunks remain purely in volatile RAM buffers. Zero cloud connections, zero telemetry, piped directly to scoped MediaStore storage.',
      tech: 'Zero-Disk Volatile Buffer',
    },
    {
      num: 1,
      title: 'Android MediaCodec Silicon Direct',
      badge: 'LAYER 01 · HARDWARE',
      badgeColor: 'emerald' as const,
      color: 'bg-[#A7F3D0]',
      textColor: 'text-emerald-950',
      desc: 'Addresses Qualcomm Snapdragon (Adreno + Hexagon), MediaTek Dimensity, Google Tensor, and Samsung Exynos hardware encoding blocks directly.',
      tech: 'Hardware Silicon Direct (OMX/C2)',
    },
  ];

  return (
    <section id="pipeline" className="py-20 sm:py-28 bg-[#FAF8F5] border-b-2 border-[#161424] select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <SectionHeader
          badgeText="Engine Architecture"
          badgeColor="rose"
          title="Why Native Silicon, Not FFmpeg?"
          handwrittenNote="hardware accelerated vs CPU bloat"
          description="Most utility apps bundle a heavy 80MB+ FFmpeg binary that overheats your phone. KaruFit bypasses software emulation and talks directly to your device's hardware encoder."
        />

        {/* 2-Column Clean Architecture & Battle Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Column: 4 Clean Architecture Steps */}
          <div className="lg:col-span-6 flex flex-col gap-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-black text-[#17365D] uppercase tracking-wider">
                ✦ 4-STAGE HARDWARE SILICON FLOW
              </span>
              <span className="text-xs font-mono text-emerald-700 font-bold">
                Zero Cloud &bull; Zero Disk Cache
              </span>
            </div>

            {layers.map((layer) => {
              const isActive = activeLayer === layer.num;
              return (
                <div
                  key={layer.num}
                  onMouseEnter={() => {
                    setActiveLayer(layer.num);
                  }}
                  onMouseLeave={() => setActiveLayer(null)}
                  className={`p-4 rounded-2xl border-2 border-[#161424] bg-white transition-colors cursor-pointer shadow-scribely-sm ${
                    isActive ? 'bg-[#FEF08A]/30 border-[#17365D] shadow-scribely' : 'hover:bg-[#FAF8F5]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono font-black uppercase px-2.5 py-0.5 rounded-full border border-[#161424]/30 bg-[#FAF8F5]">
                      {layer.badge}
                    </span>
                    <span className="font-mono font-black text-xs text-[#17365D]">
                      STAGE 0{5 - layer.num}
                    </span>
                  </div>
                  <h4 className="font-display font-black text-base text-[#17365D]">
                    {layer.title}
                  </h4>
                  <p className="text-xs text-[#475569] font-sans mt-1 leading-relaxed">
                    {layer.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Comparative Battle Verdict */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {/* KaruFit Native Card */}
            <div className="p-6 rounded-3xl bg-emerald-50/90 border-3 border-[#161424] shadow-scribely relative overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-mono font-black uppercase border border-emerald-400">
                  <LightningIcon className="w-3.5 h-3.5 text-emerald-700" />
                  <span>KaruFit Android Engine</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-900 font-black bg-white px-2.5 py-1 rounded-full border border-emerald-400">
                  MEDIACODEC DIRECT
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-display font-black text-[#17365D]">
                Direct Android Hardware Transcoding
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] mt-1.5 leading-relaxed font-sans">
                Taps straight into dedicated silicon encoders inside Qualcomm Snapdragon, MediaTek Dimensity, Google Tensor, and Samsung Exynos chips.
              </p>

              <div className="grid grid-cols-2 gap-2.5 mt-5">
                {[
                  { label: 'Encode Speed', val: '4.2s (1080p 60fps)', color: 'text-emerald-800' },
                  { label: 'Thermal Temp', val: 'Cool Ambient (~31°C)', color: 'text-emerald-800' },
                  { label: 'App APK Size', val: '18.4 MB Lean APK', color: 'text-emerald-800' },
                  { label: 'Battery Impact', val: '< 0.4% per 100MB', color: 'text-emerald-800' },
                ].map((stat, i) => (
                  <div key={i} className="p-2.5 rounded-xl bg-white border border-emerald-300">
                    <span className="text-[10px] font-mono uppercase text-[#64748B] block">
                      {stat.label}
                    </span>
                    <span className={`text-xs sm:text-sm font-mono font-bold ${stat.color}`}>
                      {stat.val}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Standard FFmpeg Wrappers Card */}
            <div className="p-6 rounded-3xl bg-slate-100 border-2 border-[#161424] opacity-85 shadow-scribely-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-mono font-bold uppercase border border-slate-300">
                  Standard App Wrappers
                </span>
                <span className="text-[10px] font-mono text-rose-700 font-black bg-rose-50 px-2.5 py-1 rounded-full border border-rose-300">
                  CPU SOFTWARE LOOP
                </span>
              </div>

              <h3 className="text-xl font-display font-black text-[#64748B]">
                Bundled FFmpeg Software Binary
              </h3>
              <p className="text-xs text-[#64748B] mt-1.5 leading-relaxed font-sans">
                Standard utilities bundle heavy precompiled FFmpeg command binaries. Frames are rendered in high-heat CPU software thread loops that drain your battery.
              </p>

              <div className="grid grid-cols-2 gap-2.5 mt-5">
                {[
                  { label: 'Encode Speed', val: '28.6s (Laggy)', color: 'text-rose-700' },
                  { label: 'Thermal Temp', val: 'Phone Gets Hot (~44°C)', color: 'text-rose-700' },
                  { label: 'App APK Size', val: '80MB - 120MB Bloat', color: 'text-rose-700' },
                  { label: 'Battery Impact', val: '~4.6% per 100MB', color: 'text-rose-700' },
                ].map((stat, i) => (
                  <div key={i} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[10px] font-mono uppercase text-slate-500 block">
                      {stat.label}
                    </span>
                    <span className={`text-xs sm:text-sm font-mono font-bold ${stat.color}`}>
                      {stat.val}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Silicon Benchmark Simulator */}
        <div className="bg-white border-3 border-[#161424] rounded-3xl p-6 sm:p-8 shadow-scribely-lg relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b-2 border-[#161424]">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#FEF08A] text-[#17365D] border border-[#161424]">
                  LIVE HARDWARE BENCHMARK
                </span>
                <span className="text-xs font-mono text-[#64748B]">
                  4K UHD 60FPS Video (1,800 Frames)
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-black text-[#17365D]">
                Simulate Your Android Chipset
              </h3>
            </div>
            
            <button
              onClick={runBenchmark}
              disabled={isBenchmarking}
              className={`px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-mono font-black transition-all border-2 border-[#161424] shadow-scribely-sm flex items-center justify-center gap-2 cursor-pointer ${
                isBenchmarking
                  ? 'bg-amber-100 text-amber-900 animate-pulse'
                  : 'bg-[#10B981] hover:bg-[#059669] text-white transition-colors'
              }`}
            >
              <LightningIcon className="w-4 h-4 text-[#FEF08A]" />
              <span>{isBenchmarking ? 'Transcoding Silicon Buffer...' : 'Run Silicon Benchmark'}</span>
            </button>
          </div>

          {/* Chipset Selector Tabs */}
          <div className="py-6">
            <span className="text-xs font-mono font-bold text-[#64748B] block mb-3">
              SELECT TARGET HARDWARE ARCHITECTURE:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
              {chipsets.map((chip, idx) => (
                <button
                  key={chip.id}
                  onClick={() => {
                    soundFx.playClick(660);
                    setSelectedChipsetIndex(idx);
                    setBenchmarkProgress(0);
                    setBenchmarkFinished(false);
                  }}
                  className={`p-3.5 rounded-2xl border-2 text-left transition-all cursor-pointer ${
                    selectedChipsetIndex === idx
                      ? 'border-[#161424] bg-[#FEF08A] shadow-scribely-sm -translate-y-0.5'
                      : 'border-[#161424]/20 bg-[#FAF8F5] hover:border-[#161424] opacity-80'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono font-black text-[#17365D]">
                      {chip.brand}
                    </span>
                    {chip.isNative ? (
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-rose-500" />
                    )}
                  </div>
                  <p className="font-display font-black text-xs sm:text-sm text-[#17365D] leading-tight">
                    {chip.name}
                  </p>
                  <p className="text-[10px] font-mono text-[#475569] mt-0.5">
                    {chip.gpu}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Live Benchmark Telemetry HUD */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#161424] text-white border-2 border-[#161424] shadow-scribely-sm space-y-5">
            {/* Progress Bar & Frame Status */}
            <div>
              <div className="flex justify-between items-center text-xs font-mono mb-2">
                <span className="text-emerald-400 flex items-center gap-1.5 font-bold">
                  <span className={`w-2 h-2 rounded-full ${isBenchmarking ? 'bg-emerald-400 animate-ping' : 'bg-emerald-400'}`} />
                  {currentChip.name} &bull; {currentChip.pipeline}
                </span>
                <span className="text-amber-300 font-bold">
                  {benchmarkProgress}% ({Math.round((benchmarkProgress / 100) * 1800)} / 1,800 frames)
                </span>
              </div>

              <div className="w-full h-4 bg-slate-800 rounded-full overflow-hidden border border-slate-700 p-0.5">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-[#FEF08A] transition-all duration-100"
                  style={{ width: `${benchmarkProgress}%` }}
                />
              </div>
            </div>

            {/* 4 Live Gauges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-[10px] font-mono text-slate-400 uppercase block">Encoding Speed</span>
                <span className="text-lg sm:text-xl font-mono font-black text-emerald-400 mt-0.5 block">
                  {isBenchmarking ? currentFps : benchmarkFinished ? currentChip.baseFps : 0} FPS
                </span>
                <span className="text-[10px] font-mono text-slate-500">
                  {currentChip.isNative ? '✦ Realtime x2.1' : '✦ Dropping frames'}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-[10px] font-mono text-slate-400 uppercase block">Thermal Temp</span>
                <span className={`text-lg sm:text-xl font-mono font-black mt-0.5 block ${
                  currentChip.isNative ? 'text-teal-300' : 'text-rose-400'
                }`}>
                  {isBenchmarking ? currentTemp : benchmarkFinished ? currentChip.baseTemp : 28}°C
                </span>
                <span className="text-[10px] font-mono text-slate-500">
                  {currentChip.isNative ? 'Ambient cool' : 'Thermal throttling'}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-[10px] font-mono text-slate-400 uppercase block">RAM Volatile Memory</span>
                <span className="text-lg sm:text-xl font-mono font-black text-amber-300 mt-0.5 block">
                  {isBenchmarking ? currentRam : benchmarkFinished ? currentChip.baseRam : 14} MB
                </span>
                <span className="text-[10px] font-mono text-slate-500">
                  {currentChip.isNative ? 'Zero-disk memory' : 'FFmpeg heap leak'}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-[10px] font-mono text-slate-400 uppercase block">Battery Consumption</span>
                <span className="text-lg sm:text-xl font-mono font-black text-purple-300 mt-0.5 block">
                  {currentChip.batteryDrain}
                </span>
                <span className="text-[10px] font-mono text-slate-500">
                  {currentChip.isNative ? 'GPU low-power block' : 'CPU at 100% load'}
                </span>
              </div>
            </div>

            {/* Verdict Note */}
            {benchmarkFinished && (
              <div className="p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 text-xs font-mono flex items-center justify-between flex-wrap gap-2">
                <span>
                  ✦ Benchmark complete: {currentChip.name} encoded 1,800 4K frames in {currentChip.encodeTime}!
                </span>
                <span className="font-bold text-amber-300">
                  {currentChip.isNative ? '88% Faster than FFmpeg' : 'Consider Native Hardware'}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
