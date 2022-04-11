import React, { Component } from 'react'
import Article from '../Article/Article'
import Header from '../Header/Header'

class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: 1,
            peliculas:[],
            cambio:'',
            clase: 'vertical'
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
    filterFuncion(valor){
        let peliculasFiltrado = this.state.peliculas.filter((element)=>element.toLowerCase().includes(valor.toLowerCase()))
        this.setState({
            peliculas: peliculasFiltrado
        })
    }
    // cambioVisual (){
    //     if(this.state.clase === 'vertical'){
    //     this.setState({
    //         clase: 'horizontal'
    //     })} else {
    //         this.setState({
    //             clase: 'vertical'
    //     })
    // }}
    cambioHorizontal(){
            this.setState({
            clase: 'horizontal'
        })
    }
    cambioVertical(){
        this.setState({
            clase:'vertical'
        })
    }
    render() {
        return (
            this.state.peliculas.length===0?<img className='spinner' src='./images/spiner.gif' alt='spinner'/>:
            <>
            <Header visualHorizontal={()=>this.cambioHorizontal()} visualVertical={()=>this.cambioVertical()} funcion={()=>this.filterFuncion()}/>
        <main>
            <button type="button" onClick={()=>this.agregarPelicula()}>Cargar más tarjetas</button>
            <section className="card-container">
                {this.state.peliculas.map((pelicula)=><Article clase={this.state.clase} borrar={(id)=> this.borrarPelicula(id)} key={pelicula.id + Date.now()} info={pelicula}/>)}
            </section>
        </main>
        </>
        )
    }
}
export default Main