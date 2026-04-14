"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--text-primary) 1px, transparent 1px),
                            linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Glow orb */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(79, 142, 247, 0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-6xl w-full mx-auto text-center relative z-10">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-10 animate-in">
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "#10b981" }}
          />
          <span
            className="text-xs tracking-widest uppercase"
            style={{ color: "var(--text-secondary)" }}
          >
            Available for work
          </span>
        </div>

        {/* Name */}
        <h1
          className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight mb-6 animate-in delay-100"
          style={{ color: "var(--text-primary)" }}
        >
          Projects X Dileep
        </h1>

        {/* Title */}
        <div
          className="flex items-center justify-center gap-3 mb-8 animate-in delay-200"
        >
          <span
            className="h-px w-12"
            style={{ background: "var(--text-muted)" }}
          />
          <p
            className="text-sm md:text-base tracking-[0.3em] uppercase font-light"
            style={{ color: "var(--text-secondary)" }}
          >
            Engineer · Designer · Creator
          </p>
          <span
            className="h-px w-12"
            style={{ background: "var(--text-muted)" }}
          />
        </div>

        {/* Tagline */}
        <p
          className="max-w-xl mx-auto text-base md:text-lg font-light leading-relaxed mb-12 animate-in delay-300"
          style={{ color: "var(--text-secondary)" }}
        >
          Full-stack engineer, data scientist, and creative designer — I love to
          code and design products.
        </p>

        {/* CTAs */}
        <div className="flex items-center justify-center gap-4 animate-in delay-400">
          <a
            href="#projects"
            className="btn-primary px-6 py-3 rounded-sm text-sm tracking-widest uppercase"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="btn-ghost px-6 py-3 rounded-sm text-sm tracking-widest uppercase"
          >
            Get in Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-in delay-500">
          <span
            className="text-xs tracking-widest uppercase"
            style={{ color: "var(--text-muted)" }}
          >
            Scroll
          </span>
          <div
            className="w-px h-12"
            style={{
              background:
                "linear-gradient(180deg, var(--text-muted), transparent)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
