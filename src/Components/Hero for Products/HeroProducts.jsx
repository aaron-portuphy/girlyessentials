import React from "react";
import './HeroProducts.css';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import heroproduct_image from '../Assets/ProductHero_Image.png';

const HeroProducts = () => {
    return (
        <div className="hero">
            {/* Left Section */}
            <div className="hero-left">
                <h2>STEP INTO STYLE</h2>
                <div className="hero-title">
                    <div className="hero-hand-icon">
                        <p>Explore</p>
                        {/* <img src={hand_icon} alt="Hand Icon" /> */}
                    </div>
                    <p className="collections">Our Exclusive </p>
                    <p className="for-everyone">Essential Collections</p>
                </div>
                <div className="hero-latest-btn">
                    <div>All Collection</div>
                    <img src={arrow_icon} alt="Arrow Icon" />
                </div>
            </div>

            {/* Right Section */}
            <div className="hero-right">
                <img src={heroproduct_image} className="hero-image" alt="Hero" />
            </div>
        </div>
    );
};

export default HeroProducts;
