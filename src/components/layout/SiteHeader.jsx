import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { profile } from '../../data/portfolio.js';
import ThemeSwitcher from '../ui/ThemeSwitcher.jsx';
import styles from './SiteHeader.module.css';

const NAVIGATION_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  function toggleMenu() {
    setMenuOpen((isOpen) => !isOpen);
  }

  return (
    <header className={styles.header}>
      <div className={`${styles.inner} page-shell`}>
        <a
          className={styles.wordmark}
          href="#top"
          aria-label="Syahril Mutaqin, back to top"
          onClick={closeMenu}
        >
          <span className={styles.monogram}>
            SM<span>。</span>
          </span>
          <span className={styles.name}>SYAHRIL MUTAQIN</span>
        </a>

        <nav
          id="site-navigation"
          className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}
          aria-label="Main navigation"
        >
          {NAVIGATION_ITEMS.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
            >
              <span className={styles.navIndex}>
                {String(index + 1).padStart(2, '0')}
              </span>
              {item.label}
            </a>
          ))}

          <a
            className={styles.linkedinLink}
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
            <ArrowUpRight size={13} />
          </a>
        </nav>

        <div className={styles.actions}>
          <ThemeSwitcher />

          <button
            className={styles.menuButton}
            type="button"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            aria-controls="site-navigation"
            onClick={toggleMenu}
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>
    </header>
  );
}
