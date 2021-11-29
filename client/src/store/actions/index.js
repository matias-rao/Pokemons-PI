export const FETCH_POKEMONS = 'FETCH_POKEMONS'
export const SEARCH_POKEMONS = 'SEARCH_POKEMONS'
export const SORT = 'SORT'
export const SEARCH_POKEMON_ID = 'SEARCH_POKEMON_ID'
const axios = require("axios");

export function fetchPokemons() {
    return function(dispatch){
        axios.get('http://localhost:3001/api/pokemons/')
        .then((pokemons) =>{
            dispatch({
                type: FETCH_POKEMONS,
                payload: pokemons
            })
        })
        .catch((error) =>{
            console.log(error)
        })
    }
}

export function searchPokemons(search) {
    return function(dispatch){
        axios.get(`http://localhost:3001/api/pokemons?name=` + search)
        .then((pokemons) =>{
            dispatch({
                type: SEARCH_POKEMONS,
                payload: pokemons.data
            })
        })
        .catch((error) =>{
            console.log(error)
        })
    }
}

export function sort(order){
    return {
        type: SORT,
        payload: order
    }
}

// export function searchPokemonId(search) {
//     return function(dispatch){
//         axios.get(`http://localhost:3001/api/pokemons/` + search)
//         .then((pokemons) =>{
//             dispatch({
//                 type: SEARCH_POKEMON_ID,
//                 payload: pokemons.data
//             })
//         })
//         .catch((error) =>{
//             console.log(error)
//         })
//     }
// }