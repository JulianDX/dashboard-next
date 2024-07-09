import { SinglePokemon } from "@/pokemons";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PokemonInitialState = {
  pokemons: SinglePokemon[];
};

const initialState: PokemonInitialState = {
  pokemons: [],
};

const characterSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<SinglePokemon>) {
      const found = state.pokemons.find(
        (poke) => poke.id === action.payload.id
      );
      if (found) {
        state.pokemons = state.pokemons.filter(
          (poke) => poke.id !== action.payload.id
        );
      } else {
        state.pokemons.push(action.payload);
      }
    },
  },
});

export const { toggleFavorite } = characterSlice.actions;

export default characterSlice.reducer;
