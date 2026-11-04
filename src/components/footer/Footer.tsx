'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { soundFx } from '@/lib/soundFx';
import { CheckIcon } from '@/components/ui/Icons';

/* =========================================================================
   CUSTOM DIE-CUT VINYL ILLUSTRATED STICKERS (Frame-by-frame match to video)
   Each with thick white vinyl borders, glossy highlights & tactile depth
   ========================================================================= */

// 1. Purple Star Smiley Sticker (Matching top-left star in reference video)
export const StarSmileySticker: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 100 100" className={`${className} filter drop-shadow-[0_12px_24px_rgba(15,23,42,0.22)]`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g>
      {/* White Die-cut Vinyl Border */}
      <path
        d="M 50,6 C 53,30 70,47 94,50 C 70,53 53,70 50,94 C 47,70 30,53 6,50 C 30,47 47,30 50,6 Z"
        fill="#FFFFFF"
        stroke="#FFFFFF"
        strokeWidth="10"
        strokeLinejoin="round"
      />
      {/* Star Body */}
      <path
        d="M 50,6 C 53,30 70,47 94,50 C 70,53 53,70 50,94 C 47,70 30,53 6,50 C 30,47 47,30 50,6 Z"
        fill="#7C3AED"
      />
      {/* Inner Lilac Shading */}
      <path
        d="M 50,14 C 52,32 64,44 82,48 C 66,51 52,64 48,82 C 46,64 34,51 18,48 C 34,44 46,32 50,14 Z"
        fill="#8B5CF6"
      />
      {/* Eyes */}
      <circle cx="43" cy="46" r="3.5" fill="#161424" />
      <circle cx="57" cy="46" r="3.5" fill="#161424" />
      {/* Smile */}
      <path
        d="M 45,55 Q 50,61 55,55"
        stroke="#161424"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Blush Cheeks */}
      <circle cx="37" cy="51" r="2.5" fill="#F472B6" />
      <circle cx="63" cy="51" r="2.5" fill="#F472B6" />
      {/* Eye Shine */}
      <circle cx="42" cy="44.5" r="1.2" fill="#FFFFFF" />
      <circle cx="56" cy="44.5" r="1.2" fill="#FFFFFF" />
    </g>
  </svg>
);

// 2. Dual Blueberries with Gloss & Leaf (Matching the berries in video)
export const BlueberrySticker: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 100 100" className={`${className} filter drop-shadow-[0_12px_24px_rgba(15,23,42,0.22)]`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g>
      {/* White Die-cut Outline */}
      <path
        d="M 50,22 C 45,10 65,8 72,18 C 65,28 55,24 50,22 Z"
        fill="#FFFFFF"
        stroke="#FFFFFF"
        strokeWidth="10"
        strokeLinejoin="round"
      />
      <circle cx="40" cy="58" r="26" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="8" />
      <circle cx="68" cy="62" r="22" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="8" />

      {/* Leaf */}
      <path d="M 50,22 C 45,10 65,8 72,18 C 65,28 55,24 50,22 Z" fill="#22C55E" />
      <path d="M 52,21 Q 62,16 68,18" stroke="#15803D" strokeWidth="1.5" strokeLinecap="round" />

      {/* Berry 1 (Left) */}
      <circle cx="40" cy="58" r="25" fill="#2563EB" />
      <circle cx="40" cy="58" r="21" fill="#3B82F6" />
      <circle cx="34" cy="52" r="4" fill="#1D4ED8" />
      <path d="M 32,50 L 36,54 M 36,50 L 32,54" stroke="#1E40AF" strokeWidth="1.5" />
      <path d="M 28,42 Q 38,36 48,42" stroke="#93C5FD" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="52" cy="47" r="2" fill="#FFFFFF" opacity="0.85" />

      {/* Berry 2 (Right) */}
      <circle cx="68" cy="62" r="21" fill="#4F46E5" />
      <circle cx="68" cy="62" r="17" fill="#6366F1" />
      <path d="M 60,49 Q 68,44 76,50" stroke="#C7D2FE" strokeWidth="3" strokeLinecap="round" />
      <circle cx="78" cy="54" r="1.5" fill="#FFFFFF" opacity="0.85" />
    </g>
  </svg>
);

