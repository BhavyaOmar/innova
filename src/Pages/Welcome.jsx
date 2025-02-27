import React from "react";
import NavbarWelcome from "../Components/NavbarWelcome";
import Button from "../Components/Button";
import Info from "../Components/Info";

const Welcome = () => {
  return (
    <>
      <NavbarWelcome />
      <div>
        <div className="hero">
          <h1 style={{ fontSize: "5vw" }}>Compare, Invest, Grow !</h1>
          <p style={{ fontSize: "3vw", color: "grey" }}>
            An innovation in finance. &nbsp;&nbsp;
          </p>
          <Button text="Get Started" style={{ padding: "5px 20px" }} />
        </div>
        <Info />
      </div>
    </>
  );
};

export default Welcome;
