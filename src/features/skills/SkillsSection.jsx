import SectionMarker from '../../components/ui/SectionMarker.jsx';
import { skillGroups } from '../../data/portfolio.js';
import styles from './SkillsSection.module.css';

export default function SkillsSection() {
  return (
    <section
      className={`${styles.section} section-shell`}
      aria-labelledby="skills-title"
    >
      <SectionMarker
        index="05"
        label="Tools of the trade"
        note="A WORKING SET, ALWAYS EVOLVING"
      />

      <div className={styles.heading}>
        <h2 id="skills-title">
          A growing
          <br />
          <em>toolbox.</em>
        </h2>
        <p>
          I prefer learning a tool because a problem calls for it — not just
          because it is new.
        </p>
      </div>

      <div className={styles.groups}>
        {skillGroups.map((group) => (
          <article className={styles.group} key={group.index}>
            <span className={styles.groupIndex}>{group.index}</span>

            <div className={styles.groupCopy}>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
            </div>

            <div className={styles.skillList}>
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
