import React from "react";
import "./Home.css";
import Navbar from './../Navigation/Navbar';

function Home() {
    return (
        <div className="Home">
            <Navbar />
            <div className="Home-container">
                <div className="Home-text">
                    <h1>
                        <span className="box"><span className="welcome-bar"></span><strong className="welcome-text">Welcome to</strong></span>
                        <span className="tag-name">
                            <strong>Martial</strong><br />
                            <strong>Photography</strong>
                        </span><br />
                    </h1>
                    <span className="slogan-text">
                        Your one stop shop for all your photography needs.
                    </span>
                </div>
                <span className="bullet-00"></span>
                <span className="bullet-01"></span>
                <button className="get-started-btn" type="button">Get Started</button>
            </div>
        </div>
    );
}

export default Home;