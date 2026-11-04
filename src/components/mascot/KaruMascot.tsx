'use client';

import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { SlidersIcon, ShieldLockIcon, SparklesIcon } from '@/components/ui/Icons';

interface KaruMascotProps {
  className?: string;
  size?: number;
}

export const KaruMascot: React.FC<KaruMascotProps> = ({
  className = '',
  size = 140,
}) => {
  const [pupilPos, setPupilPos] = useState({ x: 0, y: 0 });
  const [isBlinking, setIsBlinking] = useState(false);
  const [speechText, setSpeechText] = useState('Hey! Click me to squeeze bytes!');
  const [showSpeech, setShowSpeech] = useState(false);
  const [mood, setMood] = useState<'turbo' | 'zen' | 'detective' | 'stealth'>('turbo');
  const mascotRef = useRef<HTMLDivElement>(null);

  const speechLines = [
    'Squeezing 4K bytes, never your privacy!',
    '100% on your Android device silicon!',
    'No cloud servers were harmed in this compression!',
    '85% file shrinkage without quality loss!',
    'Airplane mode? I work 100% offline!',
    'Qualcomm Snapdragon & MediaTek Dimensity direct!',
    '28+ PDF tools with Bates numbering ready!',
    'Zero ads, zero subscriptions, zero tracking!',
  ];

  // Track cursor position to orient pupils naturally
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!mascotRef.current) return;
      const rect = mascotRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const distance = Math.hypot(deltaX, deltaY);
      const maxDistance = 6.5; // Max pupil travel in px

      if (distance > 0) {
        const factor = Math.min(distance / 240, 1) * maxDistance;
        setPupilPos({
          x: (deltaX / distance) * factor,
          y: (deltaY / distance) * factor,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Natural blinking interval
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 180);
    }, 3800);

    return () => clearInterval(blinkInterval);
  }, []);

  const playMascotChirp = (frequency = 580) => {
    try {
      if (typeof window === 'undefined') return;
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(frequency, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(frequency * 1.5, ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.16);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.16);
    } catch (_) {}
  };

  const handleMoodSelect = (newMood: 'turbo' | 'zen' | 'detective' | 'stealth', e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setMood(newMood);
    const moodQuotes = {
      turbo: 'Turbo Snapdragon 120 FPS encode mode engaged!',
      zen: 'Zero cloud servers, 100% serene on-device peace.',
      detective: 'Inspecting every I-frame and B-frame bitrate!',
      stealth: 'Air-gapped mode active: 0 bytes leave your RAM.',
    };
    setSpeechText(moodQuotes[newMood]);
    setShowSpeech(true);
    playMascotChirp(newMood === 'turbo' ? 680 : newMood === 'zen' ? 440 : newMood === 'detective' ? 720 : 540);
    setTimeout(() => setShowSpeech(false), 3600);
  };

  const handleClick = () => {
    const randomLine = speechLines[Math.floor(Math.random() * speechLines.length)];
    setSpeechText(randomLine);
    setShowSpeech(true);
    playMascotChirp(600);

    // Burst confetti particles from mascot center
    try {
      if (mascotRef.current) {
        const rect = mascotRef.current.getBoundingClientRect();
        const x = (rect.left + rect.width / 2) / window.innerWidth;
        const y = (rect.top + rect.height / 2) / window.innerHeight;
        confetti({
          particleCount: 24,
          spread: 60,
          origin: { x, y },
          colors: ['#FEF08A', '#17365D', '#FF3D6E', '#10B981', '#38BDF8'],
          disableForReducedMotion: true,
        });
      }
    } catch (_) {}

    // Cycle moods on click (Pippo mascot inspiration)
    setMood((prev) => {
      if (prev === 'turbo') return 'zen';
      if (prev === 'zen') return 'detective';
      if (prev === 'detective') return 'stealth';
      return 'turbo';
    });
    setTimeout(() => setShowSpeech(false), 3800);
  };

  return (
    <div
      ref={mascotRef}
      onClick={handleClick}
      className={`relative inline-flex flex-col items-center select-none cursor-pointer group ${className}`}
      title="Click me to interact with Karu!"
    >
      {/* Interactive Speech Bubble with Pippo-style Tail */}
      {showSpeech && (
        <div className="absolute -top-16 z-50 bg-white border-2 border-[#161424] text-[#17365D] px-4 py-2 rounded-2xl shadow-scribely font-hand font-bold text-sm whitespace-nowrap animate-bounce-subtle pointer-events-none flex items-center gap-2">
          <SparklesIcon className="w-4 h-4 text-amber-500 shrink-0" />
          <span>{speechText}</span>
          <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-0 h-0 border-x-6 border-x-transparent border-t-8 border-t-[#161424]" />
        </div>
      )}

      {/* Mascot Body SVG */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 140 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-200"
      >
        {/* Soft Drop Shadow under Mascot */}
        <ellipse cx="70" cy="132" rx="46" ry="7" fill="#17365D" opacity="0.16" />

        {/* Antennas */}
        <g className="origin-bottom">
          <path
            d="M 58 32 L 48 15"
            stroke="#161424"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle
            cx="46"
            cy="13"
            r="6"
            fill="#FEF08A"
            stroke="#161424"
            strokeWidth="3"
          />

          <path
            d="M 82 32 L 92 15"
            stroke="#161424"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle
            cx="94"
            cy="13"
            r="6"
            fill="#0284C7"
            stroke="#161424"
            strokeWidth="3"
          />
        </g>

        {/* Main Body (Friendly Squircle Robot) with double pencil stroke */}
        <rect
          x="26"
          y="30"
          width="88"
          height="94"
          rx="32"
          fill="#FFFFFF"
          stroke="#161424"
          strokeWidth="4.5"
        />

        {/* Screen Bezel (Matte Charcoal with subtle corner radius) */}
        <rect
          x="38"
          y="44"
          width="64"
          height="50"
          rx="18"
          fill="#17365D"
          stroke="#161424"
          strokeWidth="3"
        />

        {/* Left Glowing Pupil Eye */}
        {isBlinking ? (
          <line
            x1="48"
            y1="68"
            x2="62"
            y2="68"
            stroke="#FEF08A"
            strokeWidth="4"
            strokeLinecap="round"
          />
        ) : (
          <g>
            <circle cx="55" cy="68" r="9.5" fill="#FEF08A" />
            <circle
              cx={55 + pupilPos.x}
              cy={68 + pupilPos.y}
              r="4.2"
              fill="#17365D"
            />
            {/* Catchlight sparkle */}
            <circle cx="52.5" cy="65.5" r="2" fill="#FFFFFF" />
          </g>
        )}

        {/* Right Glowing Pupil Eye */}
        {isBlinking ? (
          <line
            x1="78"
            y1="68"
            x2="92"
            y2="68"
            stroke="#38BDF8"
            strokeWidth="4"
            strokeLinecap="round"
          />
        ) : (
          <g>
            <circle cx="85" cy="68" r="9.5" fill="#38BDF8" />
            <circle
              cx={85 + pupilPos.x}
              cy={68 + pupilPos.y}
              r="4.2"
              fill="#17365D"
            />
            {/* Catchlight sparkle */}
            <circle cx="82.5" cy="65.5" r="2" fill="#FFFFFF" />
          </g>
        )}

        {/* Mood Accessory: Detective Glasses */}
        {mood === 'detective' && (
          <g>
            <rect
              x="44"
              y="58"
              width="22"
              height="20"
              rx="6"
              fill="none"
              stroke="#F43F5E"
              strokeWidth="3.5"
            />
            <rect
              x="74"
              y="58"
              width="22"
              height="20"
              rx="6"
              fill="none"
              stroke="#F43F5E"
              strokeWidth="3.5"
            />
            <line x1="66" y1="68" x2="74" y2="68" stroke="#F43F5E" strokeWidth="3.5" />
          </g>
        )}

        {/* Mood Accessory: Stealth Air-Gap Visor */}
        {mood === 'stealth' && (
          <g>
            <rect
              x="40"
              y="56"
              width="60"
              height="16"
              rx="8"
              fill="#10B981"
              stroke="#161424"
              strokeWidth="2.5"
              opacity="0.9"
            />
            <line x1="44" y1="64" x2="96" y2="64" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="3 3" />
          </g>
        )}

        {/* Mood Accessory: Zen Halo */}
        {mood === 'zen' && (
          <ellipse
            cx="70"
            cy="24"
            rx="28"
            ry="7"
            fill="none"
            stroke="#FEF08A"
            strokeWidth="3"
            strokeDasharray="4 2"
          />
        )}

        {/* Rosy Cheeks */}
        <ellipse cx="44" cy="102" rx="5" ry="3" fill="#FDA4AF" />
        <ellipse cx="96" cy="102" rx="5" ry="3" fill="#FDA4AF" />

        {/* Handcrafted Cheerful Smile */}
        <path
          d="M 60 102 Q 70 110 80 102"
          stroke="#161424"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Silicon Energy Indicator Belt */}
        <rect
          x="50"
          y="114"
          width="40"
          height="6"
          rx="3"
          fill={
            mood === 'turbo'
              ? '#F59E0B'
              : mood === 'zen'
              ? '#10B981'
              : mood === 'detective'
              ? '#EC4899'
              : '#06B6D4'
          }
          stroke="#161424"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
};
