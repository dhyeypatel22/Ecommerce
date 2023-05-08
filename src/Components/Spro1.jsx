import React, { useState } from "react";
import "../Style.css";
import { useNavigate } from "react-router-dom";

// const Item = ({ item }) => {
//   const [cartItems, setCartItems] = useState([]);
// }
//   const handleAddToCart = (item) => {
//     setCartItems([...cartItems, item]);
// }


function Spro1() {
  const Signup = useNavigate();
  const goToSignUp = () => {
    Signup("/signup");
  };

  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = () => {
    setCartItems([...cartItems, {
      name: "Floral Printed Shirts",
      price: 850,
      size: document.getElementById("size").value,
      quantity: document.getElementById("quantity").value,
      image: require("../img2/f1.jpg")
    }]);
    setCartItems([...cartItems, ]);
  };

  const product = [
  {
    id: 1,
    name: "Floral Printed Shirts",
    price: 850,
    image: require("../img2/f2.jpg"),
    sizes: ["Select Size", "XXL", "XL", "Large", "Medium"],
    details:  "Printed casual shirt, has a spread collar, short sleeves, and curvedhem. Solid colors and comfy cotton have their own place, but what wereally love is donning a bold, fun printed shirt that brightens upany room we step in. Moreover, this printed casual shirt, has aspread collar, short sleeves, and curved hem"
  },
]; 


  return (
    <>
    {product.map((product) => (
        <section id="prodetails" className="section-p1" key={product.id}>
          <div className="single-pro-image">
            <img src={product.image} width="100%" id="MainImg" alt="not found" />
            <div className="small-img-group ">
              <div className="small-img-col">
                <img
                  src={product.image}
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
            <h4>{product.name}</h4>
            <h2>₹{product.price}</h2>
            <select id="size">
              {product.sizes.map((size) => (
                <option key={size}>{size}</option>
              ))}
            </select>
            <input type="number" defaultValue={1} id="quantity" />
            <button
              className="normal"
              onClick={() => handleAddToCart(product)}
            >
              Add To Cart
            </button>
            <h4>Product Details</h4>
            <span>{product.details}</span>
          </div>
        </section>
    ))}

<section id="product1" className="section-p1">
        <h2>Featured Products</h2>
        <p>Spring-Summer'23 Collection</p>
        <div className="pro-container">
          <div className="pro">
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
          <div className="pro">
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
          <div className="pro">
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
          <div className="pro">
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

export default Spro1;
