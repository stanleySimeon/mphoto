import React from "react";
import Logo from "./../../assets/mp-logo-white.PNG";
import './Navbar.css';


function Navbar() {
  return (
    <header className="Navbar">
      <div className="Nav-container">
        <div className="Nav-logo">
          <img className="logo" src={Logo} alt="logo" />
        </div>
        <div className="Nav-links">
          <a className="link" href="#">Portfolio</a>
          <a className="link" href="#">Services</a>
          <a className="link" href="#">About</a>
          <a className="link" href="#">Contact</a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;