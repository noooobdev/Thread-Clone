"use client";
import Navbar from "@/components/Navbar";
import Insta from "@/app/_assets/Insta";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div className="flex flex-col h-full justify-center  items-center relative  px-[480px]">
      <div className="flex justify-between w-full">
        <div className="dark:text-white">
          <h1 className="text-3xl">Niraj</h1>
          <div className="flex gap-2">
            <h1>_n1r4j_</h1>
            <h1 className="text-[10px] font-light bg-zinc-100 px-2 py-1.5 rounded-full text-zinc-400 dark:bg-[#3d3d3d]">
              threads.net
            </h1>
          </div>
        </div>
        <Avatar className="h-20 w-20">
          <AvatarImage src="https://www.celebnest.com/uploads/celebs/1/michael_jackson.jpg" />
          <AvatarFallback>MJ</AvatarFallback>
        </Avatar>
      </div>
      <div className="mt-4 w-full">
        <h1 className="dark:text-white">This is my Bio</h1>

        <div className="flex items-center mt-6 w-full">
          <Avatar className="h-5 w-5 border-2 border-zinc-200 absolute">
            <AvatarImage src="https://www.celebnest.com/uploads/celebs/1/michael_jackson.jpg" />
            <AvatarFallback>MJ</AvatarFallback>
          </Avatar>
          <Avatar className="h-5 w-5 border-2 border-zinc-200 relative left-4">
            <AvatarImage src="https://www.celebnest.com/uploads/celebs/1/michael_jackson.jpg" />
            <AvatarFallback>MJ</AvatarFallback>
          </Avatar>
          <div className="ml-6 w-full flex items-center justify-between gap-3">
            <h1 className=" text-sm text-zinc-400 hover:underline hover:cursor-pointer">
              8 followers
            </h1>
            <Insta />
          </div>
        </div>
      </div>

      <Button
        variant="outline"
        className="w-full justify-center m-5 rounded-xl dark:text-white"
      >
        Edit Profile
      </Button>
    </div>
  );
};

export default page;
