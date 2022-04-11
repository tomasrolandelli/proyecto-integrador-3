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
            <article className={this.props.clase}>
                {this.props.clase === 'vertical'?
                                <div>
                                <button onClick={() => this.props.borrar(this.props.info.id)}>X</button>
                            </div>
                            :
                            null}
                <img src={`https://image.tmdb.org/t/p/original${this.props.info.backdrop_path}`} alt="" />
                <div className='padre'>
                <div className='hijo'>
                <h3 className='nieto1'>{this.props.info.title}</h3>
                <p className="description">Release date: {this.props.info.release_date}</p>
                <div className='dinamico'>
                    {this.props.clase === 'horizontal'?
                    <div>
                    <button onClick={() => this.props.borrar(this.props.info.id)}>X</button>
                </div>
                :
                null
                }
                <p className='more' onClick={() => this.showMore()}>{this.state.verMensaje}</p>
                </div>
                </div>
                {this.state.verMas ? <p className="aditional-info">{this.props.info.overview}</p> : null}
                </div>
            </article>
        )
    }
}
export default Article