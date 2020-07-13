export const fetchPokemonList = async (offset, limit) => {
  const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
  const response = await fetch(url);
  const json = await response.json();
  return response.ok ? Promise.resolve(json) : Promise.rejects(json);
};

export const fetchPokemonDetails = async (array) => {
  const data = array.map(async ({ url }) => {
    const response = await fetch(url);
    const json = await response.json();
    return response.ok ? Promise.resolve(json) : Promise.rejects(json);
  });
  const allData = await Promise.allSettled(
    data.reduce((acc, element) => [...acc, element], []),
  );
  return [...allData];
};
