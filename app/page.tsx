'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const router = useRouter();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        // Simple demo login: "admin"/"admin"
        if (username === 'admin' && password === 'admin') {
            localStorage.setItem('isLoggedIn', 'true');
            router.push('/survey');
        } else {
            alert('Invalid credentials. Try "admin" / "admin".');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8 text-center">
            <h1 className="text-2xl font-bold mb-4">Welcome to Mind Testing Survey</h1>
            <p className="mb-4 text-gray-700">
                Please log in to proceed to the test.
            </p>

            <form onSubmit={handleLogin} className="space-y-4">
                <div>
                    <input
                        type="text"
                        value={username}
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none
                       focus:ring-2 focus:ring-blue-400"
                    />
                </div>
                <div>
                    <input
                        type="password"
                        value={password}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none
                       focus:ring-2 focus:ring-blue-400"
                    />
                </div>
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded
                     hover:bg-blue-600 transition-colors"
                >
                    Log In
                </button>
            </form>
        </div>
    );
}
