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
                <h1>Flickz (nombre provisorio)</h1>
            </section>
            <section className='section2'>
                <i className="fas fa-th"></i>
                <i className="fas fa-align-justify"></i>
                <form onSubmit={(event)=> this.evitarSubmit(event)} action="">
                    <input onChange={(event)=>this.controlarCambio(event)}  type="text" name="search" id="" placeholder="Search"/>
                    <button type="submit"><i className="fas fa-search"></i></button>
                </form>
            </section>
        </header>
    )
  }
}
export default Header
