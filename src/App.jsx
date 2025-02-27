import React, { Children } from "react";
import Welcome from "./Pages/Welcome";
import NavbarWelcome from "./Components/NavbarWelcome";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import PieChart from "./Components/PieChart";

const App = () => {
  return (
    // <div>
    //   <Navbar />

    //   <div className="my-32">
    //     <h1 className="mx-8 text-3xl">Home Page</h1>
    //   </div>

    //   <Footer />
    // </div>

    <Welcome />
  );
};

export default App;
