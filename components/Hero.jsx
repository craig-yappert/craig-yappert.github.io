/* Hero — type-driven, with a small live "now" panel and the Impact CTA */
const Hero = () => {
  const [now, setNow] = React.useState("");
  React.useEffect(() => {
    const t = setInterval(() => {
      const d = new Date();
      const hh = d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: "America/Los_Angeles" });
      setNow(hh + " PT");
    }, 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="cy-hero" id="top">
      <div className="cy-hero-grid">
        <div className="cy-hero-left">
          <div className="cy-hero-tag">
            <span className="cy-hero-pulse" />
            <span>Available · CIO/CTO · Advisor · Builder</span>
          </div>
          <h1 className="cy-hero-title">
            I build <em>solutions</em><br />
            that touch <em>people’s</em><br />
            actual lives.
          </h1>
          <p className="cy-hero-lede">
            Three decades of enterprise leadership — Oracle, MidPen Housing, now Zeeba — turning strategy into shipped systems.
          </p>
          <ul className="cy-hero-stats">
            <li>
              <strong>150,000</strong>
              <span>applicants served</span>
              <div className="cy-hero-stat-card">
                <div className="cy-hero-stat-card-co">MidPen Housing</div>
                <div className="cy-hero-stat-card-yr">2019–2025</div>
              </div>
            </li>
            <li>
              <strong>$250M</strong>
              <span>in transactions / yr</span>
              <div className="cy-hero-stat-card">
                <div className="cy-hero-stat-card-co">MidPen Housing</div>
                <div className="cy-hero-stat-card-yr">2019–2025</div>
              </div>
            </li>
            <li>
              <strong>1M+</strong>
              <span>SSO authentications</span>
              <div className="cy-hero-stat-card">
                <div className="cy-hero-stat-card-co">Oracle Developer Program</div>
                <div className="cy-hero-stat-card-yr">1999–2008</div>
              </div>
            </li>
            <li>
              <strong>6,800+</strong>
              <span>environments operated</span>
              <div className="cy-hero-stat-card">
                <div className="cy-hero-stat-card-co">Oracle Global IT</div>
                <div className="cy-hero-stat-card-yr">2008–2018</div>
              </div>
            </li>
          </ul>
          <p className="cy-hero-lede cy-hero-lede-tail">
            And, lately, AI as a primary development partner — all with the end goal of making a difference.
          </p>
          <div className="cy-hero-actions">
            <a className="cy-btn cy-btn-primary" href="#contact">
              Book a call <span className="cy-btn-arrow">→</span>
            </a>
            <a className="cy-btn cy-btn-ghost" href="#impact">
              See the impact map
            </a>
          </div>
          <div className="cy-hero-meta">
            <div>
              <div className="cy-hero-meta-k">Based in</div>
              <div className="cy-hero-meta-v">San Francisco · {now || "—"}</div>
            </div>
            <div>
              <div className="cy-hero-meta-k">Currently</div>
              <div className="cy-hero-meta-v">Founder, Zeeba Consulting</div>
            </div>
            <div>
              <div className="cy-hero-meta-k">Studied</div>
              <div className="cy-hero-meta-v">Physics + Business · Cal Poly</div>
            </div>
          </div>
        </div>

        <div className="cy-hero-right">
          <HeroPortrait />
          <div className="cy-hero-quote">
            <span className="cy-quote-mark">“</span>
            <p>
              Some movement can be corrected. <em>No</em> movement cannot.
            </p>
            <span className="cy-quote-attr">— operating principle</span>
          </div>
        </div>
      </div>

      <div className="cy-hero-marquee" aria-hidden="true">
        <div className="cy-marquee-track">
          {Array.from({ length: 2 }).map((_, i) => <div className="cy-marquee-row" key={i}>
              <span>Oracle</span><span>·</span>
              <span>MidPen Housing</span><span>·</span>
              <span>Zeeba</span><span>·</span>
              <span>VZZY.io</span><span>·</span>
              <span>Multi-Agent Chat</span><span>·</span>
              <span>GrocerTools</span><span>·</span>
              <span>Fireguard RMS</span><span>·</span>
              <span>Affordable CRM</span><span>·</span>
            </div>
          )}
        </div>
      </div>
    </section>);

};

const HeroPortrait = () => {
  return (
    <div className="cy-portrait">
      <div className="cy-portrait-frame">
        <img src="assets/portrait-1-navy.jpg" alt="Craig Yappert" className="cy-portrait-img" />
      </div>
      <div className="cy-portrait-caption">
        <div className="cy-portrait-name">Craig Yappert</div>
        <div className="cy-portrait-role">CIO / CTO · Builder · Advisor</div>
      </div>
    </div>);

};

window.Hero = Hero;