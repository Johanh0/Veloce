import "../css/components/input.css";

const Input = ({
  inputId,
  labelContent,
  inputType = "text",
  placeholder,
  isRequired = false,
  isAutocomplete = "off",
  getInputValue,
}) => {
  return (
    <div className="input__container">
      <label htmlFor={inputId}>{labelContent}</label>
      <input
        id={inputId}
        type={inputType}
        placeholder={placeholder}
        required={isRequired}
        autoComplete={isAutocomplete}
        onChange={(e) => getInputValue(e.target.value)}
      />
    </div>
  );
};

export default Input;
