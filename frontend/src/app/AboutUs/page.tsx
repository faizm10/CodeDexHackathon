"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
  Divider,
  Link,
} from "@nextui-org/react";
import React from "react";

const teamMembers = [
  {
    name: "Fawaz Rizwan",
    role: "Software Developer",
    description:
      "Hello, I'm Fawaz, a second-year computer science student excited to be participating in my first virtual hackathon. With a passion for coding and innovation, I am eager to collaborate with talented individuals and tackle new challenges. I look forward to learning, growing, and making meaningful contributions to our projects.",
    image: "./images/aboutus/fawaz.webp",
    linkedin: "https://www.linkedin.com/in/fawazriz/",
    github: "https://github.com/fawazriz",
  },
  {
    name: "Faiz Mustansar",
    role: "Undergraduate Research Assistant",
    description:
      "Howdy, I'm Faiz M, heading into my second year at the University of Guelph, majoring in Computer Science with a minor in Sports & Event Management. I am currently working as an Undergraduate Research Assistant while also doing some side projects and taking four summer courses altogether! This will be my first hackathon, and I am excited to see how we will do in it!",
    image: "./images/aboutus/profilepic.webp",
    linkedin: "https://www.linkedin.com/in/faiz-mustansar-a9a435213/",
    github: "https://github.com/faizm10",
  },
  {
    name: "Talha Naveed",
    role: "Software Developer",
    description:
      "Hey! My name is Talha Naveed! I'm a second year student at the University of Guelph and this will be my first hackathon that I’ll be attending. Excited to see how this goes and good luck to all!",
    image: "/images/aboutus/talha.webp",
    linkedin: "https://www.linkedin.com/in/talha-naveed-b36290292/",
    github: "https://github.com/TalhaNaveed1",
  },
];

const TeamMemberCard: React.FC<(typeof teamMembers)[0]> = ({
  name,
  role,
  description,
  image,
  linkedin,
  github,
}) => (
  <div className="flex flex-col justify-between bg-white rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105 cursor-pointer">
    <div className="text-center">
      <img
        src={image}
        alt={name}
        className="mx-auto rounded-full mb-4 w-32 h-32 object-cover"
      />
      <h3 className="text-2xl font-bold mb-2 italic text-black">{name}</h3>
      <p className="text-gray-500">{role}</p>
      <p className="mt-4 text-gray-700">{description}</p>
    </div>
    <div className="p-3">
      <Divider />
      <div className="mt-4 text-center flex gap-2">
        <Link
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 mx-2 flex-1"
          anchorIcon
        >
          LinkedIn
        </Link>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 mx-2 flex-1"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
);

const AboutUs: React.FC = () => (
  <div
    className="bg-gradient-to-r from-purple-400 to-blue-500 min-h-screen py-16"
    id="aboutus"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-8 text-white">
        About Us
      </h2>
      <p className="text-lg text-center mb-16 text-white">
        You could probably tell but we met at the University of Guelph! We are a
        group of enthusiastic incoming second-year students from the University
        of Guelph, united by our shared passion for computer science. We are
        very excited to start on our first hackathon journey together. We look
        forward to collaborating, learning new things and having a great time
        here!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} {...member} />
        ))}
      </div>
    </div>
  </div>
);

export default AboutUs;
