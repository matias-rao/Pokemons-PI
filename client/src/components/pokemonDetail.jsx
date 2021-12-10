import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import './style/pokemonDetail.css'

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
    <div className='detail'>
      <div className='conteinerr'>
        {pokemon == null ? <div>Loading</div> :
          (pokemon[0].id <= 10000 ?
            <>
              <div className='left'>
                <div className='conteinerImg'>
                  <img src={pokemon[0].sprites.other.dream_world.front_default} alt="pokeImage" className='imgDetail' />
                </div>
              </div>
              <div className='right'>
                <h2>{pokemon[0].name.toUpperCase()}</h2>
                <p>Attack: {pokemon[0].stats[1].base_stat}</p>
                <p>Defense: {pokemon[0].stats[2].base_stat}</p>
                <p>HP: {pokemon[0].stats[0].base_stat}</p>
                <p>Speed: {pokemon[0].stats[5].base_stat}</p>
                <p>Weight: {pokemon[0].weight}</p>
                <p>Height: {pokemon[0].height}</p>
                <p>Type:
                  {pokemon[0].types.map((t) => {
                    return " " + t.type.name + " ";
                  })}
                </p>
              </div>
            </>
            :
            <>
              <div className='left'>
                <div className='conteinerImg'>
                  <img src={pokemon[0].img} alt="pokeImage" className='imgDetail' />
                </div>
              </div>
              <div className='right'>
                <h2>{pokemon[0].name.toUpperCase()}</h2>
                <p>HP: {pokemon[0].hp}</p>
                <p>Attack: {pokemon[0].attack}</p>
                <p>Defense: {pokemon[0].defense}</p>
                <p>Speed: {pokemon[0].speed}</p>
                <p>Weight: {pokemon[0].weight}</p>
                <p>Height: {pokemon[0].height}</p>
                <p>Type: {pokemon[0].types?.map((t) => { return " " + t.name + " " })}</p>
              </div>
            </>

          )}
      </div>
    </div >
  );
}
