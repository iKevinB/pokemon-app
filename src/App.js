import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Pokemon from './Components/Pokemon';
import Display from './Components/Display';
import logo from './Components/logo.svg';


function App() {

  const [pokemon, setPokemon] = useState([
    {name:"bulbasaur", 
    url: 'https://pokeapi.co/api/v2/pokemon/1'},
  ])
  
  const getPokemons = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon/')
    .then((response) => {
      console.log(response)
      setPokemon(response.data.results);
    })
    .catch((err) => {
      console.log(err)
    }, [])
  }

 useEffect( () => {
  getPokemons();
})

  return (
    <div className="App">
      <img src={logo} className="App-logo" />
        <Pokemon />

    <div className="Container">
      <Display pokemon={pokemon}/>
    </div>
  </div>
  );
}

export default App;
