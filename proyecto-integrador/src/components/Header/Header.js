import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <header>
      <h1>Título/ Nombre de la app</h1>
      <section>
          <i className="fas fa-th"></i>
          <i className="fas fa-align-justify"></i>
          <form action="">
              <input type="text" name="search" id="" placeholder="Search"/>
              <button type="submit"><i className="fas fa-search"></i></button>
          </form>
      </section>
  </header>
    )
  }
}
export default Header