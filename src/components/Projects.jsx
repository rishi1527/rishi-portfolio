import { motion } from "motion/react";

function Projects() {
  const projects = [
    {
      number: "01",
      title: "Student Management",
      category: "React Application",
      description:
        "A student management application designed to manage student information through a clean interface.",
    },
    {
      number: "02",
      title: "Personal Portfolio",
      category: "React + Motion",
      description:
        "A modern animated portfolio created to showcase my skills, projects and journey.",
    },
    {
      number: "03",
      title: "Creative Web Project",
      category: "Frontend Development",
      description:
        "An experimental project focused on modern layouts, animations and user experience.",
    },
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-label">
          <span>03</span>
          SELECTED WORK
        </div>

        <div className="projects-heading">
          <h2>
            Things I've
            <br />
            <span>built.</span>
          </h2>

          <p>
            A selection of projects I've created while learning and
            experimenting.
          </p>
        </div>

        <div className="project-list">
          {projects.map((project, index) => (
            <motion.article
              className="project-item"
              key={project.number}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ amount: 0.15 }}
              transition={{
                delay: index * 0.1,
              }}
            >
              <div className="project-number">{project.number}</div>

              <div className="project-info">
                <span>{project.category}</span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>
              </div>

              <a href="#contact" className="project-arrow">
                ↗
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
