"use client";
import Navbar from "@/components/Navbar";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const page = () => {
  return (
    <div className="flex flex-col h-full justify-center  items-center relative  px-[480px]">
      <div className="flex justify-between w-full">
        <div className="dark:text-white">
          <h1 className="text-3xl">Niraj</h1>
          <div className="flex gap-2">
            <h1>_n1r4j_</h1>
            <h1 className="text-xs bg-gray-200 p-1 rounded-full text-slate-800">
              threads.net
            </h1>
          </div>
        </div>
        <Avatar className="h-20 w-20">
          <AvatarImage src="https://www.celebnest.com/uploads/celebs/1/michael_jackson.jpg" />
          <AvatarFallback>MJ</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default page;
