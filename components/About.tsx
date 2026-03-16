"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export default function About() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: "112px 32px",
        background: "var(--off-black)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
        <motion.p
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0}
          variants={fadeUp}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            letterSpacing: "1.32px",
            color: "var(--text-dim)",
            textTransform: "uppercase",
            marginBottom: "20px",
          }}
        >
          {t.about.label}
        </motion.p>

        <motion.h2
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0.08}
          variants={fadeUp}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(36px, 5vw, 48px)",
            fontWeight: 700,
            lineHeight: 1.1,
            color: "var(--white)",
            marginBottom: "20px",
          }}
        >
          {t.about.heading1}{" "}
          <em
            style={{
              fontStyle: "italic",
              color: "var(--accent)",
              fontFamily: "var(--font-display)",
            }}
          >
            {t.about.headingAccent}
          </em>{" "}
          {t.about.heading2}
        </motion.h2>

        <motion.p
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0.16}
          variants={fadeUp}
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "17px",
            color: "var(--text-mid)",
            lineHeight: 1.75,
            maxWidth: "600px",
            marginBottom: "72px",
          }}
        >
          {t.about.bio}
        </motion.p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1px",
            background: "var(--border)",
            borderRadius: "12px",
            overflow: "hidden",
          }}
          className="stats-grid"
        >
          {t.about.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.24 + i * 0.08}
              variants={fadeUp}
              style={{
                background: "var(--surface)",
                padding: "40px 32px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "48px",
                  fontWeight: 700,
                  color: "var(--white)",
                  lineHeight: 1,
                }}
              >
                {stat.number}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  letterSpacing: "1.32px",
                  color: "var(--text-dim)",
                  textTransform: "uppercase",
                }}
              >
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
