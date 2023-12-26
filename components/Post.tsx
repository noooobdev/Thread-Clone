import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { SlOptions } from "react-icons/sl";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "./ui/button";
import Like from "@/app/_assets/PostIcons/Like.svg";
import Repeat from "@/app/_assets/PostIcons/repeat.svg";
import Share from "@/app/_assets/PostIcons/Share.svg";
import Comment from "@/app/_assets/PostIcons/Comment.svg";

const Post = () => {
  return (
    <div className="flex flex-col hover:cursor-pointer justify-center">
      <div className="p-2 flex justify-between ">
        <div className="flex gap-2">
          <Avatar>
            <AvatarImage src="https://www.celebnest.com/uploads/celebs/1/michael_jackson.jpg" />
            <AvatarFallback>MJ</AvatarFallback>
          </Avatar>
          <div className="flex flex-col w-full">
            <div className="flex justify-between items-center">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <h1 className="text-sm font-semibold hover:cursor-pointer hover:underline dark:text-white">
                    MrWhiteguy
                  </h1>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 dark:bg-[#171717] dark:border-[#3d3d3d]">
                  <div>
                    <div className="flex justify-between items-center ">
                      <div className="">
                        <h1 className="font-semibold text-lg dark:text-white">
                          Micheal Jackson
                        </h1>
                        <div className="flex gap-2 items-center">
                          <h1 className="text-base dark:text-white pb-10">
                            MrWhiteguy
                          </h1>
                          <h1 className="text-xs bg-gray-200 p-1 rounded-full text-slate-800 ">
                            threads.net
                          </h1>
                        </div>
                      </div>
                      <Avatar className="h-16 w-16">
                        <AvatarImage src="https://www.celebnest.com/uploads/celebs/1/michael_jackson.jpg" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </div>
                    <h1 className="text-base font-normal mt-3 dark:text-white">
                      Worlds Largest Pedo
                    </h1>
                    <h1 className="text-gray-300 text-sm mt-3">
                      900k followers
                    </h1>
                    <Button className="w-full mt-2 text-center flex justify-center rounded-xl bg-black dark:bg-white dark:text-black">
                      Follow
                    </Button>
                  </div>
                </HoverCardContent>
              </HoverCard>

              <div className="flex gap-4 items-center">
                <h1 className="font-light text-slate-400 text-sm">35m</h1>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <SlOptions className=" rounded-full cursor-pointer dark:text-white" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="text-2xl">
                    <DropdownMenuItem className="text-sm font-medium cursor-pointer">
                      Mute
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-sm font-medium cursor-pointer">
                      Hide
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-600 text-sm font-medium cursor-pointer">
                      Block
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-600  text-sm font-medium cursor-pointer">
                      Report
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <h1 className="font-light text-sm dark:text-white">
              Seems like Thread Seems like Thread Seems like Thread Seems like
              Thread Seems like Threadv vSeems like Thread Thread Seems like
              Threadv vSeems like Thread Thread Seems like Threadv vSeems like
              Thread Thread Seems like Threadv vSeems like Thread Thread Seems
              like Threadv vSeems like Thread Thread Seems like Threadv vSeems
              like Thread
            </h1>
          </div>
        </div>
      </div>
      <div className="pl-10">
        <div className="flex gap-3 h-full">
          <Like />
          <Comment />
          <Repeat />
          <Share />
        </div>
        <div className="flex gap-2 items-center">
          <h1 className="text-sm font-normal text-gray-400 hover:underline hover:cursor-pointer">
            4 replies
          </h1>
          <h1 className="text-gray-400">.</h1>
          <h1 className="text-gray-400 text-sm font-normal hover:underline hover:cursor-pointer">
            53 Likes
          </h1>
        </div>
      </div>
      <Separator className="mt-2 dark:bg-slate-300 border-1" />
    </div>
  );
};

export default Post;
