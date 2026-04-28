/* Featured Work — three flagship project cards (VZZY, Multi-Agent, GrocerTools).
   Sits at the top of the Projects section, above the 6-up grid of secondary work. */

const FEATURED = [
  {
    num: "01",
    accent: "amber",
    name: "VZZY.io",
    href: "https://www.vzzy.io",
    meta: [
      ["For", "Strategy ops · COO orgs · transformation leads"],
      ["Status", "Live · production SaaS"],
      ["Model", "Subscription B2B"],
    ],
    pitch: "Make the invisible work visible. VZZY maps how an enterprise actually runs — processes, solutions, orgs — as connected objects, so leaders can see the dependencies and bottlenecks the org chart hides.",
    glyph: <>vis<em>—</em>ibility</>,
    tags: ["Strategy ops", "Process intelligence", "Transformation"],
    stats: [
      ["The buyer", "COO · Chief of Staff · Transformation"],
      ["The job", "See the system. Then change it."],
      ["The thesis", "Org charts lie. Graphs don't."],
      ["Status", "Production · paying customers"],
    ],
    bullets: [
      <><strong>Connected-object model.</strong> Processes, solutions, capabilities, and people — modeled as a graph, queried like one.</>,
      <><strong>Built for the people who lead change.</strong> Not a BPM tool. Not a wiki. A decision surface.</>,
      <><strong>Replaces the spreadsheet maze</strong> that strategy and ops teams actually run on today.</>,
      <><strong>Production-grade, not a prototype.</strong> Multi-tenant, security-reviewed, real customers in real orgs.</>,
    ],
    quote: "If you can't see the system, you can't change the system. The job is to make the invisible visible — and then act on it.",
    links: [
      { label: "Visit ↗", href: "https://www.vzzy.io", primary: true },
      { label: "One-pager ↓", href: "papers/VZZY-One-Pager.pdf" },
      { label: "Full case study ↓", href: "papers/VZZY-Case-Study.pdf" },
    ],
  },
  {
    num: "02",
    accent: "blue",
    name: "Multi-Agent Chat",
    href: "https://github.com/craig-yappert/multi-agent-chat-extension",
    meta: [
      ["For", "Senior engineers · platform & AI teams"],
      ["Status", "Open source · MIT"],
      ["Model", "Free · community"],
    ],
    pitch: "A coordination model for AI agents, not a chat skin. Seven peer agents working inside your IDE with shared memory, multi-provider model routing, and a real permissions layer — built before agentic AI was a category.",
    glyph: <>agents<em>·</em></>,
    tags: ["Developer tools", "Agentic AI", "Coordination model"],
    stats: [
      ["The buyer", "Senior eng · platform · AI"],
      ["The job", "Get useful work from a team of agents"],
      ["The thesis", "The interesting problem is at the seams"],
      ["Status", "Live in the VS Code marketplace"],
    ],
    bullets: [
      <><strong>Peer agents, not a hierarchy.</strong> Shared memory, role specialization, and explicit handoffs.</>,
      <><strong>Permissions and guardrails as first-class.</strong> Earned the hard way — including an agent that deleted a database.</>,
      <><strong>Provider-agnostic by design.</strong> Anthropic, OpenAI, Google, Mistral, local — same interface, real routing.</>,
      <><strong>Open source, opinionated.</strong> The codebase is the argument: how multi-agent should actually work.</>,
    ],
    quote: "Multi-agent isn't a UI pattern. It's a coordination problem. The interesting work happens at the seams.",
    links: [
      { label: "Repo ↗", href: "https://github.com/craig-yappert/multi-agent-chat-extension", primary: true },
      { label: "One-pager ↓", href: "papers/Multi-Agent-One-Pager.pdf" },
      { label: "Full case study ↓", href: "papers/Multi-Agent-Case-Study.pdf" },
    ],
  },
  {
    num: "03",
    accent: "green",
    name: "GrocerTools",
    href: "https://www.grocertools.com",
    meta: [
      ["For", "Independent grocers · 1–5 locations · family-owned"],
      ["Status", "Live · grocertools.com"],
      ["Model", "$9.99/mo · 50 stores free for one year"],
    ],
    pitch: "Closing the technology gap for the stores that feed our communities. Three focused tools — sale cards, expiration, waste — that give independent grocers the operating leverage chains have had for a decade, at a price small stores can actually afford.",
    glyph: <>indie<em>·</em>grocer</>,
    tags: ["Independent retail", "Vertical SaaS", "Underserved market"],
    stats: [
      ["The buyer", "Owner-operators & store managers"],
      ["The job", "Hours back. Margin recovered. Less waste."],
      ["The thesis", "Bicycle, not rocket ship"],
      ["The wedge", "Sale signs that don't take 4 hours"],
    ],
    bullets: [
      <><strong>Sale Card Generator.</strong> Tuesday afternoon in Publisher becomes thirty minutes — and the signs look better.</>,
      <><strong>Expiration Tracker.</strong> Reactive scramble becomes proactive markdown — products get sold, not thrown away.</>,
      <><strong>Waste Management.</strong> For the first time, the store can see exactly where the money goes out the back door.</>,
      <><strong>No POS integration. No IT department.</strong> Value on day one. Works on whatever device is already in the store.</>,
    ],
    quote: "Independent grocers feed their communities. They deserve the same operational tools the chains have — at a price they can actually pay.",
    links: [
      { label: "Visit ↗", href: "https://www.grocertools.com", primary: true },
      { label: "One-pager ↓", href: "papers/GrocerTools-One-Pager.html" },
      { label: "Full case study ↓", href: "papers/GrocerTools-Case-Study.html" },
    ],
  },
];

