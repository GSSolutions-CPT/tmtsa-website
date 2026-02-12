'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Loader2, Upload, Save, ArrowLeft, Trash2 } from 'lucide-react';
import Link from 'next/link';

// Using useParams from next/navigation for client components
import { useParams } from 'next/navigation';

export default function EditBlogPost() {
    const router = useRouter();
    const params = useParams();
    const id = params.id;

    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    // Form state
    const [formData, setFormData] = useState({
        title: '',
        slug: '',
        content: '',
        isPublished: false,
    });

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await fetch(`/api/admin/blog/${id}`);
                if (!res.ok) throw new Error('Failed to fetch post');
                const post = await res.json();

                setFormData({
                    title: post.title,
                    slug: post.slug,
                    content: post.content,
                    isPublished: post.isPublished,
                });
                setImageUrl(post.imageUrl);
            } catch (error) {
                console.error(error);
                alert('Failed to load post');
                router.push('/admin/blog');
            } finally {
                setIsLoading(false);
            }
        };

        if (id) fetchPost();
    }, [id, router]);

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        try {
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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const data = {
            ...formData,
            imageUrl,
        };

        try {
            const res = await fetch(`/api/admin/blog/${id}`, {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' },
            });

            if (!res.ok) throw new Error('Failed to update post');

            router.push('/admin/blog');
            router.refresh();
        } catch (error) {
            console.error(error);
            alert('Failed to update post');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleDelete = async () => {
        if (!confirm('Are you sure you want to delete this post? This cannot be undone.')) return;

        try {
            const res = await fetch(`/api/admin/blog/${id}`, {
                method: 'DELETE',
            });

            if (!res.ok) throw new Error('Failed to delete post');

            router.push('/admin/blog');
            router.refresh();
        } catch (error) {
            console.error(error);
            alert('Failed to delete post');
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
                    <Link href="/admin/blog" className="p-2 hover:bg-neutral-200 rounded-full transition-colors">
                        <ArrowLeft className="w-5 h-5 text-neutral-600" />
                    </Link>
                    <h1 className="text-3xl font-bold font-heading text-neutral-900">Edit Post</h1>
                </div>
                <button
                    onClick={handleDelete}
                    className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors font-medium text-sm border border-red-200"
                >
                    <Trash2 className="w-4 h-4" /> Delete Post
                </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-xl shadow-sm border border-neutral-200">
                {/* Title & Slug */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-neutral-700">Title</label>
                        <input
                            required
                            type="text"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-tmt-orange focus:border-transparent outline-none"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-neutral-700">Slug (URL)</label>
                        <input
                            required
                            type="text"
                            value={formData.slug}
                            onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
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
                                <div className="relative w-full h-full rounded-lg overflow-hidden border border-neutral-200">
                                    <Image src={imageUrl} alt="Preview" fill className="object-cover" unoptimized />
                                </div>
                            ) : (
                                <Upload className="w-8 h-8 text-neutral-400" />
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
                        </div>
                    </div>
                </div>

                {/* Content Editor */}
                <div className="space-y-2">
                    <label className="text-sm font-bold text-neutral-700">Content (HTML Supported)</label>
                    <textarea
                        required
                        rows={15}
                        value={formData.content}
                        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-tmt-orange outline-none font-mono text-sm"
                    />
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-neutral-100">
                    <label className="flex items-center gap-3 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={formData.isPublished}
                            onChange={(e) => setFormData({ ...formData, isPublished: e.target.checked })}
                            className="w-5 h-5 text-tmt-orange rounded focus:ring-tmt-orange border-gray-300"
                        />
                        <span className="font-medium text-neutral-700">Published</span>
                    </label>

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
                                <Save className="w-4 h-4" /> Update Post
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}
