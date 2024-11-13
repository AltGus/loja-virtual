// src/Components/Navbar/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../img/rpg-store-high-resolution-logo-transparent.png'; // Caminho relativo corrigido

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav">
        <img src={logo} className="Brand-Logo" alt="logo" />
      </div>
      <div className="nav-items">
        <div className="search-box">
          <input type="text" placeholder="Encontre seus items" />
          <button className="search-btn">Buscar</button>
        </div>
      </div>
      <div>
        <Link to="/login" className="navbar-link">Login</Link>| 
        <Link to="/signup" className="navbar-link">Signup</Link>| 
        <Link to="/home" className="navbar-link">Home</Link>| 
        <Link to="/cart" className="navbar-link">Carrinho</Link>| 
        <Link to="/favorites" className="navbar-link">Favoritos</Link>| 
        <Link to="/profile" className="navbar-link">Perfil</Link>
      </div>
    </nav>
  );
};

export default Navbar;
