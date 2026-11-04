'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { soundFx } from '@/lib/soundFx';
import {
  CodeIcon,
  CopyIcon,
  CheckIcon,
  LightningIcon,
  CpuIcon,
  ShieldLockIcon,
  AndroidIcon,
} from '@/components/ui/Icons';

export const InteractiveTerminal: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [activeCmdId, setActiveCmdId] = useState<string>('install');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [historyOutput, setHistoryOutput] = useState<string[] | null>(null);

  const commands = [
    {
      id: 'install',
      label: '1. adb install',
      cmd: 'adb install -r KaruFit-v1.0.13-arm64.apk',
      desc: 'Deploy universal binary directly over USB debugging',
      output: [
        'Performing Streamed Install...',
        'Success (18.4 MB payload transferred in 1.14s)',
        'Package: com.codewithevilxd.karufit (Installed)',
        'Target ABI: arm64-v8a (Qualcomm Snapdragon / MediaTek Dimensity)',
        'Permissions: READ_MEDIA_VIDEO, READ_MEDIA_IMAGES (Zero Internet Permission)',
        'STATUS: Ready for native 120 FPS hardware transcoding.',
      ],
    },
    {
      id: 'codecs',
      label: '2. dumpsys media.codec',
      cmd: 'adb shell dumpsys media.codec | grep -E "c2.qcom|c2.mtk"',
      desc: 'Verify direct hardware silicon acceleration blocks',
      output: [
        'Discovered Android MediaCodec Hardware Accelerators:',
        '  > c2.qcom.avc.encoder   [video/avc]   HARDWARE: YES (Adreno/Hexagon)',
        '  > c2.qcom.hevc.encoder  [video/hevc]  HARDWARE: YES (4K 60FPS VBR)',
        '  > c2.mtk.video.encoder  [video/avc]   HARDWARE: YES (Immortalis APU)',
        '  > c2.android.avc.encoder [CPU SW]     STATUS: BYPASSED (KaruFit rejects CPU heat)',
        'ALL HARDWARE CHIP PATHS ACTIVE: 100% Native Silicon Pass.',
      ],
    },
    {
      id: 'airgap',
      label: '3. airgap-audit',
      cmd: 'karufit --audit-airgap --socket-trace',
      desc: 'Confirm zero network telemetry and volatile memory safety',
      output: [
        '[SECURITY AUDIT 01] Active TCP/UDP Sockets: 0 (Offline-First Verified)',
        '[SECURITY AUDIT 02] Telemetry / Tracking SDKs: 0 (Zero Firebase/Mixpanel)',
        '[SECURITY AUDIT 03] MediaStore Scoped Storage: SANDBOXED LOCAL STORAGE',
        '[SECURITY AUDIT 04] Volatile Buffer Flush: COMPLETE (Freed immediately from RAM)',
        'AIR-GAP CERTIFICATE: 100% On-Device Private.',
      ],
    },
  ];

  const current = commands.find((c) => c.id === activeCmdId) || commands[0];
  const displayedOutput = historyOutput || current.output;

  const handleSelectCommand = (cmd: (typeof commands)[0]) => {
    soundFx.playClick(640);
    setActiveCmdId(cmd.id);
    setIsTyping(true);
    setHistoryOutput(null);

    setTimeout(() => {
      setIsTyping(false);
      setHistoryOutput(cmd.output);
      soundFx.playPop(580);
    }, 450);
  };

  const handleCopyCmd = () => {
    soundFx.playSuccessChime();
    navigator.clipboard.writeText(current.cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);

    try {
      confetti({
        particleCount: 20,
        spread: 50,
        origin: { y: 0.8 },
        colors: ['#FEF08A', '#10B981', '#17365D'],
        disableForReducedMotion: true,
      });
    } catch (_) {}
  };

  return (
    <div className="w-full max-w-4xl mx-auto rounded-3xl bg-[#0F0E17] border-2 border-[#161424] shadow-scribely-lg overflow-hidden select-none font-mono">
      {/* Terminal Title Bar */}
      <div className="px-4 py-3 bg-[#1A1828] border-b-2 border-[#161424] flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* macOS/Unix style dots */}
          <div className="w-3 h-3 rounded-full bg-rose-500 border border-rose-600/50" />
          <div className="w-3 h-3 rounded-full bg-amber-400 border border-amber-500/50" />
          <div className="w-3 h-3 rounded-full bg-emerald-500 border border-emerald-600/50" />
          <span className="ml-2 text-xs font-mono font-bold text-slate-400 hidden sm:inline">
            android-arm64-v8a: adb shell — 1080x2372
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-500/30 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            DEVICE AUTHORIZED
          </span>
          <button
            onClick={handleCopyCmd}
            className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-[10px] font-bold border border-slate-700 transition-colors flex items-center gap-1 cursor-pointer"
            title="Copy command to clipboard"
          >
            {copied ? (
              <>
                <CheckIcon className="w-3 h-3 text-emerald-400" />
                <span className="text-emerald-400">COPIED</span>
              </>
            ) : (
              <>
                <CopyIcon className="w-3 h-3 text-slate-400" />
                <span>COPY</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Quick Command Selector Tabs */}
      <div className="px-4 py-2.5 bg-[#141220] border-b border-slate-800 flex flex-wrap items-center gap-2">
        <span className="text-[11px] text-slate-500 font-bold mr-1">PRESETS:</span>
        {commands.map((cmd) => (
          <button
            key={cmd.id}
            onClick={() => handleSelectCommand(cmd)}
            className={`px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
              activeCmdId === cmd.id
                ? 'bg-[#FEF08A] text-[#17365D] border-[#FEF08A] shadow-xs'
                : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700'
            }`}
          >
            {cmd.label}
          </button>
        ))}
      </div>

      {/* Terminal Screen Body */}
      <div className="p-4 sm:p-6 text-xs sm:text-sm font-mono space-y-3 leading-relaxed min-h-[220px]">
        {/* Command Line Input */}
        <div className="flex items-center gap-2 text-slate-300">
          <span className="text-emerald-400 font-bold">user@android-arm64:~$</span>
          <span className="text-[#FEF08A] font-bold">
            {current.cmd}
          </span>
          <span className="w-2 h-4 bg-emerald-400 animate-pulse inline-block" />
        </div>

        {/* Output lines */}
        {isTyping ? (
          <div className="text-slate-500 italic py-2">
            Executing Android hardware pipeline query...
          </div>
        ) : (
          <div className="space-y-1 pt-1">
            {displayedOutput.map((line, idx) => (
              <div
                key={idx}
                className={
                  line.includes('Success') || line.includes('Pass') || line.includes('100%')
                    ? 'text-emerald-400 font-bold'
                    : line.includes('HARDWARE: YES')
                    ? 'text-cyan-300 font-semibold'
                    : line.includes('BYPASSED')
                    ? 'text-rose-400 opacity-90'
                    : 'text-slate-300'
                }
              >
                {line}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Terminal Footer Info Bar */}
      <div className="px-4 py-2 bg-[#141220] border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-500">
        <span>KaruFit Shell Protocol • USB ADB Bridge</span>
        <span className="text-slate-400">Target: DQBMHMYDCUZH5HDE</span>
      </div>
    </div>
  );
};
