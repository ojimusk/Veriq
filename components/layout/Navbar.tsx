"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: "28px 32px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link
            href="/"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontSize: "28px",
              fontWeight: 800,
            }}
          >
            Veriq
          </Link>

          <button
            onClick={() => setOpen(!open)}
            style={{
              width: 64,
              height: 64,
              borderRadius: 20,
              border: "1px solid rgba(255,255,255,.1)",
              background: "rgba(255,255,255,.05)",
              color: "#fff",
              fontSize: 34,
              cursor: "pointer",
            }}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </header>

      {open && (
        <div
          style={{
            position: "fixed",
            top: 110,
            left: 30,
            right: 30,
            background: "#121212",
            border: "1px solid rgba(255,255,255,.08)",
            borderRadius: 30,
            padding: 36,
            zIndex: 999,
            boxShadow: "0 20px 60px rgba(0,0,0,.45)",
          }}
        >
          {[
            "Home",
            "Features",
            "Documentation",
            "Pricing",
            "Contact",
          ].map((item) => (
            <div
              key={item}
              style={{
                padding: "22px 0",
                borderBottom: "1px solid rgba(255,255,255,.08)",
                fontSize: 20,
              }}
            >
              <Link
                href="/"
                onClick={() => setOpen(false)}
                style={{
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                {item}
              </Link>
            </div>
          ))}

          <button
            style={{
              width: "100%",
              marginTop: 28,
              height: 64,
              borderRadius: 18,
              border: "none",
              background: "#fff",
              color: "#000",
              fontWeight: 700,
              fontSize: 20,
              cursor: "pointer",
            }}
          >
            Get Started
          </button>
        </div>
      )}
    </>
  );
            }
