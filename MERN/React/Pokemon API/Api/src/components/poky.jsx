import React, { useState } from 'react';

function PokeList() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(false);

  // Function that fetches Pokémon
  const fetchPokemon = () => {
    setLoading(true);
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(res => res.json())
      .then(data => {
        setPokemonList(data.results);  // Update state with Pokémon names
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching Pokémon:", error);
        setLoading(false);
      });
  };

  return (
    <div>
      <h2>Pokédex</h2>
      <button onClick={fetchPokemon}>Load Pokémon</button>

      {loading && <p>Loading...</p>}

      <ul>
        {pokemonList.map((poke, index) => (
          <li key={index}>{poke.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PokeList;
