"use client";

import Image from "next/image";
import { SinglePokemon } from "../interfaces/SinglePokemon";
import { HeartIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/store";
import { toggleFavorite } from "@/store/pokemon/characterSlice";

interface PokeCardProps {
  pokemon: SinglePokemon;
}

export const PokeCard = ({ pokemon }: PokeCardProps) => {
  const dispatch = useAppDispatch();
  const pokemons = useAppSelector((store) => store.pokemons.pokemons);

  const found = pokemons.find((poke) => poke.id === pokemon.id);

  const handleClick = (character: SinglePokemon) => {
    dispatch(toggleFavorite(character));
  };

  return (
    <div onClick={() => handleClick(pokemon)} className="w-60 cursor-pointer">
      <div className="bg-slate-800 h-72 py-10 flex flex-col items-center justify-center">
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
          alt={`${pokemon.name}`}
          width={90}
          height={90}
          priority={false}
        />
        <p className="text-white capitalize mt-1 font-semibold text-lg">
          {pokemon.name}
        </p>
        <Link
          href={`/dashboard/pokemons/${pokemon.name}`}
          className="border p-2 mt-5 text-white rounded-full px-5 border-solid border-white"
        >
          Más información
        </Link>
      </div>
      <div className="flex gap-3 p-2 items-center shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
        <button className="ml-2">
          <HeartIcon
            className={`size-6 ${found ? "text-red-500" : "text-gray-400"}`}
          />
        </button>
        <div>
          <p className="font-semibold">
            {found ? "Es favorito" : "No es favorito"}
          </p>
          <p className="-mt-1 text-sm text-slate-500">Click para cambiar</p>
        </div>
      </div>
    </div>
  );
};

export default PokeCard;
