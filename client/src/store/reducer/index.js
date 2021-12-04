import { FETCH_POKEMONS, FETCH_TYPES, SEARCH_POKEMONS, SORT, SORT_ATTACK, FILTER_TYPES } from "../actions";
import { ASCENDENTE, DEBIL } from "../../constantes/sort";

const initialState = {
  pokemons: [],
  filteredPokemons: [],
  types: []
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
          return action.payload === ASCENDENTE ? -1 : -1;
        }
        return 0;
      });

      return {
        ...state,
        filteredPokemons: orderedPokemons,
      };

    case SORT_ATTACK:
      let orderedPokemonsAttack = [...state.filteredPokemons];

      orderedPokemonsAttack = orderedPokemonsAttack.sort((a, b) => {
        if (a.attack < b.attack) {
          return action.payload === DEBIL ? -1 : 1;
        }
        if (a.attack > b.attack) {
          return action.payload === DEBIL ? 1 : -1;
        }

      })
      return {
        ...state,
        filteredPokemons: orderedPokemonsAttack,
      };

    case FETCH_TYPES:
      return {
        ...state,
        types: action.payload.data,
      };

    case FILTER_TYPES:
      let filteredTypes = [...state.pokemons]

      filteredTypes = filteredTypes.filter((t) => t.types.find((elem) => elem === action.payload + " "))

      return {
        ...state,
        filteredPokemons: filteredTypes
      };
    default:
      return state;
  }
}
