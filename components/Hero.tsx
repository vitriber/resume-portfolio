"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export default function Hero() {
  const { t } = useLanguage();
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!orbRef.current) return;
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      orbRef.current.style.transform = `translate(${x * 40 - 20}px, ${y * 40 - 20}px)`;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "112px 32px 64px",
        overflow: "hidden",
        background: "var(--black)",
      }}
    >
      {/* Dot grid */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle, #2a2a2a 1px, transparent 0px)",
          backgroundSize: "32px 32px",
          opacity: 0.6,
          pointerEvents: "none",
        }}
      />

      {/* Neon orb */}
      <div
        ref={orbRef}
        aria-hidden
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          width: "700px",
          height: "700px",
          transform: "translate(-50%, 0)",
          background: "radial-gradient(circle, rgba(0,200,255,0.08) 0px, transparent 70%)",
          pointerEvents: "none",
          transition: "transform 0.3s ease-out",
          borderRadius: "50%",
        }}
      />

      {/* Bottom fade */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "200px",
          background: "linear-gradient(to top, var(--black) 0%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1080px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* Badges */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeUp}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "32px",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "7px",
              padding: "6px 14px",
              borderRadius: "100px",
              background: "var(--accent-dim)",
              border: "1px solid var(--accent-glow)",
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
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
                display: "inline-block",
                boxShadow: "0 0 6px var(--accent)",
              }}
            />
            {t.hero.available}
          </span>

          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "6px 14px",
              borderRadius: "100px",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--text-dim)",
              letterSpacing: "0.5px",
            }}
          >
            {t.hero.techStack}
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial="hidden"
          animate="visible"
          custom={0.1}
          variants={fadeUp}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(64px, 10vw, 120px)",
            fontWeight: 700,
            lineHeight: 0.95,
            color: "var(--white)",
            marginBottom: "28px",
            letterSpacing: "-2px",
          }}
        >
          Vitor{" "}
          <em
            style={{
              fontStyle: "italic",
              color: "var(--accent)",
              fontFamily: "var(--font-display)",
            }}
          >
            Ribeiro
          </em>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial="hidden"
          animate="visible"
          custom={0.2}
          variants={fadeUp}
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(18px, 2.5vw, 24px)",
            fontWeight: 400,
            color: "var(--text-mid)",
            marginBottom: "48px",
            maxWidth: "480px",
            lineHeight: 1.5,
          }}
        >
          {t.hero.subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0.3}
          variants={fadeUp}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#projects"
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
              letterSpacing: "0.2px",
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
            {t.hero.viewProjects}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "14px 28px",
              borderRadius: "8px",
              background: "transparent",
              color: "var(--text)",
              border: "1px solid var(--border)",
              fontFamily: "var(--font-sans)",
              fontSize: "15px",
              fontWeight: 500,
              transition: "border-color 0.2s ease, color 0.2s ease, transform 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--muted)";
              e.currentTarget.style.color = "var(--white)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "var(--text)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {t.hero.contactMe}
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          style={{
            position: "absolute",
            bottom: "-60px",
            left: 0,
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "1px",
              height: "48px",
              background: "linear-gradient(to bottom, transparent, var(--border))",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              color: "var(--text-dim)",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              writingMode: "vertical-rl",
            }}
          >
            {t.hero.scroll}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
