import React from "react";
import './Navbar.css'
import logo from '../Assets/ge-logo.png'
import { useState } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {

    const [menu, setMenu] = useState("home");
    return(
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} className="logo" alt="" />
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("home")}}><Link style={{ textDecoration: 'none' }} to='/home'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("products")}}><Link style={{ textDecoration: 'none' }} to='/products'>Products</Link>{menu==="products"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("contact")}}><Link style={{ textDecoration: 'none' }} to='/contact'>Contact</Link>{menu==="contact"?<hr/>:<></>}</li>
            </ul>
        </div>
    )
}

export default Navbar