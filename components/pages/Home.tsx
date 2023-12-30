import React from "react";
import StartThread from "../StartThread";
import Post from "../Post";
import { Button } from "../ui/button";
import { HiArrowsRightLeft } from "react-icons/hi2";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="flex flex-col h-full justify-center items-center relative px-[480px]">
      <StartThread />
      <Post />
      <motion.button
        className="absolute -bottom-80 left-56 flex items-center bg-white font-semibold text-sm  shadow-xl rounded-full py-4 px-6 dark:text-white dark:bg-[#3d3d3d] "
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.08 }}
      >
        For you
        <HiArrowsRightLeft className="text-slate-400 text-center ml-2" />
      </motion.button>
    </div>
  );
};

export default Home;
