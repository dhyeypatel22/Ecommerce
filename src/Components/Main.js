import React from "react";
import "../Style.css";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  const goToSproduct = () => {
    navigate("/sproduct");
  };


  const goToSpro1 = () => {
    navigate("/spro1");
  };

  const goToSpro2 = () => {
    navigate("/spro2");
  };

  const goToSpro3 = () => {
    navigate("/spro3");
  };

  const goToSpro4 = () => {
    navigate("/spro4");
  };

  const goToSpro5 = () => {
    navigate("/spro5");
  };

  const goToSpro6 = () => {
    navigate("/spro6");
  };

  const goToSpro7 = () => {
    navigate("/spro7");
  };

  const Shop = useNavigate();
  const goToShop = () => {
    Shop("/shop");
  };

  const Signup = useNavigate();
  const goToSignUp = () => {
    Signup("/signup");
  };

  return (
    <>
      <section id="hero">
        <h4>Exclusive offer Available</h4>
        <h2>Super value deals</h2>
        <h1>On all products</h1>
        <p>Save more with coupons &amp; up to 60% off!!</p>
        <button onClick={goToShop}>Shop Now</button>
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

      <section id="product1" className="section-p1">
        <h2>Featured Products</h2>
        <p>Spring-Summer'23 Collection</p>
        <div className="pro-container">
          <div className="pro" onClick={goToSproduct}>
            <img
              src={require("../img2/f1.jpg")}
              alt="not found"
              style={{
                width: "100%",
                minWidth: "25px",
                padding: "0px 0px",
                border: "1px solid #cce7d0",
                borderRadius: "25px",
                cursor: "pointer",
                boxShadow: "20px 20px 30px rgba(0, 0, 0, 0.02)",
                margin: "0px 0px",
                transition: "0.2s ease",
                position: "relative",
              }}
            />
            <div className="des">
              <span>Zara</span>
              <h5>Floral Printed Shirts</h5>
              <div className="star">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <h4>₹850</h4>
              <a href="/" className="normal">🛒</a>
            </div>
            {/* <a href="/#" /> */}
          </div>
          <div className="pro" onClick={goToSpro1}>
            <img
              src={require("../img2/f2.jpg")}
              alt="not found"
              style={{
                width: "100%",
                minWidth: "25px",
                padding: "0px 0px",
                border: "1px solid #cce7d0",
                borderRadius: "25px",
                cursor: "pointer",
                boxShadow: "20px 20px 30px rgba(0, 0, 0, 0.02)",
                margin: "0px 0px",
                transition: "0.2s ease",
                position: "relative",
              }}
            />
            <div className="des">
              <span>Zara</span>
              <h5>Floral Printed Shirts</h5>
              <div className="star">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <h4>₹850</h4>
              <a href="/" className="normal">🛒</a>
            </div>
          </div>
          <div className="pro" onClick={goToSpro2}>
            <img
              src={require("../img2/f3.jpg")}
              alt="not found"
              style={{
                width: "100%",
                minWidth: "25px",
                padding: "0px 0px",
                border: "1px solid #cce7d0",
                borderRadius: "25px",
                cursor: "pointer",
                boxShadow: "20px 20px 30px rgba(0, 0, 0, 0.02)",
                margin: "0px 0px",
                transition: "0.2s ease",
                position: "relative",
              }}
            />
            <div className="des">
              <span>Zara</span>
              <h5>Floral Printed Shirts</h5>
              <div className="star">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <h4>₹850</h4>
              <a href="/" className="normal">🛒</a>
            </div>
          </div>
          <div className="pro" onClick={goToSpro3}>
            <img
              src={require("../img2/f4.jpg")}
              alt="not found"
              style={{
                width: "100%",
                minWidth: "25px",
                padding: "0px 0px",
                border: "1px solid #cce7d0",
                borderRadius: "25px",
                cursor: "pointer",
                boxShadow: "20px 20px 30px rgba(0, 0, 0, 0.02)",
                margin: "0px 0px",
                transition: "0.2s ease",
                position: "relative",
              }}
            />
            <div className="des">
              <span>Zara</span>
              <h5>Floral Printed Shirts</h5>
              <div className="star">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <h4>₹850</h4>
              <a href="/" className="normal">🛒</a>
            </div>
          </div>
          <div className="pro" onClick={goToSpro4}>
            <img
              src={require("../img2/f5.jpg")}
              alt="not found"
              style={{
                width: "100%",
                minWidth: "25px",
                padding: "0px 0px",
                border: "1px solid #cce7d0",
                borderRadius: "25px",
                cursor: "pointer",
                boxShadow: "20px 20px 30px rgba(0, 0, 0, 0.02)",
                margin: "0px 0px",
                transition: "0.2s ease",
                position: "relative",
              }}
            />
            <div className="des">
              <span>Zara</span>
              <h5>Floral Printed Shirts</h5>
              <div className="star">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <h4>₹850</h4>
              <a href="/" className="normal">🛒</a>
            </div>
          </div>
          <div className="pro" onClick={goToSpro5}>
            <img
              src={require("../img2/f6.jpg")}
              alt="not found"
              style={{
                width: "100%",
                minWidth: "25px",
                padding: "0px 0px",
                border: "1px solid #cce7d0",
                borderRadius: "25px",
                cursor: "pointer",
                boxShadow: "20px 20px 30px rgba(0, 0, 0, 0.02)",
                margin: "0px 0px",
                transition: "0.2s ease",
                position: "relative",
              }}
            />
            <div className="des">
              <span>Zara</span>
              <h5>Oversized Shirts</h5>
              <div className="star">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <h4>₹950</h4>
              <a href="/" className="normal">🛒</a>
            </div>
          </div>
          <div className="pro" onClick={goToSpro6}>
            <img
              src={require("../img2/f7.jpg")}
              alt="not found"
              style={{
                width: "100%",
                minWidth: "25px",
                padding: "0px 0px",
                border: "1px solid #cce7d0",
                borderRadius: "25px",
                cursor: "pointer",
                boxShadow: "20px 20px 30px rgba(0, 0, 0, 0.02)",
                margin: "0px 0px",
                transition: "0.2s ease",
                position: "relative",
              }}
            />
            <div className="des">
              <span>Zara</span>
              <h5>Floral Relexed Fits</h5>
              <div className="star">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <h4>₹650</h4>
              <a href="/" className="normal">🛒</a>
            </div>
          </div>
          <div className="pro" onClick={goToSpro7}>
            <img
              src={require("../img2/f8.jpg")}
              alt="not found"
              style={{
                width: "100%",
                minWidth: "25px",
                padding: "0px 0px",
                border: "1px solid #cce7d0",
                borderRadius: "25px",
                cursor: "pointer",
                boxShadow: "20px 20px 30px rgba(0, 0, 0, 0.02)",
                margin: "0px 0px",
                transition: "0.2s ease",
                position: "relative",
              }}
            />
            <div className="des">
              <span>Zara</span>
              <h5>Floral Printed Tops</h5>
              <div className="star">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <h4>₹550</h4>
              <a href="/" className="normal">🛒</a>
            </div>
          </div>
        </div>
      </section>

      <section id="banner" className="section-m1">
        <h4>Repair Services</h4>
        <h2>
          Up to <span>70% off</span> - All t-Shirts &amp; Accessories
        </h2>
        <button className="normal" onClick={goToShop}>
          Explore More
        </button>
      </section>

      <section id="product1" className="section-p1">
        <h2>Just Launched</h2>
        <p> Spring-Summer'23 Collection</p>
        <div className="pro-container">
          <div className="pro" onClick={goToSproduct}>
            <img
              src={require("../img2/n1.jpg")}
              alt="not found"
              style={{
                width: "100%",
                minWidth: "25px",
                padding: "0px 0px",
                border: "1px solid #cce7d0",
                borderRadius: "25px",
                cursor: "pointer",
                boxShadow: "20px 20px 30px rgba(0, 0, 0, 0.02)",
                margin: "0px 0px",
                transition: "0.2s ease",
                position: "relative",
              }}
            />
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
              <a href="/" className="normal">🛒</a>
            </div>
          </div>
          <div className="pro" onClick={goToSproduct}>
            <img
              src={require("../img2/n2.jpg")}
              alt="not found"
              style={{
                width: "100%",
                minWidth: "25px",
                padding: "0px 0px",
                border: "1px solid #cce7d0",
                borderRadius: "25px",
                cursor: "pointer",
                boxShadow: "20px 20px 30px rgba(0, 0, 0, 0.02)",
                margin: "0px 0px",
                transition: "0.2s ease",
                position: "relative",
              }}
            />
            <div className="des">
              <span>Zara</span>
              <h5>Checks Printed Shirts</h5>
              <div className="star">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <h4>₹800</h4>
              <a href="/" className="normal">🛒</a>
            </div>
          </div>
          <div className="pro" onClick={goToSproduct}>
            <img
              src={require("../img2/n3.jpg")}
              alt="not found"
              style={{
                width: "100%",
                minWidth: "25px",
                padding: "0px 0px",
                border: "1px solid #cce7d0",
                borderRadius: "25px",
                cursor: "pointer",
                boxShadow: "20px 20px 30px rgba(0, 0, 0, 0.02)",
                margin: "0px 0px",
                transition: "0.2s ease",
                position: "relative",
              }}
            />
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
              <a href="/" className="normal">🛒</a>
            </div>
          </div>
          <div className="pro" onClick={goToSproduct}>
            <img
              src={require("../img2/n4.jpg")}
              alt="not found"
              style={{
                width: "100%",
                minWidth: "25px",
                padding: "0px 0px",
                border: "1px solid #cce7d0",
                borderRadius: "25px",
                cursor: "pointer",
                boxShadow: "20px 20px 30px rgba(0, 0, 0, 0.02)",
                margin: "0px 0px",
                transition: "0.2s ease",
                position: "relative",
              }}
            />
            <div className="des">
              <span>Zara</span>
              <h5>Floral Printed Shirts</h5>
              <div className="star">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <h4>₹850</h4>
              <a href="/" className="normal">🛒</a>
            </div>
          </div>
          <div className="pro" onClick={goToSproduct}>
            <img
              src={require("../img2/n5.jpg")}
              alt="not found"
              style={{
                width: "100%",
                minWidth: "25px",
                padding: "0px 0px",
                border: "1px solid #cce7d0",
                borderRadius: "25px",
                cursor: "pointer",
                boxShadow: "20px 20px 30px rgba(0, 0, 0, 0.02)",
                margin: "0px 0px",
                transition: "0.2s ease",
                position: "relative",
              }}
            />
            <div className="des">
              <span>Zara</span>
              <h5>Denim Blue Shirt</h5>
              <div className="star">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <h4>₹950</h4>
              <a href="/" className="normal">🛒</a>
            </div>
          </div>
          <div className="pro" onClick={goToSproduct}>
            <img
              src={require("../img2/n6.jpg")}
              alt="not found"
              style={{
                width: "100%",
                minWidth: "25px",
                padding: "0px 0px",
                border: "1px solid #cce7d0",
                borderRadius: "25px",
                cursor: "pointer",
                boxShadow: "20px 20px 30px rgba(0, 0, 0, 0.02)",
                margin: "0px 0px",
                transition: "0.2s ease",
                position: "relative",
              }}
            />
            <div className="des">
              <span>Zara</span>
              <h5>Amigo Grey Shorts</h5>
              <div className="star">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <h4>₹650</h4>
              <a href="/" className="normal">🛒</a>
            </div>
          </div>
          <div className="pro" onClick={goToSproduct}>
            <img
              src={require("../img2/n7.jpg")}
              alt="not found"
              style={{
                width: "100%",
                minWidth: "25px",
                padding: "0px 0px",
                border: "1px solid #cce7d0",
                borderRadius: "25px",
                cursor: "pointer",
                boxShadow: "20px 20px 30px rgba(0, 0, 0, 0.02)",
                margin: "0px 0px",
                transition: "0.2s ease",
                position: "relative",
              }}
            />
            <div className="des">
              <span>Zara</span>
              <h5>Denim Brown Shirt</h5>
              <div className="star">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <h4>₹950</h4>
              <a href="/" className="normal">🛒</a>
            </div>
          </div>
          <div className="pro" onClick={goToSproduct}>
            <img
              src={require("../img2/n8.jpg")}
              alt="not found"
              style={{
                width: "100%",
                minWidth: "25px",
                padding: "0px 0px",
                border: "1px solid #cce7d0",
                borderRadius: "25px",
                cursor: "pointer",
                boxShadow: "20px 20px 30px rgba(0, 0, 0, 0.02)",
                margin: "0px 0px",
                transition: "0.2s ease",
                position: "relative",
              }}
            />
            <div className="des">
              <span>Zara</span>
              <h5>Linen Black Shirt</h5>
              <div className="star">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <h4>₹750</h4>
              <a href="/" className="normal">🛒</a>
            </div>
          </div>
        </div>
      </section>

      <section id="banner3">
        <div className="banner-box">
          <h2>SEASONAL SALE</h2>
          <h3>Winter Collection -50% OFF</h3>
        </div>
        <div className="banner-box banner-box2">
          <h2>NEW FOOTWEAR COLLECTION</h2>
          <h3>Spring / Summer 2023</h3>
        </div>
        <div className="banner-box banner-box3">
          <h2>T-SHIRTS</h2>
          <h3>New Trendy Prints</h3>
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
export default Main;
