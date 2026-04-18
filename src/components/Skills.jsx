import { useEffect, useRef, useState } from "react";
import { skills } from "../data";

const tagClass = { Expert: "tag-expert", Medium: "tag-medium", Basic: "tag-basic", Learning: "tag-learning" };

function SkillItem({ skill, visible }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
        <span style={{ fontSize: 14, color: "#cbd5e1", fontWeight: 500 }}>{skill.name}</span>
        <span className={`tag ${tagClass[skill.tag] || "tag-basic"}`}>{skill.tag}</span>
      </div>
      <div className="skill-track">
        <div className="skill-fill" style={{ width: visible ? `${skill.level}%` : "0%" }} />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} style={{ background: "#0b0b14", paddingTop: 96, paddingBottom: 96 }}>
      <div className="container">

        {/* Header */}
        <div className="section-header">
          <div className="section-chip" style={{ borderColor: "rgba(34,211,238,0.3)", background: "rgba(34,211,238,0.07)", color: "#22d3ee" }}>
            Expertise
          </div>
          <h2 className="section-title">Skills &amp; Technologies</h2>
          <p className="section-subtitle">A snapshot of my technical skill set across different domains.</p>
        </div>

        {/* 2-col responsive grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 24,
        }}>
          {skills.map((group) => (
            <div key={group.category} className="card">
              {/* Card header */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                <span style={{ fontSize: 24, lineHeight: 1 }}>{group.icon}</span>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#f1f5f9" }}>{group.category}</h3>
              </div>
              {/* Skills */}
              {group.items.map((skill) => (
                <SkillItem key={skill.name} skill={skill} visible={visible} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
