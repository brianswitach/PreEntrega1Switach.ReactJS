import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar" style={{ backgroundColor: '#004d99', padding: '10px 20px' }}>
      <Link className="navbar-brand" to="/" style={{ color: '#ffffff', marginRight: '20px' }}>Car Market</Link>
      <div className="navbar-nav" style={{ flexGrow: 1 }}>
        <Link className="nav-item nav-link" to="/category/autos" style={{ color: '#ffffff', margin: '0 10px' }}>Autos</Link>
        <Link className="nav-item nav-link" to="/category/camionetas" style={{ color: '#ffffff', margin: '0 10px' }}>Camionetas</Link>
        <div style={{ position: 'absolute', right: 20 }}>

          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
