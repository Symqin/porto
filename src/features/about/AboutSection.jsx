import { ArrowUpRight } from 'lucide-react';
import SectionMarker from '../../components/ui/SectionMarker.jsx';
import { profile } from '../../data/portfolio.js';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <section
      className={`${styles.section} section-shell`}
      id="about"
      aria-labelledby="about-title"
    >
      <SectionMarker
        index="01"
        label="A short introduction"
        note="THE PERSON BEHIND THE SCREEN"
      />

      <div className={styles.layout}>
        <div className={styles.headingBlock}>
          <h2 id="about-title">
            Curiosity is
            <br />
            a <em>practice.</em>
          </h2>
          <span className={styles.japanese} aria-hidden="true">
            好奇心をかたちに
          </span>
        </div>

        <div className={styles.body}>
          <p className={styles.lead}>
            I enjoy building things people can play, use, and rely on.
          </p>
          <p>
            My work moves between game development and software engineering:
            designing gameplay systems in Godot, building mobile and web
            experiences, and connecting applications to APIs and cloud
            services.
          </p>
          <p>
            I also care about what happens after the code runs. Through
            Cypress and manual testing, I look for edge cases, validate key
            flows, and refine the details that make software dependable.
          </p>
          <p>
            Currently studying Informatics Engineering, I keep learning by
            turning ideas into projects and improving them one iteration at a
            time.
          </p>

          <a
            className={styles.link}
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            More about my journey
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      <div className={styles.featureRow}>
        <figure className={styles.scene}>
          <img
            src="/images/about-pixel-desk.webp"
            alt="Pixel-art illustration of a developer desk with a laptop, books, and a resting cat."
            loading="lazy"
          />
          <figcaption>PIXEL WORKSHOP / CONCEPT ART</figcaption>
        </figure>

        <aside className={styles.quote} aria-label="Personal note">
          <span className={styles.quoteEyebrow}>A NOTE TO SELF / 001</span>
          <span className={styles.quoteMark}>“</span>
          <blockquote>
            Good work is often a collection of small decisions made with care.
          </blockquote>
          <span className={styles.quoteCredit}>— SYAHRIL MUTAQIN</span>
        </aside>
      </div>
    </section>
  );
}
