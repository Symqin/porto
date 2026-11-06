import { ArrowUpRight } from 'lucide-react';
import SectionMarker from '../../components/ui/SectionMarker.jsx';
import {
  certifications,
  education,
  volunteering,
} from '../../data/portfolio.js';
import styles from './EducationSection.module.css';

export default function EducationSection() {
  return (
    <section
      className={`${styles.section} section-shell`}
      aria-labelledby="education-title"
    >
      <SectionMarker
        index="04"
        label="Foundations & footnotes"
        note="EDUCATION / CREDENTIALS / VOLUNTEERING"
      />

      <div className={styles.columns}>
        <div>
          <h2 id="education-title">
            Places that
            <br />
            <em>shaped me.</em>
          </h2>

          <div className={styles.educationList}>
            {education.map((item) => (
              <article
                className={styles.educationItem}
                key={item.institution}
              >
                <span className={styles.period}>{item.period}</span>
                <h3>{item.institution}</h3>
                <p>
                  {item.programme} <span>·</span> {item.note}
                </p>
                <strong>{item.result}</strong>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.sideNotes}>
          <details className={styles.disclosure}>
            <summary>
              <span>01 / CERTIFICATIONS</span>
              <span>{String(certifications.length).padStart(2, '0')} entries</span>
            </summary>

            <ul>
              {certifications.map((item) => (
                <li key={`${item.title}-${item.issuer}`}>
                  <span className={styles.certDate}>{item.date}</span>
                  <span className={styles.certCopy}>
                    <strong>{item.title}</strong>
                    <small>{item.issuer}</small>
                  </span>
                </li>
              ))}
            </ul>
          </details>

          <details className={styles.disclosure}>
            <summary>
              <span>02 / VOLUNTEERING</span>
              <span>{String(volunteering.length).padStart(2, '0')} entries</span>
            </summary>

            <ul>
              {volunteering.map((item) => (
                <li key={item.title}>
                  <span className={styles.certDate}>{item.date}</span>
                  <span className={styles.certCopy}>
                    <strong>{item.title}</strong>
                    <small>{item.note}</small>
                  </span>
                </li>
              ))}
            </ul>
          </details>

          <a
            className={styles.linkedin}
            href="https://www.linkedin.com/in/syahril-mutaqin/"
            target="_blank"
            rel="noreferrer"
          >
            See the full record on LinkedIn
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
