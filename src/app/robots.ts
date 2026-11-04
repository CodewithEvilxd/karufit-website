import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: [
          'Googlebot',
          'Bingbot',
          'Applebot',
          'DuckDuckBot',
          'YandexBot',
          'Baiduspider',
          'PerplexityBot',
          'ChatGPT-User',
          'GPTBot',
        ],
        allow: '/',
      },
    ],
    sitemap: 'https://karufit.app/sitemap.xml',
    host: 'https://karufit.app',
  };
}
