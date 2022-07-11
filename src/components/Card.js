import React from "react";

const Card = ({ children, backgroundColor }) => {
  return (
    <div style={{ backgroundColor, borderRadius: "12px", padding: "10px" }}>
      {children}
    </div>
  );
};

export default Card;
