import React, { Component } from 'react'

class Header extends Component {
    constructor(props){
        super(props)
        this.state={
            cambio: ''
        }
    }
    evitarSubmit(event){
        event.preventDefault()
    }
    controlarCambio(event){
        this.setState({
            cambio: event.target.value 
        }, this.props.funcion(this.state.cambio))
    }
  render() {
    return (
        <header>
            <section className='section1'>
                <h1>Flickz   <i className="fa fa-film"></i></h1>
            </section>
            <section className='section2'>
                <form onSubmit={(event)=> this.evitarSubmit(event)} action="" className='formaction'>
                    <input onChange={(event)=>this.controlarCambio(event)} value={this.state.cambio} type="text" name="search" id="" placeholder="Search"/>
                    <button type="submit"><i className="fas fa-search"></i></button>
                </form>
                <i onClick={()=>this.props.visualVertical()} className="fas fa-th icono1"></i>
                <i onClick={()=>this.props.visualHorizontal()} className="fas fa-align-justify icono2"></i>
            </section>
    </header>
    )
  }
}
export default Header
