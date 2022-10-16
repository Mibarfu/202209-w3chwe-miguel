interface PokeData {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: string;
  baseExperience: string;
  abilities: [{ ability: { name: string } }];
  sprites: { other: { home: { front_default: string } } };
  image: string;
  stats: [{ base_stat: number; effort: number; stat: { name: string } }];
}

export default PokeData;
