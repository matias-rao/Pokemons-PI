import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

export default function PokemonDetail() {
  //   let pokemonId = useSelector((state) => state.filteredPokemons);
  const [pokemon, setPokemon] = useState(null);
  let { id } = useParams();
  useEffect(() => {
    // dispatch(searchPokemonId(id))
    axios.get(`http://localhost:3001/api/pokemons/${id}`).then((response) => {
      setPokemon([response.data]);
    });
  }, []);
  console.log(pokemon);
  return (
    <div>
      {pokemon == null ? (
        <div>Loading</div>
      ) : (
        <>
          <h1>Soy detalle</h1>
          <h3>{pokemon[0].name}</h3>
          <img src={pokemon[0].sprites.front_default} alt="pokeImage" />

          <p>Type: 
            {pokemon[0].types.map((t) => {
              return " " + t.type.name + " ";
            })}
          </p>
          <p>HP: {pokemon[0].stats[0].base_stat}</p>
          <p>Attack: {pokemon[0].stats[1].base_stat}</p>
          <p>Defense: {pokemon[0].stats[2].base_stat}</p>
          <p>Speed: {pokemon[0].stats[5].base_stat}</p>
          <p>Weight: {pokemon[0].weight}</p>
          <p>Height: {pokemon[0].height}</p>
        </>
      )}
    </div>

    // <div>
    //     <h1>{pokemon}</h1>

    // </div>
  );
}
