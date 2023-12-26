import React from 'react'
import { useState } from 'react'
const App = () => {
  const [pokemons , setPokemons] = useState ([]);
  const allPokemons =()=>{
    fetch('https://pokeapi.co/api/v2/pokemon').then(res=>res.json()).then(res =>setPokemons(res.results))
  }
  return (
    <fieldset>
      <button onClick={allPokemons}>fetch</button>
      <ul>
        {pokemons.map((pokemon,idx)=><li key={idx}>{pokemon.name}</li>)}
      </ul>
    </fieldset>
  )
}

export default App
