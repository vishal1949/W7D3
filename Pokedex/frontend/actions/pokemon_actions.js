import {fetchAllPokemon, fetchPokemon} from "../util/api_util"
export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_POKEMON = "RECEIVE_POKEMON"


export const receiveAllPokemon = (pokemon) => {
  return {
    type: RECEIVE_ALL_POKEMON,
    pokemon 
  };
}

export const receivePokemon = ({pokemon, items}) => {
  return {
    type: RECEIVE_POKEMON,
    pokemon,
    items
  }
}

export const requestAllPokemon = () => (dispatch) => (
  fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
)


// export const requestAllPokemon = function() {
//   // extra logic
//   return function(dispatch) {
//     fetchAllPokemon()
//       .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
//   }
// }

export const requestPokemon = (id) => (dispatch) => (
  fetchPokemon(id)
    .then(pokemon => dispatch(receivePokemon(pokemon)))
)



