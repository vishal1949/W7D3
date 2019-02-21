import {RECEIVE_ALL_POKEMON, receiveAllPokemon} from "../actions/pokemon_actions"
export default function pokemonReducer(state = {}, action){
  switch(action.type){
    case(RECEIVE_ALL_POKEMON):
      return Object.assign({}, state, action.pokemon);
    default:
      return state
  }
}