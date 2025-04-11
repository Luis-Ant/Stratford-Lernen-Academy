import React from "react";
import LoginForm from "../components/forms/LoginForm";
import LeftSection from "../components/LeftSection";
import RightSection from "../components/RightSection";
import "../pages/Login.css";

const Login = () => {
  return (
    <div className="container">
      <LeftSection />
      <RightSection>
        <LoginForm />
      </RightSection>
    </div>
  );
};

export default Login;
