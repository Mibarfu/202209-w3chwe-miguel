import type PokeData from "./types.js";

class PokeApi {
  constructor(
    private readonly apiUrl: string,
    private readonly apiEndPoint: string
  ) {}

  async request(id: number) {
    try {
      const response = await fetch(`${this.apiUrl}/${this.apiEndPoint}/${id}`);
      const body = (await response.json()) as PokeData;

      const data = {
        id: body.id,
        name: body.name,
        height: body.height,
        weight: body.weight,
        baseExperience: body.base_experience,
        abilities: Array(0),
        image: body.sprites.other.home.front_default,
        stats: Array(0),
      };

      body.abilities.forEach((abilityNumber) => {
        data.abilities.push(abilityNumber.ability.name);
      });

      body.stats.forEach((stat) => {
        data.stats.push({
          baseStat: stat.base_stat,
          effort: stat.effort,
          statName: stat.stat.name,
        });
      });

      return data;
    } catch (e: unknown) {
      return { error: e };
    }
  }
}

export default PokeApi;
