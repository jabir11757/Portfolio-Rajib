import { profile } from "../data";

const badges = ["IT Professional", "Frontend Developer", "Networking", "Lead Generation"];

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "radial-gradient(ellipse 80% 60% at 20% 40%, rgba(99,102,241,0.13) 0%, transparent 65%), radial-gradient(ellipse 60% 50% at 80% 10%, rgba(34,211,238,0.08) 0%, transparent 60%), #0b0b14",
        position: "relative",
        overflow: "hidden",
        paddingTop: 100,
        paddingBottom: 60,
      }}
    >
      {/* Grid overlay */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.025,
        backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
      }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Two-col layout */}
        <div style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 64,
          flexWrap: "wrap",
        }}>
          {/* LEFT — text */}
          <div style={{ flex: "1 1 320px" }}>
            {/* Status */}
            <div className="anim-up d1" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "6px 14px", borderRadius: 9999,
              background: "rgba(52,211,153,0.08)", border: "1px solid rgba(52,211,153,0.25)",
              color: "#34d399", fontSize: 12, fontWeight: 500, marginBottom: 24,
            }}>
              <span className="blink" style={{ width: 7, height: 7, borderRadius: "50%", background: "#34d399", display: "inline-block" }} />
              Available for Opportunities
            </div>

            {/* Name */}
            <h1 className="anim-up d2" style={{ fontSize: "clamp(2.2rem, 6vw, 3.8rem)", fontWeight: 900, lineHeight: 1.1, marginBottom: 16, letterSpacing: "-0.02em" }}>
              <span style={{ color: "#f1f5f9" }}>Md </span>
              <span className="text-gradient">Rajib Hossain</span>
            </h1>

            {/* Title */}
            <p className="anim-up d3" style={{ fontSize: "clamp(1rem, 2.5vw, 1.2rem)", color: "#94a3b8", fontWeight: 500, marginBottom: 8 }}>
              {profile.title}
            </p>
            <p className="anim-up d3" style={{ fontSize: 13, color: "#475569", marginBottom: 20 }}>
              {profile.subtitle}
            </p>

            {/* About */}
            <p className="anim-up d4" style={{ fontSize: 15, color: "#94a3b8", lineHeight: 1.75, maxWidth: 520, marginBottom: 28 }}>
              {profile.about}
            </p>

            {/* Badge chips */}
            <div className="anim-up d5" style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 36 }}>
              {badges.map(b => (
                <span key={b} style={{
                  padding: "5px 14px", borderRadius: 9999, fontSize: 12, fontWeight: 500,
                  background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.25)", color: "#818cf8",
                }}>{b}</span>
              ))}
            </div>

            {/* CTAs */}
            <div className="anim-up d6" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="#contact" className="btn-primary">Get In Touch</a>
              <a href="#experience" className="btn-outline">View Experience ↓</a>
            </div>
          </div>

          {/* RIGHT — avatar */}
          <div style={{ flex: "0 0 auto", display: "flex", justifyContent: "center", width: "100%" }} className="hero-avatar-wrap">
            <div className="float anim-up d4" style={{ position: "relative" }}>
              {/* Glow */}
              <div style={{
                position: "absolute", inset: -20, borderRadius: "50%",
                background: "radial-gradient(circle, rgba(99,102,241,0.35) 0%, transparent 70%)",
                filter: "blur(20px)",
              }} />
              {/* Circle */}
              <div style={{
                position: "relative", width: 220, height: 220,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #6366f1 0%, #22d3ee 100%)",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 0 60px rgba(99,102,241,0.35), 0 20px 60px rgba(0,0,0,0.5)",
                border: "3px solid rgba(255,255,255,0.12)",
              }}>
                <span style={{ fontSize: 64, fontWeight: 900, color: "rgba(255,255,255,0.92)", letterSpacing: "-2px" }}>MRH</span>
              </div>

              {/* Location pill */}
              <div style={{
                position: "absolute", bottom: -18, left: "50%", transform: "translateX(-50%)",
                background: "rgba(11,11,20,0.9)", border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(16px)", borderRadius: 10,
                padding: "8px 18px", whiteSpace: "nowrap",
                display: "flex", alignItems: "center", gap: 6,
                boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
              }}>
                <span style={{ fontSize: 13 }}>📍</span>
                <span style={{ fontSize: 12, color: "#cbd5e1" }}>{profile.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{ textAlign: "center", marginTop: 64, color: "#334155", fontSize: 12, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
          <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, #6366f1, transparent)" }} />
          scroll
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-avatar-wrap { flex: 1 1 auto !important; }
        }
        @media (min-width: 769px) {
          .hero-avatar-wrap { flex: 0 0 auto !important; width: auto !important; }
        }
      `}</style>
    </section>
  );
}
