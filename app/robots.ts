import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site-config';

const siteUrl = SITE_URL;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/studio/',
          '/api/',
          '/team-portal/',
          '/studio-debug/',
        ],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}

