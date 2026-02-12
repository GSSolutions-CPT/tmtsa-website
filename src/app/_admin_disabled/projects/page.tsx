import { db } from '@/db';
import { projects } from '@/db/schema';
import { desc } from 'drizzle-orm';
import { format } from 'date-fns';
import Link from 'next/link';
import Image from 'next/image';
import { LucidePlus, LucideEdit } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function ProjectAdminPage() {
    const projectList = await db.select().from(projects).orderBy(desc(projects.createdAt));

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold font-heading text-neutral-900">Project Gallery</h1>
                <Link
                    href="/admin/projects/create"
                    className="flex items-center gap-2 px-4 py-2 bg-tmt-orange text-white rounded-lg font-bold hover:bg-orange-600 transition-colors shadow-lg hover:shadow-orange-500/20"
                >
                    <LucidePlus className="w-4 h-4" /> Add Project
                </Link>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden">
                <table className="w-full text-left text-sm">
                    <thead className="bg-neutral-50 border-b border-neutral-100/5 text-neutral-500 uppercase tracking-wider font-medium text-xs">
                        <tr>
                            <th className="px-6 py-4">Project</th>
                            <th className="px-6 py-4">Location</th>
                            <th className="px-6 py-4">Date Added</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-100">
                        {projectList.length === 0 ? (
                            <tr>
                                <td colSpan={4} className="px-6 py-8 text-center text-neutral-400">No projects yet.</td>
                            </tr>
                        ) : (
                            projectList.map((project) => (
                                <tr key={project.id} className="hover:bg-neutral-50/50 transition-colors">
                                    <td className="px-6 py-4 font-bold text-neutral-900">
                                        <div className="flex items-center gap-4">
                                            {project.afterImageUrl && (
                                                <Image
                                                    src={project.afterImageUrl}
                                                    alt={`${project.title} - After Renovation`}
                                                    width={40}
                                                    height={40}
                                                    className="rounded object-cover bg-neutral-100"
                                                    unoptimized
                                                />
                                            )}
                                            {project.title}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-neutral-600">{project.location}</td>
                                    <td className="px-6 py-4 text-neutral-400 font-mono text-xs">
                                        {format(new Date(project.createdAt), 'MMM d, yyyy')}
                                    </td>
                                    <td className="px-6 py-4 text-right flex justify-end gap-2">
                                        <Link href={`/admin/projects/edit/${project.id}`} className="p-2 text-neutral-400 hover:text-tmt-orange hover:bg-orange-50 rounded transition-colors" title="Edit">
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
