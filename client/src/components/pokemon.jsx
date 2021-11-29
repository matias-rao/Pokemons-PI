import React from "react";

export default function Pokemon({name, image, types}){
    return <div>
        <h3>{name}</h3>
        <img src={image} alt="pokeImage"/>
        <p>{types}</p>
    </div>
}