/* Skills + Certifications + GitHub footer */
const SKILL_GROUPS = [
  {
    title: "Strategy & leadership",
    items: [
      "IT / Business strategy",
      "AI strategy & adoption",
      "Enterprise architecture",
      "Program & portfolio management",
      "Coaching & team building",
      "Vendor & contract negotiation",
      "Budget & P&L",
    ],
  },
  {
    title: "Build & ship",
    items: [
      "AI-assisted development",
      "Solution architecture",
      "Software development",
      "Systems integration",
      "Process / business automation",
      "Agile methodologies",
    ],
  },
  {
    title: "Platforms",
    items: [
      "Cloud / SaaS (AWS, Azure, GCP)",
      "Salesforce · RealPage · Ramp ERP",
      "Microsoft 365",
      "Oracle stack",
      "Databases",
      "Data center operations",
    ],
  },
  {
    title: "Operate & secure",
    items: [
      "Cybersecurity frameworks",
      "AI-powered security & ops",
      "Identity / SSO",
      "Incident response",
      "ITIL · service management",
      "Business intelligence",
    ],
  },
];

const CERTS = [
  { name: "AI Security Foundations", by: "AI Security Summit" },
  { name: "AWS Certified Cloud Practitioner", by: "Amazon Web Services" },
  { name: "ITIL V3 Foundations", by: "ITIL" },
];

const SkillsCerts = () => (
  <section className="cy-section cy-skills" id="skills">
    <div className="cy-container">
      <div className="cy-eyebrow">07 — What I bring</div>
      <h2 className="cy-section-title">
        Skills, <em>certs</em>, and the practical tools.
      </h2>
      <div className="cy-skills-grid">
        {SKILL_GROUPS.map((g, i) => (
          <div className="cy-skills-col" key={i}>
            <div className="cy-skills-h cy-mono">{g.title}</div>
            <ul>
              {g.items.map((it, j) => <li key={j}>{it}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="cy-cert-row">
        <div className="cy-cert-h cy-mono">Certifications</div>
        <div className="cy-cert-list">
          {CERTS.map((c, i) => (
            <div className="cy-cert" key={i}>
              <div className="cy-cert-name">{c.name}</div>
              <div className="cy-cert-by cy-mono">{c.by}</div>
            </div>
          ))}
          <div className="cy-cert">
            <div className="cy-cert-name">Physics + Business</div>
            <div className="cy-cert-by cy-mono">California Polytechnic State University · San Luis Obispo</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const GitHubFeed = () => {
  return (
    <section className="cy-section cy-github" id="github">
      <div className="cy-container">
        <div className="cy-eyebrow">08 — Open source</div>
        <h2 className="cy-section-title">
          One repo I can <em>show</em>. The rest are <em>building</em>.
        </h2>
        <p className="cy-section-lede">
          Multi-Agent Chat is the only public repository right now — the others are potential revenue products kept private for the moment.
          Profile at{" "}
          <a className="cy-inline-link" href="https://github.com/craig-yappert" target="_blank" rel="noopener">
            github.com/craig-yappert ↗
          </a>.
        </p>
        <div className="cy-gh-grid cy-gh-grid-single">
          <a className="cy-gh-card cy-gh-card-feature"
             href="https://github.com/craig-yappert/multi-agent-chat-extension"
             target="_blank" rel="noopener">
            <div className="cy-gh-row">
              <span className="cy-gh-icon" aria-hidden="true">
                <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
                  <path d="M8 0a8 8 0 0 0-2.53 15.59c.4.07.55-.17.55-.38v-1.34c-2.22.48-2.69-1.07-2.69-1.07-.36-.93-.89-1.18-.89-1.18-.73-.5.06-.49.06-.49.81.06 1.23.83 1.23.83.72 1.23 1.88.87 2.34.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.83-2.15-.08-.2-.36-1.02.08-2.13 0 0 .67-.21 2.2.82a7.6 7.6 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.11.16 1.93.08 2.13.52.56.83 1.28.83 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.2c0 .21.15.46.55.38A8 8 0 0 0 8 0z"/>
                </svg>
              </span>
              <span className="cy-gh-name">craig-yappert / <strong>multi-agent-chat-extension</strong></span>
              <span className="cy-gh-lang cy-mono">TypeScript · MIT</span>
            </div>
            <p className="cy-gh-desc">
              VS Code extension — seven AI agents collaborating as peers via @mentions. 28+ models from six providers. 150+ commits. The lessons inside the repo are as valuable as the code.
            </p>
            <div className="cy-gh-stats cy-mono">
              <span>7 agents</span><span>·</span>
              <span>28+ models</span><span>·</span>
              <span>150+ commits</span><span>·</span>
              <span>Open source</span>
            </div>
            <span className="cy-gh-link cy-mono">View repo ↗</span>
          </a>
          <div className="cy-gh-stealth">
            <div className="cy-gh-stealth-h cy-mono">In private development</div>
            <div className="cy-gh-stealth-list">
              <div className="cy-gh-stealth-item">
                <strong>VZZY.io</strong>
                <span>Enterprise visibility platform · live at vzzy.io</span>
              </div>
              <div className="cy-gh-stealth-item">
                <strong>GrocerTools</strong>
                <span>Operational tooling for community grocers · live at grocertools.com</span>
              </div>
              <div className="cy-gh-stealth-item">
                <strong>Fireguard RMS</strong>
                <span>Incident & ops management for volunteer fire departments</span>
              </div>
              <div className="cy-gh-stealth-item">
                <strong>Affordable CRM</strong>
                <span>Open-core CRM for affordable housing pipelines</span>
              </div>
            </div>
            <div className="cy-gh-stealth-note">
              Code & demos available on request under NDA.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

window.SkillsCerts = SkillsCerts;
window.GitHubFeed = GitHubFeed;
