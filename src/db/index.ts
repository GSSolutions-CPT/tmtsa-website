import { sql } from '@vercel/postgres';
import { drizzle } from 'drizzle-orm/vercel-postgres';
import * as schema from './schema';

export const db = process.env.POSTGRES_URL
    ? drizzle(sql, { schema })
    : ({
        query: {
            projects: {
                findMany: async () => [],
                findFirst: async () => null,
            } as any,
            blogPosts: {
                findMany: async () => [],
                findFirst: async () => null,
            } as any
        },
        insert: () => ({ values: () => Promise.resolve() }) as any,
    } as unknown as ReturnType<typeof drizzle>);
