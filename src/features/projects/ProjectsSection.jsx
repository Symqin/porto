import { ArrowUpRight } from 'lucide-react';
import SectionMarker from '../../components/ui/SectionMarker.jsx';
import { projects } from '../../data/portfolio.js';
import ProjectArtwork from './ProjectArtwork.jsx';
import styles from './ProjectsSection.module.css';

export default function ProjectsSection() {
  return (
    <section
      className={`${styles.section} section-shell`}
      id="work"
      aria-labelledby="work-title"
    >
      <SectionMarker
        index="02"
        label="Selected work"
        note="PROJECTS FROM THE WORKSHOP"
      />

      <div className={styles.headingRow}>
        <h2 id="work-title">Featured <span>works</span></h2>
        <p>
          A collection of experiments and products across game development,
          software engineering, and quality assurance.
        </p>
      </div>

      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <article className={styles.projectCard} key={project.id}>
            <ProjectArtwork project={project} />

            <div className={styles.projectContent}>
              <div className={styles.projectMeta}>
                <span>{project.category}</span>
                <span>{project.period}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className={styles.tags}>
                {project.stack.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              {project.url ? (
                <a href={project.url} target="_blank" rel="noreferrer">
                  View project <ArrowUpRight size={14} />
                </a>
              ) : (
                <span className={styles.workInProgress}>PROJECT NOTES</span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
