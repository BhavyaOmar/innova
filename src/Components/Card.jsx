import React from "react";
// import names from "../jsonData/scheme_names.json";

const Card = ({ title, detail, style }) => {
  return (
    <div style={{ style, height: "100px", width: "50px" }}>
      <h1>{title}</h1>
      <p>{detail}</p>
    </div>
  );
};

export default Card;
