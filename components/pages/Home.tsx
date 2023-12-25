import React from "react";
import StartThread from "../StartThread";
import Post from "../Post";
import { Button } from "../ui/button";
import { HiArrowsRightLeft } from "react-icons/hi2";

const Home = () => {
  return (
    <div className="flex flex-col h-full justify-center items-center relative px-[480px]">
      <StartThread />
      <Post />
      <Button
        variant="secondary"
        className="absolute -bottom-96 left-60 hover:animate-spin "
      >
        For you
        <HiArrowsRightLeft className="text-slate-400 text-center ml-2" />
      </Button>
    </div>
  );
};

export default Home;
