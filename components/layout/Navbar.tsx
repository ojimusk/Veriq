export default function Navbar() {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "20px 30px",
        background: "rgba(5,5,5,.6)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,.08)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: "28px",
            fontWeight: 800,
          }}
        >
          Veriq
        </h2>

        <div
          style={{
            display: "flex",
            gap: "14px",
          }}
        >
          <button
            style={{
              background: "transparent",
              color: "white",
              border: "none",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Docs
          </button>

          <button
            style={{
              background: "transparent",
              color: "white",
              border: "none",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Pricing
          </button>

          <button
            style={{
              background: "transparent",
              color: "white",
              border: "none",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Login
          </button>

          <button
            style={{
              padding: "10px 18px",
              borderRadius: "12px",
              border: "none",
              background: "white",
              color: "black",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
