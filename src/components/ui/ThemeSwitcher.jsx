import { useState } from 'react';
import { Check, ChevronDown, Palette } from 'lucide-react';
import { useTheme } from '../../app/providers/ThemeProvider.jsx';
import styles from './ThemeSwitcher.module.css';

export default function ThemeSwitcher() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, changeTheme, themes } = useTheme();
  const activeTheme = themes.find((item) => item.id === theme);

  function selectTheme(themeId) {
    changeTheme(themeId);
    setMenuOpen(false);
  }

  return (
    <div className={styles.root}>
      <button
        className={styles.trigger}
        type="button"
        aria-expanded={menuOpen}
        aria-haspopup="menu"
        onClick={() => setMenuOpen((isOpen) => !isOpen)}
      >
        <Palette size={15} strokeWidth={1.7} />
        <span className="hidden sm:inline">{activeTheme?.name}</span>
        <ChevronDown
          size={13}
          className={menuOpen ? styles.rotated : ''}
        />
      </button>

      {menuOpen ? (
        <>
          <button
            className={styles.dismiss}
            type="button"
            aria-label="Close theme menu"
            onClick={() => setMenuOpen(false)}
          />

          <div
            className={styles.menu}
            role="menu"
            aria-label="Choose a colour theme"
          >
            <p className={styles.menuEyebrow}>COLOUR STUDIES</p>

            {themes.map((item) => {
              const isSelected = theme === item.id;

              return (
                <button
                  className={`${styles.option} ${isSelected ? styles.selected : ''}`}
                  key={item.id}
                  type="button"
                  role="menuitemradio"
                  aria-checked={isSelected}
                  onClick={() => selectTheme(item.id)}
                >
                  <span
                    className={`${styles.swatch} ${styles[item.id]}`}
                    aria-hidden="true"
                  />

                  <span className={styles.optionCopy}>
                    <strong>{item.name}</strong>
                    <small>{item.description}</small>
                  </span>

                  {isSelected ? <Check size={15} /> : null}
                </button>
              );
            })}
          </div>
        </>
      ) : null}
    </div>
  );
}
