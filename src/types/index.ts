export type ToolCategory = 'all' | 'pdf_all' | 'media' | 'pdf_edit' | 'pdf_secure' | 'pdf_convert' | 'pdf_layout';

export interface ToolItem {
  id: string;
  title: string;
  subtitle: string;
  category: ToolCategory;
  categoryLabel: string;
  pillText: string;
  pillColor: string;
  engine: string;
  popular?: boolean;
}

export interface FeatureItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  tagColor: string;
  highlights: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface CompressionPreset {
  resolution: string;
  originalSizeMb: number;
  compressedSizeMb: number;
  savedPercent: number;
  bitrateMbps: number;
  codec: string;
  name?: string;
  scene?: string;
  psnr?: string;
  ssim?: string;
  vmaf?: string;
  timeSec?: string;
}

