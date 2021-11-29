import "./App.css";
import PokemonDetail from "./components/pokemonDetail";
import Pokemons from "./components/pokemons";
import SearchBar from "./components/searchBar";
import Order from "./components/order";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Henry Pokemon</h1>
      <SearchBar />
      <Order/>
      <Routes>
        <Route path="/" element={<Pokemons />}/>
        <Route path="/:id" element={<PokemonDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
