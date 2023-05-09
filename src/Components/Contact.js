import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../Style.css";
import { useNavigate } from "react-router-dom";

function Contact() {
  const Signup = useNavigate();
  const goToSignUp = () => {
    Signup("/signup");
  };
  return (
    <>
    <Navbar />
      <section id="page-header" className="contact-header">
        <h2>#Let's_talk</h2>
        <p>LEAVE A MESSAGE, We love to hear from you!</p>
      </section>

      <section id="contact-details" className="section-p1">
        <div className="details">
          <span>GET IN TOUCH</span>
          <h2>Visist one of our agency location or contact us today</h2>
          <h3>Head Office</h3>
          <div>
            <li>
              {/* <i class="fal fa-map"></i>  */}
              <p>📌</p>
              <p>511 Etobikok Road, Street 22, Torronto</p>
            </li>
            <li>
              {/* <i class="far fa-envelope"></i> */}
              <p>📧</p>
              <p>basil@ecommerce.com</p>
            </li>
            <li>
              {/* <i class="fas fa-phone-alt"></i> */}
              <p>📞</p>
              <p> +01 1220 148 / (+91) 01 9016 511 </p>
            </li>
            <li>
              {/* <i class="far fa-clock"></i> */}
              <p>🕒</p>
              <p>Monday to Saturday: 10am - 6pm</p>
            </li>
          </div>
        </div>

        <div className="map">
          <iframe
            title="This is a unique title"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.188545534782!2d72.53277091415195!3d23.090192819593497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e833aff168119%3A0x93171eb07d08285!2sSilver%20Oak%20College%20Of%20Engineering%20And%20Technology%20Class%20Room%2C%20Gota%2C%20Ahmedabad%2C%20Gujarat%20380081!5e0!3m2!1sen!2sin!4v1679244627247!5m2!1sen!2sin"
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <section id="form-details">
        <form
          action="https://formsubmit.co/pateldhyeyh@gmail.com"
          method="POST"
        >
          <span>LEAVE A MESSAGE</span>
          <h2>We love to hear from you</h2>
          <input type="text" name="name" placeholder="Your Name" required="" />
          <input type="email" name="email" placeholder="E-mail" required="" />
          <input type="text" name="Subject" placeholder="Subject" required="" />
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Your Message"
            required=""
            defaultValue={""}
          />
          <button className="normal">Submit</button>
        </form>

        <div className="people">
          <div>
            <img src={require("../img2/sm1.png")} alt="not found" />
            <p>
              <span>Dhyey Patel</span> Senior Marketing Manager <br /> Phone: +
              000 123 000 511 <br /> Email: pateldhyey@gmail.com{" "}
            </p>
          </div>
          <div>
            <img src={require("../img2/d$1.png")} alt="not found" />
            <p>
              <span>Supreme Patel</span> Senior Operations Manager <br /> Phone:
              + 000 456 000 814 <br /> Email: supremeorg@gmail.com{" "}
            </p>
          </div>
          <div>
            <img src={require("../img2/oie_png (1).png")} alt="not found" />
            <p>
              <span>Danny Patel</span> Senior Purchasing Manager <br /> Phone: +
              000 789 000 120 <br /> Email: dannyhere@gmail.com{" "}
            </p>
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
      <Footer />
    </>
  );
}

export default Contact;
