import React from "react";
import Card from "./Card";

const Info = () => {
  return (
    <>
      <div style={{ backgroundColor: "white" }}>
        <div style={{ padding: "10px 0" }}>
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
          <div
            style={{
              fontSize: "20px",
              color: "black",
              display: "flex",
              justifyContent: "space-around",
              margin: "10px 5px",
            }}
          >
            <Card
              title="Know Before You Grow"
              detail="Stay ahead with data-driven insights before you invest."
              style={{ border: "1px solid black" }}
            />
            <Card
              title="Tailored Investment Plans"
              detail="Get the best strategy customized for you."
              style={{ border: "1px solid black" }}
            />
            <Card
              title="Maximize Your Profit"
              detail="Smarter choices, bigger returns!"
              style={{ border: "1px solid black" }}
            />
          </div>
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
          <div
            style={{
              fontSize: "20px",
              color: "black",
              display: "flex",
              justifyContent: "space-around",
              margin: "10px 5px",
            }}
          >
            <Card
              title="Beginner-Friendly Investing"
              detail="No experience? No problem! We do the math, so you can invest with confidence."
              style={{ border: "1px solid white", color: "white" }}
            />
            <Card
              title="Real Time Precision"
              detail="We deliver the best accuracy using live data, ensuring up-to-the-minute results."
              style={{ border: "1px solid white", color: "white" }}
            />
            <Card
              title="Effortless Experience"
              detail="Designed for ultimate ease, so you get what you need—fast and hassle-free!"
              style={{ border: "1px solid white", color: "white" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
