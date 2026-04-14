"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-white/[0.06]" : ""
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-sm font-semibold tracking-[0.15em] uppercase"
          style={{ color: "var(--text-primary)" }}
        >
          D<span style={{ color: "var(--accent)" }}>.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-xs tracking-widest uppercase transition-colors duration-200"
                style={{
                  color:
                    active === href.slice(1)
                      ? "var(--text-primary)"
                      : "var(--text-secondary)",
                  fontWeight: active === href.slice(1) ? "500" : "400",
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-5 h-px transition-all duration-200"
            style={{
              background: "var(--text-secondary)",
              transform: menuOpen ? "translateY(6px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block w-5 h-px transition-all duration-200"
            style={{
              background: "var(--text-secondary)",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-5 h-px transition-all duration-200"
            style={{
              background: "var(--text-secondary)",
              transform: menuOpen ? "translateY(-6px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass border-t border-white/[0.06] px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-xs tracking-widest uppercase"
                  style={{ color: "var(--text-secondary)" }}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
