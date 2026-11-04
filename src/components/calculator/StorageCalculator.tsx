'use client';

import React, { useState } from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { StorageIcon, SparklesIcon, CheckIcon, SlidersIcon } from '@/components/ui/Icons';
import { soundFx } from '@/lib/soundFx';

export const StorageCalculator: React.FC = () => {
  const [libraryGb, setLibraryGb] = useState(128);
  const [selectedDeviceIndex, setSelectedDeviceIndex] = useState(0);
  const [shootingModeIndex, setShootingModeIndex] = useState(0);

  const devicePresets = [
    { name: 'Samsung Galaxy S24 Ultra', storage: 256, chip: 'Snapdragon 8 Gen 3', camera: '200MP + 4K 120fps' },
    { name: 'Google Pixel 9 Pro XL', storage: 128, chip: 'Google Tensor G4', camera: '50MP RAW + 4K HDR' },
    { name: 'OnePlus 12', storage: 256, chip: 'Snapdragon 8 Gen 3', camera: '50MP Hasselblad 4K 60fps' },
    { name: 'Xiaomi 14 Ultra', storage: 512, chip: 'Snapdragon 8 Gen 3', camera: '1-inch Leica 4K UHD' },
  ];

  const shootingModes = [
    { label: '4K 60FPS Pro (100 Mbps)', mbPerMin: 750, color: 'text-amber-700' },
    { label: '4K 30FPS Standard (48 Mbps)', mbPerMin: 360, color: 'text-emerald-700' },
    { label: '1080p 60FPS Smooth (28 Mbps)', mbPerMin: 210, color: 'text-sky-700' },
  ];

  const currentMode = shootingModes[shootingModeIndex];

  // Approximately 83.7% space saved on average
  const savedGb = Math.round(libraryGb * 0.837);
  const remainingGb = libraryGb - savedGb;
  const extraPhotos = Math.round(savedGb * 280); // ~280 photos per GB
  const cloudDollarsSaved = Math.round((savedGb / 100) * 2.99 * 12);
  // Extra hours of video unlocked based on MB per minute
  const extraHoursUnlocked = Number(((savedGb * 1024) / currentMode.mbPerMin / 60).toFixed(1));

  const presets = [32, 64, 128, 256, 512];

  const applyDevicePreset = (idx: number) => {
    soundFx.playClick(640);
    setSelectedDeviceIndex(idx);
    setLibraryGb(devicePresets[idx].storage);
  };

  return (
    <section id="calculator" className="py-20 sm:py-28 max-w-5xl mx-auto px-4 sm:px-6 select-none">
      <SectionHeader
        badgeText="Storage Estimator"
        badgeColor="emerald"
        title="Calculate Your Storage Savings"
        handwrittenNote="real gigabytes reclaimed"
        description="Choose your Android device and shooting format to estimate how much phone storage you recover instantly."
      />

      <div className="relative rounded-3xl p-6 sm:p-10 border-3 border-[#161424] bg-white shadow-scribely-lg">
        {/* Device Model Selector Chips */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2.5">
            <span className="text-xs font-mono font-bold text-[#17365D] uppercase tracking-wider">
              ✦ Step 1: Select Your Android Flagship
            </span>
            <span className="text-[11px] font-mono text-[#64748B]">
              Snapdragon 8 Gen 3 &bull; Tensor G4
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {devicePresets.map((dev, idx) => (
              <button
                key={dev.name}
                onClick={() => applyDevicePreset(idx)}
                className={`p-3.5 rounded-2xl border-2 text-left transition-all cursor-pointer ${
                  selectedDeviceIndex === idx
                    ? 'border-[#161424] bg-[#FEF08A] shadow-scribely-sm -translate-y-0.5'
                    : 'border-[#161424]/20 bg-[#FAF8F5] hover:border-[#161424] hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-black text-[#17365D] uppercase">
                    {dev.storage} GB SSD
                  </span>
                  {selectedDeviceIndex === idx && (
                    <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                  )}
                </div>
                <p className="font-display font-black text-xs sm:text-sm text-[#17365D] leading-tight mt-1">
                  {dev.name}
                </p>
                <p className="text-[9px] font-mono text-[#64748B] mt-1">
                  {dev.camera}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Camera Shooting Mode Selector */}
        <div className="mb-8 p-3 rounded-2xl bg-[#FAF8F5] border-2 border-[#161424] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-[#17365D] uppercase">
              ✦ Step 2: Camera Bitrate Mode:
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {shootingModes.map((mode, idx) => (
              <button
                key={mode.label}
                onClick={() => {
                  soundFx.playSwitch(idx === 0);
                  setShootingModeIndex(idx);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all border-2 cursor-pointer ${
                  shootingModeIndex === idx
                    ? 'bg-[#17365D] text-white border-[#161424] shadow-xs'
                    : 'bg-white text-[#17365D] border-[#161424]/30 hover:border-[#161424]'
                }`}
              >
                {mode.label}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Slider Box with Highlighted Outcome Display */}
        <div className="space-y-6 max-w-3xl mx-auto bg-[#FAF8F5] p-6 sm:p-8 rounded-3xl border-2 border-[#161424] shadow-scribely-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#64748B] block">
                Total Camera Media In Gallery
              </span>
              <span className="font-display font-black text-lg text-[#17365D]">
                Drag to adjust phone media size:
              </span>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto px-4 py-2 rounded-2xl bg-white border-2 border-[#161424] shadow-scribely-sm">
              <StorageIcon className="w-5 h-5 text-[#0284C7]" />
              <span className="text-2xl sm:text-3xl font-mono font-black text-[#17365D]">
                {libraryGb} <span className="text-sm font-bold text-[#64748B]">GB</span>
              </span>
            </div>
          </div>

          {/* Slider input */}
          <input
            type="range"
            min="16"
            max="512"
            step="4"
            value={libraryGb}
            onChange={(e) => {
              setLibraryGb(Number(e.target.value));
            }}
            className="w-full h-3.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-[#17365D]"
          />

          <div className="flex justify-between text-[11px] font-mono text-[#64748B] font-bold">
            <span>16 GB (Casual)</span>
            <span>128 GB (Average)</span>
            <span>256 GB (Heavy Shooter)</span>
            <span>512 GB (Pro Creator)</span>
          </div>

          {/* Visual Storage Reclaim Bar */}
          <div className="pt-2 space-y-2.5">
            <div className="flex justify-between items-center text-xs font-mono font-black">
              <span className="text-emerald-800 flex items-center gap-1.5 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-400">
                <CheckIcon className="w-3.5 h-3.5 text-emerald-800" />
                RECLAIMED: {savedGb} GB (-84%)
              </span>
              <span className="text-[#17365D] bg-white px-3 py-1 rounded-full border border-[#161424]/30">
                Remaining: {remainingGb} GB
              </span>
            </div>

            <div className="w-full h-8 rounded-2xl border-2 border-[#161424] overflow-hidden flex bg-neutral-200 shadow-inner">
              <div
                className="h-full bg-emerald-500 transition-all duration-300 flex items-center justify-center text-xs text-white font-mono font-black tracking-wide"
                style={{ width: `${(savedGb / libraryGb) * 100}%` }}
              >
                {savedGb} GB FREED (84%)
              </div>
              <div
                className="h-full bg-[#17365D] transition-all duration-300 flex items-center justify-center text-[10px] text-white font-mono font-bold"
                style={{ width: `${(remainingGb / libraryGb) * 100}%` }}
              >
                {remainingGb} GB
              </div>
            </div>
          </div>
        </div>

        {/* 4 Outcome Stat Cards with Tangible Metric Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <div className="p-5 rounded-2xl border-2 border-[#161424] bg-emerald-50 text-center shadow-scribely-sm hover:shadow-scribely transition-shadow duration-150">
            <span className="text-[10px] font-mono font-bold uppercase text-emerald-900 tracking-wider block">
              Internal SSD Freed
            </span>
            <p className="text-3xl sm:text-4xl font-display font-black text-emerald-800 mt-1">
              +{savedGb} GB
            </p>
            <p className="text-xs text-emerald-950/70 font-sans mt-1">
              Instant space returned to your camera
            </p>
          </div>

          <div className="p-5 rounded-2xl border-2 border-[#161424] bg-amber-50 text-center shadow-scribely-sm hover:shadow-scribely transition-shadow duration-150">
            <span className="text-[10px] font-mono font-bold uppercase text-amber-900 tracking-wider block">
              Continuous 4K Video
            </span>
            <p className="text-3xl sm:text-4xl font-display font-black text-amber-800 mt-1">
              +{extraHoursUnlocked} hrs
            </p>
            <p className="text-xs text-amber-950/70 font-sans mt-1">
              Extra shooting without storage warning
            </p>
          </div>

          <div className="p-5 rounded-2xl border-2 border-[#161424] bg-sky-50 text-center shadow-scribely-sm hover:shadow-scribely transition-shadow duration-150">
            <span className="text-[10px] font-mono font-bold uppercase text-sky-900 tracking-wider block">
              High-Res Camera Photos
            </span>
            <p className="text-3xl sm:text-4xl font-display font-black text-sky-800 mt-1">
              +{extraPhotos.toLocaleString()}
            </p>
            <p className="text-xs text-sky-950/70 font-sans mt-1">
              Extra 50MP RAW camera snapshots
            </p>
          </div>

          <div className="p-5 rounded-2xl border-2 border-[#161424] bg-purple-50 text-center shadow-scribely-sm hover:shadow-scribely transition-shadow duration-150">
            <span className="text-[10px] font-mono font-bold uppercase text-purple-900 tracking-wider block">
              Cloud Fees Avoided
            </span>
            <p className="text-3xl sm:text-4xl font-display font-black text-purple-800 mt-1">
              ${cloudDollarsSaved}+/yr
            </p>
            <p className="text-xs text-purple-950/70 font-sans mt-1">
              Google One 2TB tiers saved permanently
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
