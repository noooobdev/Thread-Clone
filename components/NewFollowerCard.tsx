import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Separator } from "./ui/separator";

const NewFollowerCard = () => {
  return (
    <div className=" w-full  ">
      <div className="flex justify-between items-center pt-4 pb-2">
        <div className="flex items-center gap-3">
          <Avatar className="">
            <AvatarImage src="https://www.celebnest.com/uploads/celebs/1/michael_jackson.jpg" />
            <AvatarFallback>MJ</AvatarFallback>
          </Avatar>
          <div>
            <HoverCard>
              <HoverCardTrigger asChild>
                <h1 className="text-sm font-semibold hover:cursor-pointer hover:underline dark:text-white">
                  im_beedhan
                </h1>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 dark:bg-[#171717]">
                <div>
                  <div className="flex justify-between items-center">
                    <div className="">
                      <h1 className="font-semibold text-lg dark:text-white">
                        im_beedhan
                      </h1>
                      <div className="flex gap-2 items-center">
                        <h1 className="text-sm dark:text-white">Bee Dhan</h1>
                        <h1 className="text-xs bg-gray-200 dark:bg-[#171717] dark:text-slate-600 p-1 rounded-full text-slate-800">
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
                  <h1 className="text-gray-300 text-sm mt-3">900k followers</h1>
                  <Button className="w-full mt-2 text-center flex justify-center rounded-xl bg-black dark:bg-white dark:text-black">
                    Follow
                  </Button>
                </div>
              </HoverCardContent>
            </HoverCard>
            <h1 className="text-sm text-gray-400 font-normal">Bee Dhan</h1>
          </div>
        </div>
        <Button
          variant="outline"
          className="px-8 py-2 rounded-xl dark:text-white"
        >
          Follow
        </Button>
      </div>
      <div className="ml-12">
        <div className="flex items-center gap-2 ">
          <Avatar className="w-4 h-4">
            <AvatarImage src="https://www.celebnest.com/uploads/celebs/1/michael_jackson.jpg" />
            <AvatarFallback>MJ</AvatarFallback>
          </Avatar>
          <h1 className="text-sm dark:text-white">28 Followers</h1>
        </div>
        <Separator className="mt-2" />
      </div>
    </div>
  );
};

export default NewFollowerCard;
