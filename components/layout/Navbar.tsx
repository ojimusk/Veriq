"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0B0B0B]/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold text-white">
          Veriq
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-white hover:text-gray-300">
            Home
          </Link>

          <Link href="/features" className="text-white hover:text-gray-300">
            Features
          </Link>

          <Link href="/docs" className="text-white hover:text-gray-300">
            Documentation
          </Link>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
        >
          <span className="text-3xl">
            {open ? "✕" : "☰"}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-white/10 bg-[#0B0B0B] md:hidden">
          <nav className="flex flex-col p-6">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="py-3 text-white"
            >
              Home
            </Link>

            <Link
              href="/features"
              onClick={() => setOpen(false)}
              className="py-3 text-white"
            >
              Features
            </Link>

            <Link
              href="/docs"
              onClick={() => setOpen(false)}
              className="py-3 text-white"
            >
              Documentation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
