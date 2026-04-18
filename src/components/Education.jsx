import { education, languages } from "../data";

export default function Education() {
  return (
    <section id="education" style={{ background: "#0e0e18", paddingTop: 96, paddingBottom: 96 }}>
      <div className="container">

        {/* Header */}
        <div className="section-header">
          <div className="section-chip">Background</div>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">My academic journey and formal qualifications.</p>
        </div>

        {/* Education cards — responsive grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
          marginBottom: 48,
        }}>
          {education.map((edu) => (
            <div key={edu.id} className="card">
              <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <span style={{ fontSize: 36, flexShrink: 0, lineHeight: 1, marginTop: 2 }}>{edu.icon}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: "#f1f5f9", marginBottom: 4, lineHeight: 1.3 }}>
                    {edu.degree}
                  </h3>
                  <p style={{ fontSize: 13, fontWeight: 600, color: "#818cf8", marginBottom: 12 }}>
                    {edu.institution}
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 4, marginBottom: 14 }}>
                    <span style={{ fontSize: 12, color: "#475569" }}>📅 {edu.period}</span>
                    <span style={{ fontSize: 12, color: "#475569" }}>📌 {edu.location}</span>
                  </div>
                  <span style={{
                    display: "inline-block",
                    padding: "4px 12px", borderRadius: 9999,
                    fontSize: 12, fontWeight: 600,
                    background: "rgba(52,211,153,0.08)",
                    border: "1px solid rgba(52,211,153,0.25)",
                    color: "#34d399",
                  }}>
                    🏆 {edu.result}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* English Fluency */}
        <div className="card">
          <h3 style={{ fontSize: 18, fontWeight: 700, color: "#f1f5f9", marginBottom: 6 }}>
            English Fluency
          </h3>
          <p style={{ fontSize: 13, color: "#475569", marginBottom: 28 }}>Self-evaluation scores out of 10</p>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {languages.map((lang) => (
              <div key={lang.name}>
                {/* Label + score */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                  <span style={{ fontSize: 14, fontWeight: 500, color: "#cbd5e1" }}>{lang.name}</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#818cf8" }}>{lang.level}/{lang.outOf}</span>
                </div>
                {/* Dot track */}
                <div style={{ display: "flex", gap: 6 }}>
                  {Array.from({ length: lang.outOf }).map((_, i) => (
                    <div key={i} style={{
                      flex: 1,
                      height: 8,
                      borderRadius: 4,
                      background: i < lang.level
                        ? "linear-gradient(90deg, #6366f1, #22d3ee)"
                        : "rgba(255,255,255,0.07)",
                      transition: "background 0.3s ease",
                    }} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
