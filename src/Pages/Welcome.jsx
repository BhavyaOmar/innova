import React from "react";
import NavbarWelcome from "../Components/NavbarWelcome";
import Button from "../Components/Button";
import Info from "../Components/Info";
import Footer from "../Components/Footer";
import BarChart from "../Components/PieChart";

const Welcome = () => {
  return (
    <>
      <NavbarWelcome />
      <div>
        <div className="hero">
          <h1>Compare, Invest, Grow !</h1>
          <p>An innovation in finance.</p>
          <Button text="Get Started" />
        </div>
        <Info />
        <Footer />
        <BarChart />
      </div>
    </>
  );
};

export default Welcome;
