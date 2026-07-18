"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menus = [
    "Home",
    "Features",
    "Documentation",
    "Pricing",
    "Contact",
  ];

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full">
        <div className="mx-auto max-w-7xl px-5 pt-5">
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#0d1120]/80 px-6 py-4 backdrop-blur-xl">

            <Link
              href="/"
              className="text-3xl font-extrabold tracking-tight text-white"
            >
              Veriq
            </Link>

            <nav className="hidden items-center gap-10 text-gray-300 lg:flex">
              {menus.map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="transition hover:text-white"
                >
                  {item}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:block">
              <button className="rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:scale-105">
                Get Started
              </button>
            </div>

            <button
              onClick={() => setOpen(!open)}
              className="flex h-12 w-12 flex-col items-center justify-center gap-1 rounded-xl border border-white/10 lg:hidden"
            >
              <span
                className={`block h-0.5 w-6 bg-white transition ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-white transition ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-white transition ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </button>

          </div>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              open ? "mt-4 max-h-[500px]" : "max-h-0"
            }`}
          >
            <div className="rounded-3xl border border-white/10 bg-[#111111]/95 p-7 backdrop-blur-xl">

              <div className="flex flex-col gap-6">

                {menus.map((item) => (
                  <Link
                    key={item}
                    href="#"
                    onClick={() => setOpen(false)}
                    className="border-b border-white/10 pb-5 text-2xl text-white"
                  >
                    {item}
                  </Link>
                ))}

                <button className="mt-3 rounded-2xl bg-white py-4 text-lg font-semibold text-black">
                  Get Started
                </button>

              </div>
            </div>
          </div>

        </div>
      </header>
    </>
  );
}