// 3. Hot Fire Flame Sticker (Matching the flame in video)
export const FlameSticker: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 100 100" className={`${className} filter drop-shadow-[0_12px_24px_rgba(15,23,42,0.22)]`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g>
      {/* White Die-cut Border */}
      <path
        d="M 50,10 C 58,26 72,36 78,52 C 86,70 74,90 50,90 C 26,90 14,70 22,52 C 26,42 34,36 38,26 C 39,36 44,42 46,42 C 47,34 46,22 50,10 Z"
        fill="#FFFFFF"
        stroke="#FFFFFF"
        strokeWidth="10"
        strokeLinejoin="round"
      />
      {/* Outer Flame (Orange Red) */}
      <path
        d="M 50,10 C 58,26 72,36 78,52 C 86,70 74,90 50,90 C 26,90 14,70 22,52 C 26,42 34,36 38,26 C 39,36 44,42 46,42 C 47,34 46,22 50,10 Z"
        fill="#EA580C"
      />
      {/* Mid Flame */}
      <path
        d="M 50,30 C 56,42 66,50 70,62 C 75,76 66,84 50,84 C 34,84 25,76 30,62 C 33,54 40,48 42,40 C 44,46 47,50 48,50 C 49,44 48,36 50,30 Z"
        fill="#F97316"
      />
      {/* Core Flame (Yellow) */}
      <path
        d="M 50,52 C 54,60 60,66 62,72 C 64,80 58,82 50,82 C 42,82 36,80 38,72 C 40,66 44,62 46,58 C 47,61 48,64 49,64 C 50,60 49,56 50,52 Z"
        fill="#FDE047"
      />
      <circle cx="50" cy="74" r="3" fill="#FFFFFF" opacity="0.9" />
    </g>
  </svg>
);

// 4. Lime Green Motel Key Tag Sticker (Matching key tag in video)
export const KeyTagSticker: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 90 130" className={`${className} filter drop-shadow-[0_12px_24px_rgba(15,23,42,0.22)]`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g>
      {/* White Die-cut Border */}
      <polygon
        points="45,8 82,45 82,85 45,122 8,85 8,45"
        fill="#FFFFFF"
        stroke="#FFFFFF"
        strokeWidth="10"
        strokeLinejoin="round"
      />
      {/* Motel Key Body */}
      <polygon points="45,8 82,45 82,85 45,122 8,85 8,45" fill="#84CC16" />
      {/* Inner Accent Ring */}
      <polygon
        points="45,16 75,47 75,83 45,114 15,83 15,47"
        stroke="#65A30D"
        strokeWidth="2"
        fill="none"
      />
      {/* Keyhole */}
      <circle cx="45" cy="28" r="6" fill="#FFFFFF" stroke="#4D7C0F" strokeWidth="2" />
      <circle cx="45" cy="28" r="3" fill="#161424" />

      {/* Retro Key Icon */}
      <g transform="translate(45, 66)" stroke="#161424" strokeWidth="2.5" strokeLinecap="round" fill="none">
        <circle cx="0" cy="-14" r="7" />
        <line x1="0" y1="-7" x2="0" y2="16" />
        <line x1="0" y1="6" x2="6" y2="6" />
        <line x1="0" y1="12" x2="5" y2="12" />
      </g>
      {/* KaruFit Label */}
      <text
        x="45"
        y="100"
        textAnchor="middle"
        fill="#161424"
        fontSize="7.5"
        fontFamily="monospace"
        fontWeight="900"
        letterSpacing="1"
      >
        KARUFIT
      </text>
    </g>
  </svg>
);

