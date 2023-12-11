import React, {createContext, useContext, useMemo, useState} from 'react';

type ThemeContextData = {
  theme: boolean;
  toggleTheme: (theme: boolean) => void;
};

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export function ThemeProvider({
  children,
}: Readonly<{children: React.ReactNode}>): JSX.Element {
  const [theme, setTheme] = useState(true);

  function toggleTheme(theme: boolean) {
    setTheme(theme);
  }

  const contextProps = useMemo(
    () => ({theme, toggleTheme}),
    [theme, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={contextProps}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within an ThemeProvider');
  }

  return context;
}
