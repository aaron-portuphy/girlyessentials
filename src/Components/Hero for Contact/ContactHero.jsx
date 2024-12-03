import React from "react";
import './ContactHero.css';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/ContactHero_Image.png';

const ContactHero = () => {
    return (
        <div className="hero">
            {/* Left Section */}
            <div className="hero-left">
                <h2>REACH OUT NOW!</h2>
                <div className="hero-title">
                    <div className="hero-hand-icon">
                        <p>We'd</p>
                        {/* <img src={hand_icon} alt="Hand Icon" /> */}
                    </div>
                    <p className="collections">Love To</p>
                    <p className="for-everyone">Hear from You</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Contact Us</div>
                    {/* <img src={arrow_icon} alt="Arrow Icon" /> */}
                </div>
            </div>

            {/* Right Section */}
            <div className="hero-right">
                <img src={hero_image} className="hero-image" alt="Hero" />
            </div>
        </div>
    );
};

export default ContactHero;