// 5. Cute Purple Cat with Sunglasses Sticker (Matching the top-right cat in video)
export const CatSticker: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 100 100" className={`${className} filter drop-shadow-[0_12px_24px_rgba(15,23,42,0.22)]`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g>
      {/* White Die-cut Border */}
      <path
        d="M 24,32 L 20,12 L 40,24 C 43,23 47,22 50,22 C 53,22 57,23 60,24 L 80,12 L 76,32 C 84,40 88,52 88,62 C 88,80 71,92 50,92 C 29,92 12,80 12,62 C 12,52 16,40 24,32 Z"
        fill="#FFFFFF"
        stroke="#FFFFFF"
        strokeWidth="10"
        strokeLinejoin="round"
      />
      {/* Cat Head Body */}
      <path
        d="M 24,32 L 20,12 L 40,24 C 43,23 47,22 50,22 C 53,22 57,23 60,24 L 80,12 L 76,32 C 84,40 88,52 88,62 C 88,80 71,92 50,92 C 29,92 12,80 12,62 C 12,52 16,40 24,32 Z"
        fill="#7C3AED"
      />
      {/* Inner Pink Ears */}
      <polygon points="26,30 24,19 36,26" fill="#F472B6" />
      <polygon points="74,30 76,19 64,26" fill="#F472B6" />

      {/* Cool Black Sunglasses */}
      <g fill="#161424">
        <path d="M 26,45 C 26,42 42,42 46,45 C 46,55 42,62 34,62 C 28,62 26,55 26,45 Z" />
        <path d="M 54,45 C 54,42 70,42 74,45 C 74,55 72,62 66,62 C 58,62 54,55 54,45 Z" />
        <rect x="44" y="46" width="12" height="3" rx="1.5" />
      </g>
      {/* Lens Glint */}
      <line x1="30" y1="47" x2="38" y2="58" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
      <line x1="58" y1="47" x2="66" y2="58" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />

      {/* Nose & Mouth */}
      <polygon points="50,68 47,65 53,65" fill="#F472B6" />
      <path d="M 46,71 Q 50,74 50,71 Q 50,74 54,71" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Whiskers */}
      <line x1="22" y1="64" x2="12" y2="62" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="22" y1="70" x2="12" y2="72" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="78" y1="64" x2="88" y2="62" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="78" y1="70" x2="88" y2="72" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
    </g>
  </svg>
);

// 6. KaruFit 4K Clapperboard / Video Cam Sticker (KaruFit Video Engine)
export const VideoClapperSticker: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 100 100" className={`${className} filter drop-shadow-[0_12px_24px_rgba(15,23,42,0.22)]`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g>
      {/* White Die-cut Border */}
      <rect
        x="12"
        y="28"
        width="76"
        height="56"
        rx="14"
        fill="#FFFFFF"
        stroke="#FFFFFF"
        strokeWidth="10"
        strokeLinejoin="round"
      />
      {/* Body: Deep Violet */}
      <rect x="12" y="28" width="76" height="56" rx="14" fill="#6366F1" />
      {/* Clapper Top Bars */}
      <rect x="12" y="28" width="76" height="18" rx="8" fill="#161424" />
      <polygon points="22,28 30,28 20,46 12,46" fill="#FBBF24" />
      <polygon points="38,28 46,28 36,46 28,46" fill="#FBBF24" />
      <polygon points="54,28 62,28 52,46 44,46" fill="#FBBF24" />
      <polygon points="70,28 78,28 68,46 60,46" fill="#FBBF24" />

      {/* Lens / Play Button Center */}
      <circle cx="50" cy="62" r="14" fill="#161424" />
      <circle cx="50" cy="62" r="11" fill="#4338CA" />
      <polygon points="46,55 58,62 46,69" fill="#FDE047" />

      {/* 4K Badge */}
      <rect x="18" y="52" width="18" height="10" rx="3" fill="#EC4899" />
      <text x="27" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="6.5" fontWeight="900" fontFamily="sans-serif">
        4K
      </text>

      {/* GPU Tag */}
      <rect x="66" y="52" width="16" height="10" rx="3" fill="#10B981" />
      <text x="74" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="6.5" fontWeight="900" fontFamily="sans-serif">
        GPU
      </text>
    </g>
  </svg>
);

