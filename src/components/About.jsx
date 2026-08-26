import { motion } from "motion/react";

function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-label">
          <span>01</span>
          ABOUT ME
        </div>

        <div className="about-layout">
          <motion.div
            className="about-title"
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ amount: 0.2 }}
          >
            <p className="mini-title">WHO I AM</p>

            <h2>
              Turning ideas
              <br />
              into <span>digital</span>
              <br />
              experiences.
            </h2>
          </motion.div>

          <motion.div
            className="about-content"
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ amount: 0.2 }}
          >
            <p className="about-big">
              I'm Rishi, a beginner developer who loves creating things for the
              web.
            </p>

            <p>
              I'm currently learning modern web development and building
              projects with HTML, CSS, JavaScript and React.
            </p>

            <p>
              My goal is simple — keep learning, keep building and create
              interfaces that people enjoy using.
            </p>

            <a href="#contact" className="arrow-link">
              More about me
              <span>↗</span>
            </a>
          </motion.div>
        </div>

        <div className="about-cards">
          <div className="info-card">
            <span>01</span>
            <h3>Creative</h3>
            <p>I enjoy experimenting with layouts and interactions.</p>
          </div>

          <div className="info-card">
            <span>02</span>
            <h3>Curious</h3>
            <p>Always learning something new and improving my skills.</p>
          </div>

          <div className="info-card">
            <span>03</span>
            <h3>Focused</h3>
            <p>Turning ideas into working projects one step at a time.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
