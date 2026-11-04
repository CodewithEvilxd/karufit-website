import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/navbar/Navbar';
import { Footer } from '@/components/footer/Footer';
import { FloatingDock } from '@/components/dock/FloatingDock';
import { CheckIcon, CodeIcon, ShieldLockIcon } from '@/components/ui/Icons';

export const metadata: Metadata = {
  title: 'Open Source MIT License & Privacy Charter • KaruFit',
  description:
    'Full official MIT License and air-gapped zero-cloud privacy policy for KaruFit, architected by Nishant Gaurav (@codewithevilxd).',
  keywords: [
    'KaruFit MIT License',
    'Nishant Gaurav license',
    'codewithevilxd KaruFit open source',
    'air-gapped privacy certificate',
  ],
  alternates: {
    canonical: 'https://karufit.app/license',
  },
};

export default function LicensePage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#161424] overflow-x-hidden selection:bg-[#FEF08A] selection:text-[#17365D]">
      <Navbar />

      <div className="pt-24 sm:pt-28 pb-16 max-w-4xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb Navigation */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-black/[0.08] text-xs font-medium text-[#161424]/70 hover:text-[#161424] hover:bg-white shadow-xs transition-all"
          >
            <span>&larr;</span>
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Section Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#FEF08A] text-[#161424] border border-[#161424]/15 mb-3 shadow-xs">
            <CodeIcon className="w-3.5 h-3.5" />
            <span>Official Legal &amp; Licensing</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-black text-[#161424] tracking-tight mb-3">
            Open Source MIT License
          </h1>
          <p className="text-[#64748B] text-sm sm:text-base font-sans">
            KaruFit is free software engineered by <strong>Nishant Gaurav</strong> (
            <a
              href="https://github.com/codewithevilxd"
              target="_blank"
              rel="author noopener noreferrer"
              className="text-[#161424] font-bold underline"
            >
              @codewithevilxd
            </a>
            ). Everything runs 100% locally with zero server dependency.
          </p>
        </div>

        {/* Air-Gap Privacy & Security Guarantee Box */}
        <div className="mb-8 p-6 rounded-2xl bg-white border-2 border-[#161424] shadow-[4px_4px_0px_#161424]">
          <div className="flex items-center gap-2.5 mb-3 text-emerald-800 font-bold text-sm font-mono">
            <ShieldLockIcon className="w-4 h-4 text-emerald-600" />
            <span>100% Air-Gapped Verification Guarantee</span>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-[#475569]">
            <li className="flex items-center gap-2">
              <CheckIcon className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Zero network permissions required</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Zero analytics or telemetry trackers</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>100% on-device MediaCodec silicon</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Free for personal &amp; commercial use</span>
            </li>
          </ul>
        </div>

        {/* Complete MIT License Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#161424] text-white border-2 border-[#161424] shadow-[5px_5px_0px_#FEF08A]">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 font-mono text-xs text-white/70">
            <span>LICENSE.txt</span>
            <span>SPDX-License-Identifier: MIT</span>
          </div>

          <pre className="font-mono text-xs sm:text-sm text-neutral-300 leading-relaxed whitespace-pre-wrap select-text">
{`MIT License

Copyright (c) ${new Date().getFullYear()} Nishant Gaurav (@codewithevilxd)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`}
          </pre>
        </div>

        {/* Direct Download Action */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl bg-[#FEF08A] text-[#161424] border-2 border-[#161424] shadow-[4px_4px_0px_#161424]">
          <div>
            <h3 className="font-display font-black text-lg">Ready to compress offline?</h3>
            <p className="text-xs font-mono text-[#161424]/80">Download KaruFit APK directly to your phone right now.</p>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="/downloads/KaruFit-universal.apk"
              download="KaruFit-v1.0.13-universal.apk"
              className="px-4 py-2 rounded-xl bg-[#161424] text-white font-bold text-xs hover:bg-[#1E293B] border border-[#161424] shadow-xs cursor-pointer inline-flex items-center gap-1.5"
            >
              <span>Download Universal APK</span>
              <span>&darr;</span>
            </a>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingDock />
    </main>
  );
}
