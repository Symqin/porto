import { ArrowRight, Code2, Gamepad2, ShieldCheck } from 'lucide-react';
import { profile } from '../../data/portfolio.js';
import styles from './HeroSection.module.css';

const ROLE_ITEMS = [
  { label: 'Game Developer', icon: Gamepad2 },
  { label: 'Software Engineer', icon: Code2 },
  { label: 'QA / Testing', icon: ShieldCheck },
];

export default function HeroSection() {
  return (
    <section className={`${styles.hero} page-shell`} id="top" aria-labelledby="hero-title">
      <div className={styles.heroFrame}>
        <img
          className={styles.heroImage}
          src="/images/hero-pixel-workspace.webp"
          alt="Pixel-art workspace at night, with a game editor on the monitor and a city outside the window."
          fetchPriority="high"
        />
        <div className={styles.imageShade} aria-hidden="true" />

        <div className={styles.heroCopy}>
          <p className={styles.overline}>
            <span className={styles.statusDot} />
            FIELD NOTES / 001
            <span className={styles.separator}>/</span>
            {profile.location}
          </p>

          <h1 id="hero-title">
            Things in the
            <br />
            <em>making.</em>
            <i aria-hidden="true">_</i>
          </h1>

          <p className={styles.intro}>{profile.introduction}</p>

          <div className={styles.roleList} aria-label="Professional interests">
            {ROLE_ITEMS.map(({ label, icon: Icon }) => (
              <span className={styles.roleTag} key={label}>
                <Icon size={14} aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>

          <a className={styles.primaryLink} href="#work">
            Explore selected work
            <ArrowRight size={16} />
          </a>
        </div>

        <div className={styles.sceneLabel}>
          <span>PIXEL WORKSPACE / NIGHT SHIFT</span>
          <span>GAMES · SOFTWARE · QUALITY</span>
        </div>
        <span className={styles.pixelCorner} aria-hidden="true">✦</span>
      </div>

      <div className={styles.heroFoot}>
        <span>BUILD / PLAY / TEST / REPEAT</span>
        <span className={styles.scrollHint}>SCROLL TO EXPLORE ↓</span>
        <a href={profile.links.github} target="_blank" rel="noreferrer">
          GITHUB <ArrowRight size={13} />
        </a>
      </div>
    </section>
  );
}
