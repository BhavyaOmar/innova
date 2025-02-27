import React from "react";
import NavbarWelcome from "../Components/NavbarWelcome";
import Button from "../Components/Button";
import Info from "../Components/Info";
import Footer from "../Components/Footer";

const Welcome = () => {
  return (
    <>
      <NavbarWelcome />
      <div className="flex flex-column">
        <div className="banner flex">
          <h1>Compare, Invest, Grow !</h1>
          <Button text="Get Started" />
        </div>
        <Info />
        <Footer />
      </div>
    </>
  );
};

export default Welcome;
