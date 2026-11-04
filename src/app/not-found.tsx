import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAF8F5] text-[#161424] px-4 text-center">
      <div className="max-w-md w-full p-8 rounded-3xl bg-white border-2 border-[#161424] shadow-[4px_4px_0px_#161424]">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#FEF08A] border-2 border-[#161424] text-2xl font-black mb-4">
          404
        </div>
        <h1 className="font-display font-black text-2xl mb-2 text-[#161424]">Page Not Found</h1>
        <p className="font-sans text-sm text-[#475569] mb-6">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-[#FEF08A] hover:bg-[#FDE047] text-[#161424] font-bold border-2 border-[#161424] shadow-[2px_2px_0px_#161424] transition-all"
        >
          Return to Home &rarr;
        </Link>
      </div>
    </div>
  );
}

