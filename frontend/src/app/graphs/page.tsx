import React from "react";
import Image from "next/image";

const Graphs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 to-blue-500 flex flex-col items-center justify-center py-10">
      <h1 className="text-4xl font-bold text-white mb-10">
        OlympiPredict Visuals
      </h1>
      <div className="flex flex-col items-center w-full max-w-6xl">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden m-4 w-full">
          <Image
            src="/all_medals.png"
            alt="Graph 1"
            layout="responsive"
            width={700}
            height={400}
            className="object-cover"
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
          <Image
            src="/allCanadaMedals.png"
            alt="Graph 2"
            layout="responsive"
            width={700}
            height={400}
            className="object-cover"
          />
          <div className="p-4 text-center">
            <h2 className="text-2xl font-bold mb-2">2024 Predicted Medals</h2>
            <p className="text-gray-700">
              This graph displays the distribution of Canadian Olympic medals
              (Gold, Silver, and Bronze) from 1900 to 2020, highlighting the
              performance trends over time.
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Graphs;
