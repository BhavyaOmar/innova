import React from "react";
// import names from "../jsonData/scheme_names.json";

const Card = ({ style = {}, title, detail }) => {
  return (
    <div
      style={{
        height: "230px",
        width: "250px",
        ...style,
        borderRadius: "20px",
        padding: "20px",
        margin: "10px 0",
      }}
    >
      <h1 style={{ fontWeight: "bold", padding: "5px" }}>{title}</h1>
      <p>{detail}</p>
    </div>
  );
};

export default Card;
