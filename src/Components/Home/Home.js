import React from "react";
import "./Home.css";
import Navbar from './../Navigation/Navbar';

function Home() {
    return (
        <div className="Home">
            <Navbar />
            <div className="Home-container">
                <div className="Home-text">
                    <h1><strong>Welcome to</strong><br /><span className="tag-name"><strong>Martial</strong><br /><strong>Photography</strong></span></h1>
                    <span className="slogan-text">
                        Your one stop shop for all your photography needs.
                    </span>
                </div>
                <span className="bullet-00"></span>
                <span className="bullet-01"></span>
                <span className="bullet-02"></span>
                <button className="get-started-btn" type="button">Get Started</button>
            </div>
        </div>
    );
}

export default Home;