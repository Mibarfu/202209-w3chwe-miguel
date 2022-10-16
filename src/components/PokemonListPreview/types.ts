interface GetPokemonList {
  count: number;
  next: string | void;
  previous: string | void;
  results: [{ url: string }];
}

export default GetPokemonList;
