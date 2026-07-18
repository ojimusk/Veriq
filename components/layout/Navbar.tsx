"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-5 left-0 right-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-black/50 px-6 py-4 backdrop-blur-2xl shadow-2xl md:px-8">

          {/* Logo */}
          <Link
            href="/"
            className="text-3xl font-extrabold tracking-tight text-white"
          >
            Veriq
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden items-center gap-10 text-sm md:flex">
            <Link href="/" className="text-white/70 hover:text-white transition">
              Home
            </Link>

            <Link href="#" className="text-white/70 hover:text-white transition">
              Features
            </Link>

            <Link href="#" className="text-white/70 hover:text-white transition">
              Documentation
            </Link>

            <Link href="#" className="text-white/70 hover:text-white transition">
              Pricing
            </Link>

            <Link href="#" className="text-white/70 hover:text-white transition">
              Contact
            </Link>
          </nav>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <button className="rounded-xl bg-white px-6 py-3 font-semibold text-black transition duration-300 hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition md:hidden"
          >
            {!open ? (
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
            ) : (
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
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed left-0 right-0 top-24 z-40 px-4 transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0"
            : "pointer-events-none -translate-y-4 opacity-0"
        } md:hidden`}
      >
        <div className="rounded-3xl border border-white/10 bg-[#111111]/95 backdrop-blur-2xl shadow-2xl p-6">

          <nav className="flex flex-col">

            <Link className="border-b border-white/10 py-5 text-xl" href="/">
              Home
            </Link>

            <Link className="border-b border-white/10 py-5 text-xl" href="#">
              Features
            </Link>

            <Link className="border-b border-white/10 py-5 text-xl" href="#">
              Documentation
            </Link>

            <Link className="border-b border-white/10 py-5 text-xl" href="#">
              Pricing
            </Link>

            <Link className="border-b border-white/10 py-5 text-xl" href="#">
              Contact
            </Link>

            <button className="mt-6 rounded-2xl bg-white py-4 text-lg font-semibold text-black transition hover:scale-[1.02]">
              Get Started
            </button>

          </nav>
        </div>
      </div>
    </>
  );
          }
