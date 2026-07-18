export default function Navbar() {
  return (
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
        {/* Logo */}
        <h2
          style={{
            margin: 0,
            fontSize: "32px",
            fontWeight: 800,
          }}
        >
          Veriq
        </h2>

        {/* Hamburger */}
        <button
          style={{
            width: "52px",
            height: "52px",
            borderRadius: "14px",
            border: "1px solid rgba(255,255,255,.12)",
            background: "rgba(255,255,255,.05)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "6px",
            cursor: "pointer",
          }}
        >
          <span
            style={{
              width: "22px",
              height: "2px",
              background: "white",
              borderRadius: "999px",
            }}
          />

          <span
            style={{
              width: "22px",
              height: "2px",
              background: "white",
              borderRadius: "999px",
            }}
          />

          <span
            style={{
              width: "22px",
              height: "2px",
              background: "white",
              borderRadius: "999px",
            }}
          />
        </button>
      </div>
    </header>
  );
}
