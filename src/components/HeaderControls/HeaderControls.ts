import Component from "../Component/Component.js";
import getPokemonList from "../getPokemonList/getPokemonList.js";
import PokemonListPreview from "../PokemonListPreview/PokemonListPreview.js";

class HeaderControls extends Component {
  urlList = "https://pokeapi.co/api/v2/pokemon";
  offset = 0;
  limit = 5;

  constructor(parentElement: HTMLElement) {
    super(parentElement, "header-controls", "header");
  }

  async render() {
    super.render();

    const listPokemon = await getPokemonList(
      this.urlList,
      this.offset,
      this.limit
    );

    this.domElement.innerHTML = `
      <section class="information-controls">
        <span class="count-pokemon">${listPokemon.count} Pokemons</span>
        <button class="previous-button"></button>
        <button class="next-button"></button>
      </section>
    `;
  }

  async startListener(parentElement: HTMLElement, offset: number) {
    document
      .querySelector(".next-button")
      .addEventListener("click", async () => {
        offset += 5;

        parentElement.removeChild(document.querySelector(".list-pokemon"));

        const listPokemon = new PokemonListPreview(
          parentElement,
          this.urlList,
          offset,
          5
        );
        await listPokemon.render();
      });

    document
      .querySelector(".previous-button")
      .addEventListener("click", async () => {
        if (offset >= 5) {
          offset -= 5;

          parentElement.removeChild(document.querySelector(".list-pokemon"));

          const listPokemon = new PokemonListPreview(
            parentElement,
            this.urlList,
            offset,
            5
          );
          await listPokemon.render();
        }
      });
  }
}

export default HeaderControls;
