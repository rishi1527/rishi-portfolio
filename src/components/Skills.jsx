import { motion } from "motion/react";

function Skills() {
  const skills = [
    ["01", "HTML", "Structure & semantics"],
    ["02", "CSS", "Responsive interfaces"],
    ["03", "JavaScript", "Interactive experiences"],
    ["04", "React", "Modern applications"],
    ["05", "Git", "Version control"],
    ["06", "UI Design", "Clean interfaces"],
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-label">
          <span>02</span>
          MY SKILLS
        </div>

        <div className="skills-heading">
          <h2>
            Tools I use
            <br />
            to <span>build.</span>
          </h2>

          <p>
            Technologies I'm learning and using to create modern web
            experiences.
          </p>
        </div>

        <div className="skills-list">
          {skills.map((skill, index) => (
            <motion.div
              className="skill-row"
              key={skill[1]}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ amount: 0.1 }}
              transition={{
                delay: index * 0.08,
              }}
            >
              <span className="skill-index">{skill[0]}</span>

              <h3>{skill[1]}</h3>

              <p>{skill[2]}</p>

              <span className="skill-icon">↗</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
