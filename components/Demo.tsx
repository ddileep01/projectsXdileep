"use client";

import { useEffect } from "react";

// ─── Add your Instagram post URLs here ──────────────────────────────────────
// To add a new post: copy the post URL from Instagram (e.g. https://www.instagram.com/p/ABC123/)
// and paste it as a new entry in this array. The embed will update automatically.
const instagramPosts: string[] = [
  "https://www.instagram.com/tv/CdzknNsO3Gd/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  "https://www.instagram.com/tv/CeYu2pAps18/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  "https://www.instagram.com/tv/Cey3N_SBfJ1/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
];

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

export default function Demo() {
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
      return;
    }
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [instagramPosts.length]);

  return (
    <section id="demo" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-20">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-3"
            style={{ color: "var(--accent)" }}
          >
            05 — Demo
          </p>
          <h2
            className="text-3xl md:text-4xl font-light"
            style={{ color: "var(--text-primary)" }}
          >
            Latest Work
          </h2>
          <span className="accent-line" />
          <p
            className="mt-6 text-sm font-light leading-relaxed max-w-xl"
            style={{ color: "var(--text-secondary)" }}
          >
            A live feed of recent builds, experiments, and behind-the-scenes
            moments pulled straight from Instagram.
          </p>
        </div>

        {instagramPosts.length === 0 ? (
          /* Empty state — shown until posts are added */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="glass rounded-sm flex flex-col items-center justify-center gap-4 py-16 px-8"
              >
                {/* Instagram icon */}
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ color: "var(--text-muted)" }}
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
                <p
                  className="text-xs font-light text-center tracking-wide"
                  style={{ color: "var(--text-muted)" }}
                >
                  Add a post URL
                  <br />
                  to <code className="font-mono">Demo.tsx</code>
                </p>
              </div>
            ))}
          </div>
        ) : (
          /* Instagram embeds grid */
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {instagramPosts.map((url, idx) => (
              <div
                key={idx}
                className="glass rounded-sm overflow-hidden flex items-start justify-center p-2"
              >
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={url}
                  data-instgrm-version="14"
                  style={{
                    background: "transparent",
                    border: 0,
                    margin: 0,
                    padding: 0,
                    width: "100%",
                    maxWidth: "100%",
                    minWidth: 0,
                  }}
                />
              </div>
            ))}
          </div>
        )}

        {/* Link to Instagram profile */}
        <div className="mt-12 flex items-center gap-4">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost flex items-center gap-2 px-5 py-2.5 rounded-sm text-sm tracking-widest uppercase text-xs"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
            </svg>
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
