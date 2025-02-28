import React from "react";
import Welcome from "./Pages/Welcome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Footer from "./Components/Footer";
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
  );
};

export default App;
