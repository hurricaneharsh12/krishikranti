import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import WorkFlow from "./components/WorkFlow";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Chat from "./components/Chat";

let App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="max-w-7xl mx-auto pt-20 px-6">
              <Navbar />
              <HeroSection />
              <FeatureSection />
              <WorkFlow />
              <Pricing />
              <Testimonials />
              <Footer />
            </div>
          }
        />
        <Route path="/chat" element={<Chat />} />
        <Route path="/test" element={<Testimonials />} />
      </Routes>
    </Router>
  );
};

export default App;
