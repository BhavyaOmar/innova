import React from "react";

const Button = ({ text, style = {} }) => {
  return (
    <>
      <button
        className="Button border py-1 px-2 rounded-md"
        style={{ ...style }}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
