"use client";
import React, { useEffect, useState } from "react";
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
// import axios from "axios";


function Predictor() {

  const [message, setMessage] = useState("Loading...")

  useEffect(() => {
    fetch('http://127.0.0.1:8080/api/data')
      .then((response) =>
        response.json()
      )
      .then(data => {
        setMessage(data.message)
        console.log(data)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="bg-gradient-to-r from-purple-400 to-blue-500 min-h-screen py-16 flex flex-col items-center justify-center">
      {/* {message} */}
      <h1 className=" font-sans font-bold text-6xl mb-20 mt-20"><em>We predict that...</em></h1>
      <img src="/images/predictor/arrow1.png" alt="Arrow" className="mt-10"/>
      <Card className="bg-black text-white rounded-xl shadow-xl">
        <CardHeader>
          <p className="font-semibold font-sans text-4xl">⚽<em>For Football...</em>⚽</p>
        </CardHeader>
        <CardBody>
          <p className="bg-yellow-600 text-center rounded mb-4 text-2xl px-10">Hello</p>
          <p className="bg-slate-300 text-center rounded mb-4 text-2xl px-10">Hello</p>
          <p className="bg-yellow-900 text-center rounded mb-4 text-2xl px-20">Hello</p>
        </CardBody>
      </Card>
    </div>
  );
};

export default Predictor;