/* Abstract motif per project — primitives only (circles, squares, hairlines). */
const Motif = ({ accent }) => {
  const stroke = {
    amber: "var(--accent-amber)",
    blue:  "var(--accent-blue-hi)",
    green: "var(--accent-green)",
  }[accent];
  if (accent === "amber") {
    // Connected nodes — VZZY = visibility / graph
    return (
      <svg className="cy-feat-motif" viewBox="0 0 320 360" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <g stroke={stroke} strokeWidth="0.75" fill="none" opacity="0.5">
          <line x1="60"  y1="80"  x2="180" y2="140" />
          <line x1="180" y1="140" x2="260" y2="100" />
          <line x1="180" y1="140" x2="120" y2="240" />
          <line x1="180" y1="140" x2="240" y2="240" />
          <line x1="120" y1="240" x2="240" y2="240" />
          <line x1="60"  y1="80"  x2="120" y2="240" />
        </g>
        <g fill={stroke}>
          <circle cx="60"  cy="80"  r="3.5" />
          <circle cx="180" cy="140" r="5" />
          <circle cx="260" cy="100" r="3.5" />
          <circle cx="120" cy="240" r="3.5" />
          <circle cx="240" cy="240" r="3.5" />
        </g>
        <g stroke="var(--paper-3)" strokeWidth="0.5" fill="none" opacity="0.25">
          <circle cx="180" cy="140" r="42" />
          <circle cx="180" cy="140" r="78" />
        </g>
      </svg>
    );
  }
  if (accent === "blue") {
    // Seven peer agents — Multi-Agent
    const positions = Array.from({ length: 7 }, (_, i) => {
      const a = (i / 7) * Math.PI * 2 - Math.PI / 2;
      return [160 + Math.cos(a) * 90, 180 + Math.sin(a) * 90];
    });
    return (
      <svg className="cy-feat-motif" viewBox="0 0 320 360" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <g stroke={stroke} strokeWidth="0.5" fill="none" opacity="0.35">
          {positions.map(([x1, y1], i) =>
            positions.slice(i + 1).map(([x2, y2], j) => (
              <line key={`${i}-${j}`} x1={x1} y1={y1} x2={x2} y2={y2} />
            ))
          )}
        </g>
        <g fill={stroke}>
          {positions.map(([x, y], i) => <circle key={i} cx={x} cy={y} r="4" />)}
        </g>
        <circle cx="160" cy="180" r="6" fill="var(--paper)" />
      </svg>
    );
  }
  // Green — GrocerTools: shelf grid + price-card pattern
  return (
    <svg className="cy-feat-motif" viewBox="0 0 320 360" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <g stroke="var(--paper-3)" strokeWidth="0.5" opacity="0.3">
        <line x1="0"   y1="120" x2="320" y2="120" />
        <line x1="0"   y1="200" x2="320" y2="200" />
        <line x1="0"   y1="280" x2="320" y2="280" />
      </g>
      <g stroke={stroke} strokeWidth="1" fill="none">
        <rect x="40"  y="86"  width="56" height="34" />
        <rect x="120" y="86"  width="56" height="34" />
        <rect x="200" y="86"  width="56" height="34" />
        <rect x="40"  y="166" width="56" height="34" />
        <rect x="200" y="166" width="56" height="34" />
        <rect x="120" y="246" width="56" height="34" />
      </g>
      <g fill={stroke}>
        <rect x="120" y="166" width="56" height="34" />
      </g>
    </svg>
  );
};

const FeaturedCard = ({ p }) => (
  <article className={"cy-feat cy-feat-" + p.accent + " cy-reveal"}>
    <div className="cy-feat-rail">
      <Motif accent={p.accent} />
      <div className="cy-feat-num">{p.num} · Featured work</div>
      <div>
        <div className="cy-feat-glyph">{p.glyph}</div>
        <div className="cy-feat-tagrow">
          {p.tags.map((t, i) => <span key={i} className="cy-feat-tag">{t}</span>)}
        </div>
      </div>
    </div>

    <div className="cy-feat-body">
      <div className="cy-feat-meta">
        {p.meta.map(([k, v], i) => (
          <span key={i}>
            {i === 0 && <span className="cy-feat-meta-dot" />}
            {k}<strong>{v}</strong>
          </span>
        ))}
      </div>

      <h3 className="cy-feat-name">{p.name}</h3>
      <p className="cy-feat-pitch">{p.pitch}</p>

      <div className="cy-feat-stats">
        {p.stats.map(([v, k], i) => (
          <div key={i} className="cy-feat-stat">
            <span className="cy-feat-stat-v">{v}</span>
            <span className="cy-feat-stat-k">{k}</span>
          </div>
        ))}
      </div>

      <ul className="cy-feat-bullets">
        {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>

      <div className="cy-feat-quote">{p.quote}</div>

      <div className="cy-feat-links">
        {p.links.map((l, i) => (
          <a
            key={i}
            href={l.href}
            target={l.href.startsWith("http") ? "_blank" : undefined}
            rel={l.href.startsWith("http") ? "noopener" : undefined}
            className={l.primary ? "is-primary" : ""}
          >
            {l.label}
          </a>
        ))}
      </div>
    </div>
  </article>
);

const FeaturedWork = () => (
  <div className="cy-featured">
    <div className="cy-feat-stack">
      {FEATURED.map((p, i) => <FeaturedCard key={i} p={p} />)}
    </div>
    <div className="cy-featured-divider">More projects</div>
  </div>
);

window.FeaturedWork = FeaturedWork;
