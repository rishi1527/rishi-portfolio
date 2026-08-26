import { motion } from "motion/react";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-grid"></div>

      <div className="hero-container">
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <div className="availability">
            <span></span>
            Available for opportunities
          </div>

          <p className="hero-small">HELLO, I'M RISHI THE FULL STAC DEVELOPER</p>

          <h1>
            I BUILD
            <br />
            <span className="gradient-text">DIGITAL</span>
            <br />
            EXPERIENCES<span className="orange-dot">.</span>
          </h1>

          <p className="hero-description">
            Beginner developer passionate about building modern websites,
            interactive interfaces and creative digital experiences.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="main-button">
              View Projects
              <span>↗</span>
            </a>

            <a href="#contact" className="outline-button">
              Let's Talk
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-right"
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.25,
          }}
        >
          <div className="code-window">
            <div className="window-header">
              <div className="window-dots">
                <i></i>
                <i></i>
                <i></i>
              </div>

              <span>rishi.jsx</span>
            </div>

            <div className="code-content">
              <p>
                <span className="code-purple">const</span> developer = {"{"}
              </p>

              <p className="indent">
                name: <span className="code-orange">"Rishi"</span>,
              </p>

              <p className="indent">
                role: <span className="code-orange">"Developer"</span>,
              </p>

              <p className="indent">skills: [</p>

              <p className="indent-2">
                <span className="code-green">"HTML"</span>,
              </p>

              <p className="indent-2">
                <span className="code-green">"CSS"</span>,
              </p>

              <p className="indent-2">
                <span className="code-green">"JavaScript"</span>,
              </p>

              <p className="indent-2">
                <span className="code-green">"React"</span>
              </p>

              <p className="indent">],</p>

              <p className="indent">
                learning: <span className="code-blue">true</span>
              </p>

              <p>{"};"}</p>

              <p className="cursor-line">
                <span>▌</span>
              </p>
            </div>
          </div>

          <div className="mini-box box-top">
            <span className="mini-box-icon">✦</span>
            <div>
              <small>FOCUS</small>
              <strong>Creative UI</strong>
            </div>
          </div>

          <div className="mini-box box-left">
            <span className="mini-box-icon">↗</span>
            <div>
              <small>BUILDING</small>
              <strong>React Apps</strong>
            </div>
          </div>

          <div className="mini-box box-bottom">
            <span className="mini-box-icon">◉</span>
            <div>
              <small>STATUS</small>
              <strong>Learning & Building</strong>
            </div>
          </div>

          <div className="floating-card floating-one">
            <span>⚡</span>
            Clean UI
          </div>

          <div className="floating-card floating-two">
            <span>◉</span>
            React
          </div>
        </motion.div>
      </div>

      <div className="hero-bottom">
        <span>SCROLL TO EXPLORE</span>

        <div className="scroll-line"></div>

        <span>01 / 05</span>
      </div>
    </section>
  );
}

export default Hero;
