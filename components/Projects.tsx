"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "VRS Code Platform",
    description:
      "A full-stack web platform for software consulting and development services. Built with Next.js and a Node.js backend, featuring dynamic content management, contact forms, and optimized performance across all devices.",
    tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://vrscode.com.br",
    githubUrl: "https://github.com/vitorribeiro",
    featured: true,
  },
  {
    number: "02",
    title: "React Dashboard UI",
    description:
      "A comprehensive admin dashboard with data visualization, user management, and real-time analytics. Features reusable chart components, responsive layouts, and a clean design system built entirely in React.",
    tags: ["React", "TypeScript", "REST APIs", "Chart.js", "CSS Modules"],
    liveUrl: "#",
    githubUrl: "https://github.com/vitorribeiro",
    featured: false,
  },
  {
    number: "03",
    title: "Node.js REST API",
    description:
      "A scalable RESTful API built with Node.js and Express, featuring JWT authentication, role-based access control, and thorough test coverage. Deployed with Docker on AWS with a CI/CD pipeline via GitHub Actions.",
    tags: ["Node.js", "Express", "MongoDB", "Docker", "AWS", "Jest"],
    liveUrl: "#",
    githubUrl: "https://github.com/vitorribeiro",
    featured: false,
  },
];

function ExternalLinkIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden
      style={{ flexShrink: 0 }}
    >
      <path
        d="M2.5 11.5L11.5 2.5M11.5 2.5H6.5M11.5 2.5V7.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="projects"
      ref={ref}
      style={{
        padding: "112px 32px",
        background: "var(--off-black)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
        {/* Header */}
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
          Projects
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.08,
          }}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(36px, 5vw, 48px)",
            fontWeight: 700,
            lineHeight: 1.1,
            color: "var(--white)",
            marginBottom: "64px",
          }}
        >
          Selected{" "}
          <em
            style={{
              fontStyle: "italic",
              color: "var(--accent)",
              fontFamily: "var(--font-display)",
            }}
          >
            work
          </em>
        </motion.h2>

        {/* Project cards */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.number}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.16 + i * 0.1,
              }}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "36px 40px",
                display: "grid",
                gridTemplateColumns: "auto 1fr auto",
                gap: "32px",
                alignItems: "start",
                transition: "border-color 0.2s ease, transform 0.2s ease",
                cursor: "default",
              }}
              className="project-card"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "var(--muted)";
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "var(--border)";
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(0)";
              }}
            >
              {/* Number */}
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "13px",
                  color: "var(--text-dim)",
                  letterSpacing: "0.5px",
                  paddingTop: "4px",
                }}
              >
                {project.number}
              </span>

              {/* Content */}
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "20px",
                    fontWeight: 600,
                    color: "var(--white)",
                    marginBottom: "12px",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "15px",
                    color: "var(--text-mid)",
                    lineHeight: 1.7,
                    marginBottom: "20px",
                    maxWidth: "640px",
                  }}
                >
                  {project.description}
                </p>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                  }}
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: "4px 12px",
                        borderRadius: "100px",
                        background: "var(--surface-2)",
                        border: "1px solid var(--border)",
                        fontFamily: "var(--font-mono)",
                        fontSize: "11px",
                        color: "var(--text-dim)",
                        letterSpacing: "0.3px",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  alignItems: "flex-end",
                  paddingTop: "2px",
                }}
                className="project-links"
              >
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "8px 16px",
                    borderRadius: "6px",
                    background: "var(--accent)",
                    color: "var(--black)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    fontWeight: 500,
                    letterSpacing: "0.3px",
                    transition: "opacity 0.2s ease",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.opacity = "0.85")
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  Live
                  <ExternalLinkIcon />
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "8px 16px",
                    borderRadius: "6px",
                    background: "transparent",
                    color: "var(--text-dim)",
                    border: "1px solid var(--border)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    letterSpacing: "0.3px",
                    transition: "color 0.2s ease, border-color 0.2s ease",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--white)";
                    e.currentTarget.style.borderColor = "var(--muted)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-dim)";
                    e.currentTarget.style.borderColor = "var(--border)";
                  }}
                >
                  <GithubIcon />
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .project-card {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
            padding: 28px 24px !important;
          }
          .project-links {
            flex-direction: row !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
}
