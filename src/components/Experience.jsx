import { experiences } from "../data";

export default function Experience() {
  return (
    <section id="experience" style={{ background: "#0e0e18", paddingTop: 96, paddingBottom: 96 }}>
      <div className="container">

        {/* Header */}
        <div className="section-header">
          <div className="section-chip">Career</div>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">My professional journey — roles and responsibilities I've taken on.</p>
        </div>

        {/* Timeline */}
        <div style={{ position: "relative", maxWidth: 760, margin: "0 auto" }}>

          {/* Vertical line */}
          <div style={{
            position: "absolute",
            top: 0, bottom: 0,
            left: 18,
            width: 2,
            background: "linear-gradient(to bottom, #6366f1 0%, rgba(34,211,238,0.3) 60%, transparent 100%)",
            borderRadius: 2,
          }} />

          <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
            {experiences.map((exp) => (
              <div key={exp.id} style={{ display: "flex", gap: 28, alignItems: "flex-start" }}>

                {/* Dot */}
                <div style={{
                  flexShrink: 0,
                  width: 38, height: 38,
                  borderRadius: "50%",
                  border: `2px solid ${exp.current ? "#6366f1" : "#334155"}`,
                  background: exp.current ? "rgba(99,102,241,0.15)" : "rgba(51,65,85,0.4)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: exp.current ? "0 0 16px rgba(99,102,241,0.4)" : "none",
                  position: "relative", zIndex: 1,
                }}>
                  <div style={{
                    width: 10, height: 10, borderRadius: "50%",
                    background: exp.current ? "#6366f1" : "#475569",
                  }} />
                </div>

                {/* Card */}
                <div className="card" style={{ flex: 1, minWidth: 0 }}>
                  {/* Top row */}
                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: 16,
                    marginBottom: 16,
                    flexWrap: "wrap",
                  }}>
                    <div>
                      <h3 style={{ fontSize: 17, fontWeight: 700, color: "#f1f5f9", marginBottom: 4 }}>{exp.role}</h3>
                      <p style={{ fontSize: 13, fontWeight: 600, color: "#818cf8" }}>{exp.company}</p>
                    </div>
                    <div style={{ textAlign: "right", flexShrink: 0 }}>
                      <span style={{
                        display: "inline-flex", alignItems: "center", gap: 6,
                        padding: "4px 12px", borderRadius: 9999, fontSize: 12, fontWeight: 500,
                        background: exp.current ? "rgba(52,211,153,0.08)" : "rgba(51,65,85,0.4)",
                        border: `1px solid ${exp.current ? "rgba(52,211,153,0.25)" : "rgba(71,85,105,0.5)"}`,
                        color: exp.current ? "#34d399" : "#64748b",
                      }}>
                        {exp.current && (
                          <span className="blink" style={{ width: 6, height: 6, borderRadius: "50%", background: "#34d399", display: "inline-block" }} />
                        )}
                        {exp.period}
                      </span>
                      <p style={{ fontSize: 12, color: "#475569", marginTop: 4 }}>{exp.location}</p>
                    </div>
                  </div>

                  {/* Bullet points */}
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                    {exp.highlights.map((h, i) => (
                      <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                        <span style={{ color: "#818cf8", flexShrink: 0, marginTop: 3, fontSize: 11 }}>▹</span>
                        <span style={{ fontSize: 14, color: "#94a3b8", lineHeight: 1.65 }}>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
