"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "0 32px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "background 0.3s ease, border-color 0.3s ease",
          background: scrolled
            ? "rgba(10,10,10,0.85)"
            : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(42,42,42,0.8)"
            : "1px solid transparent",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "22px",
            fontWeight: 700,
            color: "var(--white)",
            letterSpacing: "-0.5px",
            display: "flex",
            alignItems: "center",
            gap: "2px",
          }}
        >
          VR
          <span
            style={{
              display: "inline-block",
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "var(--accent)",
              marginLeft: "2px",
              marginBottom: "10px",
            }}
          />
        </a>

        {/* Desktop Nav Links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                letterSpacing: "1.2px",
                color: "var(--text-dim)",
                textTransform: "uppercase",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--white)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-dim)")
              }
            >
              {link.label}
            </a>
          ))}

          {/* Download CV Button */}
          <a
            href="/cv/en/Vitor-Ribeiro-CV-EN.pdf"
            download="Vitor-Ribeiro-CV-EN.pdf"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "7px 14px",
              borderRadius: "6px",
              background: "transparent",
              border: "1px solid var(--border)",
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--text-mid)",
              letterSpacing: "0.5px",
              transition: "border-color 0.2s ease, color 0.2s ease",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.color = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "var(--text-mid)";
            }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 1v7M3 5.5l3 3 3-3M1 10h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Download CV
          </a>

          {/* CTA Badge */}
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "7px",
              padding: "7px 14px",
              borderRadius: "100px",
              background: "var(--accent-dim)",
              border: "1px solid var(--accent-glow)",
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--accent)",
              letterSpacing: "0.5px",
              transition: "background 0.2s ease, border-color 0.2s ease",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(0,200,255,0.15)";
              e.currentTarget.style.borderColor = "rgba(0,200,255,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--accent-dim)";
              e.currentTarget.style.borderColor = "var(--accent-glow)";
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: "var(--accent)",
                display: "inline-block",
                boxShadow: "0 0 6px var(--accent)",
                animation: "pulse 2s ease-in-out infinite",
              }}
            />
            Available for work
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="hamburger"
          style={{
            display: "none",
            flexDirection: "column",
            gap: "5px",
            padding: "8px",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          <span
            style={{
              display: "block",
              width: "22px",
              height: "2px",
              background: menuOpen ? "var(--accent)" : "var(--text)",
              borderRadius: "2px",
              transition: "transform 0.2s ease, background 0.2s ease",
              transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: "22px",
              height: "2px",
              background: menuOpen ? "transparent" : "var(--text)",
              borderRadius: "2px",
              transition: "background 0.2s ease",
            }}
          />
          <span
            style={{
              display: "block",
              width: "22px",
              height: "2px",
              background: menuOpen ? "var(--accent)" : "var(--text)",
              borderRadius: "2px",
              transition: "transform 0.2s ease, background 0.2s ease",
              transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "64px",
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 99,
            background: "rgba(10,10,10,0.97)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "40px",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={handleLinkClick}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "14px",
                letterSpacing: "2px",
                color: "var(--text-dim)",
                textTransform: "uppercase",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--white)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-dim)")
              }
            >
              {link.label}
            </a>
          ))}
          <a
            href="/cv/en/Vitor-Ribeiro-CV-EN.pdf"
            download="Vitor-Ribeiro-CV-EN.pdf"
            onClick={handleLinkClick}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 20px",
              borderRadius: "6px",
              background: "transparent",
              border: "1px solid var(--border)",
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              color: "var(--text-mid)",
              letterSpacing: "0.5px",
            }}
          >
            <svg width="13" height="13" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 1v7M3 5.5l3 3 3-3M1 10h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Download CV
          </a>

          <a
            href="#contact"
            onClick={handleLinkClick}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "7px",
              padding: "10px 20px",
              borderRadius: "100px",
              background: "var(--accent-dim)",
              border: "1px solid var(--accent-glow)",
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              color: "var(--accent)",
              letterSpacing: "0.5px",
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: "var(--accent)",
                boxShadow: "0 0 6px var(--accent)",
              }}
            />
            Available for work
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 6px var(--accent); }
          50% { opacity: 0.6; box-shadow: 0 0 12px var(--accent); }
        }
      `}</style>
    </>
  );
}
