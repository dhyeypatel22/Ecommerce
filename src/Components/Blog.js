import React from 'react';
import "../Style.css";
import { useNavigate } from 'react-router-dom';
function Blog() {

    const Signup = useNavigate();
    const goToSignUp = () => {
      Signup("/signup");
    };
  return (
    <>
    <section id="page-header" className="blog-header">
  <h2>#ReadMore</h2>
  <p>Read all case studies about our products!</p>
</section>

<section id="blog">
  <div className="blog-box">
    <div className="blog-img">
      <img src={require("../img2/b2.jpg")} alt="not found" />
    </div>
    <div className="blog-details">
      <h4>The Cotton-Jersey Zip-Up Hoodie</h4>
      <p>
        Kickstarter man braid godard coloring book. Raclette waiscoat selfies yr
        wolf chartreuse hexagon irony, godard...
      </p>
      <a href="/#">CONTINUE READING</a>
    </div>
    <h1>13/01</h1>
  </div>

  <div className="blog-box">
    <div className="blog-img">
      <img src={require("../img/b1 (1).jpg")} alt="not found" />
    </div>
    <div className="blog-details">
      <h4>How to Style a Quiff</h4>
      <p>
        Kickstarter man braid godard coloring book. Raclette waiscoat selfies yr
        wolf chartreuse hexagon irony, godard...
      </p>
      <a href="/#">CONTINUE READING</a>
    </div>
    <h1>13/04</h1>
  </div>
  <div className="blog-box">
    <div className="blog-img">
      <img src={require("../img/b3.jpg")} alt="not found" />
    </div>
    <div className="blog-details">
      <h4>Must-have Skater Girl Items</h4>
      <p>
        Kickstarter man braid godard coloring book. Raclette waiscoat selfies yr
        wolf chartreuse hexagon irony, godard...
      </p>
      <a href="/#">CONTINUE READING</a>
    </div>
    <h1>12/01</h1>
  </div>
  <div className="blog-box">
    <div className="blog-img">
      <img src={require("../img/b4.jpg")} alt="not found" />
    </div>
    <div className="blog-details">
      <h4>Runway-Inspired Trends</h4>
      <p>
        Kickstarter man braid godard coloring book. Raclette waiscoat selfies yr
        wolf chartreuse hexagon irony, godard...
      </p>
      <a href="/#">CONTINUE READING</a>
    </div>
    <h1>16/02</h1>
  </div>
  <div className="blog-box">
    <div className="blog-img">
      <img src={require("../img/b6.jpg")} alt="not found" />
    </div>
    <div className="blog-details">
      <h4>AW20 Menswear Trends</h4>
      <p>
        Kickstarter man braid godard coloring book. Raclette waiscoat selfies yr
        wolf chartreuse hexagon irony, godard...
      </p>
      <a href="/#">CONTINUE READING</a>
    </div>
    <h1>10/03</h1>
  </div>

</section>

<section id="pagination" className="section-p1">
  <a href="/#">1</a>
  <a href="/#">2</a>
  <a href="/#">3</a>
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

export default Blog 
