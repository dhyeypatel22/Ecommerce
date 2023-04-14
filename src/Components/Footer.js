import React from 'react';
import "../Style.css";


function Footer() {

  return (
    <>
    <footer className="section-p1">
  <div id="col">
    <img className="logo" src={require("../img2/footer-logo.png")} alt="not found" />
    <h4>Contact</h4>
    <p>
      <strong>Address:</strong> 511 Etobikok Road, Street 22, Torronto
    </p>
    <p>
      <strong>Phone:</strong> +01 1220 148 / (+91) 01 9016 511
    </p>
    <p>
      <strong>Hours:</strong> 10:00 - 18:00, Mon - Sat
    </p>
    <div className="follow">
      <h4>Follow Us</h4>
      <div className="icon">
        <a href="https://www.facebook.com/profile.php?id=100083042515908&mibextid=ZbWKwL">
          <i className="fab fa-facebook-f" />
        </a>
        <a href="https://twitter.com/DhyeyPa87245544?t=31k1LWJP4XHNi-tk7GAvtA&s=09">
          <i className="fab fa-twitter" />
        </a>
        <a href="https://instagram.com/dhyeypatel_22?igshid=ZDdkNTZiNTM=">
          <i className="fab fa-instagram" />
        </a>
        <a href="https://pin.it/6395S5X">
          <i className="fab fa-pinterest-p" />
        </a>
        <a href="https://www.youtube.com/channel/UC12azDikcCqXkNDLwBXJ1-Q">
          <i className="fab fa-youtube" />
        </a>
      </div>
    </div>
  </div>
  <div className="col">
    <h4>About</h4>
    <a href="/about">About us</a>
    <a href="/about">Delivery Information</a>
    <a href="/about">Privacy Policy</a>
    <a href="/about">Terms &amp; Conditions</a>
    <a href="/contact">Contact Us</a>
  </div>
  <div className="col">
    <h4>My Account</h4>
    <a href="/signup">Sign In</a>
    <a href="/cart">View Cart</a>
    <a href="/blog">My Wishlist</a>
    <a href="/cart">Track My Order</a>
    <a href="/contact">Help</a>
  </div>
  <div className="col install">
    <h4>Install App</h4>
    <p>From App Store or Google Play</p>
    <div className="row">
      <img src={require("../img2/app.jpg")} alt="not found" />
      <img src={require("../img2/play.jpg")} alt="not found" />
    </div>
    <p>Secured Payment Gateways</p>
    <img src={require("../img2/pay.png")} alt="not found" />
  </div>
  <div className="copyright">
    <p className="peace">✌🏻</p>
    <p>Copyright © 2023, Dhyey Patel - BASIL Ecommerce Website</p>
  </div>

</footer>

    </>
  )
}

export default Footer 