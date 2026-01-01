import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../Assets/logo.png';
import cart_icon from '../../Assets/cart_icon.png';
import menu_icon from '../../Assets/menu.png';
import close_icon from '../../Assets/close.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <div className="navbar">
        {/* LOGO */}
        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        {/* DESKTOP MENU */}
        <ul className="nav-menu">
          <li><Link  to="/" style={{textDecoration:"none"}}>Shop</Link></li>
          <li><Link to="/mens" style={{textDecoration:"none"}} >Men</Link></li>
          <li><Link to="/womens" style={{textDecoration:"none"}}>Women</Link></li>
          <li><Link to="/kids" style={{textDecoration:"none"}}>Kids</Link></li>
        </ul>

        {/* LOGIN + CART */}
        <div className="nav-login-cart">
          <Link to="/login">
            <button>Login</button>
          </Link>

          <div className="cart-icon">
            <Link to="/cart">
              <img src={cart_icon} alt="Cart" />
            </Link>
            <div className="nav-cart-count">0</div>
          </div>
        </div>

        {/* HAMBURGER ICON (Mobile) */}
        <div className="hamburger-wrapper" onClick={() => setMenuOpen(!menuOpen)}>
          <img
            src={menuOpen ? close_icon : menu_icon}
            alt="menu"
            className="hamburger"
          />
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Shop</Link>
        <Link to="/mens" onClick={() => setMenuOpen(false)}>Men</Link>
        <Link to="/womens" onClick={() => setMenuOpen(false)}>Women</Link>
        <Link to="/kids" onClick={() => setMenuOpen(false)}>Kids</Link>
        <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
        <Link to="/cart" onClick={() => setMenuOpen(false)}>Cart</Link>
      </div>
    </>
  );
};

export default Navbar;
