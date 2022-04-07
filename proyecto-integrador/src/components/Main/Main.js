import React, { Component } from 'react'
import Article from '../Article/Article'

class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: 1,
            peliculas:[]
        }
    }
    componentDidMount(){
        fetch( `https://api.themoviedb.org/3/movie/popular?api_key=a86dfc3e8792d8c35b2b0bcfae9f4488&language=en-US&page=${this.state.value}` )
        .then((response)=>response.json())
        .then((data)=> this.setState({
            peliculas: data.results,
            value: this.state.value + 1
        }))
        .catch((e)=>console.log(e))
    }
    borrarPelicula(peliculaId){
        let resultado = this.state.peliculas.filter((elemento)=> elemento.id !== peliculaId)
        this.setState({
            peliculas: resultado
        })
    }
    agregarPelicula(){
        fetch( `https://api.themoviedb.org/3/movie/popular?api_key=a86dfc3e8792d8c35b2b0bcfae9f4488&language=en-US&page=${this.state.value}` )
        .then((response)=>response.json())
        .then((data) => {
            let arrayViejo = this.state.peliculas
            this.setState({
                peliculas: arrayViejo.concat(data.results),
                value: this.state.value + 1
            })
        } )
    }
    render() {
        return (
            this.state.peliculas.length===0?<img className='spinner' src='./images/spiner.gif' alt='spinner'/>:

        <main>
            <button type="button" onClick={()=>this.agregarPelicula()}>Cargar más tarjetas</button>
            <section className="card-container">
                {this.state.peliculas.map((pelicula)=><Article borrar={(id)=> this.borrarPelicula(id)} key={pelicula.id + Date.now()} info={pelicula}/>)}
            </section>
        </main>
        )
    }
}
export default Main