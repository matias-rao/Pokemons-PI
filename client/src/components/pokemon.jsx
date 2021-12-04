import React from "react";

export default function Pokemon({name, image, types, attack}){
    return <div>
        <h3>{name}</h3>
        <img src={image} alt="pokeImage"/>
        <p>Attack: {attack}</p>
        <p>Type: {types}</p>
    </div>
}