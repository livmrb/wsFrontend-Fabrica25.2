import axios from 'axios';
import { Pokemon, PokemonSimples } from '@/types/pokemon';

const API_URL = 'https://pokeapi.co/api/v2';

export async function buscarPokemon(id: number): Promise<Pokemon> {
  const response = await axios.get(`${API_URL}/pokemon/${id}`);
  return response.data;
}

export async function buscarListaPokemons(): Promise<PokemonSimples[]> {
  const pokemons: PokemonSimples[] = [];
  
  for (let i = 1; i <= 20; i++) {
    try {
      const pokemon = await buscarPokemon(i);
      pokemons.push({
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.front_default
      });
    } catch (error) {
      console.error(`Erro ao buscar pokémon ${i}:`, error);
    }
  }
  
  return pokemons;
}

