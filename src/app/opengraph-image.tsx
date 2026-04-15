import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#0f172a",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px 100px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Blue glow */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: 100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(37,99,235,0.3) 0%, transparent 70%)",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(34,197,94,0.1)",
            border: "1px solid rgba(34,197,94,0.3)",
            borderRadius: 999,
            padding: "6px 16px",
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#22c55e",
            }}
          />
          <span style={{ color: "#4ade80", fontSize: 16, fontWeight: 600 }}>
            Available for work
          </span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: "white",
            lineHeight: 1.1,
            marginBottom: 16,
          }}
        >
          M Ilham Ramdani
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 36,
            fontWeight: 700,
            color: "#60a5fa",
            marginBottom: 24,
          }}
        >
          Fullstack Developer & Web System Integrator
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: 20,
            color: "#94a3b8",
            maxWidth: 700,
            lineHeight: 1.6,
            marginBottom: 48,
          }}
        >
          Berpengalaman membangun sistem untuk sektor kesehatan dan industri — DMS, manajemen risiko, dan integrasi API enterprise.
        </div>

        {/* Tech stack pills */}
        <div style={{ display: "flex", gap: 12 }}>
          {["Laravel", "Next.js", "Node.js", "MySQL", "REST API"].map((tech) => (
            <div
              key={tech}
              style={{
                background: "rgba(37,99,235,0.15)",
                border: "1px solid rgba(37,99,235,0.4)",
                borderRadius: 8,
                padding: "8px 16px",
                color: "#93c5fd",
                fontSize: 16,
                fontWeight: 600,
              }}
            >
              {tech}
            </div>
          ))}
        </div>

        {/* Bottom domain */}
        <div
          style={{
            position: "absolute",
            bottom: 48,
            right: 100,
            fontSize: 22,
            fontWeight: 700,
            color: "#475569",
          }}
        >
          ilham<span style={{ color: "#2563eb" }}>.</span>dev
        </div>
      </div>
    ),
    { ...size }
  );
}
