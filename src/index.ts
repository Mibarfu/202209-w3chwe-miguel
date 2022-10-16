import PokeApi from "./components/pokeApi/pokeApi.js";
import type PokeData from "./components/pokeApi/pokeApi.js";
import PokemonCardPreview from "./components/PokemonCardPreview/PokemonCardPreview.js";
import getPokemonList from "./components/getPokemonList/getPokemonList.js";
import GetPokemonList from "./components/getPokemonList/types.js";
import PokemonListPreview from "./components/PokemonListPreview/PokemonListPreview.js";

const parentElement = document.querySelector(".root");
const urlList = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=5";

const listPokemon = new PokemonListPreview(
  parentElement as HTMLElement,
  urlList,
  0,
  5
);
await listPokemon.render();
