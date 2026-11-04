import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/navbar/Navbar';
import { PdfToolsCatalog } from '@/components/pdf-tools/PdfToolsCatalog';
import { Footer } from '@/components/footer/Footer';
import { FloatingDock } from '@/components/dock/FloatingDock';

export const metadata: Metadata = {
  title: '28+ Offline PDF Studio Tools • KaruFit by Nishant Gaurav (@codewithevilxd)',
  description:
    'Explore all 28+ offline PDF utilities in KaruFit. Merge, split, compress, Bates numbering, watermark, encrypt with AES-256, sign, redact, and OCR 100% locally with zero cloud uploads. Engineered by Nishant Gaurav (@codewithevilxd).',
  keywords: [
    '28+ offline PDF tools',
    'offline PDF editor',
    'PDF merge offline',
    'PDF split offline',
    'PDF compress MB to KB',
    'Bates numbering offline legal',
    'AES-256 PDF encryption',
    'remove PDF password',
    'offline PDF OCR',
    'redact confidential PDF',
    'Nishant Gaurav PDF tools',
    'codewithevilxd PDF editor',
    'KaruFit PDF Studio',
  ],
  alternates: {
    canonical: 'https://karufit.app/pdf-studio',
  },
};

export default function PdfStudioPage() {
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

        {/* 28+ Offline PDF Tools Catalog */}
        <PdfToolsCatalog />

        {/* Download Callout */}
        <div className="max-w-2xl mx-auto text-center mt-12 px-4">
          <div className="apple-card p-8 rounded-3xl bg-white/90 backdrop-blur-xl border border-black/[0.08] shadow-[0_8px_30px_rgba(22,20,36,0.06)]">
            <h3 className="font-display font-extrabold text-xl text-[#161424] mb-2 tracking-tight">
              All 28+ PDF Tools in One Single App
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] font-sans mb-5 leading-relaxed max-w-md mx-auto">
              Replace bloated subscription PDF scanner apps with an 18.4 MB lean, open-source standalone APK.
            </p>
            <Link
              href="/downloads"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#EAB308] text-[#161424] font-semibold text-xs border border-[#CA8A04]/40 shadow-[0_2px_8px_rgba(234,179,8,0.3)] hover:brightness-105 active:scale-[0.98] transition-all"
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
