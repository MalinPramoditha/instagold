// app/sitemap.ts
import { MetadataRoute } from 'next';
import { categoryData } from './app/data/categories';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://lux-offer-pro.lovable.app';

    const categoryUrls = Object.keys(categoryData).map((category) => ({
        url: `${baseUrl}/${category}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1.0,
        },
        ...categoryUrls,
    ];
}