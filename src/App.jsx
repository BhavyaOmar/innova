import React, { Children } from "react";
import Welcome from "./Pages/Welcome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Discover from "./Pages/Discover";
import Dashboard from "./Pages/Dashboard";
import Footer from "./Components/Footer";
import NavbarWelcome from "./Components/NavbarWelcome";
import Login from "./Pages/Login";
import Signup from "./Pages/SignUp";

const App = () => {
  return (
    <Router>
      <NavbarWelcome/>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="*" element={<h1>❌ 404 - Page Not Found</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
