const TextArea = ({ariaLevel, type, value, onChange, placeholder, className}) => {
  return (
    <textarea
      aria-level={ariaLevel}
      type={type}
      value={value}
      onChange={onChange}      
      placeholder={placeholder}
      className={className}
    />
  );
};

export default TextArea;
