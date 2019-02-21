import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {RECEIVE_ALL_POKEMON, receiveAllPokemon, requestAllPokemon} from "./actions/pokemon_actions"
import APIUtil from "./util/api_util";
//ENTRY FILE

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.receiveAllPokemon = receiveAllPokemon;
  window.fetchAllPokemon = APIUtil;
  window.requestAllPokemon = requestAllPokemon;
  ReactDOM.render(
    <h1>SOME BULLSHIT IN IT</h1>
  , root);
});