import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from "./components/root"



// import {RECEIVE_ALL_POKEMON, receiveAllPokemon, requestAllPokemon} from "./actions/pokemon_actions"
// import APIUtil from "./util/api_util";
// import selectAllPokemon from "./reducers/selector"
//ENTRY FILE

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();
  ReactDOM.render( <Root store={store} /> , root);
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // window.receiveAllPokemon = receiveAllPokemon;
  // window.fetchAllPokemon = APIUtil;
  // window.requestAllPokemon = requestAllPokemon;
  // window.selectAllPokemon = selectAllPokemon;
  
});