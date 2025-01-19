const Button = ({ children, btnType, onSubmit }) => {
  return (
    <button className={btnType} onClick={onSubmit}>
      {children}
    </button>
  );
};

export default Button;
