import React, {ReactNode, createContext, useState} from 'react';

type Props = {
  children: ReactNode;
};

interface ThemeContextData {
  theme: string;
  toggleTheme(theme: string): void;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export function ThemeProvider({children}: Props): JSX.Element {
  const [theme, setTheme] = useState('light');

  function toggleTheme(theme: string) {
    setTheme(theme);
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
