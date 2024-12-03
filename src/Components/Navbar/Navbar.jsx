import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/ge-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State for menu visibility
  const [activeMenu, setActiveMenu] = useState("home"); // State for active menu item

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState); // Toggle menu visibility
  };

  const handleMenuClick = (menuItem) => {
    setActiveMenu(menuItem); // Set active menu item
    setMenuOpen(false); // Close the menu after selecting an item
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} className="logo" alt="Logo" />
      </div>

      {/* Hamburger Icon */}
      <div
        className="hamburger"
        onClick={toggleMenu}
        aria-expanded={menuOpen ? "true" : "false"}
        aria-label="Toggle navigation menu"
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {/* Navigation Menu */}
      <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
        <li onClick={() => handleMenuClick("home")}>
          <Link to="/home">Home</Link>
          {activeMenu === "home" && <hr />}
        </li>
        <li onClick={() => handleMenuClick("products")}>
          <Link to="/products">Products</Link>
          {activeMenu === "products" && <hr />}
        </li>
        <li onClick={() => handleMenuClick("contact")}>
          <Link to="/contact">Contact</Link>
          {activeMenu === "contact" && <hr />}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
