import { useState, useEffect } from "react";
import { navLinks } from "../data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.3s ease",
        padding: scrolled ? "12px 0" : "20px 0",
        background: scrolled ? "rgba(11,11,20,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
        {/* Logo */}
        <a href="#hero" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          <span style={{
            width: 36, height: 36, borderRadius: 10,
            background: "linear-gradient(135deg,#6366f1,#22d3ee)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#fff", fontWeight: 800, fontSize: 13, flexShrink: 0,
          }}>RH</span>
          <span style={{ color: "#f1f5f9", fontWeight: 600, fontSize: 15 }}>Rajib Hossain</span>
        </a>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "4px" }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 500,
                color: "#94a3b8",
                textDecoration: "none",
                transition: "color 0.2s, background 0.2s",
              }}
              onMouseEnter={e => { e.target.style.color = "#f1f5f9"; e.target.style.background = "rgba(255,255,255,0.06)"; }}
              onMouseLeave={e => { e.target.style.color = "#94a3b8"; e.target.style.background = "transparent"; }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Hire me btn */}
        <a href="mailto:md.razib161657@gmail.com" className="btn-primary desktop-nav" style={{ padding: "9px 20px", fontSize: 13, flexShrink: 0 }}>
          ✉ Hire Me
        </a>

        {/* Burger */}
        <button
          className="burger-btn"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 8,
            padding: "8px 10px",
            cursor: "pointer",
            color: "#e2e8f0",
            display: "none",
          }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: "rgba(11,11,20,0.98)",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          padding: "12px 0",
        }}>
          <div className="container" style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  padding: "12px 16px",
                  borderRadius: 10,
                  fontSize: 15,
                  fontWeight: 500,
                  color: "#cbd5e1",
                  textDecoration: "none",
                  display: "block",
                }}
              >
                {link.label}
              </a>
            ))}
            <a href="mailto:md.razib161657@gmail.com" className="btn-primary" style={{ marginTop: 8, textAlign: "center", justifyContent: "center" }}>
              ✉ Hire Me
            </a>
          </div>
        </div>
      )}

      {/* Responsive helpers */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .burger-btn  { display: block !important; }
        }
      `}</style>
    </header>
  );
}
