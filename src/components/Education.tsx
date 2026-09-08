import { education, profile } from "../data/resume";
import "./Education.css";

export function Education() {
  return (
    <section id="education">
      <div className="container">
        <h2 className="section-title">// Education & Clearance</h2>
        <div className="card education-card">
          <p className="education-degree">{education.degree}</p>
          <p className="education-school">
            {education.school} — {education.period}
          </p>
          <p className="education-clearance">{profile.clearance}</p>
        </div>
      </div>
    </section>
  );
}
