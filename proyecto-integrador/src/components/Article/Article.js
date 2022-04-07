import React, { Component } from 'react'

class Article extends Component {
    constructor(props) {
        super(props)
        this.state = {
            info: '',
            verMas: false,
            verMensaje: 'Ver mas'
        }
    }
    showMore() {
        if (this.state.verMas) {
            this.setState({
                verMas: false,
                verMensaje: 'Ver Mas'
            })
        } else {
            this.setState({
                verMas: true,
                verMensaje: 'Ver menos'
            })
        }

    }
    render() {
        return (
            <article>
                <div>
                    <button onClick={() => this.props.borrar(this.props.info.id)}>X</button>
                </div>
                <img src={`https://image.tmdb.org/t/p/original${this.props.info.backdrop_path}`} alt="" />
                <h3>{this.props.info.title}</h3>
                <p className="description">Release date: {this.props.info.release_date}</p>
                <p className='more' onClick={() => this.showMore()}>{this.state.verMensaje}</p>
                {this.state.verMas ? <p className="aditional-info">{this.props.info.overview}</p> : null}
            </article>
        )
    }
}
export default Article