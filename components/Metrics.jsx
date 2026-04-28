/* Metrics — animated counters with mono labels */
const METRICS = [
  { value: 250, prefix: "$",  suffix: "M",  label: "Annual transactions, processed reliably",          context: "MidPen financial platform · 99.9% uptime" },
  { value: 150, prefix: "",   suffix: "K",  label: "Applicants served by digital intake",              context: "MidPen affordable housing pipeline" },
  { value: 2.5, prefix: "$",  suffix: "M",  label: "IT cost reduced over two years",                   context: "Oracle Global IT consolidation", decimals: 1 },
  { value: 75,  prefix: "",   suffix: "%",  label: "Faster delivery cycles",                           context: "Rapid-automation methodology" },
  { value: 40,  prefix: "",   suffix: "%",  label: "Org growth supported without IT scaling linearly", context: "MidPen, 2019–2025" },
  { value: 60,  prefix: "",   suffix: " days", label: "Idea to production with AI as primary partner",context: "VZZY.io launch" },
];

const Counter = ({ value, prefix = "", suffix = "", decimals = 0, isIn }) => {
  const [display, setDisplay] = React.useState(0);
  React.useEffect(() => {
    if (!isIn) return;
    const start = performance.now();
    const dur = 1400;
    let raf;
    const tick = (t) => {
      const k = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - k, 3);
      setDisplay(value * eased);
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isIn, value]);
  const fmt = (n) => {
    if (decimals > 0) return n.toFixed(decimals);
    return Math.round(n).toLocaleString();
  };
  return <span>{prefix}{fmt(display)}{suffix}</span>;
};

const Metrics = () => {
  const ref = React.useRef(null);
  const [isIn, setIsIn] = React.useState(false);
  React.useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setIsIn(true); }, { threshold: 0.2 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <section className="cy-section cy-metrics" ref={ref} id="metrics">
      <div className="cy-container">
        <div className="cy-eyebrow">02 — Receipts</div>
        <h2 className="cy-section-title">
          Numbers I can <em>defend</em>, not just <em>cite</em>.
        </h2>
        <p className="cy-section-lede">
          Each one ties to a system I led, a team I worked with, and a person on the other side.
        </p>
        <div className="cy-metric-grid">
          {METRICS.map((m, i) => (
            <div className="cy-metric" key={i} style={{ "--i": i }}>
              <div className="cy-metric-num">
                <Counter {...m} isIn={isIn} />
              </div>
              <div className="cy-metric-label">{m.label}</div>
              <div className="cy-metric-context">{m.context}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

window.Metrics = Metrics;
