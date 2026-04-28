/* App root + nav scroll handler + reveal observer */
const App = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  React.useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);
  const closeMenu = () => setMenuOpen(false);

  React.useEffect(() => {
    const els = document.querySelectorAll(".cy-reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="cy-page">
      <nav className={"cy-nav " + (scrolled ? "is-scrolled" : "") + (menuOpen ? " is-menu-open" : "")}>
        <a className="cy-mark" href="#top" onClick={closeMenu}>
          <span className="cy-mark-glyph">CY</span>
          <span>Craig Yappert</span>
        </a>
        <div className="cy-nav-links">
          <a href="#impact">Impact</a>
          <a href="#timeline">Career</a>
          <a href="#cases">Cases</a>
          <a href="#projects">Projects</a>
          <a href="#story">Story</a>
        </div>
        <a className="cy-nav-cta" href="#contact">Book a call</a>
        <button
          className={"cy-nav-burger " + (menuOpen ? "is-open" : "")}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(o => !o)}>
          <span></span><span></span><span></span>
        </button>
      </nav>
      <div className={"cy-nav-sheet " + (menuOpen ? "is-open" : "")} onClick={closeMenu}>
        <div className="cy-nav-sheet-inner" onClick={(e) => e.stopPropagation()}>
          <a href="#impact" onClick={closeMenu}>Impact</a>
          <a href="#timeline" onClick={closeMenu}>Career</a>
          <a href="#cases" onClick={closeMenu}>Cases</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#story" onClick={closeMenu}>Story</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a className="cy-nav-sheet-cta" href="#contact" onClick={closeMenu}>Book a call →</a>
        </div>
      </div>

      <window.Hero />
      <window.ImpactMap />
      <window.Metrics />
      <window.Timeline />
      <window.CaseStudies />
      <window.Projects />
      <window.Story />
      <window.SkillsCerts />
      <window.GitHubFeed />
      <window.Contact />

      <footer className="cy-footer">
        <div className="cy-footer-inner">
          <div>
            © {new Date().getFullYear()} Craig Yappert · San Francisco
          </div>
          <div>
            <a href="mailto:cyappert@gmail.com">Email</a>
            <a href="https://www.linkedin.com/in/craig-yappert/" target="_blank" rel="noopener">LinkedIn</a>
            <a href="https://github.com/craig-yappert" target="_blank" rel="noopener">GitHub</a>
            <a href="https://www.vzzy.io" target="_blank" rel="noopener">VZZY.io</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
