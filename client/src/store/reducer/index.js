import { FETCH_POKEMONS, FETCH_TYPES, SEARCH_POKEMONS, SORT, SORT_ATTACK, FILTER_TYPES, FILTER_CREATED, POST_POKEMON } from "../actions";
import { ASCENDENTE, DEBIL } from "../../constantes/sort";

const initialState = {
  pokemons: [],
  filteredPokemons: [],
  types: [],
  error: false
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
      if (action.payload === 'Pokemon no encontrado') {
        return {
          ...state,
          filteredPokemons: [action.payload],
          error: true
        };
      } else {
        return {
          ...state,
          filteredPokemons: [action.payload],
          error: false
        };
      }

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
        // filteredPokemons: filteredTypes
        filteredPokemons: action.payload === 'TiposPokemon' ? state.pokemons : filteredTypes
      };
    case FILTER_CREATED:
      let allPokemons = state.pokemons
      let createdPokemons = action.payload === 'PokemonsCreados' ? allPokemons.filter(p => p.createdInDB) : allPokemons.filter(p => !p.createdInDB)

      return {
        ...state,
        filteredPokemons: action.payload === 'Pokemons' ? state.pokemons : createdPokemons
      }
    case POST_POKEMON:
      return {
        ...state
      }
    default:
      return state;
  }
}
