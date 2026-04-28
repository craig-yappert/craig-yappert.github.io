/* Case studies — narrative cards with metrics + roles */
const CASES = [
  {
    id: "midpen",
    badge: "Case 01 · MidPen Housing",
    title: "Modernizing IT for affordable housing — without forgetting who it’s for.",
    role: "VP of IT · 2019–2025",
    body: [
      "MidPen serves 25,000 residents across 140+ properties. When I joined, IT was a hybrid sprawl. Six years later, it was a cloud-first, integrated platform supporting 25% organizational and 40% business growth.",
      "The work was never just the migration. It was a digital intake serving 150,000+ applicants. It was a financial system carrying $250M/yr at 99.9%+ uptime. It was a productivity platform that gave site staff back their time. Each system had a person on the other side.",
    ],
    pulls: [
      { k: "Annual transactions", v: "$250M" },
      { k: "Applicants served",   v: "150K+" },
      { k: "Delivery cycle",      v: "−75%" },
      { k: "Org growth supported",v: "40%" },
    ],
    chips: ["Salesforce", "RealPage", "Ramp", "M365", "Cloud-first", "Cybersecurity framework"],
  },
  {
    id: "vzzy",
    badge: "Case 02 · VZZY.io",
    title: "Sixty days from idea to production. AI as primary partner — not assistant.",
    role: "CTO / Founder · 2025",
    body: [
      "VZZY started as frustration. Organizations don’t connect what people are doing to the strategy they’re supposedly executing. Originally — only half-jokingly — I called it ‘Dysfunction as a Service.’",
      "It’s an enterprise visibility platform: map processes, solutions, and orgs as connected objects, then see the bottlenecks, dependencies, and accountability gaps. Built end-to-end with AI as my primary development partner. 53 days from idea to live product, 300+ commits, 25 database tables, three full architectural refactors. Production-quality — not a demo.",
    ],
    pull: "The problem isn't capturing data — it's revealing the relationships within it. Most tools hide complexity; VZZY shows it. Denial becomes difficult when the mess has a shape.",
    pulls: [
      { k: "Idea → production", v: "53 days" },
      { k: "Commits",           v: "300+" },
      { k: "DB tables",          v: "25" },
      { k: "Status",            v: "Live" },
    ],
    chips: ["ReactFlow", "React 18", "TypeScript", "Node.js", "PostgreSQL", "Multi-tenant", "RBAC"],
    link: { label: "Visit vzzy.io ↗", href: "https://www.vzzy.io" },
    paper: { short: "papers/VZZY-One-Pager.pdf", long: "papers/VZZY-Case-Study.pdf" },
  },
  {
    id: "multiagent",
    badge: "Case 03 · Multi-Agent Chat",
    title: "AI agents as peers, not workers — built before agentic AI was the trend.",
    role: "Founder · open source",
    body: [
      "Multi-Agent Chat is a VS Code extension that brings seven AI agents to the table as a full development team — Architect, Coder, Executor, Reviewer, Documenter, Coordinator, Team — collaborating via natural @mentions across 28+ models from six providers.",
      "It started as frustration: different AI models excel at different things, and they couldn't talk to each other. I was the integration layer, copying context between tools. Four months and 150+ commits later, the extension exists — and so do the lessons. An AI deleted a database early in my journey. I deleted 500KB of premature performance infrastructure once I realized speed wasn't the point. Asked to optimize resource usage, the agents produced 4,700 lines of self-governance code.",
    ],
    pull: "Coordination is harder than capability. Multi-agent AI needs explicit social protocols — turn-taking, addressing, knowing when to stay silent — not just technical ones.",
    pulls: [
      { k: "Agents",      v: "7 default" },
      { k: "Models",      v: "28+" },
      { k: "Commits",     v: "150+" },
      { k: "License",     v: "MIT" },
    ],
    chips: ["Agentic", "@mentions", "Multi-LLM", "VS Code", "Permissions", "GitHub Copilot integration"],
    link: { label: "GitHub ↗", href: "https://github.com/craig-yappert/multi-agent-chat-extension" },
    paper: { short: "papers/Multi-Agent-One-Pager.pdf", long: "papers/Multi-Agent-Case-Study.pdf" },
  },
];

const CaseCard = ({ c, idx }) => (
  <article className="cy-case" id={c.id}>
    <div className="cy-case-side">
      <div className="cy-eyebrow">{c.badge}</div>
      <h3 className="cy-case-title">{c.title}</h3>
      <div className="cy-case-role cy-mono">{c.role}</div>
      <div className="cy-case-pulls">
        {c.pulls.map((p, i) => (
          <div className="cy-case-pull" key={i}>
            <div className="cy-case-pull-v">{p.v}</div>
            <div className="cy-case-pull-k">{p.k}</div>
          </div>
        ))}
      </div>
      {c.link && (
        <a className="cy-case-link cy-mono" href={c.link.href} target="_blank" rel="noopener">
          {c.link.label}
        </a>
      )}
    </div>
    <div className="cy-case-body">
      {c.body.map((p, i) => <p key={i}>{p}</p>)}
      {c.pull && (
        <div className="cy-case-pull-quote">
          <span className="cy-quote-mark">“</span>
          <p>{c.pull}</p>
        </div>
      )}
      <div className="cy-case-chips">
        {c.chips.map((ch, i) => <span key={i} className="cy-chip">{ch}</span>)}
      </div>
      {c.paper && (
        <div className="cy-case-papers">
          <span className="cy-mono cy-case-papers-label">Read more</span>
          <a href={c.paper.short} target="_blank" rel="noopener">One-pager ↓</a>
          <a href={c.paper.long} target="_blank" rel="noopener">Full case study ↓</a>
        </div>
      )}
    </div>
  </article>
);

const CaseStudies = () => (
  <section className="cy-section cy-cases" id="cases">
    <div className="cy-container">
      <div className="cy-eyebrow">04 — Case studies</div>
      <h2 className="cy-section-title">
        Three projects that say more than a <em>résumé</em> can.
      </h2>
      <p className="cy-section-lede">
        One mission-driven turnaround. One AI-native product launch. One open-source bet on how teams will actually work with AI.
      </p>
      <div className="cy-case-list">
        {CASES.map((c, i) => <CaseCard c={c} idx={i} key={c.id} />)}
      </div>
    </div>
  </section>
);

window.CaseStudies = CaseStudies;
