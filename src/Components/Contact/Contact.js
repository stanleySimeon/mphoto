/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./Contact.css";
import phone from "./././../../assets/icons/phone-solid.png";
import email from "./././../../assets/icons/envelope-solid.png";
import facebook from "./././../../assets/icons/facebook-brands.png";
import instagram from "./././../../assets/icons/instagram-brands.png";
import whatsapp from "./././../../assets/icons/whatsapp-brands.png";

function Contact() {
    return (
        <div className="Contact">
            <div className="Contact-container-top">
                <h1> Let's Get In Touch </h1>
                <span className="title-line-bottom-bar"></span>
            </div>
            <div className="Contact-container-middle">
                <div className="Contact-container-middle-left">
                    <div className="Contact-container-middle-left-top-first">
                        <div className="Contact-container-middle-left-first-element">
                            <img src={phone} alt="phone-icon" />
                            <h2>+(509)440-256-51</h2>
                        </div>
                        <div className="Contact-container-middle-left-second-element">
                            <img src={email} alt="email-icon" />
                            <h2>mstanley.me@gmail.com</h2>
                        </div>
                    </div>
                    <div className="Contact-container-middle-left-third-element">
                        <img src={facebook} className="filterColor" alt="facebook-icon" />
                        <img src={instagram} className="filterColor" alt="instagram-icon" />
                        <img src={whatsapp} className="filterColor" alt="whatsapp-icon" />
                    </div>
                </div>
                <div className="Contact-container-middle-right">
                    <form className="contact-form" action="#" method="#" autoComplete="off">
                        <label htmlFor="name" className="labelName label">Name</label>
                        <input type="text" name="name" className="inputName" placeholder="Your full name" required />
                        <label htmlFor="email" className="labelEmail label">Email</label>
                        <input type="email" name="email" className="inputEmail" placeholder="Your email" required />
                        <label htmlFor="message" className="labelMessage label">Message</label>
                        <textarea name="message" className="inputMessage" maxLength={500} placeholder="Write your message..." required cols={30} rows={8} />
                        <input type="submit" value="Send" className="inputSubmit" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;