// 7. Folded PDF Studio Document Sticker (28+ Tools)
export const PdfStudioSticker: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 90 110" className={`${className} filter drop-shadow-[0_12px_24px_rgba(15,23,42,0.22)]`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g>
      {/* White Die-cut Border */}
      <path
        d="M 18,12 L 56,12 L 78,34 L 78,96 C 78,100 75,103 70,103 L 18,103 C 14,103 11,100 11,96 L 11,19 C 11,15 14,12 18,12 Z"
        fill="#FFFFFF"
        stroke="#FFFFFF"
        strokeWidth="10"
        strokeLinejoin="round"
      />
      {/* Document Sheet Body */}
      <path
        d="M 18,12 L 56,12 L 78,34 L 78,96 C 78,100 75,103 70,103 L 18,103 C 14,103 11,100 11,96 L 11,19 C 11,15 14,12 18,12 Z"
        fill="#FFFFFF"
      />
      {/* Folded Corner */}
      <path d="M 56,12 L 56,34 L 78,34 Z" fill="#E2E8F0" />
      <path d="M 56,34 L 78,34" stroke="#CBD5E1" strokeWidth="2" />

      {/* Red PDF Badge */}
      <rect x="20" y="44" width="48" height="24" rx="6" fill="#EF4444" />
      <text
        x="44"
        y="60"
        textAnchor="middle"
        fill="#FFFFFF"
        fontSize="13"
        fontFamily="sans-serif"
        fontWeight="900"
        letterSpacing="0.5"
      >
        PDF
      </text>

      {/* Document Lines */}
      <rect x="22" y="74" width="46" height="4" rx="2" fill="#E2E8F0" />
      <rect x="22" y="82" width="34" height="4" rx="2" fill="#E2E8F0" />

      {/* Tiny 28+ Studio Star */}
      <circle cx="68" cy="88" r="8" fill="#FBBF24" />
      <text x="68" y="91" textAnchor="middle" fill="#161424" fontSize="7" fontWeight="900" fontFamily="sans-serif">
        28+
      </text>
    </g>
  </svg>
);

// 8. Vintage Instant Polaroid Camera Sticker (Lossless Photo Comp)
export const PolaroidSticker: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 100 90" className={`${className} filter drop-shadow-[0_12px_24px_rgba(15,23,42,0.22)]`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g>
      {/* White Die-cut Border */}
      <rect
        x="12"
        y="14"
        width="76"
        height="64"
        rx="14"
        fill="#FFFFFF"
        stroke="#FFFFFF"
        strokeWidth="10"
        strokeLinejoin="round"
      />
      {/* Camera Body (Warm Pastel Rose/Coral) */}
      <rect x="12" y="14" width="76" height="64" rx="14" fill="#F43F5E" />
      <rect x="12" y="14" width="76" height="22" rx="10" fill="#E11D48" />

      {/* Rainbow Stripes */}
      <rect x="12" y="36" width="76" height="3" fill="#F59E0B" />
      <rect x="12" y="39" width="76" height="3" fill="#10B981" />
      <rect x="12" y="42" width="76" height="3" fill="#3B82F6" />

      {/* Camera Lens */}
      <circle cx="50" cy="54" r="18" fill="#161424" />
      <circle cx="50" cy="54" r="13" fill="#0284C7" />
      <circle cx="50" cy="54" r="7" fill="#0369A1" />
      <circle cx="47" cy="51" r="3" fill="#FFFFFF" opacity="0.85" />

      {/* Viewfinder & Flash */}
      <rect x="68" y="20" width="12" height="9" rx="3" fill="#FEF08A" stroke="#161424" strokeWidth="1.5" />
      <circle cx="24" cy="24" r="4" fill="#161424" />
    </g>
  </svg>
);

// 9. Craft Scissors Sticker (Split & Merge Tool)
export const ScissorsSticker: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 100 100" className={`${className} filter drop-shadow-[0_12px_24px_rgba(15,23,42,0.22)]`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g>
      {/* White Die-cut Border */}
      <circle cx="30" cy="74" r="16" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="8" />
      <circle cx="70" cy="74" r="16" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="8" />
      <polygon points="50,46 36,12 50,8 64,12" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="8" strokeLinejoin="round" />

      {/* Metallic Blades */}
      <path d="M 32,70 L 66,16 L 50,46 Z" fill="#94A3B8" />
      <path d="M 68,70 L 34,16 L 50,46 Z" fill="#CBD5E1" />

      {/* Pivot Screw */}
      <circle cx="50" cy="48" r="4" fill="#161424" />
      <circle cx="50" cy="48" r="2" fill="#FBBF24" />

      {/* Teal Mint Handles */}
      <circle cx="30" cy="74" r="15" fill="#14B8A6" />
      <circle cx="30" cy="74" r="8" fill="#FFFFFF" />

      <circle cx="70" cy="74" r="15" fill="#14B8A6" />
      <circle cx="70" cy="74" r="8" fill="#FFFFFF" />
    </g>
  </svg>
);

