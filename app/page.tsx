"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Home from "../components/pages/Home";

const page = () => {
  return (
    <div className="w-full h-full ">
      <Navbar />
      <Home />
    </div>
  );
};

export default page;
