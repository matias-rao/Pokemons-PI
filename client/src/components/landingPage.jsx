import React from "react";
import { Link } from "react-router-dom";
import './style/landingPage.css'
import poke from './style/image/pokebola.png'

export default function LandingPage() {

    return (
        <div className='landing'>
            <div className='conteiner'>
                <Link to="/Home">
                <h2 className='titulo'>Bienvenidx a la PokeAppi</h2>
                    {/* <button type="button">
                    ingresar
                </button> */}
                    <div className='poke'>
                        <img src={poke} alt="" className='pokeImg' />
                    </div>
                </Link>
            </div>
        </div>
    )
}