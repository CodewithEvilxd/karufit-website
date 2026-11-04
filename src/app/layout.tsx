import type { Metadata, Viewport } from 'next';
import './globals.css';
import { SeoStructuredContent } from '@/components/seo/SeoStructuredContent';
import { CORE_KEYWORD_TAXONOMY, DEVELOPER_META } from '@/data/seoKeywords';

export const metadata: Metadata = {
  metadataBase: new URL('https://karufit.app'),
  title: {
    default: 'KaruFit • On-Device 4K Video Compressor & 28+ PDF Tools | Nishant Gaurav (@codewithevilxd)',
    template: '%s • KaruFit by Nishant Gaurav (@codewithevilxd)',
  },
  description:
    'Shrink 4K videos by 85% directly on Android silicon and edit documents with 28+ offline PDF tools. 100% offline, zero cloud uploads, zero telemetry, crafted by Nishant Gaurav (@codewithevilxd).',
  keywords: [
    ...CORE_KEYWORD_TAXONOMY.developerAndBranding,
    ...CORE_KEYWORD_TAXONOMY.videoCompressionCore.slice(0, 20),
    ...CORE_KEYWORD_TAXONOMY.pdfToolsCore.slice(0, 25),
    ...CORE_KEYWORD_TAXONOMY.technicalArchitecture.slice(0, 10),
  ],
  authors: [
    { name: `${DEVELOPER_META.name} (${DEVELOPER_META.alias})`, url: DEVELOPER_META.github },
    { name: 'KaruFit Open Source Project', url: 'https://karufit.app' },
  ],
  creator: `${DEVELOPER_META.name} (${DEVELOPER_META.alias})`,
  publisher: 'KaruFit Open Source Project',
  applicationName: 'KaruFit',
  category: 'Multimedia & Productivity',
  classification: 'Hardware-Accelerated Video Compressor & Offline PDF Utility Suite',
  icons: {
    icon: '/assets/logo.png',
    apple: '/assets/logo.png',
  },
  alternates: {
    canonical: 'https://karufit.app',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'KaruFit • Hardware-Accelerated Video Compression & 28+ PDF Tools',
    description:
      'Shrink 4K videos by 85% directly on your device silicon with 28+ offline PDF tools. 100% offline, zero server uploads, crafted by Nishant Gaurav (@codewithevilxd).',
    url: 'https://karufit.app',
    siteName: 'KaruFit',
    images: [
      {
        url: '/assets/app-preview.png',
        width: 1200,
        height: 630,
        alt: 'KaruFit On-Device Studio by Nishant Gaurav (@codewithevilxd)',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KaruFit • On-Device Video Compression & 28+ PDF Tools',
    description:
      'Shrink 4K videos by 85% on phone silicon. 100% offline, zero server uploads, engineered by Nishant Gaurav (@codewithevilxd).',
    creator: DEVELOPER_META.handle,
    site: DEVELOPER_META.handle,
    images: ['/assets/app-preview.png'],
  },
};

export const viewport: Viewport = {
  themeColor: '#FAF8F5',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700;12..96,800&family=Caveat:wght@600;700&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;600;700&family=Outfit:wght@500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#FAF8F5] text-[#161424] font-sans selection:bg-[#FEF08A] selection:text-[#17365D]">
        {/* Schema.org Structured SEO Data & Semantic Crawler Index */}
        <SeoStructuredContent />
        {/* Authentic GitKura Dry-Brush SVG Filters */}
        <svg
          width="0"
          height="0"
          className="absolute w-0 h-0 pointer-events-none overflow-hidden"
          style={{ position: 'absolute', width: 0, height: 0 }}
          aria-hidden="true"
        >
          <defs>
            <filter id="dry-brush-filter" x="-10%" y="-10%" width="120%" height="120%">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.035"
                numOctaves={2}
                seed={7}
                result="edgeNoise"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="edgeNoise"
                scale={1.2}
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
            <filter id="dry-brush-heavy" x="-12%" y="-12%" width="124%" height="124%">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.032 0.16"
                numOctaves={3}
                seed={12}
                result="brushNoise"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="brushNoise"
                scale={1.8}
                xChannelSelector="R"
                yChannelSelector="G"
                result="roughText"
              />
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.022 0.24"
                numOctaves={3}
                seed={19}
                result="bristleNoise"
              />
              <feColorMatrix
                in="bristleNoise"
                type="matrix"
                values=" 1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 2.2 -0.65 "
                result="bristleMask"
              />
              <feComposite in="roughText" in2="bristleMask" operator="in" result="texturedText" />
              <feMerge>
                <feMergeNode in="roughText" opacity="0.35" />
                <feMergeNode in="texturedText" />
              </feMerge>
            </filter>
          </defs>
        </svg>

        {children}
      </body>
    </html>
  );
}
