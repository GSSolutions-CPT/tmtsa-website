// Force mock for build stability until DB is provisioned
export const db = ({
    query: {
        projects: {
            findMany: async () => [],
            findFirst: async () => null,
        },
        blogPosts: {
            findMany: async () => [],
            findFirst: async () => null,
        }
    },
    insert: () => ({ values: () => Promise.resolve() }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
}) as any;
