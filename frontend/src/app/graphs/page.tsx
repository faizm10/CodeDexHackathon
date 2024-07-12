import React from "react";
import { FaGithub, FaHeart } from "react-icons/fa";

const Graphs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 to-blue-500 flex flex-col items-center justify-center py-10">
      <h1 className="text-4xl font-bold text-white mb-10">
        OlympiPredict Visuals
      </h1>
      <div className="flex flex-col items-center w-full max-w-6xl">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden m-4 w-full">
          <img
            src="/all_medals.png"
            alt="Graph 1"
            className="w-full h-full object-cover"
          />
          <div className="p-4 text-center">
            <h2 className="text-2xl font-bold mb-2">
              2021 Tokyo Olympics Medals
            </h2>
            <p className="text-gray-700">
              This graph shows the distribution of medals in the 2021 Tokyo
              Olympics.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden m-4 w-full">
          <img
            src="/all_medals.png"
            alt="Graph 2"
            className="w-full h-full object-cover"
          />
          <div className="p-4 text-center">
            <h2 className="text-2xl font-bold mb-2">2024 Predicted Medals</h2>
            <p className="text-gray-700">
              This graph shows the predicted distribution of medals for the 2024
              Paris Olympics.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10 text-white text-center">
        <p className="mb-2">
          Made with <FaHeart className="inline text-red-500" /> by The Mighty
          Gryphons
        </p>
        <p>
          <a
            href="https://github.com/faizm10/CodeDexHackathon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 underline"
          >
            <FaGithub className="inline mr-1" /> GitHub Repository
          </a>
        </p>
      </div>
    </div>
  );
};

export default Graphs;
