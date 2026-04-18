import { profile } from "../data";

export default function Footer() {
  return (
    <footer style={{
      background: "#0b0b14",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      padding: "32px 0",
    }}>
      <div className="container" style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 16,
      }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{
            width: 32, height: 32, borderRadius: 8,
            background: "linear-gradient(135deg,#6366f1,#22d3ee)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#fff", fontWeight: 800, fontSize: 12,
          }}>RH</span>
          <span style={{ fontSize: 14, color: "#64748b" }}>{profile.name}</span>
        </div>

        <p style={{ fontSize: 13, color: "#334155", textAlign: "center" }}>
          © {new Date().getFullYear()} {profile.name} · Built with React & Tailwind CSS
        </p>

        <a href={`mailto:${profile.email}`} style={{ fontSize: 13, color: "#818cf8", textDecoration: "none" }}
          onMouseEnter={e => e.target.style.color = "#a5b4fc"}
          onMouseLeave={e => e.target.style.color = "#818cf8"}>
          {profile.email}
        </a>
      </div>
    </footer>
  );
}
