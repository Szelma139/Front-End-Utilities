import React, { Component } from "react";
import Pokemon from './Pokemon';

class PokemonList extends Component {
    // eslint-disable-next-line
  constructor() {
    super();
  }


  renderPokemons() {
      let counter =0;
    return   this.props.pokemonResult.map( pokemons => {
        console.log( pokemons);
        counter = counter +1;
        return <Pokemon  key={counter} className="card" url= {pokemons.pokemon.url} name= { pokemons.pokemon.name} />
         // return <li  key={counter} className="card">name: {pokemons.pokemon.name}</li>
      })
  }



  render() {
  if (this.props.pokemonResult.length > 0) {
  return (
      <ul>
          <li>{this.renderPokemons()}</li>
      </ul>
)

  }

  return (<div></div>)
  }
}

export default PokemonList;
