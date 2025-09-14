import Link from 'next/link';

export default function Header() {
  return (
    <header style={{
      backgroundColor: '#333',
      color: 'white',
      padding: '1rem',
      textAlign: 'center'
    }}>
      <h1 style={{ margin: 0, fontSize: '2rem' }}>
        <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>
          Pokédex
        </Link>
      </h1>
      <nav style={{ marginTop: '0.5rem' }}>
        <Link href="/" style={{ color: 'white', margin: '0 1rem', textDecoration: 'none' }}>
          Início
        </Link>
        <Link href="/favoritos" style={{ color: 'white', margin: '0 1rem', textDecoration: 'none' }}>
          Favoritos
        </Link>
      </nav>
    </header>
  );
}

