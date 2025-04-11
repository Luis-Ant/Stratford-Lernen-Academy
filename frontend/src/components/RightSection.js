import React from "react";
import LoginForm from "./forms/LoginForm";
import logo from "../assets/logo.svg";

const RightSection = () => {
  return (
    <div className="derecha">
      <div className="formulario">
        <div className="imagen-formulario">
          <img src={logo} alt="Logo" />
        </div>
        <div className="sign"></div>
        <LoginForm />
      </div>
    </div>
  );
};

export default RightSection;
