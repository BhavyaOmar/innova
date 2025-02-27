import React from "react";
import Card from "./Card"

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
          <ul style={{ fontSize: "20px", color: "black" }}>
            <div>
              <Card text="Know Before You Grow" />
              <li>Tailored Investment Plans</li>
              <li>Maximize Your Profit</li>
            </div>
          </ul>
        </div>
      </div>
      <div style={{}}>
        <div style={{ margin: "10px" }}>
          <h1
            style={{
              fontSize: "4rem",
              textAlign: "center",
            }}
          >
            Why Us?
          </h1>
          <ul style={{ fontSize: "20px" }}>
            <li>Beginner-Friendly Investing</li>
            <li>Real Time Precision</li>
            <li>Effortless Experience</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Info;
