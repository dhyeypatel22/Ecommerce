import React from 'react';
import "../Style.css";
import { useNavigate } from 'react-router-dom';

function Cart() {

    const Signup = useNavigate();
    const goToSignUp = () => {
      Signup("/signup");
    };

    const Order = useNavigate();
  const goToOrder = () => {
    Order("/order");
  };

  return (
    <>
    <section id="page-header" className="cart-header">
  <h2>#cart</h2>
  <p>Time to Start Shopping!</p>
</section>

<section id="cart" className="section-p1">
  <table width="100%">
    <thead>
      <tr>
        <td>Remove</td>
        <td>Image</td>
        <td>Product</td>
        <td>Price</td>
        <td>Quantity</td>
        <td>Subtotal</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <i className="far fa-times-circle" />
        </td>
        <td>
          <img src={require("../img2/f1.jpg")} alt="not found" />
        </td>
        <td>Floral Printed Shirts</td>
        <td>₹850</td>
        <td>
          <input type="number" defaultValue={1} />
        </td>
        <td>₹850</td>
      </tr>
      <tr>
        <td>
          <i className="far fa-times-circle" />
        </td>
        <td>
          <img src={require("../img2/f2.jpg")} alt="not found" />
        </td>
        <td>Floral Printed Shirts</td>
        <td>₹850</td>
        <td>
          <input type="number" defaultValue={1} />
        </td>
        <td>₹850</td>
      </tr>
      <tr>
        <td>
          <i className="far fa-times-circle" />
        </td>
        <td>
          <img src={require("../img2/f5.jpg")} alt="not found" />
        </td>
        <td>Floral Printed Shirts</td>
        <td>₹850</td>
        <td>
          <input type="number" defaultValue={1} />
        </td>
        <td>₹850</td>
      </tr>
    </tbody>
  </table>
</section>

<secton id="cart-add" className="section-p1">
  <div id="coupon">
    <h3>Apply Coupon</h3>
    <div>
      <input type="text" placeholder="Enter Your Coupon" />
      <button
        className="normal"
        onClick={goToOrder}
      >
        Apply
      </button>
    </div>
  </div>
  <div id="subtotal">
    <h3>Cart Totals</h3>
    <table>
      <tbody>
        <tr>
          <td>Cart Subtotal</td>
          <td>₹2250</td>
        </tr>
        <tr>
          <td>Shipping</td>
          <td>Free</td>
        </tr>
        <tr>
          <td>
            <strong>Total</strong>
          </td>
          <td>
            <strong>₹2250</strong>
          </td>
        </tr>
      </tbody>
    </table>
    <button className="normal" onClick={goToOrder}>Proceed to checkout</button>
  </div>
</secton>

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

export default Cart
