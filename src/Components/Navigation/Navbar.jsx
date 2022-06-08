import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import { Link } from "react-scroll";
import Logo from "./../../assets/mp-logo-white.PNG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import './Navbar.scss';

function Navbar() {
  const { pathname } = useLocation();
  const focus = {
    opacity: 1,
  };

  const [isOpen, setIsOpen] = useState(false);
  let menu
  let close

  if (isOpen) {
    menu =
      <>
        <ul className="Nav-links-mobile">
          <li>
            <Link style={pathname === '/Home' ? focus : {}}
              onClick={() => setIsOpen(!isOpen)} smooth={true} duration={100}
              className="link" to="Home">
              HOME
            </Link>
          </li>
          <li>
            <Link style={pathname === '/Work' ? focus : {}}
              onClick={() => setIsOpen(!isOpen)} smooth={true} duration={300}
              className="link" to="Work">
              WORK
            </Link>
          </li>
          <li>
            <Link style={pathname === '/Services' ? focus : {}}
              onClick={() => setIsOpen(!isOpen)} smooth={true} duration={300}
              className="link" to="Services">
              SERVICES
            </Link>
          </li>
          <li>
            <Link style={pathname === '/Contact' ? focus : {}}
              onClick={() => setIsOpen(!isOpen)} smooth={true} duration={200}
              className="link" to="Contact">
              CONTACT
            </Link>
          </li>
        </ul>
      </>
    close = <FontAwesomeIcon icon={faTimes} className="faTimes" onClick={() => setIsOpen(false)} />
  }

  return (
    <header className="Navbar">
      <nav className="Nav-container">
        <div className="Nav-logo">
          <Link style={pathname === '/Home' ? focus : {}} smooth={true} duration={100} className="link" to="Home"><img className="logo" src={Logo} alt="logo" /></Link>
        </div>
        <span className="Nav-mobile-open-close">
          <FontAwesomeIcon className="faBars" icon={faBars} onClick={() => setIsOpen(true)} />
          {menu}
          {close}
        </span>
        <ul className="Nav-links">
          <li>
            <Link style={pathname === '/Work' ? focus : {}}
              smooth={true} duration={300}
              className="link" to="Work"
            >WORK
            </Link>
          </li>
          <li>
            <Link style={pathname === '/Services' ? focus : {}}
              smooth={true} duration={300}
              className="link" to="Services">
              SERVICES
            </Link>
          </li>
          <li>
            <Link style={pathname === '/Contact' ? focus : {}}
              smooth={true} duration={200}
              className="link" to="Contact">
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;