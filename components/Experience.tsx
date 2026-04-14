const experiences = [
  {
    role: "Full-Stack Engineer",
    company: "Client Projects & Freelance",
    period: "2023 — Present",
    location: "Remote",
    description:
      "Developing full-stack web applications for diverse clients using the MERN and MEAN stacks. Delivering end-to-end solutions from database design to UI — with a strong focus on performance and user experience.",
    highlights: [
      "MERN / MEAN stack applications",
      "UI/UX design + development",
      "MongoDB, SQL, Prisma, Parse",
      "React, Angular, Node.js, Express",
    ],
  },
  {
    role: "Software Engineer & UI Designer",
    company: "Product Development Team",
    period: "2022 — 2023",
    location: "Hybrid",
    description:
      "Contributed to multiple web products bridging the gap between design and engineering. Built responsive frontends, designed intuitive interfaces in Figma, and integrated RESTful APIs.",
    highlights: [
      "Figma prototypes to production",
      "REST API integration",
      "JavaScript / TypeScript",
      "React, Node.js, MongoDB",
    ],
  },
  {
    role: "Junior Developer & Graphic Designer",
    company: "Creative Studio",
    period: "2021 — 2022",
    location: "On-site",
    description:
      "Started career combining software development with graphic design. Built websites, created brand identities, and developed a deep appreciation for the intersection of technology and creativity.",
    highlights: [
      "Brand identity & logo design",
      "Website development",
      "Adobe Suite (Ps, Ai, Lr)",
      "Python scripting & automation",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-20">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-3"
            style={{ color: "var(--accent)" }}
          >
            03 — Experience
          </p>
          <h2
            className="text-3xl md:text-4xl font-light"
            style={{ color: "var(--text-primary)" }}
          >
            Work History
          </h2>
          <span className="accent-line" />
        </div>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <div key={i} className="glass glass-hover rounded-sm p-8 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 mb-6">
                <div>
                  <h3
                    className="text-lg font-medium mb-1"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {exp.role}
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: "var(--accent)" }}
                  >
                    {exp.company}
                  </p>
                </div>
                <div className="text-right">
                  <p
                    className="text-xs tracking-widest uppercase mb-1 font-mono"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {exp.period}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {exp.location}
                  </p>
                </div>
              </div>

              <p
                className="text-sm leading-relaxed mb-6 font-light"
                style={{ color: "var(--text-secondary)" }}
              >
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.highlights.map((h) => (
                  <span key={h} className="tag-pill">
                    {h}
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
