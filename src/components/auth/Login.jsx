import { useState } from "react";
import Button from "../Button";
import Input from "../Input";
const Login = ({ onSelect }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (value) => {
    setEmail(value);
  };

  const handlePassword = (value) => {
    setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error trying to login");
      }

      const data = await response.json();
      console.log(data);
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
          Don't have an account? <span onClick={onSelect}>Sign up now</span>
        </p>
      </div>
    </form>
  );
};

export default Login;
