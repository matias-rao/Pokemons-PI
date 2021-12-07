import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemons } from "../store/actions";
import Pokemon from "./pokemon";
import React from "react";
import './style/pokemons.css'
import Paginado from "./paginado";


export default function Pokemons() {
  let pokemons = useSelector((state) => state.filteredPokemons);
  let dispatch = useDispatch();

  //PAGINADO
  const [paginaActual, setPaginaActual] = useState(1)
  const [pokemonsPorPagina, setPokemonsPorPagina] = useState(12)
  const indexLastPokemon = paginaActual * pokemonsPorPagina // 12 por pagina
  const indexFirstPokemon = indexLastPokemon - pokemonsPorPagina
  const pokemonsActuales = pokemons.slice(indexFirstPokemon, indexLastPokemon)

  const paginado = (pageNumber) => {
    setPaginaActual(pageNumber)
  }

  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);

  return (
    <div className='asd'>
      <Paginado
        pokemonsPorPagina={pokemonsPorPagina}
        pokemons={pokemons.length}
        paginado={paginado}
      />
      {pokemonsActuales && pokemonsActuales.map((pokemon) => {
        return <Pokemon name={pokemon.name} image={pokemon.img} key={pokemon.id} attack={pokemon.attack} types={pokemon.types} />;
      })}
    </div>
  );
}
