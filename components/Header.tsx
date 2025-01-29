// components/Header.tsx

import React from "react";

export default function Header() {
    return (
        <header className="bg-blue-600 text-white p-4">
            <div className="max-w-5xl mx-auto flex items-center justify-between">
                <h1 className="text-xl font-bold">중앙적성검사</h1>
                {/*
          Optional nav items or user info could go here:
          <nav>
            <ul className="flex space-x-4">
              <li>Home</li>
              <li>About</li>
            </ul>
          </nav>
        */}
            </div>
        </header>
    );
}
