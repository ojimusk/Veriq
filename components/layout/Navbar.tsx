"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

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
          zIndex: 999,
          backdropFilter: "blur(16px)",
          background: "rgba(5,5,5,.75)",
          borderBottom: "1px solid #1f1f1f",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link
            href="/"
            style={{
              color: "white",
              fontWeight: 800,
              fontSize: 42,
              textDecoration: "none",
            }}
          >
            Veriq
          </Link>

          <button
            onClick={() => setOpen(!open)}
            style={{
              width: 58,
              height: 58,
              borderRadius: 16,
              border: "1px solid #2d2d2d",
              background: "#171717",
              color: "white",
              cursor: "pointer",
            }}
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </header>

      {open && (
        <div
          style={{
            position: "fixed",
            top: 100,
            left: 20,
            right: 20,
            background: "#111",
            borderRadius: 24,
            padding: 30,
            border: "1px solid #222",
            zIndex: 998,
          }}
        >
          {[
            ["Home", "/"],
            ["Features", "/features"],
            ["Documentation", "/docs"],
            ["Pricing", "/pricing"],
            ["Contact", "/contact"],
          ].map(([title, href]) => (
            <Link
              key={title}
              href={href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                color: "white",
                textDecoration: "none",
                padding: "18px 0",
                borderBottom: "1px solid #222",
                fontSize: 28,
              }}
            >
              {title}
            </Link>
          ))}

          <button
            style={{
              width: "100%",
              marginTop: 30,
              padding: "18px",
              borderRadius: 16,
              border: "none",
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
