'use client';

import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, Loader2, Upload, Save, Trash2 } from "lucide-react";
import Link from 'next/link';

// Using useParams from next/navigation for client components
import { useParams } from 'next/navigation';

export default function EditProject() {
    const router = useRouter();
    const params = useParams();
    const id = params.id;

    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [beforeImageUrl, setBeforeImageUrl] = useState<string | null>(null);
    const [afterImageUrl, setAfterImageUrl] = useState<string | null>(null);

    // Form state
    const [formData, setFormData] = useState({
        title: '',
        location: '',
        description: '',
    });

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const res = await fetch(`/api/admin/projects/${id}`);
                if (!res.ok) throw new Error('Failed to fetch project');
                const project = await res.json();

                setFormData({
                    title: project.title,
                    location: project.location || '',
                    description: project.description || '',
                });
                setBeforeImageUrl(project.beforeImageUrl);
                setAfterImageUrl(project.afterImageUrl);
            } catch (error) {
                console.error(error);
                alert('Failed to load project');
                router.push('/admin/projects');
            } finally {
                setIsLoading(false);
            }
        };

        if (id) fetchProject();
    }, [id, router]);

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, type: 'before' | 'after') => {
        const file = e.target.files?.[0];
        if (!file) return;

        try {
            const response = await fetch(`/api/upload?filename=${file.name}`, {
                method: 'POST',
                body: file,
            });
            const blob = await response.json();

            if (type === 'before') setBeforeImageUrl(blob.url);
            else setAfterImageUrl(blob.url);
        } catch (error) {
            console.error('Upload failed:', error);
            alert('Image upload failed');
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const data = {
            ...formData,
            beforeImageUrl,
            afterImageUrl,
        };

        try {
            const res = await fetch(`/api/admin/projects/${id}`, {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' },
            });

            if (!res.ok) throw new Error('Failed to update project');

            router.push('/admin/projects');
            router.refresh();
        } catch (error) {
            console.error(error);
            alert('Failed to update project');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleDelete = async () => {
        if (!confirm('Are you sure you want to delete this project? This cannot be undone.')) return;

        try {
            const res = await fetch(`/api/admin/projects/${id}`, {
                method: 'DELETE',
            });

            if (!res.ok) throw new Error('Failed to delete project');

            router.push('/admin/projects');
            router.refresh();
        } catch (error) {
            console.error(error);
            alert('Failed to delete project');
        }
    };

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-[50vh]">
                <Loader2 className="w-8 h-8 animate-spin text-neutral-400" />
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto space-y-6 pb-20">
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <Link href="/admin/projects" className="p-2 hover:bg-neutral-200 rounded-full transition-colors">
                        <ArrowLeft className="w-5 h-5 text-neutral-600" />
                    </Link>
                    <h1 className="text-3xl font-bold font-heading text-neutral-900">Edit Project</h1>
                </div>
                <button
                    onClick={handleDelete}
                    className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors font-medium text-sm border border-red-200"
                >
                    <Trash2 className="w-4 h-4" /> Delete Project
                </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-xl shadow-sm border border-neutral-200">
                {/* Title & Location */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-neutral-700">Project Title</label>
                        <input
                            required
                            type="text"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-tmt-orange focus:border-transparent outline-none"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-neutral-700">Location</label>
                        <input
                            type="text"
                            value={formData.location}
                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:border-transparent outline-none"
                        />
                    </div>
                </div>

                {/* Images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-neutral-700">Before Image</label>
                        <div className="flex flex-col gap-4">
                            <div className="w-full h-48 bg-neutral-100 rounded-lg border-2 border-dashed border-neutral-300 flex items-center justify-center overflow-hidden relative group">
                                {beforeImageUrl ? (
                                    <div className="relative w-full h-48 rounded-lg overflow-hidden border border-neutral-200">
                                        <Image src={beforeImageUrl} alt="Before preview" fill className="object-cover" unoptimized />
                                    </div>
                                ) : (
                                    <Upload className="w-8 h-8 text-neutral-400" />
                                )}
                            </div>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => handleImageUpload(e, 'before')}
                                className="block w-full text-sm text-neutral-500
                                file:mr-4 file:py-2 file:px-4
                                file:rounded-full file:border-0
                                file:text-sm file:font-semibold
                                file:bg-neutral-100 file:text-neutral-700
                                hover:file:bg-neutral-200
                                "
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-neutral-700">After Image</label>
                        <div className="flex flex-col gap-4">
                            <div className="w-full h-48 bg-neutral-100 rounded-lg border-2 border-dashed border-neutral-300 flex items-center justify-center overflow-hidden relative group">
                                {afterImageUrl ? (
                                    <div className="relative w-full h-48 rounded-lg overflow-hidden border border-neutral-200">
                                        <Image src={afterImageUrl} alt="After preview" fill className="object-cover" unoptimized />
                                    </div>
                                ) : (
                                    <Upload className="w-8 h-8 text-neutral-400" />
                                )}
                            </div>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => handleImageUpload(e, 'after')}
                                className="block w-full text-sm text-neutral-500
                                file:mr-4 file:py-2 file:px-4
                                file:rounded-full file:border-0
                                file:text-sm file:font-semibold
                                file:bg-tmt-orange file:text-white
                                hover:file:bg-orange-600
                                "
                            />
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div className="space-y-2">
                    <label className="text-sm font-bold text-neutral-700">Description</label>
                    <textarea
                        rows={5}
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-tmt-orange outline-none"
                    />
                </div>

                <div className="flex items-center justify-end pt-6 border-t border-neutral-100">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex items-center gap-2 px-8 py-3 bg-tmt-orange text-white font-bold rounded-lg hover:bg-orange-600 transition-colors shadow-lg hover:shadow-orange-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="w-4 h-4 animate-spin" /> Saving...
                            </>
                        ) : (
                            <>
                                <Save className="w-4 h-4" /> Update Project
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}
