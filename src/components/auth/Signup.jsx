import Button from "../Button";
import Input from "../Input";

const Signup = ({ onSelect }) => {
  return (
    <form className="signup">
      <div className="signup__container--names">
        <Input
          inputId="signup--firstName"
          labelContent="First Name"
          placeholder="Your Name"
          isRequired={true}
        />
        <Input
          inputId="signup--lastName"
          labelContent="Last Name"
          placeholder="Your Last Name"
          isRequired={true}
        />
      </div>
      <Input
        inputId="signup--email"
        labelContent="Email"
        placeholder="example@gmail.com"
      />

      <Input
        inputId="signup--password"
        labelContent="Password"
        placeholder="Enter password"
      />

      <Button btnType="primary--btn">Create new account</Button>

      <div className="divisor"></div>

      <div>
        <p className="form--message">
          Already have an account? <span onClick={onSelect}>Login now</span>
        </p>
      </div>
    </form>
  );
};

export default Signup;
