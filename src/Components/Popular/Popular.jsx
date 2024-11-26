import React from 'react';
import './Popular.css';
import product_data from '../Assets/popular_data.js';
import Item from '../Item/Item.jsx';


const Popular = () =>{
    return(
        <div className="popular">
            <h1>POPULAR ESSENTIALS</h1>
            <hr />
            <div className="popular-item">
                {product_data.map((item, i)=>{
                    return <Item key={i} id={item.id} name={item.name} price={item.price} stock={item.stock} image={item.image}/>
                })}
            </div>
        </div>
    )
}

export default Popular;