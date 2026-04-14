const projects = [
  {
    number: "01",
    title: "SaaS Analytics Platform",
    description:
      "A multi-tenant analytics platform with real-time dashboards, custom reporting, and role-based access control. Serves 50K+ users with sub-100ms query times.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Redis", "AWS"],
    live: "#",
    github: "#",
    featured: true,
  },
  {
    number: "02",
    title: "E-Commerce API Gateway",
    description:
      "High-throughput REST/GraphQL API gateway with rate limiting, caching, and automatic failover. Handles 10M+ requests per day with 99.9% uptime.",
    stack: ["Python", "FastAPI", "Redis", "Docker", "Kubernetes"],
    live: "#",
    github: "#",
    featured: true,
  },
  {
    number: "03",
    title: "Developer CLI Toolkit",
    description:
      "Open-source CLI tool for scaffolding full-stack projects with built-in authentication, database setup, and deployment configuration.",
    stack: ["TypeScript", "Node.js", "CLI", "Open Source"],
    live: null,
    github: "#",
    featured: false,
  },
  {
    number: "04",
    title: "Real-Time Collaboration App",
    description:
      "Figma-like document collaboration with operational transforms, live cursors, conflict resolution, and offline sync support.",
    stack: ["React", "WebSockets", "CRDTs", "Supabase"],
    live: "#",
    github: "#",
    featured: false,
  },
  {
    number: "05",
    title: "AI Content Pipeline",
    description:
      "Automated content generation and moderation pipeline using LLMs. Processes 100K+ content items daily with human-review integration.",
    stack: ["Python", "OpenAI", "FastAPI", "Celery", "Redis"],
    live: null,
    github: "#",
    featured: false,
  },
  {
    number: "06",
    title: "Design System Library",
    description:
      "Component library with 60+ primitives built on Radix UI. Full accessibility support, dark mode, and Figma token integration.",
    stack: ["React", "TypeScript", "Storybook", "Tailwind"],
    live: "#",
    github: "#",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-20">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-3"
            style={{ color: "var(--accent)" }}
          >
            04 — Projects
          </p>
          <h2
            className="text-3xl md:text-4xl font-light"
            style={{ color: "var(--text-primary)" }}
          >
            Selected Work
          </h2>
          <span className="accent-line" />
        </div>

        {/* Featured projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {projects
            .filter((p) => p.featured)
            .map((project) => (
              <div
                key={project.number}
                className="glass glass-hover rounded-sm p-8 flex flex-col"
              >
                <div className="flex items-start justify-between mb-6">
                  <span
                    className="text-5xl font-extralight"
                    style={{ color: "var(--text-muted)", lineHeight: 1 }}
                  >
                    {project.number}
                  </span>
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        className="w-8 h-8 flex items-center justify-center rounded-sm glass glass-hover"
                        aria-label="GitHub"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ color: "var(--text-secondary)" }}>
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        className="w-8 h-8 flex items-center justify-center rounded-sm glass glass-hover"
                        aria-label="Live"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: "var(--text-secondary)" }}>
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                <h3
                  className="text-xl font-light mb-3"
                  style={{ color: "var(--text-primary)" }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-sm leading-relaxed font-light mb-6 flex-1"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="tag-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>

        {/* Other projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects
            .filter((p) => !p.featured)
            .map((project) => (
              <div
                key={project.number}
                className="glass glass-hover rounded-sm p-6 flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <span
                    className="text-3xl font-extralight"
                    style={{ color: "var(--text-muted)", lineHeight: 1 }}
                  >
                    {project.number}
                  </span>
                  <div className="flex gap-2">
                    {project.github && (
                      <a href={project.github} aria-label="GitHub">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" style={{ color: "var(--text-muted)" }}>
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} aria-label="Live">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: "var(--text-muted)" }}>
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
                <h3
                  className="text-base font-light mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-xs leading-relaxed font-light mb-4 flex-1"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.stack.slice(0, 3).map((tech) => (
                    <span key={tech} className="tag-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
