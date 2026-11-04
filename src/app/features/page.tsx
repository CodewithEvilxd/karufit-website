import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/navbar/Navbar';
import { FeaturesBento } from '@/components/features/FeaturesBento';
import { NativePipelineSection } from '@/components/pipeline/NativePipelineSection';
import { AppScreenShowcase } from '@/components/showcase/AppScreenShowcase';
import { Footer } from '@/components/footer/Footer';
import { FloatingDock } from '@/components/dock/FloatingDock';

export const metadata: Metadata = {
  title: 'Hardware Architecture & Features • KaruFit by Nishant Gaurav (@codewithevilxd)',
  description:
    'Deep dive into KaruFit hardware-accelerated MediaCodec pipeline, Snapdragon & Tensor silicon benchmarks, and air-gapped privacy architecture engineered by Nishant Gaurav (@codewithevilxd).',
  keywords: [
    'hardware MediaCodec',
    'Android video compression architecture',
    'Snapdragon video benchmarks',
    'Tensor video codec',
    'MediaTek VBR compressor',
    'Nishant Gaurav',
    'codewithevilxd',
    'KaruFit features',
    'offline video engine',
  ],
  alternates: {
    canonical: 'https://karufit.app/features',
  },
};

export default function FeaturesPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#161424] overflow-x-hidden selection:bg-[#FEF08A] selection:text-[#17365D]">
      <Navbar />

      <div className="pt-24 sm:pt-28 pb-16">
        {/* Breadcrumb Navigation */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-black/[0.08] text-xs font-medium text-[#161424]/70 hover:text-[#161424] hover:bg-white shadow-xs transition-all"
          >
            <span>&larr;</span>
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Real App Screen Inspector */}
        <AppScreenShowcase />

        {/* 4 Architectural Pillars */}
        <FeaturesBento />

        {/* Hardware MediaCodec vs Software FFmpeg Benchmark Simulator */}
        <NativePipelineSection />

        {/* Download Callout */}
        <div className="max-w-2xl mx-auto text-center mt-12 px-4">
          <div className="apple-card p-8 rounded-3xl bg-white/90 backdrop-blur-xl border border-black/[0.08] shadow-[0_8px_30px_rgba(22,20,36,0.06)]">
            <h3 className="font-display font-extrabold text-xl text-[#161424] mb-2 tracking-tight">
              Experience Native Silicon Speed
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] font-sans mb-5 leading-relaxed max-w-md mx-auto">
              Direct MediaCodec C2 pipeline with zero CPU throttling and zero analytics.
            </p>
            <Link
              href="/downloads"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#EAB308] text-[#161424] font-semibold text-xs border border-[#CA8A04]/40 shadow-[0_2px_8px_rgba(234,179,8,0.3)] hover:brightness-105 active:scale-[0.98] transition-all"
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
