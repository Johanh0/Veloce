const Button = ({ children, btnType }) => {
  return <button className={btnType}>{children}</button>;
};

export default Button;
