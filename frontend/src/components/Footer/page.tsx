import React from 'react'
import { FaGithub, FaHeart } from "react-icons/fa";

const page = () => {
  return (
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
  )
}

export default page