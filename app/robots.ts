import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/theme-*', '/private/'],
    },
    sitemap: 'https://sapervedere.com.br/sitemap.xml',
  };
}
