"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  };

  const contactInfo = [
    {
      label: "Email",
      value: "dileep@example.com",
      href: "mailto:dileep@example.com",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/dileep",
      href: "https://linkedin.com/in/dileep",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
        </svg>
      ),
    },
    {
      label: "GitHub",
      value: "github.com/dileep",
      href: "https://github.com/dileep",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-20">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-3"
            style={{ color: "var(--accent)" }}
          >
            06 — Contact
          </p>
          <h2
            className="text-3xl md:text-4xl font-light"
            style={{ color: "var(--text-primary)" }}
          >
            Let&apos;s Work Together
          </h2>
          <span className="accent-line" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12">
          {/* Left — info */}
          <div className="space-y-8">
            <p
              className="text-base leading-relaxed font-light"
              style={{ color: "var(--text-secondary)" }}
            >
              Whether you have a project in mind, need technical guidance, or just
              want to say hello — I&apos;d love to hear from you.
            </p>
            <p
              className="text-base leading-relaxed font-light"
              style={{ color: "var(--text-secondary)" }}
            >
              I&apos;m currently open to senior engineering roles, freelance
              engagements, and consulting opportunities.
            </p>

            <div className="space-y-4 pt-4">
              {contactInfo.map(({ label, value, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 group"
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                >
                  <div
                    className="w-10 h-10 rounded-sm flex items-center justify-center transition-colors duration-200"
                    style={{
                      background: "var(--glass-bg)",
                      border: "1px solid var(--glass-border)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {icon}
                  </div>
                  <div>
                    <p
                      className="text-xs tracking-widest uppercase"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {label}
                    </p>
                    <p
                      className="text-sm font-light transition-colors duration-200 group-hover:text-white"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="glass rounded-sm p-8">
            {status === "sent" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style={{ background: "rgba(16, 185, 129, 0.1)", border: "1px solid rgba(16, 185, 129, 0.2)" }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3
                  className="text-lg font-light mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  Message Sent
                </h3>
                <p
                  className="text-sm font-light"
                  style={{ color: "var(--text-secondary)" }}
                >
                  I&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      className="block text-xs tracking-widest uppercase mb-2"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="glass-input w-full px-4 py-3 rounded-sm text-sm"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs tracking-widest uppercase mb-2"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="glass-input w-full px-4 py-3 rounded-sm text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label
                    className="block text-xs tracking-widest uppercase mb-2"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Project Inquiry"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="glass-input w-full px-4 py-3 rounded-sm text-sm"
                  />
                </div>
                <div>
                  <label
                    className="block text-xs tracking-widest uppercase mb-2"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="glass-input w-full px-4 py-3 rounded-sm text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-primary w-full py-3 rounded-sm text-sm tracking-widest uppercase"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
