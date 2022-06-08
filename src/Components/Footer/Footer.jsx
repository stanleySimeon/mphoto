import React from 'react';
import logo from "././../../assets/mp-logo-white.PNG";
import "./Footer.scss";

function Footer() {
    return (
        <div className="footer">
            <img className='logo' src={ logo } alt="Martial photography logo" />
            <p>Made with ❤️ by <a href="https://mstanley.netlify.app">mstanley</a></p>
        </div>
    )
}
export default Footer;
