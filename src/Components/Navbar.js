import React from 'react';
import "../Style.css";
import { NavLink, useNavigate } from 'react-router-dom';


 function Navbar () {

  const Home = useNavigate();
  const goToMain = () => {
    Home("/");
  };

  return (
    <>
    <section id="header">
    <img src={require("../img/logoB2.png")}  className="logo" alt="logo" height={40} width={90} onClick={goToMain} />


    <div>
  <ul id="navbar">
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/shop">Shop</NavLink></li>
    <li><NavLink to="/blog">Blog</NavLink></li>
    <li><NavLink to="/about">About</NavLink></li>
    <li><NavLink to="/contact">Contact</NavLink></li>
    <li id="lg-bag"><NavLink to="/cart">🛒</NavLink></li>
    <a href="/" id="close">
      ×
    </a>
  </ul>
</div>
</section>

    
    </>
  )
}

export default Navbar