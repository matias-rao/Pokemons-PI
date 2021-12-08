import React from "react";

import { Link } from "react-router-dom";
export default  function NavBar(){
    return (
        <div>
            <h1>Henry Pokemon</h1>
            <Link to='/'><button>Landing</button></Link>
            <Link to='/Home'><button>Home</button></Link>
            <Link to='/Create'><button>Create</button></Link>
           
        </div>
    )}