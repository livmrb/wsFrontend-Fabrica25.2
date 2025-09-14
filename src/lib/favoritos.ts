import { PokemonSimples } from '@/types/pokemon';

const CHAVE_FAVORITOS = 'pokemon-favoritos';

export function obterFavoritos(): PokemonSimples[] {
  if (typeof window === 'undefined') return [];
  
  const favoritos = localStorage.getItem(CHAVE_FAVORITOS);
  return favoritos ? JSON.parse(favoritos) : [];
}

export function salvarFavoritos(favoritos: PokemonSimples[]): void {
  if (typeof window === 'undefined') return;
  
  localStorage.setItem(CHAVE_FAVORITOS, JSON.stringify(favoritos));
}

export function adicionarFavorito(pokemon: PokemonSimples): void {
  const favoritos = obterFavoritos();
  const jaExiste = favoritos.some(fav => fav.id === pokemon.id);
  
  if (!jaExiste) {
    favoritos.push(pokemon);
    salvarFavoritos(favoritos);
  }
}

export function removerFavorito(pokemonId: number): void {
  const favoritos = obterFavoritos();
  const novosFavoritos = favoritos.filter(fav => fav.id !== pokemonId);
  salvarFavoritos(novosFavoritos);
}

export function ehFavorito(pokemonId: number): boolean {
  const favoritos = obterFavoritos();
  return favoritos.some(fav => fav.id === pokemonId);
}

