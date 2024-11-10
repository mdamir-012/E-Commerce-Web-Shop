import React from "react";
import "./CSS/Loginsignup.css";

const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup_container">
        <h1>Sign Up</h1>
        <div className="loginsignup_fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="password" />
        </div>
        <button>Continue</button>
        <p className="loginsignup_login">
          Already have ab account? <span>Login</span>
          <div className="loginsignup_agree">
            <input type="checkbox" name="" id="" />
            <p>By continuing, i agree to use & privacy policy</p>
          </div>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
