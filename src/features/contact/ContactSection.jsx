import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
} from 'lucide-react';
import SectionMarker from '../../components/ui/SectionMarker.jsx';
import { profile } from '../../data/portfolio.js';
import styles from './ContactSection.module.css';

export default function ContactSection() {
  return (
    <section
      className={`${styles.section} section-shell`}
      id="contact"
      aria-labelledby="contact-title"
    >
      <SectionMarker
        index="06"
        label="The next page"
        note="SAY HELLO / SHARE AN IDEA"
      />

      <div className={styles.contactGrid}>
        <div>
          <p className={styles.eyebrow}>
            SOMETHING GOOD STARTS SOMEWHERE
          </p>
          <h2 id="contact-title">
            Let&apos;s make
            <br />
            <em>something</em>
            <br />
            matter.
          </h2>
        </div>

        <div className={styles.contactAside}>
          <p>
            I am open to conversations about software, thoughtful products,
            and opportunities to learn alongside good people. A simple hello
            is a good place to begin.
          </p>

          <div className={styles.links}>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <Linkedin size={17} />
                LinkedIn
              </span>
              <ArrowUpRight size={17} />
            </a>

            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <Github size={17} />
                GitHub
              </span>
              <ArrowUpRight size={17} />
            </a>
          </div>

          <span className={styles.availability}>
            <i />
            {profile.availability}
          </span>
        </div>
      </div>

      <a href="#top" className={styles.backTop}>
        <ArrowDown size={13} />
        BACK TO THE BEGINNING
      </a>
    </section>
  );
}
