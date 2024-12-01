import React from "react";

function Button({ handleClick, name, value, className }) {
  return (
    <button
      className={`btn ${className || ""}`}
      name={name}
      onClick={(e) => handleClick(e)}
    >
      {value}
    </button>
  );
}

export default Button;
