import React, { Children } from "react";
import Welcome from "./Pages/Welcome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Discover from "./Pages/Discover";
import Dashboard from "./Pages/Dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<h1>❌ 404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
