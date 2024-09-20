// components/Home.jsx
import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import WorkFlow from "./WorkFlow";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto pt-20 px-6">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <WorkFlow />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
