import React from "react";
import './style/paginado.css'

export default function Paginado({ pokemonsPorPagina, pokemons, paginado }) {
    const pageNumber = []


    for (let i = 1; i <= Math.ceil(pokemons / pokemonsPorPagina); i++) {
        pageNumber.push(i)
    }

    return (
        <div className='container'>
            <ul className='paginado'>
                {pageNumber && pageNumber.map(number => (
                    <li className='number'>
                        <a className='numberA' onClick={() => paginado(number)}>{number}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}