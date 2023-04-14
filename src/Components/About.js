import React from 'react';
import "../Style.css";
import { useNavigate } from 'react-router-dom';

function About() {

    const Signup = useNavigate();
    const goToSignUp = () => {
      Signup("/signup");
    };
  return (
    <>
    <section id="page-header" className="about-header">
  <h2>#KnowUs</h2>
  <p>We'er in the business to improve livestyles!</p>
</section>

<section id="about-head" className="section-p1">
  <img src={require("../img/a6.jpg")} alt="not found" />
  <div>
    <h2>Who We Are?</h2>
    <p>
      Basil is wellknown brand providing quality products at lowest price. Basil
      works with the vision of offering Luxurious designed clothing. Our website
      is designed to bridge the vast gap between the virtual and the physical
      world. At Basil cloths are not a product, but rather, a manifestation of
      artistry and this is why we are a brand that has the distinct honor of
      being coveted by men &amp; women with designs that capture the beauty and
      celebration of special occasions in the life of them.
    </p>
    <abbr title="">
      We also firmly believed that our customers deserved more choices,
      straightforward information and legendary service.{" "}
    </abbr>
    <br />
    <br />
    <marquee bgcolor="#ccc" loop={-1} width="100%">
      We celebrates creativity from villages, small towns, and from metros
      online! It nurtures, gives space, light and love to the emerging and
      ancient vibrantly creative spirit of India.
    </marquee>
  </div>
</section>

<section id="about-app" className="section-p1">
  <h1>
    Download Our <a href="/#">App</a>{" "}
  </h1>
  <div className="video">
    <video autoPlay={true} muted loop >
      <source src={require("../img/1.mp4")} type="video/mp4" />
    </video>
  </div>
</section>

<section id="feature" className="section-p1">
  <div className="fe-box">
    <img src={require("../img2/fe1.png")} alt="not found" />
    <h6>Free Shipping</h6>
  </div>
  <div className="fe-box">
    <img src={require("../img2/fe2.png")} alt="not found" />
    <h6>Online Order</h6>
  </div>
  <div className="fe-box">
    <img src={require("../img2/fe3.png")} alt="not found" />
    <h6>Save Money</h6>
  </div>
  <div className="fe-box">
    <img src={require("../img2/fe4.png")} alt="not found" />
    <h6>Promotions</h6>
  </div>
  <div className="fe-box">
    <img src={require("../img2/fe5.png")} alt="not found" />
    <h6>Happy Sell</h6>
  </div>
  <div className="fe-box">
    <img src={require("../img2/fe6.png")} alt="not found" />
    <h6>24/7 Support</h6>
  </div>
</section>

<section id="newsletter" className="section-p1 section-m1">
  <div className="newstext">
    <h4>Sign in for Your Best Experience</h4>
    <p>
      Get E-mail updates about our latest shop and <span>special offers.</span>
    </p>
  </div>
  <div className="form">
    <input id="myInput" type="text" placeholder="Your email address" />
    <button
      id="myBtn"
      className="normal"
      onClick={goToSignUp}
    >
      Sign Up
    </button>
  </div>
</section>



    </>
  )
}

export default About
