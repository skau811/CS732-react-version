import { useState } from "react";
import { pokemons } from "./data/pokemons";
import ItemsPage from "./components/ItemsPage";
import "./App.css";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <h1>Welcome to the PokeShop!</h1>
      <div className="box">
        <ItemsPage pokemonData={pokemons} />
        <Cart />
      </div>
    </>
  );
}

export default App;
