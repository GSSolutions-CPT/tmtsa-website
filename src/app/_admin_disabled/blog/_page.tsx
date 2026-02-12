import { db } from '@/db';
import { blogPosts } from '@/db/schema';
import { desc } from 'drizzle-orm';
import { format } from 'date-fns';
import Link from 'next/link';
import { LucidePlus, LucideEdit, LucideEye } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function BlogAdminPage() {
    const posts = await db.select().from(blogPosts).orderBy(desc(blogPosts.createdAt));

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold font-heading text-neutral-900">Blog Posts</h1>
                <Link
                    href="/admin/blog/create"
                    className="flex items-center gap-2 px-4 py-2 bg-tmt-orange text-white rounded-lg font-bold hover:bg-orange-600 transition-colors shadow-lg hover:shadow-orange-500/20"
                >
                    <LucidePlus className="w-4 h-4" /> Create New Post
                </Link>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden">
                <table className="w-full text-left text-sm">
                    <thead className="bg-neutral-50 border-b border-neutral-100/5 text-neutral-500 uppercase tracking-wider font-medium text-xs">
                        <tr>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4">Title</th>
                            <th className="px-6 py-4">Date Created</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-100">
                        {posts.length === 0 ? (
                            <tr>
                                <td colSpan={4} className="px-6 py-8 text-center text-neutral-400">No blog posts yet.</td>
                            </tr>
                        ) : (
                            posts.map((post) => (
                                <tr key={post.id} className="hover:bg-neutral-50/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-bold uppercase tracking-wide ${post.isPublished ? 'bg-green-100 text-green-800' : 'bg-neutral-100 text-neutral-600'
                                            }`}>
                                            {post.isPublished ? 'Published' : 'Draft'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 font-bold text-neutral-900 line-clamp-1 max-w-md">
                                        {post.title}
                                    </td>
                                    <td className="px-6 py-4 text-neutral-400 font-mono text-xs">
                                        {format(new Date(post.createdAt), 'MMM d, yyyy')}
                                    </td>
                                    <td className="px-6 py-4 text-right flex justify-end gap-2">
                                        <Link href={`/blog/${post.slug}`} target="_blank" className="p-2 text-neutral-400 hover:text-tmt-blue hover:bg-blue-50 rounded transition-colors" title="View Public">
                                            <LucideEye className="w-4 h-4" />
                                        </Link>
                                        <Link href={`/admin/blog/edit/${post.id}`} className="p-2 text-neutral-400 hover:text-tmt-orange hover:bg-orange-50 rounded transition-colors" title="Edit">
                                            <LucideEdit className="w-4 h-4" />
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
