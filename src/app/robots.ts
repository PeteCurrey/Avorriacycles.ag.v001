import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/', // Keep API internal
    },
    sitemap: 'https://cycles.avorria.com/sitemap.xml',
  };
}
