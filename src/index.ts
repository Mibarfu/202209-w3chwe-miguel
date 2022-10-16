import HeaderControls from "./components/HeaderControls/HeaderControls.js";
import PokemonListPreview from "./components/PokemonListPreview/PokemonListPreview.js";

const parentElement = document.querySelector(".root");
const urlList = "https://pokeapi.co/api/v2/pokemon";
const offset = 0;

const header = new HeaderControls(parentElement as HTMLElement);
await header.render();
await header.startListener(parentElement as HTMLElement, offset);

const listPokemon = new PokemonListPreview(
  parentElement as HTMLElement,
  urlList,
  offset,
  5
);
await listPokemon.render();
