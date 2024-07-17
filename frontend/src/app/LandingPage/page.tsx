import React from "react";
import AboutUs from "../AboutUs/page";
import Hero from "../Hero/page";
const LandingPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Hero />
      <AboutUs />
    </div>
  );
};

export default LandingPage;
