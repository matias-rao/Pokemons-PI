export const FETCH_POKEMONS = 'FETCH_POKEMONS'
export const SEARCH_POKEMONS = 'SEARCH_POKEMONS'
export const SORT = 'SORT'
export const SORT_ATTACK= 'SORT_ATTACK'
export const SEARCH_POKEMON_ID = 'SEARCH_POKEMON_ID'
export const FILTER_TYPES = 'FILTER_TYPES'
export const FETCH_TYPES = 'FETCH_TYPES'

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

export function sort_attack(order){
    return{
        type: SORT_ATTACK,
        payload: order
    }
}

export function fetchTypes(){
    return function(dispatch){
        axios.get('http://localhost:3001/api/types/')
        .then((types) =>{
            dispatch({
                type: FETCH_TYPES,
                payload: types
            })
        })
        .catch((error) =>{
            console.log(error)
        })
    }
}

export function filterTypes(order){
    return{
        type: FILTER_TYPES,
        payload: order
    }
}