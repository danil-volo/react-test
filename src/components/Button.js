import React from "react";

const Button = ({ backgroundColor, color, padding, children, ...props }) => {
  return (
    <button style={{ backgroundColor, color, padding }} {...props}>
      {children}
    </button>
  );
};

export default Button;
