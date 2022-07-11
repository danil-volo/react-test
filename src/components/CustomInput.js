import React, { useState } from "react";

const CustomInput = ({ label, value, onChange, validator, ...props }) => {
  const [error, setError] = useState("");

  const handleBlur = (e) => {
    if (validator) {
      setError(validator(e.target.value));
    }
  };
  
  return (
    <div>
      <label>{label}</label>
      <input
        style={{ border: error && "1px solid red" }}
        onBlur={handleBlur}
        value={value}
        onChange={onChange}
        {...props}
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default CustomInput;
