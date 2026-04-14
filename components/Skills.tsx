const skillCategories = [
  {
    category: "Frontend & Backend",
    skills: [
      { name: "React / Next.js / Angular", level: 92 },
      { name: "Node.js / Express", level: 90 },
      { name: "JavaScript / TypeScript", level: 92 },
      { name: "Python", level: 85 },
    ],
  },
  {
    category: "Database & ORM",
    skills: [
      { name: "MongoDB", level: 90 },
      { name: "SQL (MySQL / PostgreSQL)", level: 82 },
      { name: "Prisma / Parse ORM", level: 80 },
      { name: "REST APIs & GraphQL", level: 88 },
    ],
  },
  {
    category: "Data Science & ML",
    skills: [
      { name: "Pandas / NumPy", level: 80 },
      { name: "Scikit-learn / TensorFlow", level: 72 },
      { name: "Data Visualization", level: 78 },
      { name: "Jupyter / Notebooks", level: 82 },
    ],
  },
  {
    category: "Design & Creative",
    skills: [
      { name: "UI/UX Design (Figma)", level: 88 },
      { name: "Graphic Design", level: 85 },
      { name: "Adobe Photoshop / Illustrator", level: 82 },
      { name: "Photography & Editing", level: 80 },
    ],
  },
];

const tools = [
  "Figma", "Adobe Photoshop", "Adobe Illustrator", "Lightroom",
  "VS Code", "Git", "Postman", "MongoDB Compass",
  "Jupyter Notebook", "Vercel", "Netlify", "Notion",
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-20">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-3"
            style={{ color: "var(--accent)" }}
          >
            02 — Skills
          </p>
          <h2
            className="text-3xl md:text-4xl font-light"
            style={{ color: "var(--text-primary)" }}
          >
            Technical Expertise
          </h2>
          <span className="accent-line" />
        </div>

        {/* Skill categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map(({ category, skills }) => (
            <div key={category} className="glass rounded-sm p-8">
              <h3
                className="text-xs tracking-[0.25em] uppercase mb-6 pb-4"
                style={{
                  color: "var(--text-secondary)",
                  borderBottom: "1px solid var(--glass-border)",
                }}
              >
                {category}
              </h3>
              <div className="space-y-5">
                {skills.map(({ name, level }) => (
                  <div key={name}>
                    <div className="flex justify-between mb-2">
                      <span
                        className="text-sm font-light"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {name}
                      </span>
                      <span
                        className="text-xs font-mono"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {level}%
                      </span>
                    </div>
                    <div className="skill-bar-track">
                      <div
                        className="skill-bar-fill"
                        style={{ width: `${level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools */}
        <div className="glass rounded-sm p-8">
          <h3
            className="text-xs tracking-[0.25em] uppercase mb-6"
            style={{ color: "var(--text-secondary)" }}
          >
            Tools & Platforms
          </h3>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span key={tool} className="tag-pill">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
