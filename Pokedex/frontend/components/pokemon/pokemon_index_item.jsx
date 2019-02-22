import pokemonReducer from "../../reducers/pokemon_reducer";
import React from 'react';
import {Link} from 'react-router-dom';


export default ({pokemon, id}) => { //calling this PokemonIndexItem in pokemon_index.js
  return (
    <li>
      <Link to={`pokemon/${id}`}>
        {pokemon.name}
        <img src={pokemon.image_url} style={{width: "55px", height: "55px"}}></img>
      </Link>
    </li>
  );
}

