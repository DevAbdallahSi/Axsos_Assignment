import axios from "axios";
import { useState } from "react";

const MyPokemon = (props) => {
  const [pokyList, setPokyList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPokemon = () => {
    setLoading(true);
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => {
        setPokyList(res.data.results);
        console.log(res.data.results[0].name);

        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching Pokémon:", error);
        setLoading(false);
      });
  };

  return (
    <>
      <button onClick={fetchPokemon}> Git Picatcho</button>
      <ul>
        {pokyList.map((pok, index) => (
          <li key={index}>{pok.name}</li>
        ))}
      </ul>
    </>
  );
};
export default MyPokemon;
