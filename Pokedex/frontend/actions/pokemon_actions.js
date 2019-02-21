import APIUtil from "../util/api_util"
export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";



export const receiveAllPokemon = (pokemon) => {
  return {
    type: RECEIVE_ALL_POKEMON,
    pokemon 
  };
}

export const requestAllPokemon = () => (dispatch) => (
  APIUtil()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
)

