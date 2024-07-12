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
import axios from "axios";


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
    <div className="bg-gradient-to-r from-purple-400 to-blue-500 min-h-screen py-16 flex items-center justify-center">
      {message}
    </div>
  );
};

export default Predictor;
