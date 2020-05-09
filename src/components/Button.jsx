import React from 'react';

const Button = ({
  text = 'Submit',
  disabled = false,
  type,
  onClick,
  className,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      <span>{text}</span>
    </button>
  );
};

export default Button;
