import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemons } from "../store/actions";
import Pokemon from "./pokemon";
import React from "react";


export default function Pokemons() {
  let pokemons = useSelector((state) => state.filteredPokemons);
  let dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);

  return (
    <div>
      {pokemons && pokemons.map((pokemon) => {
        return <Pokemon name={pokemon.name} image={pokemon.img} key={pokemon.id} attack={pokemon.attack} types={pokemon.types} />;
      })}
    </div>
  );
}
