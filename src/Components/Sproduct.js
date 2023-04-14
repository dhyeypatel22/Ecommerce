import React from "react";
import "../Style.css";
import { useNavigate } from "react-router-dom";

function Sproduct() {
  const Signup = useNavigate();
  const goToSignUp = () => {
    Signup("/signup");
  };
  return (
    <>
      <section id="prodetails" className="section-p1">
        <div className="single-pro-image">
          <img
            src={require("../img2/f1.jpg")}
            width="100%"
            id="MainImg"
            alt="not found"
          />
          <div className="small-img-group ">
            <div className="small-img-col">
              <img
                src={require("../img2/f1.jpg")}
                width="100%"
                className="small-img"
                alt="not found"
              />
            </div>
            <div className="small-img-col">
              <img
                src={require("../img2/f2.jpg")}
                width="100%"
                className="small-img"
                alt="not found"
              />
            </div>
            <div className="small-img-col">
              <img
                src={require("../img2/f3.jpg")}
                width="100%"
                className="small-img"
                alt="not found"
              />
            </div>
            <div className="small-img-col">
              <img
                src={require("../img2/f4.jpg")}
                width="100%"
                className="small-img"
                alt="not found"
              />
            </div>
          </div>
        </div>
        <div className="single-pro-details">
          <h6>Zara</h6>
          <h4>Floral Printed Shirts</h4>
          <h2>₹850</h2>
          <select>
            <option>Select Size</option>
            <option>XXL</option>
            <option>XL</option>
            <option>Large</option>
            <option>Medium</option>
          </select>
          <input type="number" defaultValue={1} />
          <button
            className="normal"
            onclick="alert('Hurray!🎉\nAn Item Added to Cart!')"
          >
            Add To Cart
          </button>
          <h4>Product Details</h4>
          <span>
            Printed casual shirt, has a spread collar, short sleeves, and curved
            hem. Solid colors and comfy cotton have their own place, but what we
            really love is donning a bold, fun printed shirt that brightens up
            any room we step in. Moreover, this printed casual shirt, has a
            spread collar, short sleeves, and curved hem
          </span>
        </div>
      </section>

      <section id="product1" className="section-p1">
        <h2>Featured Products</h2>
        <p>Summer Collection New Morden Design</p>
        <div className="pro-container">
          <div className="pro">
            <img src={require("../img2/f2.jpg")} alt="not found" />
            <div className="des">
              <span>Zara</span>
              <h5>Linen Blue Shirt</h5>
              <div className="star">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <h4>₹900</h4>
            </div>
          </div>
          <div className="pro">
            <img src={require("../img2/f3.jpg")} alt="not found" />
            <div className="des">
              <span>Zara</span>
              <h5>Checks Printed Shirts</h5>
              <div className="star">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <h4>₹800</h4>
            </div>
          </div>
          <div className="pro">
            <img src={require("../img2/f4.jpg")} alt="not found" />
            <div className="des">
              <span>Zara</span>
              <h5>Linen White Shirt</h5>
              <div className="star">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <h4>₹900</h4>
            </div>
          </div>
          <div className="pro">
            <img src={require("../img2/f5.jpg")} alt="not found" />
            <div className="des">
              <span>Zara</span>
              <h5>Floral Printed Shirts</h5>
              <div className="star">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <h4>₹850</h4>
            </div>
          </div>
        </div>
      </section>

      <section id="newsletter" className="section-p1 section-m1">
        <div className="newstext">
          <h4>Sign in for Your Best Experience</h4>
          <p>
            Get E-mail updates about our latest shop and{" "}
            <span>special offers.</span>
          </p>
        </div>
        <div className="form">
          <input id="myInput" type="text" placeholder="Your email address" />
          <button id="myBtn" className="normal" onClick={goToSignUp}>
            Sign Up
          </button>
        </div>
      </section>
    </>
  );
}

export default Sproduct;
