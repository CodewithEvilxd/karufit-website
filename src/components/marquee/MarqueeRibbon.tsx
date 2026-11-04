import React from 'react';

export const MarqueeRibbon: React.FC = () => {
  const items = [
    '100% AIR-GAPPED ON SILICON',
    'ZERO CLOUD TELEMETRY',
    'ANDROID HARDWARE MEDIACODEC VBR',
    '28+ OFFLINE PDF TOOLS',
    '18.4 MB LEAN STANDALONE APK',
    'ZERO SUBSCRIPTION FEES',
    'QUALCOMM SNAPDRAGON & MEDIATEK DIRECT',
    'DIRECT ANDROID SHARE SHEET INTENT',
    'MIT OPEN SOURCE LICENSE',
    '0 BYTES TRANSMITTED TO SERVERS',
  ];

  return (
    <div className="relative w-full overflow-hidden select-none py-6 sm:py-10 my-4 sm:my-8 pointer-events-none">
      {/* Tilted High-Craft Yellow Tape with 3D Black Border & Shadow */}
      <div className="w-[108%] -ml-[4%] -rotate-1 sm:-rotate-1.5 bg-[#FDE047] text-[#161424] border-y-2 sm:border-y-3 border-[#161424] py-3.5 sm:py-4 shadow-[0_5px_0px_#161424]">
        <div className="flex items-center whitespace-nowrap animate-marquee">
          {/* Track 1 */}
          <div className="flex items-center shrink-0">
            {items.map((text, idx) => (
              <span
                key={`a-${idx}`}
                className="inline-flex items-center gap-3 sm:gap-4 px-4 sm:px-6 text-xs sm:text-sm font-display font-black tracking-wider text-[#161424] uppercase"
              >
                <span>{text}</span>
                <span className="text-[#161424] text-xs font-black opacity-75">✦</span>
              </span>
            ))}
          </div>

          {/* Track 2 for seamless loop */}
          <div className="flex items-center shrink-0">
            {items.map((text, idx) => (
              <span
                key={`b-${idx}`}
                className="inline-flex items-center gap-3 sm:gap-4 px-4 sm:px-6 text-xs sm:text-sm font-display font-black tracking-wider text-[#161424] uppercase"
              >
                <span>{text}</span>
                <span className="text-[#161424] text-xs font-black opacity-75">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
