import { SITE_DATA } from '@/lib/siteData';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.themaintenanceteamsa.co.za';

    // Static routes with appropriate priorities
    const routes = [
        { route: '', priority: 1.0 },
        { route: '/services', priority: 0.9 },
        { route: '/contact', priority: 0.9 },
        { route: '/about', priority: 0.8 },
        { route: '/solutions', priority: 0.8 },
        { route: '/areas', priority: 0.8 },
        { route: '/quote', priority: 0.7 },
        { route: '/blog', priority: 0.7 },
        { route: '/gallery', priority: 0.6 },
        { route: '/faq', priority: 0.5 },
    ].map((item) => ({
        url: `${baseUrl}${item.route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: item.priority,
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
        priority: 0.7,
    }));

    // Areas
    const areas = SITE_DATA.areas.flatMap((area) => {
        const regionRoute = {
            url: `${baseUrl}/areas/${area.slug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.7,
        };

        const suburbRoutes = area.locations.map((suburb) => ({
            url: `${baseUrl}/areas/${area.slug}/${suburb.toLowerCase().replace(/\s+/g, '-')}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.6,
        }));

        return [regionRoute, ...suburbRoutes];
    });

    return [...routes, ...services, ...solutions, ...areas];
}

