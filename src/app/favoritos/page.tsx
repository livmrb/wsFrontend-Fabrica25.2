'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { PokemonSimples } from '@/types/pokemon';
import { obterFavoritos, removerFavorito } from '@/lib/favoritos';

export default function PaginaFavoritos() {
  const [favoritos, setFavoritos] = useState<PokemonSimples[]>([]);
  const [visualizacao, setVisualizacao] = useState<'grade' | 'lista'>('grade');

  useEffect(() => {
    const carregarFavoritos = () => {
      const lista = obterFavoritos();
      setFavoritos(lista);
    };

    carregarFavoritos();

    const handleStorageChange = () => {
      carregarFavoritos();
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const removerDosFavoritos = (pokemonId: number) => {
    removerFavorito(pokemonId);
    setFavoritos(prev => prev.filter(pokemon => pokemon.id !== pokemonId));
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Meus Favoritos
      </h1>

      {favoritos.length === 0 ? (
        <div className="vazio">
          <p>Adicione Pokémons aos Favoritos!</p>
          <Link
            href="/"
            className="botao botao-azul"
            style={{
              display: 'inline-block',
              textDecoration: 'none',
              marginTop: '1rem',
            }}
          >
            Explorar
          </Link>
        </div>
      ) : (
        <>
          <div className="controles">
            <div>
              <p style={{ color: '#666' }}>
                {favoritos.length} pokémon(s) favorito(s)
              </p>
            </div>

            <div className="visualizacao">
              <button
                onClick={() => setVisualizacao('grade')}
                className={`botao ${
                  visualizacao === 'grade' ? 'botao-azul' : 'botao-cinza'
                }`}
              >
                Grade
              </button>
              <button
                onClick={() => setVisualizacao('lista')}
                className={`botao ${
                  visualizacao === 'lista' ? 'botao-azul' : 'botao-cinza'
                }`}
              >
                Lista
              </button>
            </div>
          </div>

          <div className={visualizacao}>
            {favoritos.map((pokemon) => (
              <div key={pokemon.id} style={{ position: 'relative' }}>
                <Link href={`/detalhes/${pokemon.id}`} className="pokemon-card">
                  <img src={pokemon.image} alt={pokemon.name} className="pokemon-image"/>
                  <div className="pokemon-name">{pokemon.name}</div>
                  <div className="pokemon-id">
                    #{pokemon.id.toString().padStart(3, '0')}
                  </div>
                </Link>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    removerDosFavoritos(pokemon.id);
                  }}
                  className="botao botao-vermelho"
                  style={{
                    position: 'absolute',
                    top: '0.6rem',
                    right: '0.6rem',
                    fontSize: '0.75rem',
                    padding: '0.3rem 0.6rem',
                    borderRadius: '4px',
                  }}
                  title="Remover dos favoritos"
                  aria-label="Remover dos favoritos"
                >
                  Favorito
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
