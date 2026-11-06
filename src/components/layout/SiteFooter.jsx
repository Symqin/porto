import { ArrowUpRight } from 'lucide-react';
import { profile } from '../../data/portfolio.js';
import styles from './SiteFooter.module.css';

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${styles.footer} page-shell`}>
      <div className={styles.inner}>
        <span>
          © {currentYear} {profile.name.toUpperCase()}
        </span>
        <span>MADE SLOWLY, WITH CURIOSITY.</span>
        <a
          href={profile.links.github}
          target="_blank"
          rel="noreferrer"
        >
          SOURCE NOTES
          <ArrowUpRight size={12} />
        </a>
      </div>
    </footer>
  );
}
