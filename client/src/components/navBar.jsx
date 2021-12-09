import React from "react";
import './style/navBar.css'

import { Link } from "react-router-dom";
export default  function NavBar(){
    return (
        <div className='nav'>
            <h1>PokeAppi</h1>
            <Link to='/'><button>Landing</button></Link>
            <Link to='/Home'><button>Home</button></Link>
            <Link to='/Create'><button>Create</button></Link>
           
        </div>
    )}