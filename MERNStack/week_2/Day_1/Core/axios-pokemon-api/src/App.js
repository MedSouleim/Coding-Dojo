import axios from "axios";
import as from "axios";
import { useState } from "react";

const App = () => {
  const [Pokemons,setPokemons]= useState ([]);
  const allPoks =()=>{
    axios.get('https://pokeapi.co/api/v2/pokemon').then((response) =>setPokemons(response.data.results)).catch(error => console.error(error))
  }  
  return (
    <div>
      <h1>All Pokemons Names</h1>
      <button onClick={allPoks}>Fetch Pokemons</button>
      <ul>
        {Pokemons.map((onePok,idx)=><li key={idx}>{onePok.name}</li>)}
      </ul>
    </div>
  )
}

export default App






