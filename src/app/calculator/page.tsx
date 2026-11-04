import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/navbar/Navbar';
import { StorageCalculator } from '@/components/calculator/StorageCalculator';
import { Footer } from '@/components/footer/Footer';
import { FloatingDock } from '@/components/dock/FloatingDock';

export const metadata: Metadata = {
  title: 'Storage Savings Calculator • KaruFit by Nishant Gaurav (@codewithevilxd)',
  description:
    'Calculate how many gigabytes your Android phone reclaims by transcoding 4K camera footage and compressing photos on-device. Engineered by Nishant Gaurav (@codewithevilxd).',
  keywords: [
    'video storage calculator',
    'phone storage cleaner video',
    'reclaim gigabytes on Android',
    '4K video bitrate calculator',
    'free up phone storage without deleting',
    'Nishant Gaurav calculator',
    'codewithevilxd tools',
    'KaruFit storage calculator',
  ],
  alternates: {
    canonical: 'https://karufit.app/calculator',
  },
};

export default function CalculatorPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#161424] overflow-x-hidden selection:bg-[#FEF08A] selection:text-[#17365D]">
      <Navbar />

      <div className="pt-24 sm:pt-28 pb-16">
        {/* Breadcrumb Navigation */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#161424]/20 hover:border-[#161424] font-mono text-xs font-bold text-[#17365D] shadow-2xs hover:shadow-xs transition-all"
          >
            <span>&larr;</span>
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Dedicated Calculator Component */}
        <StorageCalculator />

        {/* Quick Link to Download */}
        <div className="max-w-2xl mx-auto text-center mt-14 px-4">
          <div className="apple-card p-8 rounded-3xl border border-black/[0.08] shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white">
            <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#161424] mb-2">
              Reclaim Your Android Storage Now
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] font-sans mb-6 max-w-md mx-auto">
              100% offline, zero cloud uploads. Save hundreds of gigabytes directly on device silicon.
            </p>
            <Link
              href="/downloads"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#161424] hover:bg-black text-white font-mono font-semibold text-xs shadow-xs hover:shadow-sm active:scale-[0.98] transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]"
            >
              <span>Download Free APK</span>
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
