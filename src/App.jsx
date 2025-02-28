import React from "react";
import Welcome from "./Pages/Welcome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Footer from "./Components/Footer";
<<<<<<< HEAD
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
=======
import Error404 from "./Pages/Error404";
import CompanyInfo from "./Pages/CompanyInfo";
import { FinanceProvider } from "./Contexts/FInanceProvider"; // Corrected import
import NavbarWelcome from "./Components/NavbarWelcome";

const App = () => {
  return (
    <FinanceProvider>
      {" "}
      {/* Corrected component name */}
      <Router>
        <NavbarWelcome />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/amc/:amc" element={<CompanyInfo />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </Router>
    </FinanceProvider>
>>>>>>> upstream/main
  );
};

export default App;
