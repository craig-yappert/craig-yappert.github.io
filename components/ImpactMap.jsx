/* ImpactMap — signature interaction.
   A force-style node graph wiring three layers:
   Strategic moves  →  Systems shipped  →  Human outcomes.
   Hover any node to highlight its connections. */

const IMPACT_NODES = [
  // STRATEGY (left)
  { id: "s1",  layer: 0, label: "Cloud-first modernization",       sub: "MidPen, 2019–2025" },
  { id: "s2",  layer: 0, label: "Rapid automation methodology",    sub: "MidPen" },
  { id: "s3",  layer: 0, label: "AI as primary dev partner",       sub: "Zeeba, 2025–" },
  { id: "s4",  layer: 0, label: "Global IT IaaS/PaaS standards",   sub: "Oracle, 2008–2018" },
  { id: "s5",  layer: 0, label: "Cybersecurity framework",         sub: "MidPen" },
  { id: "s6",  layer: 0, label: "Oracle Developer Program",        sub: "Oracle, 1999–2008" },

  // SYSTEMS (middle)
  { id: "y1", layer: 1, label: "Salesforce + RealPage + Ramp ERP", sub: "ERP integration" },
  { id: "y2", layer: 1, label: "Financial platform",               sub: "$250M / yr · 99.9% uptime" },
  { id: "y3", layer: 1, label: "M365 productivity platform",       sub: "Company-wide" },
  { id: "y4", layer: 1, label: "Multi-Agent Chat",                 sub: "7-agent collaborative AI" },
  { id: "y5", layer: 1, label: "VZZY.io",                          sub: "Enterprise visibility" },
  { id: "y6", layer: 1, label: "2,000+ apps, 6,800+ envs",          sub: "Oracle Global IT" },
  { id: "y7", layer: 1, label: "Single Sign-On",                   sub: "1M+ users · Oracle Dev Program" },

  // OUTCOMES (right)
  { id: "o1", layer: 2, label: "150,000 applicants served",        sub: "MidPen property operations" },
  { id: "o2a", layer: 2, label: "25% organizational growth",         sub: "MidPen team & footprint" },
  { id: "o2b", layer: 2, label: "40% business growth",               sub: "MidPen revenue scale" },
  { id: "o3", layer: 2, label: "$2.5M IT cost reduction",          sub: "Two-year run · Oracle" },
  { id: "o4", layer: 2, label: "75% faster delivery",              sub: "Cycle compression" },
  { id: "o5", layer: 2, label: "30% faster issue resolution",      sub: "Agent collaboration" },
  { id: "o6", layer: 2, label: "60 days idea → prod",              sub: "VZZY launch" },
  { id: "o7", layer: 2, label: "1M+ developers authenticated",     sub: "Oracle Developer Program" },
];

const IMPACT_LINKS = [
  ["s1","y1"], ["s1","y2"], ["s1","y3"],
  ["s2","y1"], ["s2","y3"],
  ["s3","y4"], ["s3","y5"],
  ["s4","y6"],
  ["s5","y2"], ["s5","y6"],
  ["s6","y7"],

  ["y1","o1"], ["y1","o2a"], ["y1","o2b"],
  ["y2","o2b"], ["y2","o4"],
  ["y3","o2a"],
  ["y4","o5"], ["y4","o6"],
  ["y5","o6"],
  ["y6","o3"], ["y6","o4"],
  ["y7","o7"],
];

