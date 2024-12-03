import React from "react";
import './Channel.css';

const Channel = (props) =>{
    return(
        <div className="channel">
            <h1>Get Updates On Our Whatsapp Channel</h1>
            <p>Subscribe to our channel and stay updated</p>
        <div>
            <button
        onClick={() =>
          window.open(
            `https://wa.me/YOUR_WHATSAPP_NUMBER?text=Hi, I want to purchase: ${props.name} for ${props.price} GHS.`,
            "_blank"
          )
        }
      >
        Subscribe
      </button>
            </div>
        </div>
    )
}

export default Channel;