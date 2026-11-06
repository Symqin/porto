import SectionMarker from '../../components/ui/SectionMarker.jsx';
import { experiences } from '../../data/portfolio.js';
import styles from './ExperienceSection.module.css';

export default function ExperienceSection() {
  return (
    <section
      className={`${styles.section} section-shell`}
      id="experience"
      aria-labelledby="experience-title"
    >
      <SectionMarker
        index="03"
        label="Along the way"
        note="WORK, COMMUNITY & LEARNING"
      />

      <div className={styles.headingRow}>
        <h2 id="experience-title">
          The story
          <br />
          <em>so far.</em>
        </h2>
        <p>
          Not a straight line. More like a series of rooms, people, and projects
          that changed the way I see things.
        </p>
      </div>

      <div className={styles.timeline}>
        {experiences.map((experience, index) => (
          <article
            className={styles.entry}
            key={`${experience.organization}-${experience.period}`}
          >
            <div className={styles.entryMeta}>
              <span className={styles.entryIndex}>
                {String(index + 1).padStart(2, '0')}
              </span>
              <span>{experience.period}</span>
            </div>

            <div className={styles.entryContent}>
              <span className={styles.type}>{experience.type}</span>
              <h3>{experience.role}</h3>
              <p className={styles.organization}>
                {experience.organization}
              </p>
              <p className={styles.description}>
                {experience.description}
              </p>
            </div>

            <span className={styles.entrySign} aria-hidden="true">
              ↗
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
