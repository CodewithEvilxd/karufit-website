import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/navbar/Navbar';
import { ComparisonSlider } from '@/components/comparison/ComparisonSlider';
import { ImageCompare } from '@/components/comparison/ImageCompare';
import { Footer } from '@/components/footer/Footer';
import { FloatingDock } from '@/components/dock/FloatingDock';

export const metadata: Metadata = {
  title: 'Interactive 4K Split Test & Quality Benchmark • KaruFit by Nishant Gaurav (@codewithevilxd)',
  description:
    'Inspect original 4K camera footage side-by-side with KaruFit 85% lighter output. Zero perceptible loss with live frame-by-frame zoom inspection. Engineered by Nishant Gaurav (@codewithevilxd).',
  keywords: [
    'video compression comparison',
    '4K video quality test',
    'SSIM video benchmark',
    'VMAF video compression score',
    'lossless video compressor test',
    'Nishant Gaurav video benchmark',
    'codewithevilxd split test',
    'KaruFit quality slider',
  ],
  alternates: {
    canonical: 'https://karufit.app/split-test',
  },
};

export default function SplitTestPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#161424] overflow-x-hidden selection:bg-[#FEF08A] selection:text-[#17365D]">
      <Navbar />

      <div className="pt-24 sm:pt-28 pb-16">
        {/* Breadcrumb Navigation */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#161424]/20 hover:border-[#161424] font-mono text-xs font-bold text-[#17365D] shadow-2xs hover:shadow-xs transition-all"
          >
            <span>&larr;</span>
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Dedicated Split Comparison Studio */}
        <ComparisonSlider />

        {/* Bencho Image Compare Component Showcase */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-16">
          <div className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-[#161424] shadow-[6px_6px_0px_#161424]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#161424]/10">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#FEF08A] text-[#161424] border border-[#161424]/15 mb-2 shadow-2xs">
                  <span>MIT Licensed &bull; bencho.dev/licence</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-black text-[#161424] tracking-tight">
                  Jelly Spring &ldquo;Image Compare&rdquo; by Bencho
                </h3>
                <p className="text-xs sm:text-sm font-sans text-[#64748B] mt-1 max-w-lg">
                  Drag slowly to inspect; flick to glide with an under-damped spring. The line bows into a jelly curve using dynamic <code className="font-mono text-[#161424] bg-neutral-100 px-1 rounded">clip-path: path()</code>!
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-10">
              {/* Bencho ImageCompare Component Live Demo */}
              <div className="flex flex-col items-center">
                <div className="p-2 bg-[#161424] rounded-3xl shadow-[5px_5px_0px_#FEF08A]">
                  <ImageCompare />
                </div>
                <span className="text-[11px] font-mono font-bold text-[#64748B] mt-3">
                  X-Ray vs Full Color Yak (Try flicking the knob!)
                </span>
              </div>

              {/* Explanatory Cards */}
              <div className="flex flex-col gap-3 max-w-md text-xs font-sans text-[#475569]">
                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#161424]/15">
                  <h4 className="font-display font-bold text-sm text-[#161424] mb-1">
                    ✦ The Line is Jelly
                  </h4>
                  <p className="leading-relaxed">
                    The knob tracks the cursor/finger directly while both line ends follow via an under-damped spring physics loop, bowing the picture dynamically along the SVG curve.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#161424]/15">
                  <h4 className="font-display font-bold text-sm text-[#161424] mb-1">
                    ✦ Zero External Dependencies
                  </h4>
                  <p className="leading-relaxed">
                    Requires only React and CSS. Self-contained design tokens (<code className="font-mono">--card</code>, <code className="font-mono">--ink</code>, <code className="font-mono">--signal</code>) mapped locally without global pollution.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#161424]/15">
                  <h4 className="font-display font-bold text-sm text-[#161424] mb-1">
                    ✦ Flick &amp; Glide Momentum
                  </h4>
                  <p className="leading-relaxed">
                    Quickly throw the knob to flick it to the edges with velocity-based inertia gliding.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Link to Download */}
        <div className="max-w-2xl mx-auto text-center mt-14 px-4">
          <div className="apple-card p-8 rounded-3xl border border-black/[0.08] shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white">
            <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#161424] mb-2">
              Ready to Shrink Your 4K Videos?
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] font-sans mb-6 max-w-md mx-auto">
              Get the standalone APK and start compressing directly on your Android hardware today.
            </p>
            <Link
              href="/downloads"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#161424] hover:bg-black text-white font-mono font-semibold text-xs shadow-xs hover:shadow-sm active:scale-[0.98] transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]"
            >
              <span>Download KaruFit APK</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </div>

      <FloatingDock />
      <Footer />
    </main>
  );
}
