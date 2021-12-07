import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTypes, filterTypes, filterCreated } from "../store/actions";

export default function FilterTypes() {
    let types = useSelector((state) => state.types)
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTypes());
    }, []);

    function handleChange(e) {
        dispatch(filterTypes(e.target.value));
    }
    function handleChangeCreated(e){
        dispatch(filterCreated(e.target.value))
    }
    return (
        <div>
            <p>Filtrar Por:</p>
            <select name='filterTypes' onChange={handleChange}  >

                <option value='TiposPokemon'
                    label={'Tipos de Pokemon'} />

                {types && types.map((types) => {

                    return <option key={types.id} value={types.name} label={types.name} />

                })}
            </select>
            <select onChange={handleChangeCreated}>
                <option value='Pokemons' label={'Todos los Pokemons'} />
                <option value='PokemonsApi' label={'Pokemons Api'} />
                <option value='PokemonsCreados' label={'Pokemons Creados'} />
            </select>
        </div>
    )

}