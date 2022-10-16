import Component from "../Component/Component.js";
import getPokemonList from "../getPokemonList/getPokemonList.js";
import PokemonListPreview from "../PokemonListPreview/PokemonListPreview.js";

class HeaderControls extends Component {
  urlList = "https://pokeapi.co/api/v2/pokemon";
  offset = 0;
  limit = 5;

  constructor(parentElement: HTMLElement) {
    super(parentElement, "header", "header");
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
        <span class="information-controls__count">${listPokemon.count} Pokemon's</span>
      </section>
      <section class="button-controls">
        <button class="buttons button-controls__previous">previous</button>
        <button class="buttons button-controls__next">next</button>
      </section>
    `;
  }

  async startListener(parentElement: HTMLElement, offset: number) {
    document
      .querySelector(".button-controls__next")
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
      .querySelector(".button-controls__previous")
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
