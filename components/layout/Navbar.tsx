"use client";

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
          zIndex: 100,
          background: "rgba(5,5,5,.65)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,.08)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "18px 22px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "32px",
              fontWeight: 800,
            }}
          >
            Veriq
          </h2>

          <button
            onClick={() => setOpen(!open)}
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "14px",
              border: "1px solid rgba(255,255,255,.12)",
              background: "rgba(255,255,255,.05)",
              color: "white",
              fontSize: "24px",
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
            top: "90px",
            left: "20px",
            right: "20px",
            background: "#111",
            borderRadius: "20px",
            border: "1px solid rgba(255,255,255,.08)",
            padding: "24px",
            zIndex: 99,
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
                padding: "16px 0",
                borderBottom: "1px solid rgba(255,255,255,.06)",
                fontSize: "20px",
              }}
            >
              {item}
            </div>
          ))}

          <button
            style={{
              width: "100%",
              marginTop: "24px",
              padding: "16px",
              borderRadius: "14px",
              border: "none",
              background: "white",
              color: "black",
              fontWeight: 700,
              fontSize: "18px",
            }}
          >
            Get Started
          </button>
        </div>
      )}
    </>
  );
}
