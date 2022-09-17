import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Pokemon from './Pokemon'


const apiUrl = 'https://pokeapi.co/api/v2'
export default function Card({thisPokemon}) {

    const [onePokemon, setOnePokemon] = useState({
        name: "",
        sprites: {front_default: "#"},
    })

    const getPokemon = (url) =>{
    axios.get(url)
    .then((response) => {
        console.log(response)
        setOnePokemon(response.data)
    })
    .catch((err) => {
        console.log(err)
    })

}

useEffect(()=>{
    getPokemon(thisPokemon.url)
}, [])
  
  return (
    <div className='card'>
        <h4>{onePokemon.name}</h4>
        <img src={onePokemon.sprites.front_default}/>
        <p> {onePokemon.id}</p>
   
    </div>
  )
}
