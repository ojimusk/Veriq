"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] =useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#0B0B0B]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          href="/"
          className="text-4xl font-extrabold tracking-tight text-white"
        >
          Veriq
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-10 md:flex">
          <Link href="/" className="text-white/70 transition hover:text-white">
            Home
          </Link>

          <Link
            href="#"
            className="text-white/70 transition hover:text-white"
          >
            Features
          </Link>

          <Link
            href="#"
            className="text-white/70 transition hover:text-white"
          >
            Documentation
          </Link>

          <Link
            href="#"
            className="text-white/70 transition hover:text-white"
          >
            Pricing
          </Link>

          <Link
            href="#"
            className="text-white/70 transition hover:text-white"
          >
            Contact
          </Link>
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <button className="rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:scale-105">
            Get Started
          </button>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 md:hidden"
        >
          {open ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="white"
              strokeWidth="2"
              fill="none"
            >
              <path d="M6 6L18 18" />
              <path d="M18 6L6 18" />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="white"
              strokeWidth="2"
              fill="none"
            >
              <path d="M3 6H21" />
              <path d="M3 12H21" />
              <path d="M3 18H21" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-[500px]" : "max-h-0"
        } md:hidden`}
      >
        <div className="border-t border-white/10 bg-[#111111] px-6 py-6">

          <div className="flex flex-col gap-6 text-lg">

            <Link href="/">Home</Link>

            <Link href="#">Features</Link>

            <Link href="#">Documentation</Link>

            <Link href="#">Pricing</Link>

            <Link href="#">Contact</Link>

            <button className="mt-4 rounded-xl bg-white py-4 font-semibold text-black">
              Get Started
            </button>

          </div>
        </div>
      </div>
    </header>
  );
}
