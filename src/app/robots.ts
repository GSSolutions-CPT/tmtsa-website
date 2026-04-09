import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/admin/',
                    '/api/',
                    // Block spam query parameter patterns (WordPress hack cleanup)
                    '/*?v=',
                    '/*?a=',
                    '/*?d=',
                    '/*?y=',
                    '/*?n=',
                    '/*?l=',
                    '/*?u=',
                    '/*?s=',
                    '/*?q=',
                    '/*?detail/',
                    '/*?class/',
                ],
            },
        ],
        sitemap: 'https://www.themaintenanceteamsa.co.za/sitemap.xml',
    };
}
