import { SITE_DATA } from '@/lib/siteData';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.themaintenanceteamsa.co.za';

    // Static routes
    const routes = [
        '',
        '/about',
        '/contact',
        '/blog',
        '/gallery',
        '/faq',
        '/quote',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 1,
    }));

    // Services
    const services = SITE_DATA.services.map((service) => ({
        url: `${baseUrl}/services/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    // Solutions
    const solutions = SITE_DATA.solutions.map((solution) => ({
        url: `${baseUrl}/solutions/${solution.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    // Areas
    // Areas
    const areas = SITE_DATA.areas.flatMap((area) => {
        const regionRoute = {
            url: `${baseUrl}/areas/${area.slug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        };

        const suburbRoutes = area.locations.map((suburb) => ({
            url: `${baseUrl}/areas/${area.slug}/${suburb.toLowerCase().replace(/\s+/g, '-')}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.7,
        }));

        return [regionRoute, ...suburbRoutes];
    });

    return [...routes, ...services, ...solutions, ...areas];
}
