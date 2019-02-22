import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

export default class PokemonIndex extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount(){
    this.props.requestAllPokemon();
  }

  render(){
  // debugger  
    return (
    <ul>
      {this.props.pokemon.map((poke, i) => 
        <PokemonIndexItem key={poke.id} pokemon={poke} id={poke.id}/>
      )}
    </ul>
    )
  }
}

