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

    const [errors, setErrors] = useState({})

    function validate(input){
        let errors = {};
        if(!input.name){
            errors.name = "Se requiere un Nombre"
        } else if(!input.hp){
            errors.hp = "Se requiere asignar HP"
        }
        else if(!input.attack){
            errors.attack = "Se requiere asignar attack"
        }
        else if(!input.defense){
            errors.defense = "Se requiere asignar defense"
        }
        else if(!input.speed){
            errors.speed = "Se requiere asignar speed"
        }
        else if(!input.height){
            errors.height = "Se requiere asignar height"
        }
        else if(!input.weight){
            errors.weight = "Se requiere asignar weight"
        }
        else if(!input.img){
            errors.img = "Se requiere asignar img"
        }
        return errors;
    }

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
       
    }

    function handleSelect(e) {
        setInput({
            ...input,
            types: [...input.types, e.target.value]
        })
        console.log(input)
    }

    function handleSubmit(e) {
        e.preventDefault(e)
        dispatch(postPokemon(input))
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

    function handleDelete(e){
        setInput({
            ...input, 
            types: input.types.filter((t) => t !== e)
        })
    }

    return (
        <div>
            <h1>Crea tu propio Pokemonito!</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label> Nombre: </label>
                    <input type="text" value={input.name} name='name' onChange={handleChange} />
                    {errors.name && (<p className='error'>{errors.name}</p>)}
                </div>
                <div>
                    <label> Vida: </label>
                    <input type="number" value={input.hp} name='hp' onChange={handleChange} />
                    {errors.hp && (<p className='error'>{errors.hp}</p>)}
                </div>
                <div>
                    <label> Ataque: </label>
                    <input type="number" value={input.attack} name='attack' onChange={handleChange} />
                    {errors.attack && (<p className='error'>{errors.attack}</p>)}
                </div>
                <div>
                    <label> Defensa: </label>
                    <input type="number" value={input.defense} name='defense' onChange={handleChange} />
                    {errors.defense && (<p className='error'>{errors.defense}</p>)}
                </div>
                <div>
                    <label> Velocidad: </label>
                    <input type="number" value={input.speed} name='speed' onChange={handleChange} />
                    {errors.speed && (<p className='error'>{errors.speed}</p>)}
                </div>
                <div>
                    <label> Altura: </label>
                    <input type="number" value={input.height} name='height' onChange={handleChange} />
                    {errors.height && (<p className='error'>{errors.height}</p>)}
                </div>
                <div>
                    <label> Peso: </label>
                    <input type="number" value={input.weight} name='weight' onChange={handleChange} />
                    {errors.weight && (<p className='error'>{errors.weight}</p>)}
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
                {/* <ul><li>{input.types.map(t => t + ' ')}</li></ul> */}
                <button type='submit'>Enviar Pokemon</button>
            </form>
            {input.types.map(t => 
                <div>
                    <p>{t}</p>
                    <button onClick={()=>handleDelete(t)}>x</button>
                </div>
            )}
        </div>
    )
}