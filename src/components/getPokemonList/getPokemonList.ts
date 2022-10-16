import type GetPokemonList from "./types";

const getPokemonList = async (url: string, offset: number, limit: number) => {
  const response = await fetch(`${url}?offset=${offset}&limit=${limit}`);
  const body = (await response.json()) as GetPokemonList;

  const data = {
    count: body.count,
    next: body.next,
    previus: body.previous,
    results: Array(0),
  };

  body.results.forEach((result) => {
    data.results.push(result.url);
  });

  return data;
};

export default getPokemonList;
