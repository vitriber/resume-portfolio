"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = (name: string): React.CSSProperties => ({
    width: "100%",
    padding: "14px 16px",
    borderRadius: "8px",
    background: "var(--surface-2)",
    border: `1px solid ${focused === name ? "var(--accent-glow)" : "var(--border)"}`,
    color: "var(--text)",
    fontFamily: "var(--font-sans)",
    fontSize: "15px",
    outline: "none",
    transition: "border-color 0.2s ease",
    resize: "none" as const,
  });

  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-mono)",
    fontSize: "11px",
    letterSpacing: "1px",
    color: "var(--text-dim)",
    textTransform: "uppercase",
    display: "block",
    marginBottom: "8px",
  };

  return (
    <section
      id="contact"
      ref={ref}
      style={{ padding: "112px 32px 64px", background: "var(--black)" }}
    >
      <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            letterSpacing: "1.32px",
            color: "var(--text-dim)",
            textTransform: "uppercase",
            marginBottom: "16px",
          }}
        >
          {t.contact.label}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(36px, 5vw, 48px)",
            fontWeight: 700,
            lineHeight: 1.1,
            color: "var(--white)",
            marginBottom: "64px",
          }}
        >
          {t.contact.heading1}{" "}
          <em
            style={{
              fontStyle: "italic",
              color: "var(--accent)",
              fontFamily: "var(--font-display)",
            }}
          >
            {t.contact.headingAccent}
          </em>
        </motion.h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "96px",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
          >
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "17px",
                color: "var(--text-mid)",
                lineHeight: 1.75,
                marginBottom: "40px",
              }}
            >
              {t.contact.description}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "1px", color: "var(--text-dim)", textTransform: "uppercase", marginBottom: "6px" }}>
                  {t.contact.emailLabel}
                </p>
                <a
                  href="mailto:vit.riber1@gmail.com"
                  style={{ fontFamily: "var(--font-sans)", fontSize: "16px", color: "var(--text)", transition: "color 0.2s ease" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text)")}
                >
                  vit.riber1@gmail.com
                </a>
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "1px", color: "var(--text-dim)", textTransform: "uppercase", marginBottom: "6px" }}>
                  {t.contact.phoneLabel}
                </p>
                <a
                  href="tel:+351934943603"
                  style={{ fontFamily: "var(--font-sans)", fontSize: "16px", color: "var(--text)", transition: "color 0.2s ease" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text)")}
                >
                  +351 934 943 603
                </a>
              </div>
            </div>

            <div style={{ marginTop: "40px" }}>
              <a
                href="mailto:vit.riber1@gmail.com"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "14px 28px",
                  borderRadius: "8px",
                  background: "var(--accent)",
                  color: "var(--black)",
                  fontFamily: "var(--font-sans)",
                  fontSize: "15px",
                  fontWeight: 600,
                  transition: "opacity 0.2s ease, transform 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "0.88";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {t.contact.sendEmailCta}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path d="M2 8h12M10 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.24 }}
          >
            {submitted ? (
              <div
                style={{
                  padding: "48px 40px",
                  borderRadius: "12px",
                  background: "var(--surface)",
                  border: "1px solid var(--accent-glow)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "48px", height: "48px", borderRadius: "50%",
                    background: "var(--accent-dim)", border: "1px solid var(--accent-glow)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 20px",
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
                    <path d="M4 10l5 5L16 5" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "24px",
                    color: "var(--white)",
                    marginBottom: "12px",
                  }}
                >
                  {t.contact.successTitle}
                </h3>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "15px", color: "var(--text-mid)" }}>
                  {t.contact.successMessage}
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  padding: "36px",
                }}
              >
                <div>
                  <label htmlFor="name" style={labelStyle}>{t.contact.form.nameLabel}</label>
                  <input
                    id="name" name="name" type="text" required
                    placeholder={t.contact.form.namePlaceholder}
                    value={formState.name}
                    onChange={handleChange}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    style={inputStyle("name")}
                  />
                </div>
                <div>
                  <label htmlFor="email" style={labelStyle}>{t.contact.form.emailLabel}</label>
                  <input
                    id="email" name="email" type="email" required
                    placeholder={t.contact.form.emailPlaceholder}
                    value={formState.email}
                    onChange={handleChange}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    style={inputStyle("email")}
                  />
                </div>
                <div>
                  <label htmlFor="message" style={labelStyle}>{t.contact.form.messageLabel}</label>
                  <textarea
                    id="message" name="message" required rows={5}
                    placeholder={t.contact.form.messagePlaceholder}
                    value={formState.message}
                    onChange={handleChange}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    style={inputStyle("message")}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    padding: "14px 28px",
                    borderRadius: "8px",
                    background: "var(--accent)",
                    color: "var(--black)",
                    fontFamily: "var(--font-sans)",
                    fontSize: "15px",
                    fontWeight: 600,
                    border: "none",
                    cursor: "pointer",
                    transition: "opacity 0.2s ease, transform 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = "0.88";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = "1";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {t.contact.form.submitButton}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                    <path d="M2 8h12M10 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        input::placeholder, textarea::placeholder { color: var(--text-dim); opacity: 1; }
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus {
          -webkit-box-shadow: 0 0 0 100px var(--surface-2) inset;
          -webkit-text-fill-color: var(--text);
        }
      `}</style>
    </section>
  );
}
