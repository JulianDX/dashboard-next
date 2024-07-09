'use client'

import { useAppSelector } from "@/store";
import React from "react";
import PokeCard from "./Card";

const Favorites = () => {
  const pokemons = useAppSelector((store) => store.pokemons.pokemons);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
      {pokemons.map((pokemon, i) => (
        <PokeCard key={i} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default Favorites;
