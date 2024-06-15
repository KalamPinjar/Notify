/* eslint-disable react/prop-types */
const Button = ({
  onMouseEnter,
  onMouseLeave,
  onClick,
  type,
  text,
  className,
}) => {
  return (
    <button
      className={className}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {text}
      {type}
    </button>
  );
};

export default Button;
