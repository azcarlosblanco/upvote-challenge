import { ReactNode } from 'react';
import { UpVotesProvider } from '../contexts/UpVotesContext';

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <UpVotesProvider>
      {children}
    </UpVotesProvider>
  );
}