import React from 'react';
import './AllProducts.css';
import allproduct_data from '../Assets/data.js';
import Item from '../Item/Item.jsx';


const AllProduct = () =>{
    return(
        <div className="product-section">
            <h1>ALL PRODUCTS</h1>
            <hr />
            <div className="product-item">
                {allproduct_data.map((item, i)=>{
                    return <Item key={i} id={item.id} name={item.name} price={item.price} stock={item.stock} image={item.image}/>
                })}
            </div>
        </div>
    )
}

export default AllProduct;