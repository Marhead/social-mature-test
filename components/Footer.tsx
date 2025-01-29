// components/Footer.tsx

import React from "react";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-4 mt-auto">
            <div className="max-w-5xl mx-auto text-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} 중앙적성검사. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
