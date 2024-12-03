import React from "react";
import './Footer.css'
import ge_logo from '../Assets/ge-logo.png';
import snapchat_icon from '../Assets/snapchat-icon.png';
import instagram_icon from '../Assets/instagram-icon.png';
import titok_icon from '../Assets/free-tiktok-icon.png';
import whatsapp_icon from '../Assets/whatsapp-icon.png'


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src={ge_logo} className="girly-logo" alt="" />
            </div>
            <ul className="footer-links">
                <li>Products</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                    <div className="footer-icons-container">
                        <a href="https://www.instagram.com/fa_reeda__?igsh=MXZvYmd3MWczNXJhNg==" target="_blank"><img src={instagram_icon} className="footer-icon" alt="" /></a>
                    </div>
                    <div className="footer-icons-container">
                        <a href="https://snapchat.com/t/OeIyx9Nk" target="_blank"><img src={snapchat_icon} className="footer-icon" alt="" /></a>
                    </div>
                    <div className="footer-icons-container">
                        <a href="https://www.tiktok.com/@fareeda912?_t=8ri0sSQJKvI&_r=1" target="_blank"><img src={titok_icon} className="tiktok-icon"alt="" /></a>
                    </div>
                    <div className="footer-icons-container">
                        <a href="https://wa.me/+233542641380" target="_blank"><img src={whatsapp_icon} className="footer-icon"alt="" /></a>
                    </div>
            </div>
                <div className="footer-copyright">
                    <hr />
                    <p>Copyright @ 2024 - All Right Reserved</p>
                </div>
        </div>
    )
}

export default Footer;