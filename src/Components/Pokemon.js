import React, { Component } from 'react'

export default class Pokemon extends Component {

    constructor(props){
        super(props);

        this.state = {
            name: '',
            img: ""
        }
    }

fetchApi = async () => {
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.name}`);
    let data = await res.json();
    console.log(data);
    
    this.setState({
      img: `${data.sprites.front_default}`
    })
}

handleName = e => {
  this.setState({
    name: e.target.value
  })
}

handleSubmit = e =>{
  let resp = this.state.name;
  console.log(resp);
  e.preventDefault();
  this.fetchApi();
  this.setState({
    name:''
  })
}

  render() {
    return (
      
    <div class="container">
      <div class="row">
        <div class="col-25">
        <form onSubmit={this.handleSubmit}>
        <label>Buscar un Pokemon</label>
        <br/>
        <br/>
        <input
            className="form-control" 
            type="Search" 
            placeholder ="Escriba un Pokemón" 
            aria-label="Search"
            value={this.state.name}
            onChange={this.handleName}
        />  
        
      <div className='card2'>
      <img src={this.state.img}/>
      </div>
     
    </form>
        </div>
        <div class="col-25">
          {/*Filtro*/}
        </div>
      </div>
    </div>
    )
  }
}



      