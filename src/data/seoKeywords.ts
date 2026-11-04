/**
 * ==============================================================================
 * Comprehensive SEO Keywords, Taxonomy & Knowledge Graph Matrix for KaruFit
 * Developed by Nishant Gaurav (@codewithevilxd)
 * ==============================================================================
 * This file serves as the definitive semantic corpus, metadata hub, and structured
 * search index for search engines (Googlebot, Bingbot, DuckDuckGo, Yandex, Baidu,
 * Applebot, and AI LLM search crawlers like Perplexity & ChatGPT Search).
 */

export interface SeoEntity {
  name: string;
  alternateNames?: string[];
  description: string;
  category: string;
  keywords: string[];
}

export const DEVELOPER_META = {
  name: 'Nishant Gaurav',
  alias: 'codewithevilxd',
  handle: '@codewithevilxd',
  title: 'Lead Software Architect, Security Researcher & Open Source Engineer',
  github: 'https://github.com/codewithevilxd',
  project: 'KaruFit On-Device Studio',
  bio: 'Creator of KaruFit, hardware-accelerated on-device video compression algorithms, and air-gapped 28+ PDF utility suite built on native Android MediaCodec and iOS AVFoundation.',
  skills: [
    'Android NDK C++ Codec Development',
    'MediaCodec VBR Bitrate Algorithms',
    'Hardware-Accelerated Video Compression',
    'Offline PDF Processing & Bates Stamping',
    'Air-Gapped Privacy Engineering',
    'Flutter & Swift Native Interop',
    'Zero-Knowledge Data Processing',
  ],
};

