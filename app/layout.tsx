import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Veriq",
  description:
    "Trust Infrastructure for AI. Verify identities, govern AI agents, and generate cryptographic proof.",
  applicationName: "Veriq",
  keywords: [
    "AI",
    "Verification",
    "Identity",
    "Proof",
    "Security",
    "Trust",
    "Web3",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          background: "#050505",
          color: "#ffffff",
          fontFamily:
            "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
