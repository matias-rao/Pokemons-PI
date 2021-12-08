import "./App.css";
import PokemonDetail from "./components/pokemonDetail";
import Pokemons from "./components/pokemons";

import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/landingPage";
import PokemonCreate from "./components/pokemonCreate";
import NavBar from "./components/navBar";

function App() {
  return (
    <div className="App">
    
      <NavBar/>
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Home" element={<Pokemons /> } />
        <Route path="/:id" element={<PokemonDetail />} />
        <Route path= '/Create' element={< PokemonCreate/>}   />
      </Routes>
    </div>
  );
}

export default App;