const ImpactMap = () => {
  const [hovered, setHovered] = React.useState(null);
  const [filter, setFilter] = React.useState("all"); // all | midpen | oracle | zeeba

  const layoutRef = React.useRef(null);
  const [size, setSize] = React.useState({ w: 1200, h: 640 });

  React.useEffect(() => {
    const ro = new ResizeObserver(entries => {
      for (const e of entries) {
        const w = e.contentRect.width;
        const h = Math.max(680, Math.min(840, w * 0.62));
        setSize({ w, h });
      }
    });
    if (layoutRef.current) ro.observe(layoutRef.current);
    return () => ro.disconnect();
  }, []);

  // Compute positions per layer
  const positions = React.useMemo(() => {
    const map = {};
    const cols = [
      IMPACT_NODES.filter(n => n.layer === 0),
      IMPACT_NODES.filter(n => n.layer === 1),
      IMPACT_NODES.filter(n => n.layer === 2),
    ];
    // Outer columns at 20/80 so links span the full width;
    // headers are positioned separately to sit over each column's visual content.
    const xPos = [size.w * 0.20, size.w * 0.50, size.w * 0.80];
    const topPad = 130; // generous room: header (28) + line (48) + label height (~30) + breathing
    cols.forEach((col, ci) => {
      col.forEach((n, i) => {
        const span = size.h - topPad - 40;
        const y = topPad + (span / Math.max(1, col.length - 1 || 1)) * i;
        map[n.id] = { x: xPos[ci], y, layer: ci };
      });
    });
    return map;
  }, [size]);

  const matchesFilter = (n) => {
    if (filter === "all") return true;
    const f = filter.toLowerCase();
    return (n.sub || "").toLowerCase().includes(f) || (n.label || "").toLowerCase().includes(f);
  };

  const isActiveNode = (id) => {
    if (!hovered) return true;
    if (id === hovered) return true;
    return IMPACT_LINKS.some(([a,b]) =>
      (a === hovered && b === id) || (b === hovered && a === id)
    );
  };

  const isActiveLink = ([a,b]) => {
    if (!hovered) return true;
    return a === hovered || b === hovered;
  };

  return (
    <section className="cy-section cy-impact" id="impact">
      <div className="cy-container">
        <div className="cy-eyebrow">01 — Impact Map</div>
        <h2 className="cy-section-title">
          The work, traced from <em>strategic move</em> to <em>human outcome</em>.
        </h2>
        <p className="cy-section-lede">
          A career in IT only matters if you can show the line from a decision to a person it touched.
          Hover any node to follow the thread.
        </p>

        <div className="cy-impact-controls">
          <div className="cy-impact-legend">
            <span className="cy-impact-dot s0" /> Strategy
            <span className="cy-impact-dot s1" /> Systems shipped
            <span className="cy-impact-dot s2" /> Outcome
          </div>
          <div className="cy-impact-filter">
            {[
              ["all","All"],
              ["midpen","MidPen"],
              ["oracle","Oracle"],
              ["zeeba","Zeeba"],
            ].map(([k,l]) => (
              <button key={k}
                      className={"cy-impact-pill " + (filter === k ? "is-on" : "")}
                      onClick={() => setFilter(k)}>{l}</button>
            ))}
          </div>
        </div>

        <div className="cy-impact-canvas" ref={layoutRef}>
          <svg width={size.w} height={size.h} className="cy-impact-svg">
            {/* Links */}
            {IMPACT_LINKS.map(([a,b], i) => {
              const pa = positions[a], pb = positions[b];
              if (!pa || !pb) return null;
              const active = isActiveLink([a,b]);
              const cx1 = pa.x + (pb.x - pa.x) * 0.5;
              const cx2 = pa.x + (pb.x - pa.x) * 0.5;
              const d = `M ${pa.x} ${pa.y} C ${cx1} ${pa.y}, ${cx2} ${pb.y}, ${pb.x} ${pb.y}`;
              return (
                <path key={i} d={d}
                  stroke={active ? "rgba(216,160,90,0.65)" : "rgba(243,239,230,0.06)"}
                  strokeWidth={active ? 1.4 : 0.8}
                  fill="none" />
              );
            })}
            {/* Nodes */}
            {IMPACT_NODES.map(n => {
              const p = positions[n.id];
              if (!p) return null;
              const active = isActiveNode(n.id);
              const muted = !matchesFilter(n);
              return (
                <g key={n.id}
                   className={"cy-impact-node " + (n.id === hovered ? "is-hover " : "") + (active ? "is-active " : "is-dim ") + (muted ? "is-mute" : "")}
                   transform={`translate(${p.x}, ${p.y})`}
                   onMouseEnter={() => setHovered(n.id)}
                   onMouseLeave={() => setHovered(null)}>
                  <circle r={n.layer === 1 ? 7 : 5} className={`cy-impact-circle layer-${n.layer}`} />
                  <foreignObject x={n.layer === 0 ? -206 : (n.layer === 2 ? 14 : -110)}
                                 y={-30}
                                 width={n.layer === 1 ? 220 : 192}
                                 height={60}
                                 style={{ overflow: "visible" }}>
                    <div className={"cy-impact-label l" + n.layer}>
                      <div className="cy-impact-label-main">{n.label}</div>
                      <div className="cy-impact-label-sub">{n.sub}</div>
                    </div>
                  </foreignObject>
                </g>
              );
            })}
            {/* Column headers */}
            <g className="cy-impact-cols">
              <line x1={24} x2={size.w - 24} y1={64} y2={64}
                    stroke="rgba(243,239,230,0.10)" strokeWidth="1" />
              <text x={size.w * 0.20 - 100} y={36} textAnchor="middle"
                    className="cy-impact-col">
                <tspan className="cy-impact-col-num">01</tspan>
                <tspan dx="10">Strategy</tspan>
              </text>
              <text x={size.w * 0.50} y={36} textAnchor="middle"
                    className="cy-impact-col">
                <tspan className="cy-impact-col-num">02</tspan>
                <tspan dx="10">Systems</tspan>
              </text>
              <text x={size.w * 0.80 + 100} y={36} textAnchor="middle"
                    className="cy-impact-col">
                <tspan className="cy-impact-col-num">03</tspan>
                <tspan dx="10">Outcomes</tspan>
              </text>
            </g>
          </svg>
        </div>

        {/* Mobile fallback — vertical flow */}
        <div className="cy-impact-mobile">
          {hovered && (
            <div className="cy-impact-mob-hint">Tap again to clear · showing connections</div>
          )}
          {[
            { num: "01", title: "Strategy",  layer: 0, dot: "s0" },
            { num: "02", title: "Systems",   layer: 1, dot: "s1" },
            { num: "03", title: "Outcomes",  layer: 2, dot: "s2" },
          ].map((col, ci) => (
            <div key={ci} className="cy-impact-mob-col">
              <div className="cy-impact-mob-h">
                <span className="cy-impact-mob-num">{col.num}</span>
                <span className="cy-impact-mob-title">{col.title}</span>
              </div>
              <ul className="cy-impact-mob-list">
                {IMPACT_NODES.filter(n => n.layer === col.layer && matchesFilter(n)).map(n => (
                  <li key={n.id}
                      className={[
                        "cy-impact-mob-item",
                        hovered === n.id ? "is-selected" : "",
                        hovered && !isActiveNode(n.id) ? "is-dim" : "",
                      ].filter(Boolean).join(" ")}
                      onClick={() => setHovered(hovered === n.id ? null : n.id)}>
                    <span className={"cy-impact-dot " + col.dot} />
                    <div>
                      <div className="cy-impact-mob-label">{n.label}</div>
                      <div className="cy-impact-mob-sub">{n.sub}</div>
                    </div>
                  </li>
                ))}
              </ul>
              {ci < 2 && <div className="cy-impact-mob-arrow">↓</div>}
            </div>
          ))}
        </div>

        <div className="cy-impact-footnote cy-mono">
          ↳ this map reads left-to-right: a strategic decision flows through the systems it produced and lands on the people it served.
        </div>
      </div>
    </section>
  );
};

window.ImpactMap = ImpactMap;
