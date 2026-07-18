export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "24px",
        background:
          "radial-gradient(circle at top,#16213a 0%,#0d1020 40%,#050505 100%)",
      }}
    >
      <div style={{ maxWidth: "900px" }}>
        <div
          style={{
            display: "inline-block",
            padding: "10px 22px",
            borderRadius: "999px",
            border: "1px solid rgba(255,255,255,.15)",
            background: "rgba(255,255,255,.05)",
            marginBottom: "30px",
            fontSize: "18px",
          }}
        >
          🚀 Building Trust Infrastructure for AI
        </div>

        <h1
          style={{
            fontSize: "72px",
            fontWeight: 800,
            lineHeight: 1.05,
            margin: 0,
          }}
        >
          Trust Every
          <br />
          AI Action.
        </h1>

        <p
          style={{
            marginTop: "32px",
            fontSize: "24px",
            color: "#A1A1AA",
            lineHeight: 1.8,
          }}
        >
          Verify identities, govern AI agents, and generate
          cryptographic proof for every important digital action.
        </p>

        <div
          style={{
            marginTop: "50px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <button
            style={{
              padding: "18px 42px",
              borderRadius: "16px",
              border: "none",
              background: "white",
              color: "black",
              fontSize: "20px",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Get Started
          </button>

          <button
            style={{
              padding: "18px 42px",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,.2)",
              background: "transparent",
              color: "white",
              fontSize: "20px",
              cursor: "pointer",
            }}
          >
            View Documentation
          </button>
        </div>
      </div>
    </section>
  );
}
