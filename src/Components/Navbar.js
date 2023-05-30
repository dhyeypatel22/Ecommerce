import React, { useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../Style.css";

function Navbar() {
  const Home = useNavigate();
  const goToMain = () => {
    Home("/");
  };

  const logoRef = useRef(null);

  const handleMouseEnter = () => {
    if (logoRef.current) {
      logoRef.current.style.cursor = "pointer";
    }
  };

  const handleMouseLeave = () => {
    if (logoRef.current) {
      logoRef.current.style.cursor = "default";
    }
  };

  return (
    <>
      <section id="header">
        <img
          ref={logoRef}
          src={require("../img/logoB2.png")}
          className="logo"
          alt="logo"
          height={40}
          width={90}
          onClick={goToMain}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />

        <div>
          <ul id="navbar">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/shop">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li id="lg-bag">
              <NavLink to="/cart">🛒</NavLink>
            </li>
            <a href="/" id="close">
              ×
            </a>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Navbar;
  