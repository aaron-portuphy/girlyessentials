import React from "react";
import './Collections.css';
import new_collection from '../Assets/new_collections.js';
import Item from "../Item/Item";

const Collections = () =>{
    return(
        <div className="new-collection">
            <h1>COLLECTIONS</h1>
            <hr />
            <div className="collections">
                {new_collection.map((item, i)=>{
                    return <Item key={i} id={item.id} name={item.name} price={item.price} stock={item.stock} image={item.image}/>
                })}
            </div>
        </div>
    )
}

export default Collections;