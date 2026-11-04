'use client';

import React, { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import { SectionHeader } from '@/components/ui/SectionHeader';
import {
  VideoIcon,
  CheckIcon,
  LightningIcon,
  CpuIcon,
  SlidersIcon,
  PlayIcon,
  SparklesIcon,
} from '@/components/ui/Icons';
import { COMPRESSION_PRESETS } from '@/data/featuresData';
import { soundFx } from '@/lib/soundFx';

export const ComparisonSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 - 100)
  const [activePresetIndex, setActivePresetIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [zoomLevel, setZoomLevel] = useState<1 | 2 | 4>(1);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activePreset = COMPRESSION_PRESETS[activePresetIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedPercentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(clampedPercentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging || e.buttons === 1) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="comparison" className="py-20 sm:py-28 max-w-6xl mx-auto px-4 sm:px-6 select-none">
      <SectionHeader
        badgeText="Visual Quality"
        badgeColor="rose"
        title="See the Quality Before You Save"
        handwrittenNote="drag slider to compare"
        description="Inspect original 4K camera footage side-by-side with our 85% lighter output. Zero perceptible loss."
      />

      {/* Preset Switcher Bar (Openside & GitKura inspired) */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 p-3 sm:p-4 bg-white border-2 border-[#161424] rounded-2xl shadow-scribely">
        <div className="flex items-center gap-2 pl-1">
          <div className="w-8 h-8 rounded-lg bg-[#FEF08A] border-2 border-[#161424] flex items-center justify-center text-[#17365D]">
            <SlidersIcon className="w-4 h-4" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[10px] font-mono uppercase text-[#475569] font-bold">
              Engineering Studio
            </span>
            <span className="text-xs font-display font-black text-[#17365D]">
              Select 4K Video Test Scene
            </span>
          </div>
        </div>

        {/* Preset Selector Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          {COMPRESSION_PRESETS.map((preset, index) => {
            const isSelected = activePresetIndex === index;
            return (
              <button
                key={preset.name || preset.resolution}
                onClick={() => {
                  soundFx.playClick(680);
                  setActivePresetIndex(index);
                }}
                className={`px-3 py-1.5 rounded-xl text-left transition-all cursor-pointer border-2 ${
                  isSelected
                    ? 'bg-[#17365D] text-white border-[#161424] shadow-scribely-sm translate-y-[-1px]'
                    : 'bg-[#FAF8F5] text-[#17365D] border-[#161424]/30 hover:border-[#161424]'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono font-bold leading-tight">
                    {preset.name || preset.resolution}
                  </span>
                  <span className={`text-[10px] font-mono font-black ${isSelected ? 'text-[#FEF08A]' : 'text-emerald-700'}`}>
                    -{preset.savedPercent}%
                  </span>
                </div>
                <span className="text-[9px] font-mono opacity-80 block truncate max-w-[140px]">
                  {preset.scene || preset.resolution}
                </span>
              </button>
            );
          })}
        </div>

        {/* Zoom Level Inspector Pill */}
        <div className="flex items-center gap-1 bg-[#FAF8F5] p-1 rounded-xl border border-[#161424]/30 self-start lg:self-auto">
          <span className="text-[10px] font-mono font-bold px-2 text-[#475569]">
            Loupe:
          </span>
          {([1, 2, 4] as const).map((z) => (
            <button
              key={z}
              onClick={() => {
                soundFx.playSwitch(z === 1);
                setZoomLevel(z);
              }}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-colors cursor-pointer ${
                zoomLevel === z
                  ? 'bg-[#FEF08A] text-[#17365D] border border-[#161424] shadow-2xs'
                  : 'text-[#64748B] hover:text-[#17365D]'
              }`}
            >
              {z}x
            </button>
          ))}
        </div>
      </div>

      {/* Main Video Comparison Stage Box */}
      <div className="rounded-3xl border-2 border-[#161424] bg-white p-3 sm:p-5 shadow-scribely-lg">
        <div
          ref={containerRef}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onClick={(e) => handleMove(e.clientX)}
          className="relative w-full h-[360px] sm:h-[480px] md:h-[540px] rounded-2xl overflow-hidden cursor-ew-resize select-none border-2 border-[#161424] bg-black"
        >
          {/* Preset Images Mapping */}
          {/* Layer 1: Compressed Video Output (Right side / Full background) */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <div
              className="relative w-full h-full transition-transform duration-200"
              style={{ transform: `scale(${zoomLevel})` }}
            >
              <Image
                src={
                  activePresetIndex === 0
                    ? '/assets/photos/beach_compressed.jpg'
                    : activePresetIndex === 1
                    ? '/assets/photos/mountains_compressed.jpg'
                    : activePresetIndex === 2
                    ? '/assets/photos/concert_compressed.jpg'
                    : '/assets/photos/dog_compressed.jpg'
                }
                alt="Compressed Video Frame Output"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Right Side Clean HUD Tag */}
            <div className="absolute top-3 right-3 z-20 pointer-events-none">
              <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 text-white font-mono text-xs flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                KaruFit &bull; {activePreset.compressedSizeMb} MB (-{activePreset.savedPercent}%)
              </span>
            </div>
          </div>

          {/* Layer 2: Original 4K Video (Left side / Clipped by slider position) */}
          <div
            className="absolute inset-0 w-full h-full overflow-hidden z-10"
            style={{
              clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
            }}
          >
            <div
              className="relative w-full h-full transition-transform duration-200"
              style={{ transform: `scale(${zoomLevel})` }}
            >
              <Image
                src={
                  activePresetIndex === 0
                    ? '/assets/photos/beach_raw.jpg'
                    : activePresetIndex === 1
                    ? '/assets/photos/mountains_raw.jpg'
                    : activePresetIndex === 2
                    ? '/assets/photos/concert_raw.jpg'
                    : '/assets/photos/dog_raw.jpg'
                }
                alt="Original 4K Video Frame"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Left Side Clean HUD Tag */}
            <div className="absolute top-3 left-3 z-20 pointer-events-none">
              <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 text-white font-mono text-xs flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Original 4K &bull; {activePreset.originalSizeMb} MB
              </span>
            </div>
          </div>

          {/* Draggable Vertical Split Divider Line */}
          <div
            className="absolute top-0 bottom-0 z-30 pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* High-visibility divider line */}
            <div className="w-[3px] h-full bg-[#161424] shadow-[0_0_8px_rgba(255,255,255,0.8)] -translate-x-1/2" />

            {/* Circular Tactile Grab Handle */}
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full border-3 border-[#161424] bg-[#FEF08A] text-[#161424] flex items-center justify-center shadow-scribely cursor-grab active:cursor-grabbing hover:scale-110 transition-transform">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M 8 7 L 3 12 L 8 17 M 16 7 L 21 12 L 16 17" />
              </svg>
            </div>
          </div>

          {/* Bottom Video Controls Overlay */}
          <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between gap-3 px-3 py-2 rounded-xl bg-black/75 backdrop-blur-md border border-white/20">
            <div className="flex items-center gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsPlaying(!isPlaying);
                }}
                className="w-7 h-7 rounded-lg border border-white/30 bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer"
                aria-label="Toggle Playback"
              >
                {isPlaying ? (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="6" y="4" width="4" height="16" rx="1" />
                    <rect x="14" y="4" width="4" height="16" rx="1" />
                  </svg>
                ) : (
                  <PlayIcon className="w-3.5 h-3.5 text-white" />
                )}
              </button>
              <span className="text-[11px] text-white/80 font-mono">00:14 / 00:48</span>

              {/* Audio Spectrum Visualizer */}
              <div className="hidden sm:flex items-center gap-0.5 h-4 px-2 py-0.5 rounded-md bg-white/10 border border-white/15">
                {[45, 75, 100, 60, 85, 30, 95, 50, 80, 65, 90, 40].map((h, i) => (
                  <div
                    key={i}
                    className={`w-0.5 rounded-full bg-emerald-400 transition-all duration-150 ${
                      isPlaying ? 'opacity-90' : 'opacity-30'
                    }`}
                    style={{
                      height: isPlaying ? `${h}%` : '25%',
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Visual Scrubber Track */}
            <div className="flex-1 max-w-xs sm:max-w-md h-2 rounded-full bg-white/20 overflow-hidden relative">
              <div className="w-[32%] h-full bg-[#FEF08A] rounded-full" />
            </div>

            <div className="flex items-center gap-2 text-[11px] text-white/70">
              <span className="hidden sm:inline">Pixel Inspection:</span>
              <span className="font-bold text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                0 Artifacts
              </span>
            </div>
          </div>
        </div>

        {/* Clean Unified Broadcast Telemetry Grid */}
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border-2 border-[#161424] text-center shadow-2xs">
            <span className="text-[10px] font-mono uppercase text-[#64748B] block font-bold">
              Original 4K Raw
            </span>
            <span className="font-display font-black text-xl text-[#17365D] mt-0.5 block">
              {activePreset.originalSizeMb} MB
            </span>
            <span className="text-[10px] font-mono text-[#64748B]">Uncompressed stream</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-emerald-50 border-2 border-[#161424] text-center shadow-2xs">
            <span className="text-[10px] font-mono uppercase text-emerald-800 block font-bold">
              KaruFit Silicon
            </span>
            <span className="font-display font-black text-xl text-emerald-900 mt-0.5 block">
              {activePreset.compressedSizeMb} MB
            </span>
            <span className="text-[10px] font-mono text-emerald-700 font-bold">
              -{activePreset.savedPercent}% Space Saved
            </span>
          </div>

          <div className="p-3.5 rounded-2xl bg-amber-50 border-2 border-[#161424] text-center shadow-2xs">
            <span className="text-[10px] font-mono uppercase text-amber-800 block font-bold">
              Visual Quality
            </span>
            <span className="font-display font-black text-xl text-amber-900 mt-0.5 block">
              {activePreset.vmaf}
            </span>
            <span className="text-[10px] font-mono text-amber-700">Broadcast VMAF Score</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-sky-50 border-2 border-[#161424] text-center shadow-2xs">
            <span className="text-[10px] font-mono uppercase text-sky-800 block font-bold">
              Encode Latency
            </span>
            <span className="font-display font-black text-xl text-sky-900 mt-0.5 block">
              {activePreset.timeSec}
            </span>
            <span className="text-[10px] font-mono text-sky-700">Hardware MediaCodec</span>
          </div>
        </div>
      </div>
    </section>
  );
};
