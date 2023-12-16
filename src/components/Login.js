import React from 'react';
import './Login.css'; // Import your CSS for styling

function LoginPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="login-container">
      <div className="login-box">
        {/* Add the image above the login text */}
        <img src="login.png" alt="Login" className="login-image" />

        <h2 className="login-header">Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <input type="email" id="email" name="email" placeholder="Email" />
          </div>
          <div className="input-group">
            <input type="password" id="password" name="password" placeholder="Password" />
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
        <div className="forgot-password">
          <a href="/forgot-password">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
