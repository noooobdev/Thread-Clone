import React from "react";
import { HiAtSymbol } from "react-icons/hi";
import { GoHomeFill } from "react-icons/go";
import { AiOutlineHeart } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { LuEdit } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { TfiMore } from "react-icons/tfi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  return (
    <div className="flex flex-row px-12 py-6  items-center md:justify-evenly sm:justify-between w-full">
      <HiAtSymbol className="cursor-pointer w-8 h-8" />
      <div className="flex gap-12">
        <GoHomeFill className=" rounded-lg w-14 h-14 p-3 cursor-pointer hover:bg-gray-100 " />
        <FiSearch className="cursor-pointer rounded-lg w-14 h-14 p-3 hover:bg-gray-100" />
        <LuEdit className="rounded-lg w-14 h-14 p-3 cursor-pointer hover:bg-gray-100" />
        <AiOutlineHeart className="rounded-lg w-14 h-14 p-3 cursor-pointer hover:bg-gray-100" />
        <FaRegUser className="rounded-lg w-14 h-14 p-3 cursor-pointer hover:bg-gray-100" />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <TfiMore className="text-2xl cursor-pointer " />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="text-2xl">
          <DropdownMenuItem className="cursor-pointer">
            Switch Appeareance
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer">About</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer">
            Report a problem
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer">
            Log Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Navbar;
