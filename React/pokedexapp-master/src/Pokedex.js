import React, { Component } from "react";
import Pokecard from "./Pokecard";
import './Pokedex.css';

class Pokedex extends Component {
  static defaultProps = {
    pokemon: [
      { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
      { id: 7, name: "Charmaasdnder", type: "water", base_experience: 6112 },
      { id: 11, name: "Charander", type: "fire", base_experience: 4462 },
      { id: 12, name: "Charmander", type: "fsad", base_experience: 12 },
      { id: 25, name: "Chaer", type: "asddsae", base_experience: 22 },
      { id: 39, name: "Charmasdander", type: "fxcxc", base_experience: 162 },
      { id: 94, name: "Charmander", type: "fire", base_experience: 12 }
    ]
  };

  render() {
    return (
      <div className="Pokedex">
        <h1>Pokedex!</h1>
        <p>{this.props.exp}</p>
        <p>{this.props.isWinner ? 'WINNER!' : 'LOSER'}</p>
        <div className="Pokedex-card">
          {this.props.pokemon.map(p => (
            <Pokecard
              id={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
