import { motion } from "framer-motion";
import { projects } from "../data/resume";
import "./Projects.css";

export function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">// Projects</h2>
        <div className="projects-grid">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              className="card project-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <h3 className="project-name">{project.name}</h3>
              <p className="project-tagline">{project.tagline}</p>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.stack.map((s) => (
                  <span className="tag" key={s}>
                    {s}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {project.live && (
                  <a
                    className="btn"
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live demo →
                  </a>
                )}
                {project.github && (
                  <a
                    className="btn btn-outline"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}
              </div>
              {project.name === "Seinfeld: The Game" && (
                <p className="project-note">
                  Hosted on a free Render tier — first load may take ~30s to wake up.
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
