/* Career timeline — vertical, expandable rows. Oracle nested. */
const ORACLE_ROLES = [
  {
    range: "2008 — 2018",
    role: "Sr. Director, Global IT",
    summary: "Executive accountability for Global IT IaaS/PaaS standards across 15 lines of business — 2,000+ apps, 6,800+ environments.",
    bullets: [
      "$5M+ annual budget, executive-level leadership across 15 LOBs.",
      "$2.5M cost reduction over two years through automation, footprint reduction, datacenter consolidation.",
      "50% reduction in problem resolution times.",
    ],
  },
  {
    range: "1999 — 2008",
    role: "Director / Sr. Director, Systems Engineering / On Demand",
    summary: "Led senior engineers building Oracle’s On-Demand applications — customer intake, lifecycle, BI, portals. The work I’m proudest of: the things customers actually used.",
    bullets: [
      "Single Sign-On for 1M+ developers via the Oracle Developer Program — 125% YoY growth in authentication.",
      "Oracle Technology Network, Partner Network, corporate web, Education Network.",
      "Pioneering work in dynamic site generation and cross-site search.",
    ],
  },
  {
    range: "1994 — 1999",
    role: "Sr. Product Manager",
    summary: "Led Oracle’s first retail database, Workgroup Server — Oracle’s debut Windows product. Owned go-to-market, features, releases, and licensing.",
    bullets: [],
  },
];

const TIMELINE = [
  {
    range: "2025 — Present",
    co: "Zeeba Consulting",
    role: "CTO / Founder",
    place: "San Francisco Bay Area",
    summary: "Founded a consultancy applying AI as a primary development partner — strategy and execution for organizations who need to move now.",
    bullets: [
      "Launched VZZY.io — enterprise visibility platform — 53 days from idea to production.",
      "Built Multi-Agent Chat: 7 collaborative AI agents reducing issue resolution + delivery time by 30%.",
      "Developed a Next-gen Traffic Management POC for a Southern California municipality — visual intersection and route-path builder.",
    ],
    tag: "Builder / advisor",
  },
  {
    range: "2019 — 2025",
    co: "MidPen Housing Corporation",
    role: "Vice President, Information Technology",
    place: "Foster City, CA",
    summary: "Led IT for a $1.9B affordable housing organization. 140+ sites, $4M direct budget, $8M influenced. Built the platforms that supported 25% organizational growth and 40% business growth — without scaling IT linearly.",
    bullets: [
      "Cloud-first modernization + financial platform: $250M/yr in transactions, 99.9%+ uptime, 35% cost optimization.",
      "Architected applicant intake serving 150,000+ residents.",
      "Salesforce, RealPage, Ramp ERP deployments — 100% cloud transition.",
      "M365 employee productivity platform deployed company-wide.",
      "75% delivery cycle reduction via rapid-automation methodology.",
    ],
    tag: "Mission-driven exec",
  },
  {
    range: "1994 — 2018",
    co: "Oracle Corporation",
    role: "24 years · 3 distinct roles",
    place: "Foster City, CA",
    summary: "Twenty-four years across product management, customer-facing systems engineering, and global IT leadership. Each role built the foundation for the next.",
    nested: ORACLE_ROLES,
    tag: "Scale operator",
  },
];

const TimelineRow = ({ item, isOpen, onToggle }) => {
  const [openSubs, setOpenSubs] = React.useState(() => new Set([0]));
  const toggleSub = (si) => {
    setOpenSubs(prev => {
      const next = new Set(prev);
      if (next.has(si)) next.delete(si); else next.add(si);
      return next;
    });
  };
  return (
    <div className={"cy-tl-row " + (isOpen ? "is-open" : "")}>
      <button className="cy-tl-head" onClick={onToggle}>
        <div className="cy-tl-range cy-mono">{item.range}</div>
        <div className="cy-tl-co">
          <div className="cy-tl-co-name">{item.co}</div>
          <div className="cy-tl-role">{item.role}</div>
        </div>
        <div className="cy-tl-tag">{item.tag}</div>
        <div className="cy-tl-toggle" aria-hidden="true">{isOpen ? "−" : "+"}</div>
      </button>
      <div className="cy-tl-body" data-open={isOpen ? "true" : "false"}>
        <div className="cy-tl-body-inner">
          <p className="cy-tl-summary">{item.summary}</p>
          {item.bullets && item.bullets.length > 0 && (
            <ul className="cy-tl-bullets">
              {item.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          )}
          {item.nested && (
            <div className="cy-tl-nested">
              {item.nested.map((sub, si) => {
                const subOpen = openSubs.has(si);
                return (
                  <div key={si} className={"cy-tl-sub " + (subOpen ? "is-open" : "")}>
                    <button className="cy-tl-sub-head"
                            onClick={(e) => { e.stopPropagation(); toggleSub(si); }}>
                      <span className="cy-tl-sub-range cy-mono">{sub.range}</span>
                      <span className="cy-tl-sub-role">{sub.role}</span>
                      <span className="cy-tl-sub-toggle">{subOpen ? "−" : "+"}</span>
                    </button>
                    <div className="cy-tl-sub-body" data-open={subOpen ? "true" : "false"}>
                      <div className="cy-tl-sub-inner">
                        <p>{sub.summary}</p>
                        {sub.bullets.length > 0 && (
                          <ul className="cy-tl-bullets">
                            {sub.bullets.map((b, i) => <li key={i}>{b}</li>)}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          <div className="cy-tl-place cy-mono">↳ {item.place}</div>
        </div>
      </div>
    </div>
  );
};

const Timeline = () => {
  const [open, setOpen] = React.useState(0);
  return (
    <section className="cy-section cy-timeline" id="timeline">
      <div className="cy-container">
        <div className="cy-eyebrow">03 — Career arc</div>
        <h2 className="cy-section-title">
          Three decades, one <em>through-line</em>: build for the people who use it.
        </h2>
        <p className="cy-section-lede">
          Physics + Business at Cal Poly led to Oracle product, then enterprise IT, then mission-driven leadership at MidPen, then back to building. Click any row.
        </p>
        <div className="cy-tl-list">
          {TIMELINE.map((it, i) => (
            <TimelineRow key={i} item={it}
                         isOpen={open === i}
                         onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </section>
  );
};

window.Timeline = Timeline;
