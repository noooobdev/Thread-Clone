"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import { LuSearch } from "react-icons/lu";
import NewFollowerCard from "@/components/NewFollowerCard";
const page = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col h-full justify-center items-center relative  px-[480px]">
        <div className="flex items-center relative w-full">
          <LuSearch className="absolute text-lg text-gray-400 ml-4" />
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-200 w-full p-4 pl-12 rounded-xl bg-gray-50  focus:outline-none dark:bg-[#171717] dark:border-[#3d3d3d]"
          />
        </div>
        <NewFollowerCard />
        <NewFollowerCard />
        <NewFollowerCard />
        <NewFollowerCard />
        <NewFollowerCard />
      </div>
    </div>
  );
};

export default page;
