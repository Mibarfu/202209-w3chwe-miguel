import type PokeData from "./types.js";
import PokeApi from "./PokeApi.js";
import "isomorphic-fetch";

describe("Given a PokeApi component", () => {
  describe("When it`s instantiated and makes the resource request: 'https://pokeapi.co/api/v2/pokemon/1", () => {
    test("Then it should return the value 1", async () => {
      const apiUrl = "https://pokeapi.co/api/v2/pokemon/1";

      const pokemonTest = new PokeApi(apiUrl);

      const pokemon = (await pokemonTest.request()) as PokeData;

      expect(pokemon.id).toBe(1);
    });
  });
});
