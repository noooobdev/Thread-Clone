import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { SlOptions } from "react-icons/sl";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { TbRepeat } from "react-icons/tb";
import { FiSend } from "react-icons/fi";
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

const Post = () => {
  const [effect, setEffect] = useState(false);

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
                  <h1 className="text-sm font-semibold hover:cursor-pointer hover:underline">
                    MrWhiteguy
                  </h1>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div>
                    <div className="flex justify-between items-center">
                      <div className="">
                        <h1 className="font-semibold text-lg">
                          Micheal Jackson
                        </h1>
                        <div className="flex gap-2 items-center">
                          <h1 className="text-base">MrWhiteguy</h1>
                          <h1 className="text-xs bg-gray-200 p-1 rounded-full text-slate-800">
                            threads.net
                          </h1>
                        </div>
                      </div>
                      <Avatar className="h-16 w-16">
                        <AvatarImage src="https://www.celebnest.com/uploads/celebs/1/michael_jackson.jpg" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </div>
                    <h1 className="text-base font-normal mt-3">
                      World's Largest Pedo
                    </h1>
                    <h1 className="text-gray-300 text-sm mt-3">
                      900k followers
                    </h1>
                    <Button className="w-full mt-2 text-center flex justify-center rounded-xl bg-black">
                      Follow
                    </Button>
                  </div>
                </HoverCardContent>
              </HoverCard>

              <div className="flex gap-4 items-center">
                <h1 className="font-light text-slate-400 text-sm">35m</h1>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <SlOptions className=" rounded-full cursor-pointer" />
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
            <h1 className="font-normal text-sm ">
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
        <div className="flex gap-3 ">
          <AiOutlineHeart className="text-2xl hover:bg-slate-200 rounded-full" />
          <FaRegComment className="text-2xl hover:bg-slate-200 rounded-full " />
          <TbRepeat className="text-2xl hover:bg-slate-200 rounded-full" />
          <FiSend className="text-2xl hover:bg-slate-200 rounded-full" />
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
      <Separator className="mt-2" />
    </div>
  );
};

export default Post;
