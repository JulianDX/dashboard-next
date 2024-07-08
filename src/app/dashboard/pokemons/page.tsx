import { PokeCard, PokemonResponse, SinglePokemon } from "@/pokemons";


const getPokemons = async (): Promise<SinglePokemon[]> => {
  const data: PokemonResponse = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
  ).then((data) => data.json());

  const pokemons = data.results.map((pokemon) => {
    return {
      id: pokemon.url.split("/").at(-2)!,
      name: pokemon.name,
    };
  });

  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons();
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {pokemons.map((pokemon) => (
          <PokeCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}
