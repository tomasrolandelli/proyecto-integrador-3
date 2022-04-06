import React, { Component } from 'react'
import Article from '../Article/Article'

class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            value:'',
            peliculas:[]
        }
    }
    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=a86dfc3e8792d8c35b2b0bcfae9f4488&language=en-US&page=1')
        .then((response)=>response.json())
        .then((data)=> this.setState({
            peliculas: data.results
        }))
        .catch((e)=>console.log(e))
    }
  render() {
    return (
        this.state.peliculas.length===0?<img className='spinner' src='./images/spiner.gif' alt='spinner'/>:

    <main>
        <button type="button">Cargar más tarjetas</button>
        <section className="card-container">
            {this.state.peliculas.map((pelicula)=><Article key={pelicula.id + Date.now()} info={pelicula}/>)}
        </section>
    </main>
    )
  }
}
export default Main