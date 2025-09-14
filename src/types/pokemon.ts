export interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  types: Array<{
    type: {
      name: string;
    };
  }>;
  weight: number;
  base_experience: number;
}

export interface PokemonSimples {
  id: number;
  name: string;
  image: string;
}

