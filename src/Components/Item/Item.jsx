import React from "react";
import './Item.css'

const Item = (props) => {
    return(
        <div className="container">
             <div className="item">
        <img src={props.image} alt="" className="item-image"/>
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="item-price">
               <p>Price: GHS {props.price}</p> 
            </div>
            <div className="item-stock">
                <p>Stock: {props.stock}</p>
            </div>
            <button
        onClick={() =>
          window.open(
            `https://wa.me/+233542641380?text=Hi, I want to purchase: ${props.name} for ${props.price} GHS.`,
            "_blank"
          )
        }
      >
        Contact on WhatsApp
      </button>
        </div>
    </div>
        </div>
       
    )
}

export default Item;