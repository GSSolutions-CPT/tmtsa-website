'use client';

import { useState } from 'react';
import { useRouter } from "next/navigation";
import Image from "next/image";
import { LucideArrowLeft, LucideLoader2, LucideUpload, LucideSave } from "lucide-react";
import Link from 'next/link';

export default function CreateBlogPost() {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        try {
            const formData = new FormData();
            formData.append('file', file);

            // Re-use our specialized upload route or create a general one?
            // Let's use the one we created for the Quote Engine which is generic enough
            // But wait, that one specifically takes specific query params? No, just filename.

            const response = await fetch(`/api/upload?filename=${file.name}`, {
                method: 'POST',
                body: file,
            });
            const blob = await response.json();
            setImageUrl(blob.url);
        } catch (error) {
            console.error('Upload failed:', error);
            alert('Image upload failed');
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const data = {
            title: formData.get('title'),
            slug: formData.get('slug'),
            content: formData.get('content'),
            imageUrl: imageUrl,
            isPublished: formData.get('isPublished') === 'on',
        };

        try {
            const res = await fetch('/api/admin/blog', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' },
            });

            if (!res.ok) throw new Error('Failed to create post');

            router.push('/admin/blog');
            router.refresh();
        } catch (error) {
            console.error(error);
            alert('Failed to save post');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto space-y-6 pb-20">
            <div className="flex items-center gap-4">
                <Link href="/admin/blog" className="p-2 hover:bg-neutral-200 rounded-full transition-colors">
                    <LucideArrowLeft className="w-5 h-5 text-neutral-600" />
                </Link>
                <h1 className="text-3xl font-bold font-heading text-neutral-900">Create New Post</h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-xl shadow-sm border border-neutral-200">

                {/* Title & Slug */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-neutral-700">Title</label>
                        <input
                            required
                            name="title"
                            type="text"
                            placeholder="e.g. 5 Tips for Waterproofing"
                            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-tmt-orange focus:border-transparent outline-none"
                            onChange={(e) => {
                                // Simple auto-slug
                                const slug = e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
                                (document.getElementById('slug') as HTMLInputElement).value = slug;
                            }}
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-neutral-700">Slug (URL)</label>
                        <input
                            required
                            id="slug"
                            name="slug"
                            type="text"
                            placeholder="e.g. 5-tips-for-waterproofing"
                            className="w-full px-4 py-2 border border-neutral-300 rounded-lg bg-neutral-50 font-mono text-sm"
                        />
                    </div>
                </div>

                {/* Image Upload */}
                <div className="space-y-2">
                    <label className="text-sm font-bold text-neutral-700">Cover Image</label>
                    <div className="flex items-center gap-6">
                        <div className="shrink-0 w-32 h-32 bg-neutral-100 rounded-lg border-2 border-dashed border-neutral-300 flex items-center justify-center overflow-hidden relative">
                            {imageUrl ? (
                                <div className="relative w-full h-full rounded-lg overflow-hidden">
                                    <Image src={imageUrl} alt="Cover preview" fill className="object-cover" unoptimized />
                                </div>
                            ) : (
                                <LucideUpload className="w-8 h-8 text-neutral-400" />
                            )}
                        </div>
                        <div className="flex-1">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="block w-full text-sm text-neutral-500
                                file:mr-4 file:py-2 file:px-4
                                file:rounded-full file:border-0
                                file:text-sm file:font-semibold
                                file:bg-tmt-orange file:text-white
                                hover:file:bg-orange-600
                                "
                            />
                            <p className="text-xs text-neutral-500 mt-2">Recommended: 1200x630px JPG or PNG.</p>
                        </div>
                    </div>
                </div>

                {/* Content Editor (Simple Textarea for now, Rich Text later if needed) */}
                <div className="space-y-2">
                    <label className="text-sm font-bold text-neutral-700">Content (HTML Supported)</label>
                    <textarea
                        required
                        name="content"
                        rows={15}
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-tmt-orange outline-none font-mono text-sm"
                        placeholder="<p>Write your article content here...</p>"
                    />
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-neutral-100">
                    <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" name="isPublished" className="w-5 h-5 text-tmt-orange rounded focus:ring-tmt-orange border-gray-300" />
                        <span className="font-medium text-neutral-700">Publish Immediately</span>
                    </label>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex items-center gap-2 px-8 py-3 bg-tmt-orange text-white font-bold rounded-lg hover:bg-orange-600 transition-colors shadow-lg hover:shadow-orange-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? (
                            <>
                                <LucideLoader2 className="w-4 h-4 animate-spin" /> Saving...
                            </>
                        ) : (
                            <>
                                <LucideSave className="w-4 h-4" /> Save Post
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}
