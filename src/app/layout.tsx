import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pokédex',
  description: 'Uma Pokédex feita com Next.js e TypeScript',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body style={{
        margin: 0,
        padding: 0,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Arial, sans-serif'
      }}>
        <Header />
        <main style={{ flex: 1, padding: '2rem' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

