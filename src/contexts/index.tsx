import {ReactNode} from 'react';
import {ThemeProvider} from './theme';

type Props = {
  children: ReactNode;
};

export function ContextProvider({children}: Props) {
  return (
    <>
      <ThemeProvider>{children}</ThemeProvider>
    </>
  );
}
