import {ReactNode} from 'react';
import {ProductsProvider} from './products';
import {ThemeProvider} from './theme';

type Props = {
  children: ReactNode;
};

export function ContextProvider({children}: Readonly<Props>) {
  return (
    <ThemeProvider>
      <ProductsProvider>{children}</ProductsProvider>
    </ThemeProvider>
  );
}
