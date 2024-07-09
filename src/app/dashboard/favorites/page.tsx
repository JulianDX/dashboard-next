import Favorites from "@/pokemons/components/Favorites";

export const metadata = {
  title: "Favoritos",
  description: "Pokémons favoritos",
};

export default async function PokemonsPage() {
  return (
    <div>
      <h2>Tus Favoritos</h2>
      <Favorites />
    </div>
  );
}
