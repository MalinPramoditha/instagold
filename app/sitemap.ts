import { MetadataRoute } from 'next';
import { categoryData, locationData } from './data/categories';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://instagoldbuyers.com';

    // 1. Generate category URLs
    const categoryUrls = Object.keys(categoryData).map((category) => ({
        url: `${baseUrl}/${category}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    // 2. Generate location URLs
    const locationUrls = Object.keys(locationData).map((location) => ({
        url: `${baseUrl}/${location}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7, // Slightly lower priority for location pages, or keep at 0.8
    }));

    // 3. Combine everything into the final sitemap array
    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1.0,
        },
        ...categoryUrls,
        ...locationUrls,
    ];
}