import React from 'react';
import logo from "././../../assets/mp-logo-white.PNG";
import "./Footer.css";

function Footer() {
    return (
        <div className="footer">
            <img className='logo' src={ logo } alt="Martial photography logo" />
            <p>made with ❤️ by <a href="https://mstanley.netlify.app">mstanley</a></p>
        </div>
    )
}
export default Footer;
