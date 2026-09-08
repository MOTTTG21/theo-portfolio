import { motion } from "framer-motion";
import { experience } from "../data/resume";
import "./Experience.css";

export function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title">// Experience</h2>
        <div className="timeline">
          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              className="card job-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="job-head">
                <h3 className="job-role">{job.role}</h3>
                <span className="job-period">{job.period}</span>
              </div>
              <p className="job-company">{job.company}</p>
              <ul className="job-bullets">
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
