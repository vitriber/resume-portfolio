"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const skills = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
  "Angular", "HTML / CSS", "Git", "REST APIs", "PostgreSQL",
  "MongoDB", "Docker", "Tailwind CSS", "GraphQL", "AWS", "Figma", "Jest", "CI / CD",
];

const track = [...skills, ...skills];

function SkillTag({ label }: { label: string }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "10px 20px",
        borderRadius: "100px",
        background: "var(--surface-2)",
        border: "1px solid var(--border)",
        fontFamily: "var(--font-mono)",
        fontSize: "13px",
        color: "var(--text)",
        whiteSpace: "nowrap",
        flexShrink: 0,
        transition: "border-color 0.2s ease, color 0.2s ease",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--accent-glow)";
        e.currentTarget.style.color = "var(--accent)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.color = "var(--text)";
      }}
    >
      <span
        style={{
          width: "5px",
          height: "5px",
          borderRadius: "50%",
          background: "var(--accent)",
          opacity: 0.7,
          flexShrink: 0,
        }}
      />
      {label}
    </span>
  );
}

export default function Skills() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      ref={ref}
      style={{ padding: "112px 0", background: "var(--black)", overflow: "hidden" }}
    >
      <div
        style={{ padding: "0 32px", maxWidth: "1080px", margin: "0 auto 56px" }}
      >
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
          {t.skills.label}
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
          }}
        >
          {t.skills.heading1}{" "}
          <em
            style={{
              fontStyle: "italic",
              color: "var(--accent)",
              fontFamily: "var(--font-display)",
            }}
          >
            {t.skills.headingAccent}
          </em>
        </motion.h2>
      </div>

      <div
        style={{
          position: "relative",
          background: "var(--surface)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          padding: "24px 0",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute", top: 0, left: 0, bottom: 0, width: "120px",
            background: "linear-gradient(to right, var(--surface) 0%, transparent 100%)",
            zIndex: 2, pointerEvents: "none",
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute", top: 0, right: 0, bottom: 0, width: "120px",
            background: "linear-gradient(to left, var(--surface) 0%, transparent 100%)",
            zIndex: 2, pointerEvents: "none",
          }}
        />
        <div className="marquee-track" style={{ gap: "12px", paddingLeft: "12px" }}>
          {track.map((skill, i) => (
            <SkillTag key={`${skill}-${i}`} label={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
