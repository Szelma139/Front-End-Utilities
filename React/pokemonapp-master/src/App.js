import React, {Component} from 'react';
import './App.css';
import PokemonList from './PokemonList';
class App extends Component {


  constructor () {
    super();

    this.state = {
     type: '1',
     pokemonList: []
    }
  }

  onSelectTypeChange(event) {
 this.setState ({type: event.target.value})
  }

  onButtonClick (event) {
    event.preventDefault();
    //console.log(this.state.type + 'button been clicked')


    const API_URL = `https://pokeapi.co/api/v2/type/${this.state.type}/`


      fetch ( API_URL)
      .then(result => {
        return result.json();
      }).then(data =>  {
        //console.log(data.pokemon)
        this.setState({pokemonList: data.pokemon})
      })
  }

  render () {
    console.log('this is the app state' ,this.state);
  return (
    <div className="container app-container"> Hello
 


 <div> <h4>my pokemon app</h4>
 <form>
   <label>choose your pokemon type</label> 
   <br/>
   <select
   onChange={this.onSelectTypeChange.bind(this)}>
     <option value="1">normal</option>
     <option value="2">fighting</option>
     <option value="3">flying</option>
     <option value="4">poison</option>
     </select></form>
     <div>
     <button  className="btn btn-success" onClick={this.onButtonClick.bind(this)}> Search for type</button>
     </div>
   </div>
   <PokemonList pokemonResult={this.state.pokemonList}/> 
    </div>
  );
  }
}

export default App;
