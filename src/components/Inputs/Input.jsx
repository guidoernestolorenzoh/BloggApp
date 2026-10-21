const Input = ({type, value, onChange, placeholder, className, onKeyDown}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      required
      placeholder={placeholder}
      className={className}
      onKeyDown={onKeyDown}
    />
  );
};

export default Input;
