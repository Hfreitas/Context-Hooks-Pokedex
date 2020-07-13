export const fetchPokemonList = async (offset, limit) => {
  const url = `https://pokeapi.com/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  const response = await fetch(url);
  const json = await response.json();
  return response.ok ? Promise.resolve(json) : Promise.rejects(json);
};

export const fetchPokemonDetails = async (url) => {
  const response = await fetch(url);
  const json = await response.json();
  return response.ok ? Promise.resolve(json) : Promise.rejects(json);
};
