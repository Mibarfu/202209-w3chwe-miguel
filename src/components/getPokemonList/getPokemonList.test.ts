import getPokemonList from "./getPokemonList";
import "isomorphic-fetch";

describe("Given a function getPokemonList", () => {
  describe("When it's is called with complet url 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=5'", () => {
    test("Then its return the results property equal to 5", async () => {
      const expectResultsLength = 5;

      const list = await getPokemonList(
        "https://pokeapi.co/api/v2/pokemon/",
        0,
        5
      );

      const returnResultLength = list.results.length;

      expect(returnResultLength).toBe(expectResultsLength);
    });
  });
});
