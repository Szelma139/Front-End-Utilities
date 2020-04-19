import React,{Component} from 'react';
import Pokedex from './Pokedex';

class Pokegame extends Component {
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
        let hand1 = [];
        let hand2 = [...this.props.pokemon];
        while (hand1.length <hand2.length) {
            let randIdx = Math.floor(Math.random() * hand2.length);
            let randPokemon = hand2.splice(randIdx,1)[0];
            hand1.push(randPokemon);

        }
        console.log(hand1);
        console.log(hand2);

       
        let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience,0);
        let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience,0);
        return (
            <div>
<div><Pokedex pokemon ={hand1} exp={exp1} isWinner={exp1>exp2} /> </div>
<div><Pokedex pokemon ={hand2} exp={exp2} isWinner={exp1<exp2}/> </div>
</div>
        );
    }
}


export default Pokegame;