/* =========================================================================
   FOOTER NAVIGATION LINKS (With mini SVG sticker pop-in on hover)
   ========================================================================= */

interface FooterLinkItem {
  id: string;
  label: string;
  href: string;
  isExternal?: boolean;
  MiniSticker: React.FC<{ className?: string }>;
}

const TOOLS_LINKS: FooterLinkItem[] = [
  { id: 'video_comp', label: 'Video Compressor', href: '/#video-compressor', MiniSticker: VideoClapperSticker },
  { id: 'photo_comp', label: 'Photo Compressor', href: '/#photo-compressor', MiniSticker: PolaroidSticker },
  { id: 'pdf_studio', label: '28+ PDF Studio', href: '/pdf-studio', MiniSticker: PdfStudioSticker },
  { id: 'split_slider', label: 'Split & Merge', href: '/split-test', MiniSticker: ScissorsSticker },
  { id: 'storage_calc', label: 'Storage Calculator', href: '/calculator', MiniSticker: KeyTagSticker },
];

const PROJECT_LINKS: FooterLinkItem[] = [
  { id: 'download_apk', label: 'Download APK', href: '/downloads', MiniSticker: FlameSticker },
  { id: 'silicon_core', label: 'MediaCodec Core', href: '/features', MiniSticker: StarSmileySticker },
  { id: 'github_src', label: 'GitHub Source', href: 'https://github.com/codewithevilxd', isExternal: true, MiniSticker: CatSticker },
  { id: 'mit_license', label: 'MIT Open License', href: '/license', MiniSticker: BlueberrySticker },
  { id: 'privacy_faq', label: 'Privacy & FAQ', href: '/faq', MiniSticker: KeyTagSticker },
];

/* =========================================================================
   VINYL STICKERS ON GIANT "KARUFIT" TYPOGRAPHY (Interactive + Calm Physics)
   ========================================================================= */

interface VinylStickerConfig {
  id: string;
  Component: React.FC<{ className?: string }>;
  positionClass: string;
  sizeClass: string;
  initialRotate: number;
}

const GIANT_TYPOGRAPHY_STICKERS: VinylStickerConfig[] = [
  {
    id: 'star-smiley',
    Component: StarSmileySticker,
    positionClass: 'left-[2%] top-[18%]',
    sizeClass: 'w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8',
    initialRotate: -9,
  },
  {
    id: 'blueberries',
    Component: BlueberrySticker,
    positionClass: 'left-[18%] top-[54%]',
    sizeClass: 'w-5.5 h-5.5 sm:w-6.5 sm:h-6.5 md:w-7.5 md:h-7.5',
    initialRotate: 7,
  },
  {
    id: 'video-clapper',
    Component: VideoClapperSticker,
    positionClass: 'left-[34%] top-[34%]',
    sizeClass: 'w-6 h-6 sm:w-7.5 sm:h-7.5 md:w-8.5 md:h-8.5',
    initialRotate: -6,
  },
  {
    id: 'flame',
    Component: FlameSticker,
    positionClass: 'left-[49%] top-[42%]',
    sizeClass: 'w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7',
    initialRotate: 8,
  },
  {
    id: 'keytag',
    Component: KeyTagSticker,
    positionClass: 'left-[64%] top-[22%]',
    sizeClass: 'w-6 h-8 sm:w-7 sm:h-10 md:w-8 md:h-11',
    initialRotate: -8,
  },
  {
    id: 'polaroid',
    Component: PolaroidSticker,
    positionClass: 'left-[77%] top-[28%]',
    sizeClass: 'w-6 h-5.5 sm:w-7.5 sm:h-7 md:w-8.5 md:h-7.5',
    initialRotate: 6,
  },
  {
    id: 'cool-cat',
    Component: CatSticker,
    positionClass: 'left-[90%] top-[24%]',
    sizeClass: 'w-6 h-6 sm:w-7.5 sm:h-7.5 md:w-8.5 md:h-8.5',
    initialRotate: 12,
  },
];

