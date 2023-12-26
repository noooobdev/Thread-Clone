"use client";
import Navbar from "@/components/Navbar";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ActivityCard from "@/components/ActivityCard";

const page = () => {
  return (
    <div>
      <div className="flex flex-col h-full justify-center items-center relative  px-[480px]">
        <ActivityCard />
      </div>
    </div>
  );
};

export default page;
