import React from "react";
import "./Login.css";
import logo from "../assets/logo.svg";

function App() {
  return (
    <div className="container">
      <div className="izquierda">
        <h2>Welcome to</h2>
        <span className="leyenda">Stratford Lernen</span>
        <span className="leyenda">Academy</span>
      </div>
      <div className="derecha">
        <div className="formulario">
          <div className="imagen-formulario">
            <img src={logo} alt="Logo" />
          </div>
          <div className="sign">
            <h2>Sign in now</h2>
          </div>
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
              <div className="label-container">
                <label htmlFor="password">Password:</label>
                <label className="show-password-label">
                  <input type="checkbox" id="show-password" /> Show Password
                </label>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="input-group">
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
