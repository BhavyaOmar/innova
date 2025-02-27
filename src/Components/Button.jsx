import React from "react";

const Button = ({ text }) => {
  return (
    <>
      <button className="Button border py-1 px-2 rounded-md">{text}</button>
    </>
  );
};

export default Button;
