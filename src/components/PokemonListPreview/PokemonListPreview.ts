import Component from "../Component/Component.js";
import getPokemonList from "../getPokemonList/getPokemonList.js";
import PokemonCardPreview from "../PokemonCardPreview/PokemonCardPreview.js";
import PokeApi from "../PokeApi/PokeApi.js";
import type PokeData from "../PokeApi/types.js";

class PokemonListPreview extends Component {
  constructor(
    parentElement: HTMLElement,
    private readonly url: string,
    private readonly offset: number,
    private readonly limit: number
  ) {
    super(parentElement, "list-pokemon", "ol");
  }

  async render() {
    super.render();

    const parentListaPokemon: HTMLElement =
      document.querySelector(".list-pokemon");

    const listPokemon = await getPokemonList(this.url, this.offset, this.limit);

    listPokemon.results.forEach(async (pokemon) => {
      const pokemonr = new PokeApi(pokemon);
      const pokemonResponse = (await pokemonr.request()) as PokeData;

      const pokemonCard = new PokemonCardPreview(
        parentListaPokemon,
        pokemonResponse.id,
        pokemonResponse.name,
        pokemonResponse.image
      );

      pokemonCard.render();
    });
  }
}

export default PokemonListPreview;
