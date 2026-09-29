import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://avpoligraf.md';
  const locales = ['ru', 'ro'];
  const pages = [
    '',
    '/services',
    '/services/vizitki',
    '/services/bannery',
    '/services/design',
    '/calculator',
    '/portfolio',
    '/about',
    '/contact',
  ];

  const entries: MetadataRoute.Sitemap = [];
  for (const locale of locales) {
    for (const page of pages) {
      entries.push({
        url: `${base}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'weekly' : 'monthly',
        priority: page === '' ? 1 : page.startsWith('/services/') ? 0.9 : 0.8,
      });
    }
  }
  return entries;
}
