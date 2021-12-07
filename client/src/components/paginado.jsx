import React from "react";

export default function Paginado({ pokemonsPorPagina, pokemons, paginado }) {
    const pageNumber = []


    for (let i = 1; i <= Math.ceil(pokemons / pokemonsPorPagina); i++) {
        pageNumber.push(i)
    }

    return (
        <div>
            <ul className='paginado'>
                {pageNumber && pageNumber.map(number => (
                    <li className='number'>
                        <a onClick={() => paginado(number)}>{number}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}