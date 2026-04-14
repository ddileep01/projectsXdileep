export default function About() {
  const stats = [
    { value: "3+", label: "Years Experience" },
    { value: "30+", label: "Projects Delivered" },
    { value: "5", label: "Disciplines" },
    { value: "20+", label: "Happy Clients" },
  ];

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-20">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-3"
            style={{ color: "var(--accent)" }}
          >
            01 — About
          </p>
          <h2
            className="text-3xl md:text-4xl font-light"
            style={{ color: "var(--text-primary)" }}
          >
            Crafting Digital Experiences
          </h2>
          <span className="accent-line" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <div className="space-y-6">
            <p
              className="text-base leading-relaxed font-light"
              style={{ color: "var(--text-secondary)" }}
            >
              I&apos;m a passionate, results-driven Software Engineer with over 3 years
              of experience in full-stack development. I specialize in the MERN
              (MongoDB, Express, React, Node.js) and MEAN (MongoDB, Express,
              Angular, Node.js) stacks, building robust and scalable web
              applications that help clients and organizations achieve their goals.
            </p>
            <p
              className="text-base leading-relaxed font-light"
              style={{ color: "var(--text-secondary)" }}
            >
              Beyond engineering, I have a strong eye for design. My expertise in
              UI/UX and graphic design allows me to create intuitive, visually
              appealing interfaces that enhance user experiences — because great
              design is just as important as functionality. I also explore data
              science, applying Python and ML to extract meaningful insights from
              complex datasets.
            </p>
            <p
              className="text-base leading-relaxed font-light"
              style={{ color: "var(--text-secondary)" }}
            >
              I am committed to delivering excellence, fostering innovation, and
              continuously pushing the boundaries of what&apos;s possible in
              technology. Whether engineering a complex backend system, designing a
              sleek UI, or capturing a moment through my lens — I bring the same
              passion to every craft.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {["MERN Stack", "MEAN Stack", "Data Science", "UI/UX Design", "Graphic Design", "Photography"].map(
                (tag) => (
                  <span key={tag} className="tag-pill">
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ value, label }) => (
              <div key={label} className="glass glass-hover rounded-sm p-8">
                <p
                  className="text-4xl font-light mb-2 glow-text"
                  style={{ color: "var(--accent)" }}
                >
                  {value}
                </p>
                <p
                  className="text-xs tracking-widest uppercase"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
