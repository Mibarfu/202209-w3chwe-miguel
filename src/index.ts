import PokeApi from "./components/PokeApi/PokeApi.js";
import type PokeData from "./components/PokeApi/types.js";

const apiUrl = "https://pokeapi.co/api/v2";
const apiEndpoint = "pokemon";

const pokemon = new PokeApi(apiUrl, apiEndpoint);

const pokemonResponse = (await pokemon.request(1)) as PokeData;
