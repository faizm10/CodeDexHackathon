import React from "react";
import { FaGithub, FaHeart } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    // <footer className="bg-gradient-to-r from-purple-500 to-blue-500 py-8 mt-10">
    <footer className="py-8 mt-10">
      <div className="container mx-auto text-center text-black font-sans p-5 rounded-lg bg-gradient-to-b from-gray-200 to-gray-300">
        <p className="mb-4 text-2xl flex justify-center items-center font-mono">
          Made with <FaHeart className="mx-2 text-red-500" /> by The Mighty Gryphons!!
        </p>
        <ul className="list-none mb-4 font-mono">
          <li className="text-xl font-bold">Faiz Mustansar</li>
          <li className="text-xl font-bold">Fawaz Rizwan</li>
          <li className="text-xl font-bold">Talha Naveed</li>
        </ul>
        <p className="mt-4 text-xl font-mono">
          Check out the project on{" "}
          <a
            href="https://github.com/faizm10/CodeDexHackathon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800 underline flex justify-center items-center"
          >
            <FaGithub className="mr-2" /> GitHub
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
