import React from "react";
import { Link } from "react-router-dom";
import './style/pokemon.css'

export default function Pokemon({ id, name, image, types, attack }) {
    return <div className='card'>
        <Link to={`/${id}`}>
            <h3>{name}</h3>
            <img src={image} alt="pokeImage" className="imgPoke" />
            <p className="pokeAttack">Attack: {attack}</p>
            <p>Type: {types}</p>
        </Link>
    </div>

}