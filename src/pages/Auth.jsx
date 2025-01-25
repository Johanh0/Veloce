import { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";
import "../css/auth.css";
import leftArrow from "../assets/icons/left-arrow.svg";
import headLightVideo from "../assets/videos/head-light.mp4";

const Auth = () => {
  const [isLogin, setIsLogin] = useState("login");

  function handleLayout(layoutType) {
    setIsLogin(layoutType);
  }

  return (
    <main className="auth__container">
      <div className="auth__container--header">
        <Link to="/">
          <img
            className="arrow-left"
            src={leftArrow}
            alt="arrow pointing to the left. This arrow will exit the auth page and will send you back to the home page"
          />
        </Link>
      </div>
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
          <Login onClick={() => handleLayout("signup")} />
        ) : (
          <Signup onClick={() => handleLayout("login")} />
        )}
      </div>
      <div className="auth__container--cover">
        <div>
          {/* <img src={blueCar} alt="" /> */}
          <video src={headLightVideo} autoPlay muted></video>
        </div>
      </div>
    </main>
  );
};

export default Auth;
