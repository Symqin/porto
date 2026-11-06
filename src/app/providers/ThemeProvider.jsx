import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { themes } from '../../data/portfolio.js';

const ThemeContext = createContext(null);
const STORAGE_KEY = 'notes-theme';

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      return themes.some((item) => item.id === stored) ? stored : 'ink';
    } catch {
      return 'ink';
    }
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // The selected theme still works when storage is unavailable.
    }
  }, [theme]);

  const changeTheme = useCallback((nextTheme) => {
    if (themes.some((item) => item.id === nextTheme)) setTheme(nextTheme);
  }, []);

  const value = useMemo(() => ({ theme, changeTheme, themes }), [theme, changeTheme]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used inside ThemeProvider.');
  return context;
}
