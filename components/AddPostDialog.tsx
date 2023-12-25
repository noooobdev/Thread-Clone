import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { IoImagesOutline } from "react-icons/io5";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

const AddPostDialog = () => {
  return (
    <div>
      <div className="flex gap-3 items-center ">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="font-semibold dark:text-white">Niraj</h1>
          <input
            type="text"
            placeholder="Start a thread..."
            className="dark:bg-[#171717] outline-0 text-sm font-light"
          />
        </div>
      </div>
      <IoImagesOutline className="ml-12 mt-3 text-xl text-gray-400 hover:cursor-pointer" />
      <div className="flex justify-between items-center py-5">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <h1 className="text-gray-400 font-light text-sm">
              Anyone can reply
            </h1>{" "}
          </DropdownMenuTrigger>
          <DropdownMenuContent className="text-2xl p-2 dark:bg-[#171717] border-[#3d3d3d]">
            <DropdownMenuItem className="font-semibold cursor-pointer p-2 dark:text-white">
              Anyone{" "}
            </DropdownMenuItem>
            <DropdownMenuSeparator className="dark:bg-[#3d3d3d]" />
            <DropdownMenuItem className="font-semibold  cursor-pointer p-2 dark:text-white">
              Profiles you follow
            </DropdownMenuItem>
            <DropdownMenuSeparator className="dark:bg-[#3d3d3d]" />
            <DropdownMenuItem className="font-semibold cursor-pointer p-2 dark:text-white">
              Mentioned Only
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button variant="outline" className="rounded-2xl px-5 py-1">
          Post
        </Button>
      </div>
    </div>
  );
};

export default AddPostDialog;
