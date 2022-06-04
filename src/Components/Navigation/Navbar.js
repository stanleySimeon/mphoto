import React from "react";
import { useLocation } from 'react-router-dom';
import { Link } from "react-scroll";
import Logo from "./../../assets/mp-logo-white.PNG";
import './Navbar.css';

function Navbar() {
  const { pathname } = useLocation();
  const focus = {
    opacity: 1,
  };

  return (
    <header className="Navbar">
      <nav className="Nav-container">
        <div className="Nav-logo">
          <Link style={pathname === '/Home' ? focus : {}} smooth={true} duration={300} className="link" to="Home"><img className="logo" src={Logo} alt="logo" /></Link>
        </div>
        <ul className="Nav-links">
          <li>
            <Link style={pathname === '/Work' ? focus : {}} smooth={true} duration={300} className="link" to="Work">WORK</Link>
          </li>
          <li>
            <Link style={pathname === '/Services' ? focus : {}} smooth={true} duration={3000} className="link" to="Services">SERVICES</Link>
          </li>
          <li>
            <Link style={pathname === '/Contact' ? focus : {}} smooth={true} duration={3000} className="link" to="Contact">CONTACT</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;