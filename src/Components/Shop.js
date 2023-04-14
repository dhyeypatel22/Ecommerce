import React from "react";
import "../Style.css";
import { useNavigate } from "react-router-dom";

function Shop() {
  const navigate = useNavigate();
  const goToSproduct = () => {
    navigate("/sproduct");
  };

  const Signup = useNavigate();
  const goToSignUp = () => {
    Signup("/signup");
  };

  return (
    <>
      <section id="page-header">
        <h2>#BeUnstoppable</h2>
        <p>Choose From Wide Range Of Mens Fashion Apparels!</p>
      </section>

      <section id="product1" className="section-p1">
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
            </div>
          </div>
          <div className="pro" onClick={goToSproduct}>
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
            </div>
          </div>
          <div className="pro" onClick={goToSproduct}>
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
            </div>
          </div>
          <div className="pro" onClick={goToSproduct}>
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
            </div>
          </div>
          <div className="pro" onClick={goToSproduct}>
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
            </div>
          </div>
          <div className="pro" onClick={goToSproduct}>
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
            </div>
          </div>
          <div className="pro" onClick={goToSproduct}>
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
            </div>
          </div>
          <div className="pro" onClick={goToSproduct}>
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
            </div>
          </div>
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
            </div>
          </div>
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

export default Shop;
