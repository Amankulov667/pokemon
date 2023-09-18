import axios from "axios";
import React, { useEffect, useState } from "react";

const Show = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const pokemonShow = () => {
      axios
        .get("https://pokeapi.co/api/v2/pokemon/?limit=10")
        .then((response) => {
          const results = response.data.results;

          // Создаем массив запросов для каждого покемона
          const pokImg = [];
          results.forEach((pokemon) => {
            axios.get(pokemon.url).then((res) => {
              pokImg.push(res.data);

              // Если данные собраны для всех покемонов, обновляем состояние
              if (pokImg.length === results.length) {
                setPokemon(pokImg);
              }
            });
          });
        });
    };

    pokemonShow();
  }, []);

  return (
    <div>
      <h2>Pokemon</h2>
      {pokemon.map((item, index) => (
        <div key={index}>
          <p>{item.name}</p>
          <img src={item.sprites.front_default} alt="pokemon" />
        </div>
      ))}
    </div>
  );
};

export default Show;
