import React, { useState } from "react";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="login-form">
      <div className="input-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password:</label>
        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            placeholder="Enter your password"
            required
          />
          <span
            className="toggle-password-text"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </span>
        </div>
      </div>
      <div className="input-group">
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default LoginForm;