/* Story (about) + Contact CTA */
const Story = () => (
  <section className="cy-section cy-story" id="story">
    <div className="cy-narrow">
      <div className="cy-eyebrow">06 — The through-line</div>
      <h2 className="cy-section-title">
        Tech got me the <em>education</em>. People got me the <em>career</em>.
      </h2>
      <div className="cy-story-body">
        <p>
          I studied physics and business at Cal Poly — useful, but not the point. The point has always been what technology <em>does</em> for the people who actually touch it.
        </p>
        <p>
          At Oracle I had access to every piece of tech I could consume, and the projects I’m proudest of were the customer-facing ones — the website, the developer program, Single Sign-On for a million users. Things people interacted with directly.
        </p>
        <p>
          Moving to MidPen Housing was an expression of that same impulse, made larger. In my first week I was making decisions that landed on residents’ lives — what their leasing experience felt like, whether their property staff had functional tools, whether the application portal worked at 11pm on a Sunday when someone needed it.
        </p>
        <p>
          The work I do now — Zeeba, VZZY, Multi-Agent, GrocerTools, Fireguard, Affordable CRM — carries the same vision. Build for the people the big SaaS market tends to skip: volunteer fire departments, independent grocers, affordable-housing tenants. Build with whatever tools move us forward — including, lately, AI as a primary partner.
        </p>
        <p className="cy-story-pull">
          What I look for in any organization is the <em>murmur</em> — the 3-degree background radiation of friction that employees talk about at the water cooler. That’s where the real progress lives. Most companies look right past it.
        </p>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section className="cy-section cy-contact" id="contact">
    <div className="cy-container">
      <div className="cy-contact-inner">
        <div className="cy-contact-left">
          <div className="cy-eyebrow">09 — Let’s talk</div>
          <h2 className="cy-contact-title">
            If you’re building something that <em>matters</em>, I’d like to hear about it.
          </h2>
          <p className="cy-contact-lede">
            CIO/CTO roles, fractional engagements, advisory work, or interesting builds. Boards and CEOs especially welcome.
          </p>
          <div className="cy-contact-actions">
            <a className="cy-btn cy-btn-primary" href="mailto:cyappert@gmail.com?subject=Hello%20Craig">
              Email me <span className="cy-btn-arrow">→</span>
            </a>
            <a className="cy-btn cy-btn-ghost" href="https://www.linkedin.com/in/craig-yappert/" target="_blank" rel="noopener">
              LinkedIn ↗
            </a>
            <a className="cy-btn cy-btn-ghost" href="papers/Craig-Yappert-Resume.pdf" target="_blank" rel="noopener">
              Resume ↓
            </a>
          </div>
        </div>
        <div className="cy-contact-right">
          <div className="cy-contact-card">
            <div className="cy-contact-row">
              <span className="cy-contact-k cy-mono">Email</span>
              <a className="cy-contact-v" href="mailto:cyappert@gmail.com">cyappert@gmail.com</a>
            </div>
            <div className="cy-contact-row">
              <span className="cy-contact-k cy-mono">Based</span>
              <span className="cy-contact-v">San Francisco · Remote-friendly</span>
            </div>
            <div className="cy-contact-row">
              <span className="cy-contact-k cy-mono">Response</span>
              <span className="cy-contact-v">Within 24 hours, usually same day</span>
            </div>
            <div className="cy-contact-row">
              <span className="cy-contact-k cy-mono">For</span>
              <span className="cy-contact-v">CIO/CTO · advisory · fractional · builds</span>
            </div>
            <div className="cy-contact-row">
              <span className="cy-contact-k cy-mono">Currently</span>
              <span className="cy-contact-v"><span className="cy-availability-dot" /> Available</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

window.Story = Story;
window.Contact = Contact;
