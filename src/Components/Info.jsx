import React from "react";

const Info = () => {
  return (
    <>
      <div style={{ backgroundColor: "white" }}>
        <div style={{ margin: "10px" }}>
          <h1
            style={{
              fontSize: "4rem",
              textAlign: "center",
              borderTop: "1px solid white",
              color: "black",
            }}
          >
            What we Offer !
          </h1>
          <p style={{ fontSize: "20px", color: "black" }}>
            Some sample text here
          </p>
        </div>
      </div>
      <div style={{}}>
        <div style={{ margin: "10px" }}>
          <h1
            style={{
              fontSize: "4rem",
              textAlign: "center",
              borderTop: "1px solid white",
            }}
          >
            Why Us?
          </h1>
          <p style={{ fontSize: "20px" }}>Some sample text here</p>
        </div>
      </div>
    </>
  );
};

export default Info;
