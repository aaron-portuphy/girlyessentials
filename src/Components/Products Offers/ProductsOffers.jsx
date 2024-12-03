import React from "react";
import './ProductsOffers.css'
import offerImage from '../Assets/offer-image.png'

const ProductsOffers = () =>{
    return(
        
        <div className="offers">
            <div className="offers-left">
                <h1>Unmissable</h1>
                <h1>Deals Awaits You</h1>
                <p>DIVE INTO A WORLD OF QUALITY</p>
                <button>Check Now</button>
            </div>
            <div className="offers-right">
                <img src={offerImage} className="offer-image" alt="" />
            </div>

        </div>
    )
}

export default ProductsOffers;