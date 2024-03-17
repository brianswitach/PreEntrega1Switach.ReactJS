import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">TiendaProyecto</Link>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/categoria1">Categoría 1</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/categoria2">Categoría 2</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/categoria3">Categoría 3</Link>
          </li>
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;
