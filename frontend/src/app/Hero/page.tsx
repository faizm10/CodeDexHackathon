import React from "react";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-purple-800 min-h-screen">
      <h1
        className="text-yellow-500 font-sans font-bold text-6xl mb-20 mt-20 p-5"
        style={{ textShadow: "2px 2px 4px yellow" }}
      >
        <em>Welcome to the 2024 Paris Olympics Predictor!</em>
      </h1>
      <a href="/predictor">

        <button
          id="heroButton"
          className="bg-purple-600 text-yellow-500 px-20 py-5 rounded-xl font-sans text-xl font-semibold hover:bg-yellow-500 hover:text-purple-800 transition-colors hover:shadow-lg"
        >
          Enter Predictor Now!
        </button>

      </a>
      <img src="/images/hero/olympicbg.png" alt="Olympic Background" />
    </div>
  );
};

export default Hero;
