function Footer() {
  return (
    <footer className="footer">
      {/* ================= MAIN FOOTER ================= */}

      <div className="footer-main">
        {/* BRAND */}
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            RISHI<span>°</span>
          </a>

          <p>
            Beginner developer creating modern, interactive and meaningful
            digital experiences.
          </p>
        </div>

        {/* NAVIGATION */}
        <div className="footer-group">
          <h4>NAVIGATION</h4>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* SOCIALS */}
        <div className="footer-group">
          <h4>SOCIALS</h4>

          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>

          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            Instagram ↗
          </a>

          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            Twitter / X ↗
          </a>

          <a href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        </div>

        {/* CONTACT */}
        <div className="footer-group">
          <h4>CONTACT</h4>

          <a href="mailto:yourmail@gmail.com">rishisolanki1527@gmail.com</a>

          <p className="footer-location">India 🇮🇳</p>
        </div>
      </div>

      {/* =================================================
          BOTTOM BAR
          IMPORTANT: YE footer-main KE BAHAR HAI
      ================================================= */}

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Rishi. All rights reserved.</span>

        <span>
          Designed & Built with <b>♥</b>
        </span>

        <a href="#home">BACK TO TOP ↑</a>
      </div>
    </footer>
  );
}

export default Footer;
