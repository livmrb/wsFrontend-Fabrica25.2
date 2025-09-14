'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Pokemon } from '@/types/pokemon';
import { buscarPokemon } from '@/lib/api';
import { adicionarFavorito, removerFavorito, ehFavorito } from '@/lib/favoritos';

export default function PaginaDetalhes() {
  const params = useParams();
  const router = useRouter();
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(false);
  const [favorito, setFavorito] = useState(false);

  const pokemonId = parseInt(params.id as string);

  useEffect(() => {
    async function carregarPokemon() {
      try {
        setCarregando(true);
        setErro(false);
        const dados = await buscarPokemon(pokemonId);
        setPokemon(dados);
        setFavorito(ehFavorito(pokemonId));
      } catch (error) {
        console.error('Erro ao carregar pokémon:', error);
        setErro(true);
      } finally {
        setCarregando(false);
      }
    }

    if (pokemonId) {
      carregarPokemon();
    }
  }, [pokemonId]);

  const alternarFavorito = () => {
    if (!pokemon) return;

    const pokemonSimples = {
      id: pokemon.id,
      name: pokemon.name,
      image: pokemon.sprites.front_default
    };

    if (favorito) {
      removerFavorito(pokemon.id);
      setFavorito(false);
    } else {
      adicionarFavorito(pokemonSimples);
      setFavorito(true);
    }
  };

  const voltar = () => {
    router.back();
  };

  if (carregando) {
    return <div className="carregando">Carregando detalhes do pokémon...</div>;
  }

  if (erro || !pokemon) {
    return (
      <div className="vazio">
        <h2>Pokémon não encontrado</h2>
        <p>O pokémon que você está procurando não existe.</p>
        <button onClick={voltar} className="botao botao-cinza">
          Voltar
        </button>
      </div>
    );
  }

  return (
    <div className="detalhes">
      <div className="detalhes-header">
        <button onClick={voltar} className="botao botao-cinza">
          ← Voltar
        </button>
        <button
          onClick={alternarFavorito}
          className={`botao ${favorito ? 'botao-vermelho' : 'botao-azul'}`}
        >
          {favorito ? 'Favorito' : 'Favoritar'}
        </button>
      </div>

      <div className="detalhes-conteudo">
        <div className="detalhes-imagem">
          <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
        </div>

        <div className="detalhes-info">
          <h1>{pokemon.name}</h1>
          <div className="id">#{pokemon.id.toString().padStart(3, '0')}</div>

          <div className="tipos">
            <h3>Tipo(s):</h3>
            {pokemon.types.map((tipo, index) => (
              <span key={index} className="tipo">
                {tipo.type.name}
              </span>
            ))}
          </div>

          <div className="stats">
            <div className="stat">
              <h3>Peso</h3>
              <p>{(pokemon.weight / 10).toFixed(1)} kg</p>
            </div>
            <div className="stat">
              <h3>Experiência Base</h3>
              <p>{pokemon.base_experience} XP</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