export const CORE_KEYWORD_TAXONOMY = {
  developerAndBranding: [
    'Nishant Gaurav',
    'codewithevilxd',
    'Nishant Gaurav developer',
    'codewithevilxd github',
    'Nishant Gaurav KaruFit',
    'codewithevilxd KaruFit',
    'Nishant Gaurav Android engineer',
    'codewithevilxd open source',
    'KaruFit',
    'KaruFit App',
    'KaruFit APK',
    'KaruFit download',
    'KaruFit video compressor',
    'KaruFit PDF tools',
    'KaruFit offline studio',
    'codewithevilxd tools',
  ],
  videoCompressionCore: [
    '4K video compressor',
    'shrink 4K video 85%',
    'offline video compressor',
    'on-device video compression',
    'hardware accelerated video compressor',
    'Android MediaCodec compressor',
    'iOS AVFoundation video compressor',
    'lossless video compressor Android',
    'private video compressor no upload',
    'zero cloud video compressor',
    'air-gapped video compressor',
    'reduce video file size without losing quality',
    'compress gigabytes of camera footage',
    'free offline video compressor APK',
    'Android video shrinker APK',
    'best video compressor for Android 2026',
    'compress 1080p 60fps video',
    'reduce 4K 60fps video size',
    'H.264 AVC compressor',
    'H.265 HEVC offline compressor',
    'AV1 hardware compressor',
    'VBR rate control video compression',
    'Qualcomm Snapdragon video compressor',
    'MediaTek Dimensity video compressor',
    'Google Tensor video codec optimizer',
    'Samsung Exynos video compressor',
    'WhatsApp video compressor 16MB',
    'Discord video compressor 25MB 50MB',
    'Email video compressor 25MB',
    'Instagram reel video compressor',
    'TikTok video size reducer',
    'batch video compression offline',
    'video compression with audio preservation',
    'fastest video compressor Android',
    'no watermark video compressor',
    'unlimited free video compression app',
  ],
  pdfToolsCore: [
    'offline PDF tools',
    '28+ offline PDF tools',
    'air-gapped PDF editor',
    'free PDF editor without internet',
    'private PDF tools Android',
    'PDF merge offline',
    'combine PDF files without uploading',
    'PDF split pages offline',
    'extract pages from PDF free',
    'PDF compressor offline',
    'shrink PDF to 100kb 200kb 500kb',
    'compress legal documents offline',
    'Bates numbering offline',
    'legal Bates numbering tool',
    'medical record Bates stamping',
    'sequential page numbering PDF',
    'PDF password protect offline',
    'AES-256 PDF encryption',
    'lock confidential PDF offline',
    'remove PDF password offline',
    'PDF unlocker tool free',
    'PDF OCR offline',
    'scanned document to searchable PDF',
    'extract text from PDF offline',
    'PDF watermark tool offline',
    'stamp confidential draft on PDF',
    'custom logo PDF watermark',
    'organize PDF pages visually',
    'drag and drop PDF page organizer',
    'rotate PDF 90 180 degrees offline',
    'delete PDF pages locally',
    'duplicate PDF pages offline',
    'images to PDF converter offline',
    'JPG to PDF converter Android',
    'PNG to PDF converter free',
    'PDF to images JPG PNG converter',
    'PDF to grayscale black and white',
    'invert colors dark mode PDF',
    'sign PDF offline without account',
    'digital signature stamp PDF',
    'fill PDF forms offline',
    'redact PDF offline',
    'black out sensitive text in PDF',
    'remove SSN PAN Aadhaar from PDF',
    'flatten PDF annotations and forms',
    'print-ready PDF flattener',
    'edit PDF metadata title author',
    'remove tracking metadata from PDF',
    'repair corrupted PDF cross-reference',
    'rebuild damaged PDF table',
    'crop PDF margins offline',
    'header and footer tool PDF',
    'add page numbers to PDF offline',
    'PDF bookmark editor offline',
  ],
  technicalArchitecture: [
    'hardware MediaCodec API',
    'Android NDK native codec',
    'zero cloud upload architecture',
    '100% offline silicon processing',
    'air-gap security guarantee',
    'no telemetry tracking',
    'no analytics SDKs',
    'no network permissions required',
    'MIT open source video engine',
    'client-side PDF parsing and rendering',
    'variable bitrate VBR two-pass optimization',
    'color matrix Rec.709 preservation',
    'AAC audio pass-through and re-encoding',
    'MP4 container muxer demuxer',
    'Bates numbering regex pattern engine',
    'AES-GCM encryption pipeline',
  ],
  userSearchIntents: [
    'how to compress video on phone without internet',
    'best free open source video compressor for android',
    'how to reduce video size for whatsapp without losing quality',
    'how to merge pdf files securely offline',
    'how to add bates numbering to legal documents free',
    'compress 4k drone footage on phone',
    'reduce go pro 4k video size offline',
    'convert scanned receipts to searchable pdf offline',
    'how to lock pdf with 256 bit aes encryption locally',
    'fastest android apk to compress large video files',
    'nishant gaurav codewithevilxd portfolio projects',
    'codewithevilxd video compression software',
    'karufit download latest universal arm64 apk',
    'karufit vs handbrake mobile',
    'karufit vs ilovepdf offline',
    'private alternative to cloudconvert and smallpdf',
  ],
};

/**
 * Programmatic Keyword Matrix Generator:
 * Generates an extensive semantic corpus across actions, formats, platforms,
 * document types, and developer identifiers to maximize long-tail coverage.
 */
export function generateAllSeoKeywords(): string[] {
  const actions = [
    'compress', 'shrink', 'reduce size of', 'optimize', 'merge', 'split',
    'protect', 'encrypt', 'unlock', 'decrypt', 'watermark', 'bates stamp',
    'organize', 'convert', 'sign', 'redact', 'flatten', 'edit metadata of',
  ];

  const targets = [
    '4K video', '1080p video', '60fps video', 'MP4 video', 'MOV video',
    'camera footage', 'drone footage', 'screen recording', 'WhatsApp video',
    'Discord video', 'legal PDF', 'medical PDF', 'contract PDF', 'invoice PDF',
    'scanned document', 'academic paper', 'e-book PDF', 'court exhibit PDF',
  ];

  const modifiers = [
    'offline', 'on-device', 'without internet', '100% private', 'zero cloud upload',
    'hardware accelerated', 'with Android MediaCodec', 'lossless quality',
    'free open source', 'by Nishant Gaurav', 'by codewithevilxd', 'with KaruFit',
  ];

  const generated: string[] = [];

  // Cross-multiply matrices
  for (const act of actions) {
    for (const tgt of targets) {
      for (const mod of modifiers) {
        generated.push(`${act} ${tgt} ${mod}`);
      }
    }
  }

  // Combine with explicit taxonomy
  const allExplicit = [
    ...CORE_KEYWORD_TAXONOMY.developerAndBranding,
    ...CORE_KEYWORD_TAXONOMY.videoCompressionCore,
    ...CORE_KEYWORD_TAXONOMY.pdfToolsCore,
    ...CORE_KEYWORD_TAXONOMY.technicalArchitecture,
    ...CORE_KEYWORD_TAXONOMY.userSearchIntents,
  ];

  return Array.from(new Set([...allExplicit, ...generated]));
}

