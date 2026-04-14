const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: "Full-Stack Development",
    description:
      "End-to-end web application development using MERN and MEAN stacks. From MongoDB schema design to polished React or Angular frontends — I own the full product lifecycle.",
    deliverables: ["MERN / MEAN Applications", "REST & GraphQL APIs", "Database Design (MongoDB, SQL)", "Auth & Security"],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 3h18v18H3zM3 9h18M9 9v12M15 9v12"/>
      </svg>
    ),
    title: "Data Science",
    description:
      "Transforming raw data into actionable insights using Python and machine learning. From exploratory analysis to predictive models and visual dashboards.",
    deliverables: ["Data Analysis & EDA", "ML Model Development", "Data Visualization", "Python Automation"],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <path d="M8 12h8M12 8l4 4-4 4"/>
      </svg>
    ),
    title: "UI / UX Design",
    description:
      "Designing intuitive, user-centred experiences that strike the perfect balance between aesthetics and usability — from wireframes to high-fidelity Figma prototypes.",
    deliverables: ["User Research & Flows", "Wireframes & Prototypes", "Design Systems", "Figma Handoff"],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5zM16 8L2 22M17.5 15H9"/>
      </svg>
    ),
    title: "Graphic Design",
    description:
      "Creative visual design for brands, marketing, and digital products. I combine a strong aesthetic sense with technical tools to bring ideas to life beautifully.",
    deliverables: ["Brand Identity & Logos", "Social Media Graphics", "Print & Digital Assets", "Illustrations"],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
        <circle cx="12" cy="13" r="4"/>
      </svg>
    ),
    title: "Photography",
    description:
      "Capturing compelling images through a thoughtful creative eye. From portraits to events and product photography — with professional post-processing and retouching.",
    deliverables: ["Portrait Photography", "Product & Commercial", "Event Coverage", "Photo Editing & Retouching"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-20">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-3"
            style={{ color: "var(--accent)" }}
          >
            06 — Services
          </p>
          <h2
            className="text-3xl md:text-4xl font-light"
            style={{ color: "var(--text-primary)" }}
          >
            What I Offer
          </h2>
          <span className="accent-line" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div key={i} className="glass glass-hover rounded-sm p-8">
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-sm flex items-center justify-center mb-6"
                style={{
                  background: "rgba(79, 142, 247, 0.08)",
                  border: "1px solid rgba(79, 142, 247, 0.15)",
                  color: "var(--accent)",
                }}
              >
                {service.icon}
              </div>

              <h3
                className="text-lg font-light mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                {service.title}
              </h3>

              <p
                className="text-sm leading-relaxed font-light mb-6"
                style={{ color: "var(--text-secondary)" }}
              >
                {service.description}
              </p>

              <div
                className="pt-6"
                style={{ borderTop: "1px solid var(--glass-border)" }}
              >
                <p
                  className="text-xs tracking-widest uppercase mb-3"
                  style={{ color: "var(--text-muted)" }}
                >
                  Deliverables
                </p>
                <ul className="space-y-2">
                  {service.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm font-light"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      <span
                        className="w-1 h-1 rounded-full flex-shrink-0"
                        style={{ background: "var(--accent)" }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
