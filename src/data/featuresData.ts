import { FeatureItem, FaqItem, CompressionPreset } from '@/types';

export const COMPRESSION_PRESETS: CompressionPreset[] = [
  {
    name: '4K 60FPS Pro Video',
    scene: 'Beach High Motion Waves & Spray',
    resolution: '4K UHD (3840x2160)',
    originalSizeMb: 420.0,
    compressedSizeMb: 63.0,
    savedPercent: 85.0,
    bitrateMbps: 8.5,
    codec: 'HEVC / H.265 Hardware',
    psnr: '45.2 dB',
    ssim: '0.992 / 1.000',
    vmaf: '97.8 / 100',
    timeSec: '3.1s',
  },
  {
    name: '1080p 60FPS Action',
    scene: 'Action Sports & Fast Panning',
    resolution: '1080p FHD (1920x1080)',
    originalSizeMb: 185.0,
    compressedSizeMb: 28.0,
    savedPercent: 84.8,
    bitrateMbps: 3.8,
    codec: 'H.264 / AVC Hardware',
    psnr: '46.1 dB',
    ssim: '0.994 / 1.000',
    vmaf: '98.4 / 100',
    timeSec: '1.8s',
  },
  {
    name: 'Night Tokyo 4K',
    scene: 'Low-Light Neon Bloom & Dark Grain',
    resolution: '4K Night (3840x2160)',
    originalSizeMb: 340.0,
    compressedSizeMb: 44.2,
    savedPercent: 87.0,
    bitrateMbps: 5.2,
    codec: 'HEVC / H.265 Hardware',
    psnr: '44.8 dB',
    ssim: '0.989 / 1.000',
    vmaf: '96.9 / 100',
    timeSec: '2.9s',
  },
  {
    name: 'WhatsApp / Discord Ready',
    scene: 'Social Chat Instant Share Under 16MB',
    resolution: '720p HD (1280x720)',
    originalSizeMb: 110.0,
    compressedSizeMb: 14.8,
    savedPercent: 86.5,
    bitrateMbps: 1.8,
    codec: 'H.264 Universal',
    psnr: '43.9 dB',
    ssim: '0.985 / 1.000',
    vmaf: '95.2 / 100',
    timeSec: '1.2s',
  },
];

export const FEATURES_DATA: FeatureItem[] = [
  {
    id: 'hardware_silicon',
    number: '01',
    title: 'Hardware MediaCodec Silicon Acceleration',
    subtitle: 'Qualcomm Snapdragon, Tensor & Dimensity direct pipeline',
    description:
      'Unlike apps that overheat your phone with generic CPU-bound FFmpeg binaries, KaruFit hooks directly into your Android hardware MediaCodec for 10x faster encoding with under 1% battery drain.',
    tag: 'Hardware Direct',
    tagColor: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    highlights: [
      'Zero battery overheating with dedicated silicon blocks',
      'Instant 4K 60fps transcode at up to 120 FPS encode speed',
      'Lean 49.0 MB APK with 30+ built-in offline tools',
    ],
  },
  {
    id: 'split_studio',
    number: '02',
    title: 'Live Split Comparison Studio',
    subtitle: 'Inspect pixel fidelity before saving to your gallery',
    description:
      'Slide the live interactive divider across synchronized frames of your original and compressed videos. Inspect macroblocks and high-frequency edge details with a 4x zoom lens before saving.',
    tag: 'Visual Proof',
    tagColor: 'bg-rose-100 text-rose-900 border-rose-300',
    highlights: [
      'Synchronized frame-accurate side-by-side playback',
      'Instant space saved counter in MB and percent',
      'Safe gallery replace with cryptographic size check',
    ],
  },
  {
    id: 'pdf_studio',
    number: '03',
    title: 'Complete 28+ PDF Swiss Army Knife',
    subtitle: 'From legal Bates numbering to 256-bit AES encryption',
    description:
      'Replace bloated subscription PDF scanner apps with one air-gapped on-device toolkit. Merge, split, compress, watermark, crop, reverse, flatten, and encrypt in milliseconds.',
    tag: '28+ Offline Tools',
    tagColor: 'bg-amber-100 text-amber-900 border-amber-300',
    highlights: [
      'Drag-and-drop filmstrip page organizer',
      'Official Bates legal numbering & sequential pagination',
      'Military-grade 256-bit AES password encryption',
    ],
  },
  {
    id: 'vault_analytics',
    number: '04',
    title: 'Personal Storage Vault & History',
    subtitle: 'Track saved gigabytes and clean transient caches',
    description:
      'Keep track of exactly how many gigabytes you have freed up over time. KaruFit logs every compression into a local SQLite ledger, offers one-tap cache sanitation, and has zero network tracking.',
    tag: 'Zero Telemetry',
    tagColor: 'bg-purple-100 text-purple-900 border-purple-300',
    highlights: [
      'Cumulative space freed odometer (MB, GB, TB)',
      'Transient cache sweeper with single tap',
      'Local audit ledger kept on your device only',
    ],
  },
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: 'How does KaruFit achieve 80%+ file shrinkage without ruining quality?',
    answer:
      'Smart variable bitrate (VBR) estimation targets only the bits needed for clean playback based on output resolution and motion complexity. Android hardware MediaCodec decodes and re-encodes modern codecs (HEVC / H.264) using motion vectors rather than destructive brute-force downsampling.',
    category: 'Compression',
  },
  {
    question: 'Are my videos, photos, or PDF documents sent to any server?',
    answer:
      'Absolutely not. KaruFit has no backend server, no cloud upload, no telemetry trackers, and no analytics SDKs. All operations happen exclusively in your device RAM and MediaCodec silicon. You can turn on Airplane Mode and use 100% of the features without a single error.',
    category: 'Privacy',
  },
  {
    question: 'Why does KaruFit avoid FFmpeg on Android?',
    answer:
      'Bundling FFmpeg bloats the APK size by 60MB to 90MB, drains battery heavily because it runs in software on the CPU, and causes high thermal throttling. Using Android’s native MediaCodec OMX/Codec2 APIs makes KaruFit lean (49.0 MB with 30+ tools), blazing fast, and clean under the MIT license.',
    category: 'Architecture',
  },
  {
    question: 'How does KaruFit integrate with Android Gallery and WhatsApp?',
    answer:
      'KaruFit declares native Android Intent filters for video/* and image/*. When browsing your camera roll in Google Photos, Gallery, or WhatsApp, simply tap "Share -> KaruFit" to compress or convert your files instantly without manual file browsing.',
    category: 'Android Integration',
  },
  {
    question: 'Is KaruFit free and open source?',
    answer:
      'Yes! KaruFit is 100% free and open-source under the MIT license created by Nishant Gaurav (CodeWithEvilxd). There are no subscriptions, no in-app purchases, and no advertisements.',
    category: 'Licensing',
  },
];
