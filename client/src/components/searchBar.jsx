import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchPokemons } from "../store/actions";

export default function SearchBar() {
  const [search, setSearch] = useState('');
  let dispatch = useDispatch();

  function onSubmit(e) {
    e.preventDefault();
    dispatch(searchPokemons(search));
  }

  function handleOnChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  return (
    <div>
      <p>Buscar Pokemon: </p>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={handleOnChange} value={search} />
        <input type="submit" value="Buscar" />
      </form>
    </div>
  );
}
