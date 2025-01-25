import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../App";
import { setLocalStorage } from "../../utils/localStorage";
import Button from "../Button";
import Input from "../Input";
const Login = ({ ...props }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isSignedIn, setIsSignedIn, user, setUser } = useContext(Context);

  const handleEmail = (value) => {
    setEmail(value);
  };

  const handlePassword = (value) => {
    setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        mode: "cors",
        credentials: "include",
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error trying to login");
      }

      const data = await response.json();
      console.log(data);
      setIsSignedIn(true);
      setLocalStorage("isSignedIn", true);

      setUser(data);
      setLocalStorage("user", data);
      navigate("/");
    } catch {}
  };

  return (
    <form>
      <Input
        inputId="login--email"
        labelContent="Login"
        placeholder="example@gmail.com"
        isRequired={true}
        isAutocomplete="email"
        getInputValue={(value) => handleEmail(value)}
      />

      <Input
        inputId="login--password"
        labelContent="Password"
        inputType="password"
        placeholder="Enter password"
        isRequired={true}
        isAutocomplete="password"
        getInputValue={(value) => handlePassword(value)}
      />

      <Button btnType="primary--btn" onSubmit={handleSubmit}>
        Sign in
      </Button>

      <div className="divisor"></div>

      <div>
        <p className="form--message">
          Don't have an account? <span {...props}>Sign up now</span>
        </p>
      </div>
    </form>
  );
};

export default Login;
