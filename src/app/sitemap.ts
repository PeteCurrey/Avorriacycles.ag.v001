import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cycles.avorria.com';

  const routes = [
    '',
    '/features',
    '/packages',
    '/demo',
    '/about',
    '/contact',
    '/admin-dashboard',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
