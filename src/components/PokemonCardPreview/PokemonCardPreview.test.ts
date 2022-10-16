import PokemonCardPreview from "./PokemonCardPreview";

describe("Given a component PokemonCardPreview", () => {
  describe("When it's instantiated with the number 'Pedro' and call to method render()", () => {
    test("Then its show a PokemonCardPreview with name 'Pedro'", () => {
      const screenTest = document.createElement("div");
      const expectName = "Pedro";

      const pokemonTest = new PokemonCardPreview(
        screenTest,
        1,
        "Pedro",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png"
      );
      pokemonTest.render();

      const receivedName = screenTest.querySelector(
        ".pokemon-card-preview__name"
      ).textContent;

      expect(receivedName).toBe(expectName);
    });
  });
});
