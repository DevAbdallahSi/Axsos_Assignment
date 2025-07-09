import React, { useState } from "react";

const MyPoky = (props) => {
    const [poky , setPoky] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchPokemon = ()=> {
        setLoading(true);
    fetch('https://pokeapi.co/api/v2/pokemon')
    .then(res=>res.json())
    .then(data =>{
        setPoky(data.results);
        setLoading(false);
    })
    .catch(error => {
        console.error("Error fetching Pokémon:", error);
        setLoading(false);
    })
    }
    

    return (
        <>
        <h2>Pokédex</h2>
        <button onClick={fetchPokemon}>Add Poky</button>
        {loading && <p>loading...</p>}
        <ul>
            {poky.map((pok,index) =>(
                <li key={index}>{pok.name}</li>
            ))}
        </ul>
        </>
    )
}
export default MyPoky;