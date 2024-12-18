import React from "react";
import './Hero.css';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero-image.png';

const Hero = () => {
    return (
        <div className="hero">
            {/* Left Section */}
            <div className="hero-left">
                <h2>NEW ARRIVALS ONLY</h2>
                <div className="hero-title">
                    <div className="hero-hand-icon">
                        <p>new</p>
                        <img src={hand_icon} alt="Hand Icon" />
                    </div>
                    <p className="collections">Collections</p>
                    <p className="for-everyone">For Everyone</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Latest Collection</div>
                    <img src={arrow_icon} alt="Arrow Icon" />
                </div>
            </div>

            {/* Right Section */}
            <div className="hero-right">
                <img src={hero_image} className="hero-image" alt="Hero" />
            </div>
        </div>
    );
};

export default Hero;
