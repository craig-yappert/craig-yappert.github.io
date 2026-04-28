/* Secondary projects grid (the three flagships are rendered as FeaturedWork above). */
const PROJECTS = [
  {
    name: "Traffic Management POC",
    tag: "Civic · POC",
    pitch: "Next-gen traffic management for a Southern California municipality — visual intersection and route-path builder for events.",
    href: null,
    accent: "violet",
    stats: [["POC", "Documented"], ["Demo", "Re-enableable"]],
    note: "Most proud of: the visual intersection + route path builder.",
  },
  {
    name: "Fireguard RMS",
    tag: "Stealth · in development",
    pitch: "Low-cost incident and operational management for volunteer fire departments — squeezed by PE consolidation in the RMS market.",
    href: null,
    accent: "amber",
    stats: [["Mission", "Underserved"], ["Status", "Building"]],
    note: "Volunteer FDs deserve modern tooling at a price they can afford.",
  },
  {
    name: "Affordable CRM",
    tag: "In development",
    pitch: "Free / low-cost white-label CRM for the affordable housing industry — property listings, interest-to-leasing pipelines, agency complexity.",
    href: null,
    accent: "blue",
    stats: [["White-label", "SaaS or private"], ["Origin", "MidPen DNA"]],
    note: "Born from six years inside the affordable-housing maze.",
  },
];

const ProjectCard = ({ p }) => (
  <article className={"cy-proj cy-proj-" + p.accent}>
    <div className="cy-proj-head">
      <div className="cy-proj-tag cy-mono">{p.tag}</div>
      <div className={"cy-proj-dot dot-" + p.accent} />
    </div>
    <div className="cy-proj-name">{p.name}</div>
    <div className="cy-proj-pitch">{p.pitch}</div>
    <div className="cy-proj-stats">
      {p.stats.map(([v, k], i) => (
        <div key={i} className="cy-proj-stat">
          <span className="cy-proj-stat-v">{v}</span>
          <span className="cy-proj-stat-k">{k}</span>
        </div>
      ))}
    </div>
    <div className="cy-proj-note">{p.note}</div>
    <div className="cy-proj-links">
      {p.href && <a href={p.href} target="_blank" rel="noopener">Visit ↗</a>}
      {p.repo && <a href={p.repo} target="_blank" rel="noopener">Repo ↗</a>}
      {p.paper && <a href={p.paper.short} target="_blank" rel="noopener">One-pager ↓</a>}
      {p.paper && <a href={p.paper.long} target="_blank" rel="noopener">Full paper ↓</a>}
      {!p.href && !p.repo && !p.paper && <span className="cy-proj-disabled cy-mono">Available on request</span>}
    </div>
  </article>
);

const Projects = () => (
  <section className="cy-section cy-projects" id="projects">
    <div className="cy-container">
      <div className="cy-eyebrow">05 — Projects</div>
      <h2 className="cy-section-title">
        What I’m <em>building</em> right now.
      </h2>
      <p className="cy-section-lede">
        Three flagship products in market, plus a bench of stealth bets. The common thread: tools for people the big SaaS market tends to skip past.
      </p>
      <window.FeaturedWork />
      <div className="cy-proj-grid">
        {PROJECTS.map((p, i) => <ProjectCard key={i} p={p} />)}
      </div>
    </div>
  </section>
);

window.Projects = Projects;
