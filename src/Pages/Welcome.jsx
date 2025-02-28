import React from "react";
import { Link } from "react-router-dom";
import Button from "../Components/Button";
import Info from "../Components/Info";

const Welcome = () => {
  return (
    <>
      <div>
        <div className="hero">
          <h1 style={{ fontSize: "5vw" }}>Compare, Invest, Grow !</h1>
          <p style={{ fontSize: "3vw", color: "grey" }}>
            An innovation in finance. &nbsp;&nbsp;
          </p>
          <Link to="/dashboard">
            <Button text="Go to Dashboard" style={{ padding: "5px 20px" }} />
          </Link>
        </div>
        <Info />
      </div>
    </>
  );
};

export default Welcome;