/* =========================================================================
   MAIN FOOTER COMPONENT
   ========================================================================= */

export const Footer: React.FC = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const handleLinkHover = (id: string) => {
    setHoveredLink(id);
    soundFx.playPop(560);
  };

  return (
    <footer className="relative bg-[#FAF8F5] pt-6 sm:pt-8 select-none overflow-hidden border-t-2 border-[#161424]">
      {/* 1. COMPACT TOP EDITORIAL & LINK SECTION */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 pb-4 sm:pb-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 sm:gap-10">
          {/* Left Punchy Headline */}
          <div className="flex-1 max-w-md">
            <h3 className="font-display font-black text-2xl sm:text-3xl text-[#161424] leading-tight tracking-tight mb-2">
              Shrink it down.
              <br />
              Keep it private ✌️
            </h3>
            <p className="font-sans text-xs sm:text-[13px] text-[#475569] leading-relaxed mb-3.5 font-medium">
              100% on-device hardware transcoding and 28+ offline PDF utilities.
              Zero telemetry. Handcrafted by{' '}
              <a
                href="https://github.com/codewithevilxd"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#161424] hover:underline"
              >
                Nishant Gaurav (@codewithevilxd)
              </a>
              .
            </p>

            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white border border-[#161424] shadow-[1.5px_1.5px_0px_#161424]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse border border-[#161424]" />
              <span className="font-mono text-[10px] font-bold text-[#161424]">
                100% Offline &bull; Air-Gapped &bull; MIT
              </span>
            </div>
          </div>

          {/* Right Link Columns with Animated Mini-Sticker Pop-In */}
          <div className="flex gap-12 sm:gap-20">
            {/* Column 1: TOOLS */}
            <div>
              <span className="block font-mono text-[11px] font-black uppercase tracking-wider text-[#94A3B8] mb-3.5">
                TOOLS
              </span>
              <ul className="flex flex-col gap-2.5">
                {TOOLS_LINKS.map((link) => {
                  const MiniStickerComp = link.MiniSticker;
                  return (
                    <li key={link.id}>
                      <Link
                        href={link.href}
                        onMouseEnter={() => handleLinkHover(link.id)}
                        onMouseLeave={() => setHoveredLink(null)}
                        className="group inline-flex items-center font-sans text-xs sm:text-[13px] font-semibold text-[#475569] hover:text-[#161424] transition-colors relative"
                      >
                        <span>{link.label}</span>
                        <AnimatePresence>
                          {hoveredLink === link.id && (
                            <motion.span
                              initial={{ scale: 0, opacity: 0, x: -4 }}
                              animate={{ scale: 1, opacity: 1, x: 0 }}
                              exit={{ scale: 0, opacity: 0, x: -4 }}
                              transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                              className="inline-flex items-center ml-2 w-4 h-4 sm:w-4.5 sm:h-4.5 select-none"
                            >
                              <MiniStickerComp className="w-full h-full" />
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Column 2: PROJECT */}
            <div>
              <span className="block font-mono text-[11px] font-black uppercase tracking-wider text-[#94A3B8] mb-3.5">
                PROJECT
              </span>
              <ul className="flex flex-col gap-2.5">
                {PROJECT_LINKS.map((link) => {
                  const MiniStickerComp = link.MiniSticker;
                  return (
                    <li key={link.id}>
                      {link.isExternal ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onMouseEnter={() => handleLinkHover(link.id)}
                          onMouseLeave={() => setHoveredLink(null)}
                          className="group inline-flex items-center font-sans text-xs sm:text-[13px] font-semibold text-[#475569] hover:text-[#161424] transition-colors relative"
                        >
                          <span>{link.label}</span>
                          <AnimatePresence>
                            {hoveredLink === link.id && (
                              <motion.span
                                initial={{ scale: 0, opacity: 0, x: -4 }}
                                animate={{ scale: 1, opacity: 1, x: 0 }}
                                exit={{ scale: 0, opacity: 0, x: -4 }}
                                transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                                className="inline-flex items-center ml-2 w-4 h-4 sm:w-4.5 sm:h-4.5 select-none"
                              >
                                <MiniStickerComp className="w-full h-full" />
                              </motion.span>
                            )}
                          </AnimatePresence>
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          onMouseEnter={() => handleLinkHover(link.id)}
                          onMouseLeave={() => setHoveredLink(null)}
                          className="group inline-flex items-center font-sans text-xs sm:text-[13px] font-semibold text-[#475569] hover:text-[#161424] transition-colors relative"
                        >
                          <span>{link.label}</span>
                          <AnimatePresence>
                            {hoveredLink === link.id && (
                              <motion.span
                                initial={{ scale: 0, opacity: 0, x: -4 }}
                                animate={{ scale: 1, opacity: 1, x: 0 }}
                                exit={{ scale: 0, opacity: 0, x: -4 }}
                                transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                                className="inline-flex items-center ml-2 w-4 h-4 sm:w-4.5 sm:h-4.5 select-none"
                              >
                                <MiniStickerComp className="w-full h-full" />
                              </motion.span>
                            )}
                          </AnimatePresence>
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 2. SKY-BLUE GRADIENT STAGE WITH COMPACT HEIGHT & ELONGATED/WIDE NAME */}
      <div className="relative w-full overflow-hidden flex flex-col items-center justify-end select-none pt-2 sm:pt-3 pb-1 sm:pb-2">
        {/* Atmospheric Sky Backdrop Gradient (Exact from video) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, transparent 0%, rgba(219,234,254,0.3) 25%, #93C5FD 65%, #3B82F6 100%)',
          }}
        />

        {/* Text + Small Die-Cut Letter Stickers Canvas */}
        <div className="relative inline-block mx-auto leading-none select-none px-4 sm:px-8">
          {/* Wide / Lamba Stretched White "KaruFit" Typography */}
          <h2
            className="font-display font-black text-6xl sm:text-7xl md:text-8xl lg:text-[115px] xl:text-[135px] leading-none tracking-[0.20em] sm:tracking-[0.25em] md:tracking-[0.30em] text-white select-none pointer-events-none drop-shadow-[0_10px_20px_rgba(29,78,216,0.32)]"
          >
            KaruFit
          </h2>

          {/* Small Cute Stickers Pinned Directly Onto Stretched Letters */}
          {GIANT_TYPOGRAPHY_STICKERS.map((sticker) => {
            const StickerComponent = sticker.Component;
            return (
              <motion.div
                key={sticker.id}
                initial={{ rotate: sticker.initialRotate }}
                whileHover={{
                  scale: 1.18,
                  rotate: sticker.initialRotate > 0 ? sticker.initialRotate + 4 : sticker.initialRotate - 4,
                  y: -3,
                  transition: { type: 'spring', stiffness: 420, damping: 20 },
                }}
                whileTap={{ scale: 0.94 }}
                drag
                dragConstraints={{ left: -20, right: 20, top: -15, bottom: 15 }}
                dragElastic={0.16}
                onDragStart={() => soundFx.playPop(620)}
                className={`absolute cursor-grab active:cursor-grabbing z-20 ${sticker.positionClass} ${sticker.sizeClass}`}
              >
                <StickerComponent />
              </motion.div>
            );
          })}
        </div>

        {/* 3. SUB-FOOTER STRIP */}
        <div className="relative z-30 w-full bg-[#161424] text-white py-2.5 px-6 sm:px-8 border-t-2 border-[#161424] mt-3 sm:mt-4">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5 text-[11px] font-mono">
            <div className="flex items-center gap-2 text-neutral-300">
              <span>&copy; {new Date().getFullYear()} KaruFit Studio</span>
              <span>&bull;</span>
              <span>MIT License</span>
              <span>&bull;</span>
              <span>Zero Tracking</span>
            </div>

            <div className="flex items-center gap-4 text-neutral-200">
              <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                <CheckIcon className="w-3.5 h-3.5" />
                100% On-Device
              </span>
              <span>&bull;</span>
              <a
                href="https://github.com/codewithevilxd"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300 font-bold transition-colors"
              >
                GitHub @codewithevilxd
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
