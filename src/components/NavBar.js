import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget'; 

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">NombreTienda</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Inicio <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/categoria1">Categoría 1</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/categoria2">Categoría 2</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/categoria3">Categoría 3</a>
          </li>
        </ul>
        <CartWidget /> {}
      </div>
    </nav>
  );
}

export default NavBar;

