import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemons } from "../store/actions";
import Pokemon from "./pokemon";
import React from "react";
import './style/pokemons.css'
import Paginado from "./paginado";
import SearchBar from './searchBar'
import FilterTypes from "./filterTypes"
import Order from "./order";
import PikaTriste from './style/image/pikaTriste.png'


export default function Pokemons() {
  let pokemons = useSelector((state) => state.filteredPokemons);
  let dispatch = useDispatch();
  const err = useSelector(state => state.error);

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
    if (!err) {
      dispatch(fetchPokemons());
      setPaginaActual(1);
    }
  }, []);
  // console.log(pokemons[0])
  return (
    <div className='asd'>
      <div className='search'>
        <FilterTypes />
        <Order />
        <SearchBar />
      </div>
      {!err ?
        <>
          <div className='paginado'>
            <Paginado
              pokemonsPorPagina={pokemonsPorPagina}
              pokemons={pokemons.length}
              paginado={paginado}
            />
          </div>
          <div className='conteinerPokemonitos'>
            {pokemonsActuales && pokemonsActuales.map((pokemon) => {
              return <Pokemon name={pokemon.name} image={pokemon.img} id={pokemon.id} attack={pokemon.attack} types={pokemon.types} />;
            })}
          </div>
        </> :
        <>
          <div className="errorPokeSearch">
            <h3>Pokemonito no encontrado</h3>
            <img src={PikaTriste} alt='pika Triste'/>
          </div>
        </>
      }
    </div>
  );
}
