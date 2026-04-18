import { useState } from "react";
import { profile } from "../data";

const contactItems = [
  {
    icon: "✉",
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: "📞",
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone}`,
  },
  {
    icon: "📍",
    label: "Location",
    value: profile.location,
    href: null,
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const sub = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.location.href = `mailto:${profile.email}?subject=${sub}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" style={{ background: "#0b0b14", paddingTop: 96, paddingBottom: 96 }}>
      <div className="container">

        {/* Header */}
        <div className="section-header">
          <div className="section-chip">Let's Talk</div>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Have an opportunity or just want to say hello? My inbox is always open.</p>
        </div>

        {/* Two-col layout */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 32,
          alignItems: "start",
        }}>

          {/* LEFT — contact info */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {contactItems.map((item) => (
              <div key={item.label} className="card" style={{ display: "flex", alignItems: "center", gap: 16, padding: "18px 24px" }}>
                <div style={{
                  width: 42, height: 42, flexShrink: 0,
                  borderRadius: 12,
                  background: "rgba(99,102,241,0.1)",
                  border: "1px solid rgba(99,102,241,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 18,
                }}>
                  {item.icon}
                </div>
                <div>
                  <p style={{ fontSize: 11, color: "#475569", fontWeight: 500, marginBottom: 2, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    {item.label}
                  </p>
                  {item.href ? (
                    <a href={item.href} style={{ fontSize: 14, color: "#e2e8f0", fontWeight: 500, textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={e => e.target.style.color = "#818cf8"}
                      onMouseLeave={e => e.target.style.color = "#e2e8f0"}>
                      {item.value}
                    </a>
                  ) : (
                    <p style={{ fontSize: 14, color: "#e2e8f0", fontWeight: 500 }}>{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Available card */}
            <div className="card" style={{
              borderLeft: "3px solid #34d399",
              padding: "18px 24px",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                <span className="blink" style={{ width: 8, height: 8, borderRadius: "50%", background: "#34d399", display: "inline-block" }} />
                <span style={{ color: "#34d399", fontWeight: 600, fontSize: 14 }}>Currently Available</span>
              </div>
              <p style={{ fontSize: 13, color: "#475569", lineHeight: 1.6 }}>
                Open to full-time, part-time, and freelance IT / frontend opportunities.
              </p>
            </div>
          </div>

          {/* RIGHT — form */}
          <div className="card">
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div>
                  <label style={{ display: "block", fontSize: 12, color: "#64748b", fontWeight: 500, marginBottom: 6 }}>Your Name</label>
                  <input type="text" name="name" required value={form.name} onChange={handleChange}
                    placeholder="John Doe" className="input" />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 12, color: "#64748b", fontWeight: 500, marginBottom: 6 }}>Your Email</label>
                  <input type="email" name="email" required value={form.email} onChange={handleChange}
                    placeholder="john@email.com" className="input" />
                </div>
              </div>
              <div>
                <label style={{ display: "block", fontSize: 12, color: "#64748b", fontWeight: 500, marginBottom: 6 }}>Message</label>
                <textarea name="message" required rows={5} value={form.message} onChange={handleChange}
                  placeholder="Tell me about your project or opportunity…"
                  className="input" style={{ resize: "vertical", minHeight: 120 }} />
              </div>

              {sent && (
                <div style={{
                  padding: "12px 16px", borderRadius: 10, fontSize: 13,
                  background: "rgba(52,211,153,0.08)", border: "1px solid rgba(52,211,153,0.25)", color: "#34d399",
                }}>
                  ✓ Opening your email client — thanks for reaching out!
                </div>
              )}

              <button type="submit" className="btn-primary" style={{ justifyContent: "center", padding: "14px 24px" }}>
                Send Message →
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
