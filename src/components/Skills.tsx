import { motion } from "framer-motion";
import { skills } from "../data/resume";
import "./Skills.css";

export function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">// Tech Stack</h2>
        <div className="skills-grid">
          {skills.map((group, i) => (
            <motion.div
              key={group.label}
              className="card skills-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <h3 className="skills-label">{group.label}</h3>
              <div className="skills-tags">
                {group.items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
