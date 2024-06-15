/* eslint-disable react/prop-types */
const Input = ({
  type,
  name,
  placeholder,
  onChange,
  required = false,
  className,
}) => {
  return (
    <input
      className={className}
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
    />
  );
};

export default Input;
