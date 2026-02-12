'use client';

import { useActionState } from 'react';
import { authenticate } from '@/app/lib/actions';
import { Loader2 } from 'lucide-react';

export default function LoginPage() {
    const [errorMessage, dispatch, isPending] = useActionState(authenticate, undefined);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                <h1 className="mb-6 text-2xl font-bold text-center text-gray-900">
                    Admin Login
                </h1>
                <form action={dispatch} className="space-y-4">
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-tmt-orange"
                            id="email"
                            type="email"
                            name="email"
                            placeholder="admin@example.com"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-tmt-orange"
                            id="password"
                            type="password"
                            name="password"
                            placeholder="••••••••"
                            required
                            minLength={6}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        {/* Add simplified checkbox if needed */}
                    </div>
                    <div>
                        <button
                            className="w-full px-4 py-2 font-bold text-white bg-tmt-orange rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 flex justify-center items-center gap-2 disabled:opacity-50"
                            aria-disabled={isPending}
                        >
                            {isPending && <Loader2 className="w-4 h-4 animate-spin" />}
                            Log in
                        </button>
                    </div>
                    <div
                        className="flex h-8 items-end space-x-1"
                        aria-live="polite"
                        aria-atomic="true"
                    >
                        {errorMessage && (
                            <p className="text-sm text-red-500">{errorMessage}</p>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}
