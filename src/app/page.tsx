'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { PokemonSimples } from '@/types/pokemon';
import { buscarListaPokemons } from '@/lib/api';
import { adicionarFavorito, removerFavorito, ehFavorito } from '@/lib/favoritos';

export default function PaginaInicial() {
  const [pokemons, setPokemons] = useState<PokemonSimples[]>([]);
  const [pokemonsFiltrados, setPokemonsFiltrados] = useState<PokemonSimples[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [pesquisa, setPesquisa] = useState('');
  const [visualizacao, setVisualizacao] = useState<'grade' | 'lista'>('grade');
  const [favoritos, setFavoritos] = useState<number[]>([]);

  useEffect(() => {
    async function carregarPokemons() {
      try {
        setCarregando(true);
        const lista = await buscarListaPokemons();
        setPokemons(lista);
        setPokemonsFiltrados(lista);
      } catch (error) {
        console.error('Erro ao carregar pokémons:', error);
      } finally {
        setCarregando(false);
      }
    }

    carregarPokemons();
  }, []);

  useEffect(() => {
    const atualizarFavoritos = () => {
      const favoritosIds = pokemons
        .filter(pokemon => ehFavorito(pokemon.id))
        .map(pokemon => pokemon.id);
      setFavoritos(favoritosIds);
    };

    atualizarFavoritos();
    window.addEventListener('storage', atualizarFavoritos);
    return () => window.removeEventListener('storage', atualizarFavoritos);
  }, [pokemons]);

  useEffect(() => {
    if (pesquisa.trim() === '') {
      setPokemonsFiltrados(pokemons);
    } else {
      const filtrados = pokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(pesquisa.toLowerCase())
      );
      setPokemonsFiltrados(filtrados);
    }
  }, [pesquisa, pokemons]);

  const alternarFavorito = (pokemon: PokemonSimples) => {
    const jaEhFavorito = ehFavorito(pokemon.id);

    if (jaEhFavorito) {
      removerFavorito(pokemon.id);
    } else {
      adicionarFavorito(pokemon);
    }

    setFavoritos(prev =>
      jaEhFavorito
        ? prev.filter(id => id !== pokemon.id)
        : [...prev, pokemon.id]
    );
  };

  const buscar = () => {
    console.log('Buscando por:', pesquisa);
  };

  if (carregando) {
    return <div className="carregando">Carregando pokémons...</div>;
  }

  return (
    <div>
      <div className="controles">
        <div className="pesquisa">
          <input
            type="text"
            placeholder="Pesquisar..."
            value={pesquisa}
            onChange={(e) => setPesquisa(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && buscar()}
            className="input"
          />
          <button onClick={buscar} className="botao botao-azul">
            Buscar
          </button>
        </div>

        <div className="visualizacao">
          <button
            onClick={() => setVisualizacao('grade')}
            className={`botao ${visualizacao === 'grade' ? 'botao-azul' : 'botao-cinza'}`}
          >
            Grade
          </button>
          <button
            onClick={() => setVisualizacao('lista')}
            className={`botao ${visualizacao === 'lista' ? 'botao-azul' : 'botao-cinza'}`}
          >
            Lista
          </button>
        </div>
      </div>

      {pesquisa && (
        <p style={{ textAlign: 'center', marginBottom: '1rem', color: '#666' }}>
          {pokemonsFiltrados.length > 0
            ? `${pokemonsFiltrados.length} pokémon(s) encontrado(s) para "${pesquisa}"`
            : `Nenhum pokémon encontrado para "${pesquisa}"`
          }
        </p>
      )}

      {pokemonsFiltrados.length === 0 ? (
        <div className="vazio">
          <p>Nenhum pokémon encontrado.</p>
        </div>
      ) : (
        <div className={visualizacao}>
          {pokemonsFiltrados.map((pokemon) => (
            <div key={pokemon.id} style={{ position: 'relative' }}>
              <Link href={`/detalhes/${pokemon.id}`} className="pokemon-card">
                <img src={pokemon.image} alt={pokemon.name} className="pokemon-image" />
                <div className="pokemon-name">{pokemon.name}</div>
                <div className="pokemon-id">#{pokemon.id.toString().padStart(3, '0')}</div>
              </Link>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  alternarFavorito(pokemon);
                }}
                className={`botao ${favoritos.includes(pokemon.id) ? 'botao-vermelho' : 'botao-azul'}`}
                style={{
                  position: 'absolute',
                  top: '0.6rem',
                  right: '0.6rem',
                  fontSize: '0.75rem',
                  padding: '0.3rem 0.6rem',
                  borderRadius: '4px',
                }}
                title={favoritos.includes(pokemon.id) ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
                aria-label={favoritos.includes(pokemon.id) ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
              >
                {favoritos.includes(pokemon.id) ? 'Favorito' : 'Favoritar'}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
