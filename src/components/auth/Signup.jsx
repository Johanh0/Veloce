import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import Input from "../Input";

const Signup = ({ ...props }) => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFirstName = (value) => {
    setFirstName(value);
  };
  const handleLastName = (value) => {
    setLastName(value);
  };
  const handleEmail = (value) => {
    setEmail(value);
  };
  const handlePassword = (value) => {
    setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, lastName, email, password }),
        mode: "cors",
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error trying to create account");
      }

      const data = await response.json();
      console.log(data);
      navigate("/");
    } catch {}
  };

  return (
    <form className="signup">
      <div className="signup__container--names">
        <Input
          inputId="signup--firstName"
          labelContent="First Name"
          placeholder="Your Name"
          isRequired={true}
          getInputValue={(value) => handleFirstName(value)}
        />
        <Input
          inputId="signup--lastName"
          labelContent="Last Name"
          placeholder="Your Last Name"
          isRequired={true}
          getInputValue={(value) => handleLastName(value)}
        />
      </div>
      <Input
        inputId="signup--email"
        labelContent="Email"
        placeholder="example@gmail.com"
        getInputValue={(value) => handleEmail(value)}
      />

      <Input
        inputId="signup--password"
        labelContent="Password"
        inputType="password"
        placeholder="Enter password"
        isRequired={true}
        isAutocomplete="password"
        getInputValue={(value) => handlePassword(value)}
      />

      <Button btnType="primary--btn" onSubmit={handleSubmit}>
        Create new account
      </Button>

      <div className="divisor"></div>

      <div>
        <p className="form--message">
          Already have an account? <span {...props}>Login now</span>
        </p>
      </div>
    </form>
  );
};

export default Signup;
