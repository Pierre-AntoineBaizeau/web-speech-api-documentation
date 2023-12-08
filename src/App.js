import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import UserGuidePage from "./pages/UserGuidePage";
import DeveloperGuidePage from "./pages/DeveloperGuidePage";
import { HomePage } from "./pages/HomePage";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="*" element={<HomePage />} />
          <Route path="/user-guide" element={<UserGuidePage />} />
          <Route path="/developer-guide" element={<DeveloperGuidePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
