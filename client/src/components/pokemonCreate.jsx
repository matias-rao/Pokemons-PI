import React, { useEffect, useState } from "react";
import { Link} from 'react-router-dom'
import { postPokemon, fetchTypes } from "../store/actions";
import { useDispatch, useSelector } from "react-redux";

export default function PokemonCreate() {
    const dispatch = useDispatch()
    // const history = useHistory()
    const types = useSelector((state) => state.types)

    const [input, setInput] = useState({
        name: '',
        hp: '',
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight: '',
        img: '',
        types: []
    })

    useEffect(() => {
        dispatch(fetchTypes())
    }, [])

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        // console.log(input)
    }

    function handleSelect(e) {
        setInput({
            ...input,
            types: [...input.types, e.target.value]
        })
    }

    function handleSubmit(e) {
        e.preventDefault(e)
        dispatch(postPokemon(input))
        alert("Pokemonito creado!")
        setInput({
            name: '',
            hp: '',
            attack: '',
            defense: '',
            speed: '',
            height: '',
            weight: '',
            img: '',
            types: []
        })
        // history.push('/Home')
    }

    return (
        <div>
            <Link to='/Home'><button>Volver</button></Link>
            <h1>Crea tu propio Pokemonito!</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label> Nombre: </label>
                    <input type="text" value={input.name} name='name' onChange={handleChange} />
                </div>
                <div>
                    <label> Vida: </label>
                    <input type="number" value={input.hp} name='hp' onChange={handleChange} />
                </div>
                <div>
                    <label> Ataque: </label>
                    <input type="number" value={input.attack} name='attack' onChange={handleChange} />
                </div>
                <div>
                    <label> Defensa: </label>
                    <input type="number" value={input.defense} name='defense' onChange={handleChange} />
                </div>
                <div>
                    <label> Velocidad: </label>
                    <input type="number" value={input.speed} name='speed' onChange={handleChange} />
                </div>
                <div>
                    <label> Altura: </label>
                    <input type="number" value={input.height} name='height' onChange={handleChange} />
                </div>
                <div>
                    <label> Peso: </label>
                    <input type="number" value={input.weight} name='weight' onChange={handleChange} />
                </div>
                <div>
                    <label> Imagen: </label>
                    <input type="text" value={input.img} name='img' onChange={handleChange} />
                </div>

                <label> Tipo: </label>
                <select onChange={handleSelect}>
                    {types && types.map((t) => {
                        // console.log(t.name)
                        return <option value={t.name} label={t.name}>{t.name}</option>
                    })}

                </select>

                <ul><li>{input.types.map(t => t + ' ')}</li></ul>

                <button type='submit'>Enviar Pokemon</button>
            </form>
        </div>
    )
}