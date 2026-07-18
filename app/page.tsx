export default function Home() {
  return (
    <main
      style={{
        background: "#050505",
        minHeight: "100vh",
        color: "white",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Glow kiri */}
      <div
        style={{
          position: "absolute",
          width: 420,
          height: 420,
          borderRadius: "50%",
          background: "#2563eb",
          filter: "blur(180px)",
          opacity: 0.25,
          top: -120,
          left: -120,
        }}
      />

      {/* Glow kanan */}
      <div
        style={{
          position: "absolute",
          width: 380,
          height: 380,
          borderRadius: "50%",
          background: "#7c3aed",
          filter: "blur(180px)",
          opacity: 0.2,
          top: 120,
          right: -120,
        }}
      />

      <section
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding: "90px 24px",
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "8px 16px",
            border: "1px solid #333",
            borderRadius: 999,
            background: "rgba(255,255,255,.04)",
            marginBottom: 24,
          }}
        >
          🚀 Building Trust Infrastructure for AI
        </div>

        <h1
          style={{
            fontSize: "clamp(44px,8vw,88px)",
            fontWeight: 800,
            lineHeight: 1,
            marginBottom: 24,
          }}
        >
          Trust Every
          <br />
          AI Action.
        </h1>

        <p
          style={{
            color: "#A1A1AA",
            maxWidth: 720,
            margin: "0 auto",
            fontSize: 20,
            lineHeight: 1.8,
          }}
        >
          Verify identities, govern AI agents, and generate cryptographic proof
          for every important digital action.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 16,
            marginTop: 40,
            flexWrap: "wrap",
          }}
        >
          <button
            style={{
              background: "white",
              color: "black",
              border: "none",
              borderRadius: 12,
              padding: "16px 28px",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Get Started
          </button>

          <button
            style={{
              background: "transparent",
              color: "white",
              border: "1px solid #444",
              borderRadius: 12,
              padding: "16px 28px",
              cursor: "pointer",
            }}
          >
            View Documentation
          </button>
        </div>

        <div
          style={{
            marginTop: 80,
            borderRadius: 24,
            border: "1px solid #222",
            background: "#0B0B0B",
            height: 420,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#666",
            fontSize: 24,
          }}
        >
          Dashboard Preview (Coming Soon)
        </div>
      </section>
    </main>
  );
          }
