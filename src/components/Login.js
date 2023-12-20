import React, { useState } from "react";
import "./Login.css"; // Import your CSS for styling
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    await axios.post("http://localhost:5000/login", formData)
      .then((res) => {
        if (res.status === 200) {
          navigate("/coming-soon");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        {/* Add the image above the login text */}
        <img src="login.png" alt="Login" className="login-image" />

        <h2 className="login-header">Login</h2>
        {/* <form className="login-form"> */}
          <div className="input-group">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              placeholder="Email"
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
              }}
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={(e) => {
                setFormData({ ...formData, password: e.target.value });
              }}
              placeholder="Password"
            />
          </div>
          <button onClick={handleSubmit} type="submit" className="login-btn">
            Login
          </button>
        {/* </form> */}
        <div className="forgot-password">
          <a href="/forgot-password">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
