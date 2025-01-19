import { useState } from "react";
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";
import "../css/auth.css";
import blueCar from "../assets/images/blue-car.svg";

const Auth = () => {
  const [isLogin, setIsLogin] = useState("login");

  function handleLayout(layoutType) {
    setIsLogin(layoutType);
  }

  return (
    <section className="auth__container">
      <div className="auth__container--form">
        <div className="auth__container--form--header">
          <h4>Veloce</h4>
          <p>
            {isLogin == "login"
              ? "Nice to see you again"
              : "Welcome to the family"}
          </p>
        </div>
        {isLogin == "login" ? (
          <Login onSelect={() => handleLayout("signup")} />
        ) : (
          <Signup onSelect={() => handleLayout("login")} />
        )}
      </div>
      <div className="auth__container--cover">
        <div>
          <img src={blueCar} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Auth;
