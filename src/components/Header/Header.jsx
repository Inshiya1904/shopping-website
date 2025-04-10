import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { removeToken } from "../../utils/auth";
import './Header.css'
import { FaCartPlus } from "react-icons/fa";

export default function Header() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();
    navigate("/");
  };

  return (
    
  <header className="header">
    <div className="header-container">
       <Link to='/products'><h1>Shoppee</h1></Link> 
      <div className="header-items">
        <Link to="/products"><h2>Home</h2></Link>
        <Link to="/cart" className="cart-content">
        <FaCartPlus className="cart-icon" />
        <p  className="cart-count">{cart.length}</p>
        </Link>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  </header>

    
    
  );
}

