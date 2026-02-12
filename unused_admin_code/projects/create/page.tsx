'use client';

import { useState } from 'react';
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, Loader2, Upload, Save } from "lucide-react";
import Link from 'next/link';

export default function CreateProject() {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [beforeImage, setBeforeImage] = useState<string | null>(null);
    const [afterImage, setAfterImage] = useState<string | null>(null);

    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>, type: 'before' | 'after') => {
        const file = e.target.files?.[0];
        if (!file) return;

        try {
            const response = await fetch(`/api/upload?filename=${file.name}`, {
                method: 'POST',
                body: file,
            });
            const blob = await response.json();
            if (type === 'before') setBeforeImage(blob.url);
            else setAfterImage(blob.url);
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
            location: formData.get('location'),
            description: formData.get('description'),
            beforeImageUrl: beforeImage,
            afterImageUrl: afterImage,
        };

        try {
            const res = await fetch('/api/admin/projects', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' },
            });

            if (!res.ok) throw new Error('Failed to create project');

            router.push('/admin/projects');
            router.refresh();
        } catch (error) {
            console.error(error);
            alert('Failed to save project');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto space-y-6 pb-20">
            <div className="flex items-center gap-4">
                <Link href="/admin/projects" className="p-2 hover:bg-neutral-200 rounded-full transition-colors">
                    <ArrowLeft className="w-5 h-5 text-neutral-600" />
                </Link>
                <h1 className="text-3xl font-bold font-heading text-neutral-900">Add New Project</h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-xl shadow-sm border border-neutral-200">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-neutral-700">Project Title</label>
                        <input
                            required
                            name="title"
                            type="text"
                            placeholder="e.g. Victorian Roof Restoration"
                            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-tmt-orange outline-none"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-neutral-700">Location</label>
                        <input
                            name="location"
                            type="text"
                            placeholder="e.g. Sea Point, Cape Town"
                            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-tmt-orange outline-none"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Before Image */}
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-neutral-700">Before Photo</label>
                        <div className="w-full h-48 bg-neutral-100 rounded-lg border-2 border-dashed border-neutral-300 flex items-center justify-center overflow-hidden relative group">
                            {beforeImage ? (
                                <div className="relative w-full h-48 rounded-lg overflow-hidden border border-neutral-200">
                                    <Image src={beforeImage} alt="Before preview" fill className="object-cover" unoptimized />
                                </div>
                            ) : (
                                <Upload className="w-8 h-8 text-neutral-400" />
                            )}
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => handleUpload(e, 'before')}
                                className="absolute inset-0 opacity-0 cursor-pointer"
                            />
                        </div>
                    </div>

                    {/* After Image */}
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-neutral-700">After Photo</label>
                        <div className="w-full h-48 bg-neutral-100 rounded-lg border-2 border-dashed border-neutral-300 flex items-center justify-center overflow-hidden relative group">
                            {afterImage ? (
                                <div className="relative w-full h-48 rounded-lg overflow-hidden border border-neutral-200">
                                    <Image src={afterImage} alt="After preview" fill className="object-cover" unoptimized />
                                </div>
                            ) : (
                                <Upload className="w-8 h-8 text-neutral-400" />
                            )}
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => handleUpload(e, 'after')}
                                className="absolute inset-0 opacity-0 cursor-pointer"
                            />
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-neutral-700">Project Description</label>
                    <textarea
                        name="description"
                        rows={4}
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-tmt-orange outline-none"
                        placeholder="Describe the challenges and solution..."
                    />
                </div>

                <div className="flex items-center justify-end pt-6 border-t border-neutral-100">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex items-center gap-2 px-8 py-3 bg-tmt-orange text-white font-bold rounded-lg hover:bg-orange-600 transition-colors shadow-lg hover:shadow-orange-500/20 disabled:opacity-50"
                    >
                        {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                        Save Project
                    </button>
                </div>
            </form>
        </div>
    );
}
