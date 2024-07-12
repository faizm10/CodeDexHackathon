import React from "react";
import Intro from "../Introduction/page";
import AboutUs from "../AboutUs/page";
import Footer from "../Footer/page";
import Hero from "../Hero/page";
const LandingPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Introduction Section */}
      {/* <Intro /> */}

      {/* Predictions Section */}

      {/* About Us Section */}
      <AboutUs />

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default LandingPage;