/**
 * Rich Schema.org JSON-LD Entities for search engines and LLM crawlers
 */
export const STRUCTURED_SCHEMAS = {
  softwareApp: {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'KaruFit',
    alternateName: ['KaruFit Studio', 'KaruFit On-Device Studio', 'KaruFit Video Compressor'],
    operatingSystem: 'Android 8.0+, iOS, Web',
    applicationCategory: 'MultimediaApplication',
    applicationSubCategory: 'Video Compression and PDF Utility',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    author: {
      '@type': 'Person',
      name: 'Nishant Gaurav',
      alternateName: 'codewithevilxd',
      url: 'https://github.com/codewithevilxd',
    },
    publisher: {
      '@type': 'Organization',
      name: 'KaruFit Open Source Project',
      url: 'https://karufit.app',
      logo: 'https://karufit.app/assets/logo.png',
    },
    description:
      'Hardware-accelerated on-device video compressor and 28+ offline PDF studio powered directly by native Android MediaCodec silicon. 100% offline, zero cloud uploads, zero telemetry, crafted by Nishant Gaurav (@codewithevilxd).',
    featureList: [
      '85% video compression directly on Android MediaCodec silicon',
      '4K 60fps camera footage compression without server uploads',
      '28+ offline PDF tools including visual filmstrip organizer',
      'Legal Bates numbering and sequential pagination',
      'AES-256 military-grade password encryption and decryption',
      'Offline OCR text extraction and searchable PDF creation',
      'Local document redaction and watermark stamping',
      'Zero network access required, MIT open source',
    ],
    softwareVersion: '1.0.13',
    downloadUrl: 'https://karufit.app/downloads/KaruFit-universal.apk',
    screenshot: 'https://karufit.app/assets/app-preview.png',
  },

  personAuthor: {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Nishant Gaurav',
    alternateName: 'codewithevilxd',
    jobTitle: 'Lead Software Architect & Security Researcher',
    url: 'https://github.com/codewithevilxd',
    sameAs: [
      'https://github.com/codewithevilxd',
    ],
    knowsAbout: [
      'Hardware-accelerated video codecs',
      'Android MediaCodec API',
      'On-device VBR encoding',
      'Offline PDF document manipulation',
      'Bates legal numbering',
      'Air-gapped privacy algorithms',
    ],
  },

  faqPage: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Who developed KaruFit?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'KaruFit was created and architected by Nishant Gaurav (@codewithevilxd) as a 100% offline, hardware-accelerated video compression engine and 28+ PDF utility studio.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does KaruFit compress 4K videos by 85% without internet?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'KaruFit communicates directly with your Android phone\'s dedicated hardware MediaCodec silicon chips (Snapdragon, MediaTek, Tensor, Exynos) using low-level NDK algorithms. It applies variable bitrate (VBR) compression locally in device RAM with zero cloud uploads.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are all 28+ PDF tools completely offline and private?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. KaruFit requires zero network permissions. All 28+ PDF tools—including PDF Merge, Split, Compress, Bates Numbering, AES-256 Encryption, Redaction, and OCR—execute 100% client-side on your device.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is Bates numbering in KaruFit?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Bates numbering is a legal and medical document indexing tool that stamps unique sequential identification numbers, prefix codes, and timestamps across page margins for discovery and court exhibits.',
        },
      },
    ],
  },
};
