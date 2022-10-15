import PokeApi from "./PokeApi/PokeApi.js";

const apiUrl = "https://pokeapi.co/api/v2";
const apiEndpoint = "pokemon";

const myConexion = new PokeApi(apiUrl, apiEndpoint);

console.log(await myConexion.request(1));
