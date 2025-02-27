import React, { Children } from "react";
import Welcome from "./Pages/Welcome";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />

      <div className="my-32">
        <h1 className="mx-8 text-3xl">Home Page</h1>
      </div>

      <Footer/>
    </div>
  );
};

export default App;
