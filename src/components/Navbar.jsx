import { motion } from "motion/react";
import { useState } from "react";

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Contact", "#contact"],
  ];

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="nav-container">
        <a href="#home" className="logo" onClick={() => setMenuOpen(false)}>
          Rishi<span>°</span>
        </a>

        <div className="desktop-links">
          {links.map(([name, href]) => (
            <a href={href} key={name}>
              {name}
            </a>
          ))}
        </div>

        <div className="nav-right">
          <button
            className="theme-switch"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Change theme"
          >
            <span className={darkMode ? "selected" : ""}>☾</span>

            <span className={!darkMode ? "selected" : ""}>☀</span>
          </button>

          <a href="#contact" className="nav-button">
            Let's Talk
            <span>↗</span>
          </a>

          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "×" : "☰"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <motion.div
          className="mobile-menu"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
        >
          {links.map(([name, href]) => (
            <a href={href} key={name} onClick={() => setMenuOpen(false)}>
              {name}
            </a>
          ))}

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Let's Talk ↗
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}

export default Navbar;
