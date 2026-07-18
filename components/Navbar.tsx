"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const menus = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "Documentation", href: "/docs" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "rgba(5,5,5,0.85)",
        backdropFilter: "blur(18px)",
        borderBottom: "1px solid #1f1f1f",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "18px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link
          href="/"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: 38,
            fontWeight: 800,
          }}
        >
          Veriq
        </Link>

        <nav
          style={{
            display: "flex",
            gap: 18,
            alignItems: "center",
          }}
        >
          {menus.map((menu) => (
            <Link
              key={menu.href}
              href={menu.href}
              style={{
                textDecoration: "none",
                color: pathname === menu.href ? "#000" : "#fff",
                background:
                  pathname === menu.href ? "#fff" : "transparent",
                padding: "10px 18px",
                borderRadius: 12,
                border: "1px solid #2a2a2a",
                transition: "0.2s",
                fontWeight: 600,
              }}
            >
              {menu.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
