import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages;
import Home from "./pages/Home";
import Repos from "./pages/Repos";
import Followers from "./pages/Followers";
import Following from "./pages/Following";

const AppRoutes = () => {

  // () => window.location.reload();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/repos" element={<Repos />} />
        <Route path="/followers" element={<Followers />} />
        <Route path="/following" element={<Following />} />
      </Routes> 
    </Router>
  );
};

export default AppRoutes;
