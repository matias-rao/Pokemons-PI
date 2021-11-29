import { FETCH_POKEMONS, SEARCH_POKEMONS, SEARCH_POKEMON_ID, SORT } from "../actions";
import { ASCENDENTE } from "../../constantes/sort";

const initialState = {
  pokemons: [],
  filteredPokemons: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POKEMONS:
      return {
        ...state,
        pokemons: action.payload.data,
        filteredPokemons: action.payload.data,
      };
    case SEARCH_POKEMONS:
      return {
        ...state,
        filteredPokemons: [action.payload],
      };
    case SORT:
      let orderedPokemons = [...state.filteredPokemons];

      orderedPokemons = orderedPokemons.sort((a, b) => {
        if (a.name < b.name) {
          return action.payload === ASCENDENTE ? -1 : 1;
        }
        if (a.name > b.name) {
          return action.payload === ASCENDENTE ? 1 : -1;
        }
        return 0;
      });
      return {
        ...state,
        filteredPokemons: orderedPokemons,
      };
    // case SEARCH_POKEMON_ID:
    //   return {
    //     ...state,
    //     filteredPokemons: [action.payload],
    //   };
    default:
      return state;
  }
}
