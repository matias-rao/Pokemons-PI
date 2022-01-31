export const FETCH_POKEMONS = 'FETCH_POKEMONS'
export const SEARCH_POKEMONS = 'SEARCH_POKEMONS'
export const SORT = 'SORT'
export const SORT_ATTACK= 'SORT_ATTACK'
export const SEARCH_POKEMON_ID = 'SEARCH_POKEMON_ID'
export const FILTER_TYPES = 'FILTER_TYPES'
export const FETCH_TYPES = 'FETCH_TYPES'
export const FILTER_CREATED = 'FILTER_CREATED'
export const POST_POKEMON = 'POST_POKEMON'
export const SORT_SPEED = 'SORT_SPEED'

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


export function filterCreated(order){
    return {
        type: FILTER_CREATED,
        payload: order
    }
}

export function postPokemon(payload){
    return async function(dispatch){
        const response = await axios.post('http://localhost:3001/api/pokemons', payload)
        .then((pokemons) =>{
            dispatch({
                type: POST_POKEMON,
                payload: pokemons
            })
        })
        return response
    }
}


export function sort_speed(payload){
    return {
        type: SORT_SPEED,
        payload: payload
    }
}