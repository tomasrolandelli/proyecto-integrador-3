import React, { Component } from 'react'

class Article extends Component {
    constructor(props){
        super(props)
        this.state = {
            info:'',
            verMas: false,
            verMensaje:'Ver mas'
        }
    }
    showMore(){
        if(this.state.verMas){
            this.setState({
                verMas: false,
                verMensaje:'Ver Mas'
            })
        } else {
            this.setState({
                verMas: true,
                verMensaje:'Ver menos'
            })
        }

    }
  render() {
    return (
        <article>
            <img src="https://via.placeholder.com/150" alt=""/>
            <h3>Título/ Nombre</h3>
            <p className="description">description</p>
            <p onClick={()=>this.showMore()}>{this.state.verMensaje}</p>
            {this.state.verMas ?<p className="aditional-info">info adicional</p>:null}
    </article>
    )
  }
}
export default Article