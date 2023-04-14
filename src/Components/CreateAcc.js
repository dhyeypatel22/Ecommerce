import React, { useState } from "react";
import "../Style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateAcc() {
  const home = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateData = () => {
    let errors = {};

    if (!formData.username.trim()) {
      errors.username = "Username is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
    }

    if (!formData.password.trim()) {
      errors.password = "Password is required";
    } else if (formData.password.trim().length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const makeuser = async (userData) => {
    const isValid = validateData();

    if (isValid) {
      const response = await axios.post(
        "http://localhost:5001/adduser",
        formData
      );
      localStorage.setItem("userdetails", JSON.stringify(response.data));
      home("/");
    }
  };

  return (
    <>
      <div className="box-form">
        <div className="left">
          <div className="overlay">
            <h1>Basil.</h1>
            <p>Basil is well-known brand providing quality products at lowest price.</p>
            <span>
              <p>Have an account?</p>
              <a href="/signup">Login</a>
            </span>
          </div>
        </div>
        <div className="right">
          <h1>Create Account</h1>

          <div className="inputs">
            <input
              type="text"
              name="username"
              placeholder="username"
              value={formData.username}
              onChange={handleInputChange}
            />
            <br />
            {errors.username && <div className="error">{errors.username}</div>}
            <input
              type="email"
              name="email"
              placeholder="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <br />
            {errors.email && <div className="error">{errors.email}</div>}
            <input
              type="password"
              name="password"
              placeholder="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <br />
            {errors.password && <div className="error">{errors.password}</div>}
          </div>
          <br />
          <br />
          <br />
          <button onClick={makeuser} className="normal">
            Create Account
          </button>
        </div>
      </div>
    </>
  );
}

export default CreateAcc;
