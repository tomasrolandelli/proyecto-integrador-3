import React, { Component } from 'react'
import Article from '../Article/Article'
import Header from '../Header/Header'

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 1,
            peliculas: [],
            peliculasBackup: [],
            cambio: '',
            clase: 'vertical',
            leyenda: null
        }
    }
    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=a86dfc3e8792d8c35b2b0bcfae9f4488&language=en-US&page=${this.state.value}`)
            .then((response) => response.json())
            .then((data) => {
                let moviesParaMostrar = data.results.slice(0, 10)
                this.setState({
                    peliculas: moviesParaMostrar,
                    peliculasBackup: moviesParaMostrar,
                    value: this.state.value + 1
                })
            })
            .catch((e) => console.log(e))
    }
    borrarPelicula(peliculaId) {
        let resultado = this.state.peliculas.filter((elemento) => elemento.id !== peliculaId)
        this.setState({
            peliculas: resultado
        })
        
    }
    agregarPelicula() {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=a86dfc3e8792d8c35b2b0bcfae9f4488&language=en-US&page=${this.state.value}`)
            .then((response) => response.json())
            .then((data) => {
                let moviesParaMostrar = data.results.slice(0, 10)
                let arrayViejo = this.state.peliculas;
                let backupViejo = this.state.peliculasBackup
                this.setState({
                    peliculas: arrayViejo.concat(moviesParaMostrar),
                    peliculasBackup: backupViejo.concat(moviesParaMostrar),
                    value: this.state.value + 1
                })
            })
            .catch((err)=>console.log(err))
    }
    filterFuncion(valor) {
        let peliculasFiltrado = this.state.peliculasBackup.filter((element) => element.title.toLowerCase().includes(valor.toLowerCase()))
        if (peliculasFiltrado.length === 0) {
            this.setState({
                leyenda: 1
            })
        }else{        this.setState({
            peliculas: peliculasFiltrado,
            leyenda: null
        })}

    }
    cambioHorizontal() {
        this.setState({
            clase: 'horizontal'
        })
    }
    cambioVertical() {
        this.setState({
            clase: 'vertical'
        })
    }
    render() {
        return (
            this.state.leyenda !== null ?
            <>
            <Header visualHorizontal={() => this.cambioHorizontal()} visualVertical={() => this.cambioVertical()} funcion={(valor) => this.filterFuncion(valor)} />
            <h2 className='notFound'>No se encontraron resultados del termino buscado :(</h2>
            </>:

            this.state.peliculas.length === 0 ?
                <>
                    <Header visualHorizontal={() => this.cambioHorizontal()} visualVertical={() => this.cambioVertical()} funcion={(valor) => this.filterFuncion(valor)} />
                    <div className='load'>
                        <h3>Cargando...</h3>
                        <img className='spinner' src='./images/spiner.gif' alt='spinner' />
                    </div>
                    {/* {setTimeout(()=><h3>No se econtraron resultados de {this.state.cambio}</h3>, 5000)} */}
                </> :
                <>
                    <Header visualHorizontal={() => this.cambioHorizontal()} visualVertical={() => this.cambioVertical()} funcion={(valor) => this.filterFuncion(valor)} />

                    <main>
                        <div className='containerBoton'>
                        <button type="button" className='masTarjetas' onClick={() => this.agregarPelicula()}>Cargar mas peliculas!</button>
                        </div>
                        <section className="card-container">
                            {this.state.peliculas.map((pelicula) => <Article clase={this.state.clase} borrar={(id) => this.borrarPelicula(id)} key={pelicula.id + Date.now()} info={pelicula} />)}
                        </section>
                    </main>
                </>
        )
    }
}
export default Main