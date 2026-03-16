"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { number: "5+", label: "Years Experience" },
  { number: "20+", label: "Projects Shipped" },
  { number: "10+", label: "Happy Clients" },
  { number: "3+", label: "Countries Served" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export default function About() {
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
      <div
        style={{
          maxWidth: "1080px",
          margin: "0 auto",
        }}
      >
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
          About
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
          Building things{" "}
          <em
            style={{
              fontStyle: "italic",
              color: "var(--accent)",
              fontFamily: "var(--font-display)",
            }}
          >
            people love
          </em>{" "}
          to use
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
          I&apos;m a Software Engineer based in Portugal with 5+ years of
          experience building web applications. I specialize in the JavaScript
          ecosystem — from crafting pixel-perfect UIs with React and Next.js to
          building robust APIs with Node.js. I care deeply about performance,
          accessibility, and writing maintainable code that scales.
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
          {stats.map((stat, i) => (
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
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
