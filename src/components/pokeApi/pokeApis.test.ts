import type PokeData from "./types";
import "isomorphic-fetch";
import pokeApi from "./pokeApi";

describe("Given a PokeApi component", () => {
  describe("When it`s instantiated and makes the resource request: 'https://pokeapi.co/api/v2/pokemon/1", () => {
    test("Then it should return the value 1", async () => {
      const apiUrl = "https://pokeapi.co/api/v2/pokemon/1";

      const pokemon = (await pokeApi(apiUrl)) as PokeData;

      expect(pokemon.id).toBe(1);
    });
  });
});
