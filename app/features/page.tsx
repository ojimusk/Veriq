export default function FeaturesPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050505",
        color: "white",
        padding: "120px 24px",
      }}
    >
      <div
        style={{
          maxWidth: 1000,
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "52px",
            fontWeight: 800,
            marginBottom: 20,
          }}
        >
          Features
        </h1>

        <p
          style={{
            color: "#9ca3af",
            fontSize: 20,
            marginBottom: 60,
            lineHeight: 1.8,
          }}
        >
          Everything you need to build trust for AI.
        </p>

        <div
          style={{
            display: "grid",
            gap: 24,
          }}
        >
          {[
            {
              title: "Identity Verification",
              desc: "Verify humans, organizations and AI identities."
            },
            {
              title: "AI Agent Registry",
              desc: "Register trusted AI agents on-chain."
            },
            {
              title: "Proof Engine",
              desc: "Generate cryptographic proof for every action."
            },
            {
              title: "Developer API",
              desc: "Simple REST API and SDK."
            }
          ].map((item) => (
            <div
              key={item.title}
              style={{
                padding: 30,
                borderRadius: 20,
                background: "#111",
                border: "1px solid #222",
              }}
            >
              <h2
                style={{
                  fontSize: 28,
                  marginBottom: 12,
                }}
              >
                {item.title}
              </h2>

              <p
                style={{
                  color: "#999",
                  lineHeight: 1.7,
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
